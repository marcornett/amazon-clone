import React from 'react'
import {Link} from 'react-router-dom'
import { useStateValue } from '../../ContextAPI/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import './Payment.css'

function Payment() {
    const [state, dispatch] = useStateValue()

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
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{state.user?.email}</p>
                        <p>3949 Alice Dr</p>
                        <p>Indianapolis, IN</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
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
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Card stripe payments */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
