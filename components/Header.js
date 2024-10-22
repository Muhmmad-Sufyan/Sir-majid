import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='py-10 lg:mx-40 md:md:mx-44 gap-5 flex justify-between items-center'>
            <img src='/logo.png' className='md:w-auto w-[40%]' />

            <ul className='flex sm:gap-20 gap-5 w-[60%] font-bold'>
                <Link href='#' className='cursor-pointer text-sm sm:text-lg'>Home</Link>
                <Link href='#features' className='cursor-pointer text-sm sm:text-lg'>Features</Link>
                <Link href='#about' className='cursor-pointer text-sm sm:text-lg'>About</Link>
            </ul>
        </div>
    )
}

export default Header