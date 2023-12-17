import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import Header from './component/Header'
import Hero from './component/Hero'
import Footer from './component/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Header/>
    <Hero/>
    <Footer/>
  </div>
)
