import React from 'react';
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WelcomeSection from '../components/WelcomeSection'
import CategoryCarousel from '../components/CategoryCarousel'
import Objects from '../components/Objects'

function Home() {

    return (
      <div className="main-layout min-h-screen ">
        <Header />
        <WelcomeSection />
        <Navbar />
        <CategoryCarousel />
        <Objects />
        <Footer className="footer" />
      </div>
    )
  }
  
  export default Home