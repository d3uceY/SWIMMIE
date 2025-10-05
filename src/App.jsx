import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


function App() {
  gsap.registerPlugin(ScrollTrigger)
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default App
