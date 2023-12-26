import React from 'react'
import './../styles/About.css'
import MultiplePizzas from './../assets/Slices-Background.png'

export default function About() {
  return (
    <div className="about">
        <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizzas})`}}>
          
        </div>
        <div className="aboutBottom">
            <h1>About Us</h1>
            <p>
              Welcome to Slice Street, a timeless pizzeria that weaves together the rich tapestry of family, tradition, 
              and the unmistakable aroma of perfectly baked pizza. Nestled in the heart of New York City, Slice Street 
              has been a beloved part of the culinary landscape since the 1950s.{'\n'} {'\n'} 
              
                Our story begins with the fervor and dedication of the Moretti family, who brought their love for authentic 
                pizza to the bustling streets of NYC. Generations have passed, but the commitment to crafting the perfect pie 
                has remained unwavering.{'\n'} {'\n'} 
       
                In our kitchen, every pizza is a masterpiece, a testament to the artistry that has been honed over decades. 
                Our secret lies in the time-honored recipes passed down from our grandparents, a nod to the flavors that 
                define a true New York slice.{'\n'} {'\n'} 
           
                At Slice Street, we believe in the power of good food to bring people together. It's not just about the 
                ingredients; it's about the warmth that radiates from the oven, the laughter that echoes in our dining room, 
                and the shared moments that create lasting memories.{'\n'} {'\n'} 
             
                As a family business, the Moretti family takes pride in each pizza we serve. From the carefully selected 
                ingredients to the hands that knead the dough, every step in the process is infused with the spirit of family. 
                When you step into Slice Street, you're not just a customer; you're an extension of the Moretti family, joining 
                us on a journey through the flavors of the past and the innovations of the present.{'\n'} {'\n'} 
            
                Whether you're a native New Yorker or a visitor to our vibrant city, Slice Street welcomes you to experience the 
                legacy of the Moretti family, passionate about perfecting the art of pizza. Join us on this delicious adventure, 
                where every slice tells a story, and every story begins with family.{'\n'} {'\n'} 

                Feel free to adjust any details to better suit your vision for Slice Street!
            </p>
          </div>
         </div>
            
   
  )
}
