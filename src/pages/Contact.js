import React from 'react'
import PizzaLeft from './../assets/pizzaLeft.jpg'
import './../styles/Contact.css'
import { useNavigate } from "react-router-dom";


export default function Contact() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate(`/home`);
    alert('Order received!')
  }
 
  return (
    
    <div className="contact">
        <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})`}}>

        </div>
        <div className="rightSide">
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST" >
                <label htmlFor="firstname">First Name:</label>
                <input name="firstname" placeholder="First Name" type="text" required/>
                <label htmlFor="lastname">Last Name:</label>
                <input name="lastname" placeholder="Last Name" type="text"/>
                <label htmlFor="email">Email:</label>
                <input name="email" placeholder="Email Address" type="email" required/>
                <label htmlFor="message">Message:</label>
                <textarea rows="6" type="text" name="message" placeholder='Enter message...' required>
                   
                </textarea>
                <button type="submit" onClick={routeChange}>SEND MESSAGE!</button>
            </form>
        </div>
    </div>
  )
}
