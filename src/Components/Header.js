import React from 'react';
import DropdownMenu from './DropdownMenu';
import {GiShoppingCart } from 'react-icons/gi';
import {NavLink} from 'react-router-dom';
import hero  from '../images/hero.jpg';

export default function Header({setCartItemsValues}) {
    return (
        <div className="header">
            <ul className="main-nav">
                    <div className="main-nav-left">
                        <li >
                            <a href="#" className="nav-menu">
                                <DropdownMenu></DropdownMenu>
                            </a>
                        </li>
                        <li>
                            <NavLink to="/ContactUs">
                                <a href="#">Contact Us</a>
                            </NavLink>
                        </li>
                        <li><a href="#">Search</a></li>
                    </div>
                    <div className="main-nav-middle">
                        <li className="name"><a href="#">Punjabi Tadka</a></li>
                    </div>
                    <div className="main-nav-right">
                        <li>
                            <NavLink to="/LoginRegister">
                                  <a href="#">Login/Register</a>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart">
                                <a href="#" onClick={setCartItemsValues} >
                                    <span>
                                    <GiShoppingCart className="cart"/>
                                    Your Cart
                                    </span>
                                </a>
                            </NavLink>
                        </li>
                    </div>
                </ul>
            <img className="background-image" src={hero} alt="backround"></img>
        </div>
    )
}
