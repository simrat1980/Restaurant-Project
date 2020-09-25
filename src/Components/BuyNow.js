import React from 'react'

export default function BuyNow({item,addToCart,setCartQuantity}) {
    //const[cartQuantity,setCartQuantity]=useState();
    
    const setQuantity=(event)=>{
        setCartQuantity(event.target.value);
       // console.log(cartQuantity);
        
    }
    
    return (
        <div className="item-buynow">
            <div>
                     <img width="450" height="450" src={process.env.PUBLIC_URL + item.image} alt={item.name} ></img>
            </div>
            <div className="buynow-info">
                    <div className="buynow-item-name"> {item.name}</div>
                    <div className="buynow-price">${item.Price}</div>
                    <label>Quantity
                    <div>
                        <input type="number" name="points"  step="1" onChange={setQuantity}/>
                    </div>
                    </label>
                    <a href="#" className="btn-proj btn-full btn-buynow" onClick={()=>addToCart(item)}> Add To Cart</a>
                   
            </div>
            
        </div>
    )
}
