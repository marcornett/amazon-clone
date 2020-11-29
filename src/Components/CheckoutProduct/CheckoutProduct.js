import React from 'react'
import { useStateValue } from '../../ContextAPI/StateProvider'
import './CheckoutProduct.css'

function CheckoutProduct({ id, title, price, rating, image }) {
    const [, dispatch] = useStateValue()

    const removeFromBasket = (e) => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            payload: id
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <span
                            key={i}
                            role="img"
                            aria-label="Star emoji"
                        >⭐</span>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
