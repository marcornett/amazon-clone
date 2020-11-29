import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from '../../ContextAPI/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'

import NumberFormat from 'react-number-format';
import { getBasketTotal } from '../../ContextAPI/reducer'

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from '../Axios/Axios'
import './Payment.css'

function Payment() {
    const stripe = useStripe()
    const elements = useElements()
    const [state,] = useStateValue()
    const history = useHistory()

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)

    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        //  generate stripe secret on load and when basket changes
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //  Stripe expects the total in a currencies subunits ($ => cents)
                url: `/payments/create?total=${getBasketTotal(state.basket) * 100}`
            })
            //  Todo: Not getting client secret from response
            console.log(response)
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret()
    }, [state.basket])

    console.log('client secret', clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setProcessing(true)
        const payload = await stripe.confirmCardPayment(clientSecret, {
            // type: 'card',
            card: elements.getElement(CardElement)
        }).then(({ paymentIntent }) => {
            // paymentInt is the payment confirmation
            setSucceeded(true)
            setError(null)
            setProcessing(false)
            // replaces history array so you can't go backward in browser
            history.replace('/orders')
        })
    }

    const handleChange = (event) => {
        // Listen for changes as user types card info
        // Display any errors as they type their card ifo
        setDisabled(event.empty)
        setError(event.error ? event.error.message : null)
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout
                    (<Link to="/checkout">
                        {state.basket?.length} items
                    </Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h4>Delivery Address</h4>
                    </div>
                    <div className="payment__address">
                        <p>{state.user?.email}</p>
                        <p>3949 Alice Dr</p>
                        <p>Indianapolis, IN</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h4>Review items and delivery</h4>
                    </div>
                    <div className="payment__items">
                        {state.basket?.map((item, i) => (
                            <CheckoutProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />

                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h4>Payment Method</h4>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__price">
                                <NumberFormat
                                    value={getBasketTotal(state.basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                    renderText={value =>
                                        <h4>
                                            Order Total:
                                            <strong> {`${value}`}</strong>
                                        </h4>
                                    }
                                />
                                <button
                                    disabled={processing || disabled || succeeded}>
                                    <span>{processing
                                        ? <p>Processing...</p> :
                                        "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
