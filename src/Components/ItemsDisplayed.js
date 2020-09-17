import React from 'react';
import {GiBerriesBowl,GiFishCooked,GiFruitBowl} from 'react-icons/gi'
import {BiDrink} from 'react-icons/bi';
import {GrIceCream} from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
export default function Items({handleChangeCategory}) {
    
    return (
            <ul className="items-nav">
                <li >
                    <NavLink className="item-active"  to="/appetizers" >
                        <a className="item-link" href="#" onClick={()=>handleChangeCategory("Appetizer")}>
                            <div className="icons"><GiBerriesBowl size="50px"/></div>
                            Appetizer
                        </a>
                    </NavLink>
                </li >
                <li className="item-active">
                    <NavLink className="item-active" to="/vegetables">
                        <a className="item-link" href="#" onClick={()=>handleChangeCategory("Vegetables")}>
                            <div className="icons"><GiFruitBowl size="50px"/></div>
                            Vegetables
                        </a>
                    </NavLink>
                </li >
                <li >
                    <NavLink className="item-active" to="/fish">
                        <a className="item-link" href="#" onClick={()=>handleChangeCategory("Fish")}>
                            <div className="icons"><GiFishCooked size="50px"/></div>
                            Fish
                        </a>
                    </NavLink>
                </li>
                <li >
                    <NavLink className="item-active" to="/drinks">
                        <a className="item-link" href="#" onClick={()=>handleChangeCategory("Drinks")} >
                            <div className="icons"><BiDrink size="50px"/></div>
                            Drinks
                        </a>
                    </NavLink>
                </li>
                <li >
                    <NavLink className="item-active" to="/sweets">
                        <a className="item-link" href="#" onClick={()=>handleChangeCategory("Sweets")} >
                            <div className="icons"><GrIceCream size="50px" color="White"/></div>
                            Sweets
                        </a>
                    </NavLink>
                </li>
                
            </ul>
            
       
    )
}
