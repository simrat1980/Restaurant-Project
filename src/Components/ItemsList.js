import React from 'react';
import Items from './Items';

export default function itemsList({items,addToCart}) {
    
    return (
        <ul className="food-items">
        {items.map((item)=>(
            <li key={item.id}>
                <Items item={item} addToCart={addToCart}></Items>
                
            </li>
        ))}

     </ul>
    )
}
