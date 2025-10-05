import React from 'react'

export default function Hero() {
    return (
        <section className='min-h-screen relative '>
            <h1 className='uppercase font-semibold text-center relative z-20 top-[10vh]'>just dream it</h1>
            <div className='absolute top-0 left-0 aspect-[3/4] h-[74vh] z-10'>
                <img className='w-full h-full block' src="/hero-1.png" alt="" />
            </div>
            <div className='flex max-w-[54rem] ml-auto absolute bottom-0 right-0'>
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
