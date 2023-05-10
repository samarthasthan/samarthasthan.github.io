import React from 'react'
export default function Hero() {
    return (
        <>
            <div className='bg-[#11071f]  w-full py-10 font-Preahvihear text-white mx-auto '>

                <div className='max-w-[1240px]  mx-auto px-5'>
                    <div className=' mt-5   flex relative mb-10 md:mb-5'>
                    <img  className='  mx-auto  z-[2]' src="./hero/hero_avator.svg" alt="" />
                    <img  className='  z-[1] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-auto mr-auto absolute h-[300px] w-[280px]' src="./hero/hero_gradient.svg" alt="" />
                    <img  className='  z-[0] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-auto mr-auto absolute h-[300px] w-[280px]' src="./hero/hero_ellipse 3.svg" alt="" />
                    
                    </div>
                  
                    <h1 className=' text-white mx-auto text-center text-[34px] sm:text-[44px] md:text-[54px]'>Hi!, I'm <span className=' text-[#7127BA] mx-auto text-center font-Poppins text-[34px] sm:text-[44px] md:text-[60px]'>Samarth Asthan </span>
                       , a Flutter and React Js Developer</h1>

                    <div className='container  flex-none pt-2 text-center'>
                        <button className=" mx-5 rounded bg-[#7127BA] px-2 py-2">View projects</button>
                        <button className="mx-5 rounded bg-[#7127BA] px-2 py-2">Download CV</button>
                    </div>
                    <img  className=' hidden md:block absolute md:left-[55%] md:top-[70px] sm:left-[60%] ' src="./hero/arrow.svg" alt="" />
                    <div className='hidden md:block absolute md:left-[63%] md:top-[95px] '>Hello! I Am Samarth Asthan</div>
                </div>
            </div>
        </>
    )
}
