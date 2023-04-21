import React from 'react'
import './Style.css'
import Navigation from './Navigation'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'

const App = () => {
  return (
   <div>
     <Navigation/>
    <About/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>

   </div>
  )
}

export default App