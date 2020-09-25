import React from 'react';
import {GiBerriesBowl,GiFishCooked,GiFruitBowl} from 'react-icons/gi'
import {BiDrink} from 'react-icons/bi';
import {GrIceCream} from 'react-icons/gr';

export default function Items({handleChangeCategory}) {
    
    return (
            <ul className="items-nav">
                <li >
                    
                        <a className="item-link" href="#" onClick={()=>handleChangeCategory("Appetizer")}>
                            <div className="icons"><GiBerriesBowl size="50px"/></div>
                            Appetizer
                        </a>
                   
                </li >
                <li className="item-active">
                    
                        <a className="item-link" href="#" onClick={()=>handleChangeCategory("Vegetables")}>
                            <div className="icons"><GiFruitBowl size="50px"/></div>
                            Vegetables
                        </a>
                    
                </li >
                <li >
                    
                        <a className="item-link" href="#" onClick={()=>handleChangeCategory("Fish")}>
                            <div className="icons"><GiFishCooked size="50px"/></div>
                            Fish
                        </a>
                    
                </li>
                <li >
                    
                        <a className="item-link" href="#" onClick={()=>handleChangeCategory("Drinks")} >
                            <div className="icons"><BiDrink size="50px"/></div>
                            Drinks
                        </a>
                    
                </li>
                <li >
                    
                        <a className="item-link" href="#" onClick={()=>handleChangeCategory("Sweets")} >
                            <div className="icons"><GrIceCream size="50px"/></div>
                            Sweets
                        </a>
                   
                </li>
                
            </ul>
            
       
    )
}
