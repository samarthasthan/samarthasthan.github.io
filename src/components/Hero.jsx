import React from 'react'
export default function Hero() {
    return (
        <>
            <div className='bg-[#11071f]  w-full pt-10 font-Preahvihear text-white mx-auto '>

                <div className='max-w-[1240px] mx-auto px-5 mt-10'>
                    <div className=' mt-5 flex relative mb-10 '>
                        <img className=' mx-auto mt-[-15px]  z-[2] h-[218px] ' src="./hero/hero_avator.png " alt="" />
                        <img className='  z-[1] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-auto mr-auto absolute h-[300px] w-[280px]' src="./hero/hero_gradient.svg" alt="gradient" />
                        <img className='  z-[0] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-auto mr-auto absolute h-[300px] w-[280px]' src="./hero/hero_ellipse.svg" alt="ellipse" />


                    </div>


                    <div className=' mt-14 text-center block text-[20px] md:hidden'>Hello! I Am Samarth Asthan</div>


                    <h1 className=' text-white mx-auto text-center text-[34px] sm:text-[44px] md:text-[54px]'>Flutter <span className=' text-[#7127BA] mx-auto text-center font-Poppins text-[34px] sm:text-[44px] md:text-[60px]'>& </span>
                        React Js Developer</h1>

                    <h1 className='text-center  m-0 md:m-2'>Currently a 3rd year student in Vellore Institute of Technology. From very early on in my life, I have been interested in technology and computers. Hence, I am currently pursuing this interest as a Computer Science student. </h1>

                    <div className='container  flex-none pt-2 text-center'>
                        <button className=" mx-5 rounded bg-[#7127BA] px-2 py-2">View projects</button>
                        <button className="mx-5 rounded bg-[#7127BA] px-2 py-2">Download CV</button>
                    </div>
                    <img className='hidden md:block absolute md:left-[55%] md:top-[105px] sm:left-[60%]' src="./hero/arrow.svg" alt="" />
                    <div className='hidden md:block absolute md:left-[63%] md:top-[127px] '>Hello! I Am Samarth Asthan</div>

                </div>
            </div>
        </>
    )
}
