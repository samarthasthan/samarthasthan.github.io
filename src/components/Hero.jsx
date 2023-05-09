import React from 'react'
export default function Hero() {
    return (
        <>
            <div className='bg-[#171718] w-full py-10 font-Poppins text-white mx-auto '>

                <div className='max-w-[1240px] mx-auto px-5'>
                    <img  className=' mb-4 mx-auto' src="./hero/hero_avator.svg" alt="" />
                    {/* <h1 className='  mx-auto text-center  text-[20px] sm:text-[25px] md:text-[30px]'>Hey! My name is Samarth Asthan
                    </h1> */}
                    <h1 className=' text-white mx-auto text-center text-[34px] sm:text-[44px] md:text-[54px]'>Hi!, I'm <span className='text-green-600  mx-auto text-center font-Poppins text-[34px] sm:text-[44px] md:text-[60px]'>Samarth Asthan </span>
                       , a Flutter and React Js Developer</h1>
                    {/* <h1 className=' text-white mx-auto text-center text-[20px] sm:text-[25px] md:text-[30px]'>This is my portfolio and CV made with React JS, so you can see my prototyping style when designing interfaces.
                    </h1> */}
                    <div className='container flex-none pt-2 text-center'>
                        <button className=" mx-5 rounded bg-green-600 px-2 py-2">View projects</button>
                        <button className="mx-5 rounded bg-green-600 px-2 py-2">Download CV</button>
                    </div>
                </div>
            </div>
        </>
    )
}
