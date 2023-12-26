import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from './../assets/Background-Slice.png'
import './../styles/Home.css'

export default function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
        <div className="headerContainer">
            <h1>Slice Street</h1>
            <p>Crust to Crave, Slice Street Paves the Way.</p>
            <Link to="/menu">
                <button>ORDER NOW!</button>
            </Link>
        </div>
    </div>
  )
}


