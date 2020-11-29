import React from 'react'
import { useStateValue } from '../../ContextAPI/StateProvider'
import './Product.css'

function Product({ id, title, price, rating, image }) {
    const [, dispatch] = useStateValue()

    const addToBasket = (e) => {
        dispatch({
            type: "ADD_TO_BASKET",
            payload: {
                id,
                title,
                price,
                rating,
                image,
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <span
                                    key={i}
                                    role="img"
                                    aria-label="Star emoji"
                                >⭐</span>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div >
    )
}

export default Product
