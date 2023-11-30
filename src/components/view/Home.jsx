import React from 'react'
import HomeHero from '../pages/home/HomeHero'
import HowItWorks from '../pages/home/HowItWorks'
import HappyClientsCarousel from '../pages/home/HappyClientsCarousel'
import BlogAndNews from '../pages/home/BlogAndNews'

const Home = () => {
  return (
    <>
    <HomeHero/>
    <HowItWorks/>
    <HappyClientsCarousel/>
    <BlogAndNews/>
    </>
  )
}

export default Home