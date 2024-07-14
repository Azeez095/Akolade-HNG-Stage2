import React from 'react'
import Nav from './Nav';
import Hero from './Hero';
import Stilettos from './Stilettos';
import Flat from './Flat';
import Sneakers from './Sneakers';
import FooterHero from './FooterHero';
import Footer from './Footer';


const Shop = () => {
  return (
    <div className='max-w-full'>
        <Nav />
        <Hero />
        <Stilettos />
        <Flat />
        <Sneakers />
        <FooterHero />  
        <Footer />  
    </div>
  )
}

export default Shop