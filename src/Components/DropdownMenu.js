import React, {useState} from 'react'

export default function DropdownMenu() {
    const[displayMenu,setDisplayMenu]=useState(false);
    const updateMenuOpen =()=>{
        setDisplayMenu(true);
    }
    
    return (
      <div  className="dropdown" >
         
      <div className="menu" onClick={updateMenuOpen}>Menu</div>
     
       

       { displayMenu ? (
       <ul className="dropdown-content">
      <li><a className="active" href="#">Appetizers</a></li>
      <li><a href="#">Soups</a></li>
      <li><a href="#">Chicken</a></li>
      <li><a href="#">Briyani</a></li>
      <li><a href="#">Drinks</a></li>
      <li><a href="#">Sweets</a></li>
      <li><a href="#">Goat</a></li>
      <li><a href="#">Lamb</a></li>
      <li><a href="#">Chineses</a></li>
      <li><a href="#">Samosa</a></li>
      <li><a href="#">Naan/Roti</a></li>
       </ul>
     ):
     (
       null
     )
     }

    </div>
      
       

    )
}
