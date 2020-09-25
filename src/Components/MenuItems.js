import React from 'react';
import Items from './Items';

export default function MenuItems({items,buyNow,category}) {
    return (
        <div className="menu-items">
            <h3>{category}</h3>
                <ul className="food-items">
                {items.map((item)=>(
                    <li key={item.id}>
                        <Items item={item} buyNow={buyNow}></Items>
                        
                    </li>
                ))}

            </ul>
     </div>
    )
}
