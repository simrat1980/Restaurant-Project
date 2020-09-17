import React from 'react';
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai';
import Items from './Items';

export default function cart({items}) {
    return (
        <ul className="food-items">
        {items.map((item)=>(
            <li key={item.id}>
                <div className="item-image">
                <img width="250" height="250" src={process.env.PUBLIC_URL + item.image} alt={item.name} ></img>
                </div>
                <div className="food-item-name"> {item.name}</div>
                <div className="price">${item.Price}</div>
                <div>{item.quantity}</div>
                
            </li>
        ))}

     </ul>
    )
}
