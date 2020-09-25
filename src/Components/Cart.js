import React, { useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { NavLink } from 'react-router-dom';


export default function cart({items}) {
    let subTotal=0;
   
    const amount=(item)=>{
            const total=item.quantity*item.Price;
        return (total).toFixed(2);
    }
    const calculateSubTotal=()=>{
        items.forEach((item) => {
           subTotal+=item.quantity*item.Price ;
        });
        return (subTotal);
        console.log(subTotal);
    }

  
    return (
        <div >
            <div className="cart-header">
            <NavLink to="/">
                <a href="#">Home</a>
            </NavLink>
            <MdNavigateNext/>
            <span className="cart-text">Cart</span> 
            </div>
            <div className="cart-items-header">
                <div className="cart-product">Product</div>
                <div className="cart-price">Price</div>
                <div className="cart-quantity">Quantity</div>
                <div className="product-total">Total</div>
            </div>
                <ul >
                {items.map((item)=>(
                       
                    <li key={item.id}>
                        <div className="cart-items-header">
                            <div className="cart-product">
                                <div><img width="100" height="100" src={process.env.PUBLIC_URL + item.image} alt={item.name} ></img></div>
                                <div className="cart-product-name">{item.name}</div>
                            </div>
                            <div className="cart-price">${item.Price}</div>
                            <div className="cart-quantity">{item.quantity}</div>
                            <div className="product-total"></div>
                            {amount(item)}
                        </div>
                    </li>
                ))}

            </ul>
            <div className="cart-total">
                <h3>Cart Total</h3>
                <div>Sub Total
                <span>{calculateSubTotal()}</span>
                </div>
                <div>Tax</div>
                <div>Total</div>

            </div>
     </div>
    )
}
