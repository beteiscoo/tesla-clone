import React from 'react'
import Section from './Section'

function Home() {
    return (
        <div className='h-screen'>
            <Section 
                img="https://i.imgur.com/tKiAAhT.jpeg"
                title="Model Y"
                description="View Inventory"
                ButtonTextL="Order Now"
                ButtonTextR="Demo Drive"
            />
            <Section 
                img="https://i.imgur.com/6XNjHjC.jpeg"
                title="Model 3"
                description="View Inventory"
                ButtonTextL="Order Now"
                ButtonTextR="Demo Drive"
            />
            <Section 
                img="https://i.imgur.com/lLPYGhn.jpeg"
                title="Model S"
                description="View Inventory"
                ButtonTextL="Order Now"
                ButtonTextR="Demo Drive"
            />
            <Section 
                img="https://i.imgur.com/U2uvnEm.jpeg"
                title="Model X"
                description="View Inventory"
                ButtonTextL="Order Now"
                ButtonTextR="Demo Drive"
            />
            <Section 
                img="https://i.imgur.com/XDwMjUb.jpeg"
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                ButtonTextL="Order Now"
                ButtonTextR="Learn More"
            />
            <Section 
                img="https://i.imgur.com/NRYZIL5.jpeg"
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                ButtonTextL="Order Now"
                ButtonTextR="Learn More"
            />
            <Section 
                img="https://i.imgur.com/LbhWFPH.jpeg"
                title="Accessories"
                description="View Inventory"
                ButtonTextL="Shop Now"
            />
        </div>
    )
}

    export default Home
