import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from "gsap/all"

export default function Hero() {
    const tl = gsap.timeline({
        delay: 1
    })
    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words' });
        gsap.from(heroSplit.chars, {
            yPercent: 100,
            stagger: 0.05,
            ease: "expo.out",
            opacity: 0
        })
        tl.to('.white-bg', {
            width: 0,
            duration: .4,
            ease: "power3.out",
        })
            .to('.red-bg', {
                width: 0,
                duration: 1,
                ease: "expo.inOut",
            })
            .from('.anim-hero-1', {
                scale: 1.2,
                ease: "power3.out",
                duration: 2
            }, "-=0.5")
            .from('.anim-shop', {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: "power3.out",
            },  "-=2")
    })
    return (
        <section className='min-h-screen relative '>
            <h1 className='uppercase font-semibold text-center relative z-20 top-[10vh] title'>just dream it</h1>
            <div className='absolute top-0 left-0 aspect-[3/4] h-[74vh] z-10 overflow-hidden'>
                <div className='h-full red-bg w-full right-0 bg-red-500 absolute z-20'></div>
                <div className='h-full white-bg w-full left-0 bg-white absolute z-30'></div>
                <img className='w-full h-full object-cover block anim-hero-1' src="/hero-1.png" alt="" />
            </div>
            <div className='flex max-w-[54rem] ml-auto absolute bottom-0 right-0 anim-shop'>
                <div className='p-12'>
                    <p className='text-[17px]'>Get ready for summer with our amazing collection of swimsuits!
                        We offer a wide variety of styles, colors, and sizes to fit every body type.
                        Whether you prefer a classic one-piece or a trendy bikini, we've got you covered.
                    </p>
                    <button className='mt-16 font-exo text-[24px] font-semibold btn-underline'>
                        Open Shop
                    </button>
                </div>
                <div className='shrink-0'>
                    <img src="/hero-2.png" alt="" />
                </div>
            </div>
        </section>
    )
}
