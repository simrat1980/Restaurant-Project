import React from 'react';

import Items from './Items';

export default function itemsList({items,buyNow}) {
    
    return (
        <ul className="food-items">
        {items.map((item)=>(
            <li key={item.id}>
                <Items item={item} buyNow={buyNow}></Items>
                
            </li>
        ))}

     </ul>
    )
}
