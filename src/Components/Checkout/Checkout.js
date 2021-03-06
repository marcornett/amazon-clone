import React from 'react'
import { useStateValue } from '../../ContextAPI/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'

function Checkout() {
    const [state,] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                {state.user ? (
                    <h5 className="checkout__greeting">Hello, {state.user.email}</h5>
                )
                    :
                    null}
                {state.basket?.length === 0 ? (
                    <div>
                        <h2 className="checkout__title">Your Amazon Cart is empty.</h2>
                        <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your Shopping Basket</h2>
                            {/* list all checkout items */}
                            {state.basket?.map((item, i) => (
                                < CheckoutProduct
                                    key={i}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                    image={item.image}
                                />

                            ))}
                        </div>
                    )}
            </div>
            {state.basket?.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
