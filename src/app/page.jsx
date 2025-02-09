
import React from 'react'
// import Spline from './components/spline'
import Nav from "./components/Nav"
import Herosection from './components/Herosection'
import Image from 'next/image'
import Aboutme from './components/Aboutme'
import Service from './components/Service'
import Projectcard from './components/Projectcard'
import Contectus from './components/Contectus'
import Footer from './components/Footer'
import Achievement from "./components/AchievementsSection"

const Home = () => {
  return (
    <>
      {/* https://demo.templatemonster.com/demo/175488.html?_gl=1*vbcm39*_ga*MTU5NjEwODYyNy4xNzE4MDkzMjc3*_ga_FTPYEGT5LY*MTcxODA5MzI3Ny4xLjEuMTcxODA5MzI3Ny42MC4wLjA. */}



      <section id="Home" className=" p-10 pt-0 flex  flex-col ">
        <Nav />
        <Herosection />
      </section>
      <section>
        <Achievement />
      </section>

      <section id="About" className=" p-10 ">
        <Aboutme />
      </section>  

      <section id="Services" className=" p-10 ">
        <Service />
      </section>

      <section id="Projects" className=" p-10 ">
        <Projectcard />
      </section>

      <section id="Contact" className="mt-20 p-10 pb-0 flex justify-between flex-col h-auto">
        <Contectus />
        <Footer />
      </section>

    </>
  )
}

export default Home
