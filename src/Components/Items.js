import React from 'react'


export default function Items({item,addToCart}) {
    return (
        <div className="food-items-display">
            <div className="item-image">
            <img width="250" height="250" src={process.env.PUBLIC_URL + item.image} alt="channa" ></img>
            </div>
            <div className="food-item-name"> {item.name}</div>
            <div className="price">${item.Price}</div>
            <div>{item.quantity}</div>
            <div className="buy-now"><a href="#" className="btn-buy" onClick={()=>addToCart(item)}>Buy Now</a></div>
        </div>
    )
}
