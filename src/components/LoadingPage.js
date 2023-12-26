import React from 'react'
import './../styles/LoadingPage.css'
import PizzaLoad from './../assets/pizzaLoading.png'

export default function LoadingPage() {
  return (
    <div className="loader-container">
        <img id="loader" src={PizzaLoad} alt="Slice Street logo." className="loadingLogo" />
        
    </div>
  )
}
