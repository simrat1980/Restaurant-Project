import React from 'react'
import hero  from '../images/hero.jpg';
export default function image() {
    return (
        <div className="header">
          <img className="background-image" src={hero} alt="backround"></img>  
        </div>
    )
}
