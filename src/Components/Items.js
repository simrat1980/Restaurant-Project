import React from 'react';
import {NavLink} from 'react-router-dom';
import BuyNow from './BuyNow';


export default function Items({item,buyNow}) {
    
    return (
        <div className="food-items-display">
            <div className="item-image">
            <img width="250" height="250" src={process.env.PUBLIC_URL + item.image} alt={item.name} ></img>
            </div>
            <div className="food-item-name"> {item.name}</div>
            <div className="price">${item.Price}</div>
            <div>{item.quantity}</div>
            <div className="buy-now">
                <NavLink to="/product">
                <a href="#" className="btn-buy" onClick={()=>buyNow(item)}>
                    Buy Now
                
                </a>
                </NavLink>
            </div>
        </div>
    )
}
