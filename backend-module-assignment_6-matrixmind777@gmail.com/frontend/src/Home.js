import React from 'react'
import Header from './components/Header'
import HomeCover from './components/HomeCover'
import Slider from './components/Slider'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <HomeCover/>
        <Slider/>
        <Footer/>
    </div>
  )
}

export default Home