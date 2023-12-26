import React from 'react'
import InstragramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import './../styles/Footer.css'

export default function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <InstragramIcon />
            <FacebookIcon />
            <TwitterIcon/>
        </div>
        <p>&copy; 2023 cristi-pizza.netlify.com</p>
    </div>
  )
}
