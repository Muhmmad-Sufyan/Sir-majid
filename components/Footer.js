import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='md:w-[90%] w-[95%] mx-auto rounded-2xl border-[1px] mt-20 mb-10 p-8 text-white'>
            <img src='/logo.png' />
            <div className='flex sm:flex-row flex-col items-center  gap-20'>
                <div className='sm:w-[80%] w-[95%]'>

                    <h1 className='font-bold md:text-3xl  lg::text-4xl mb-10'>Ready to Elevate Your Design Process to the Next Level?</h1>
                    <p className='font-thin text-[#444343] my-10'>Transform your creative workflow with Artie’s AI-powered tools—automating pricing, timelines, and project briefs with precision so you can focus on what you do best: designing.</p>
                    <button className="mt-8  py-3 my-5  px-16 bg-gradient-to-b from-[#2555D400] to-[#1B57DF] text-white font-semibold rounded-full hover:opacity-90 transition duration-300">
                        Start For Free
                    </button>
                    <p className='text-sm mb-4'>
                        ✉️ Connect with us: hello@freelancepriceai.com
                    </p>
                    <p className='text-sm'>
                        © 2024 - Made with 💙 by Mariam Abbadi
                    </p>

                </div>
                <ul className='w-[16%] gap-16 text-xl flex items-center justify-center flex-col font-bold'>
                <Link href='#' className='cursor-pointer text-sm sm:text-lg'>Home</Link>
                <Link href='#features' className='cursor-pointer text-sm sm:text-lg'>Features</Link>
                <Link href='/about' className='cursor-pointer text-sm sm:text-lg'>About</Link>
                </ul>
            </div>
        </div>
    )
}

export default Footer