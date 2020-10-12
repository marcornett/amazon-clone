import React from 'react'
import './Product.css'

function Product({ id, title, price, rating, image }) {
    // console.log(Array(rating).fill().map(() => ('stuff')))
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
                                <p key={i}>⭐</p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button>Add to basket</button>
        </div >
    )
}

export default Product
