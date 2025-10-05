import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'

function App() {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(['.red-line-l', '.red-line-r'], {
      height: 0,
      width: '50px',
      duration: 1,
      ease: "expo.inOut",
    }, {
      height: '100%',
      duration: 1,
      ease: "expo.inOut",
    })
      .to(['.red-line-l', '.red-line-r'], {
        width: '1px',
        ease: "expo.inOut",
      })
  })
  return (
    <>
      <main className='relative'>
        {
          Array.from({ length: 8 }).map(() => (
            <div className="anim-blocker"></div>
          ))
        }
        <div className='h-full red-line-r right-20 bottom-0 bg-red-500 absolute w-[1px] z-30'></div>
        <div className='h-full red-line-l left-20 top-0 bg-red-500 absolute w-[1px] z-30'></div>
        <Navbar />
        <Hero />
      </main>
    </>
  )
}

export default App
