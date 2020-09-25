import React, {useState} from 'react'

export default function DropdownMenu({changeCategory}) {
    const[displayMenu,setDisplayMenu]=useState(false);
    const updateMenuOpen =()=>{
        setDisplayMenu(true);
    }
    
    return (
      <div  className="dropdown" >
         
      <div className="menu" onClick={updateMenuOpen}>Menu</div>
       { displayMenu ? (
       <ul className="dropdown-content">
      <li>
        <a className="active" href="#" onClick={changeCategory("Appetizers")}>Appetizers</a>
        </li>
      <li><a href="#" onClick={changeCategory("Soups")} >Soups</a></li>
      <li><a href="#" onClick={changeCategory("Chicken")}>Chicken</a></li>
      <li><a href="#" onClick={changeCategory("Briyani")}>Briyani</a></li>
      <li><a href="#" onClick={changeCategory("Drinks")}>Drinks</a></li>
      <li><a href="#" onClick={changeCategory("Sweets")}>Sweets</a></li>
      <li><a href="#" onClick={changeCategory("Goat")}>Goat</a></li>
      <li><a href="#" onClick={changeCategory("Lamb")}>Lamb</a></li>
      <li><a href="#" onClick={changeCategory("Chineese")}>Chineses</a></li>
      <li><a href="#" onClick={changeCategory("Samosa")}>Samosa</a></li>
      <li><a href="#" onClick={changeCategory("NaanRoti")}>Naan/Roti</a></li>
       </ul>
     ):
     (
       null
     )
     }

    </div>
      
       

    )
}
