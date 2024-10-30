import React from 'react'

const Hero = () => {
    return (
      <div>


        <div className="contanier mx-auto flex flex-col justify-center items-center mt-16 md:mt-32 px-4 lg:px-20">
        <div className="text-center md:mx-20 mx-10 sm:mx-16 ">
          <h1 className="text-lg xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl  2xl:text-7xl font-[400] text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F5] via-blue-500 to-[#2555D4] md:mb-10 mb-5 md:w-[75%] w-[100%] md:mx-auto mx-0" >
            Own Your Freelance Journey, Smarter with Artie
          </h1>
          <p className="text-gray-400 mt-4  font-[400] 2xl:text-4xl text-[14px] md:mb-5 mb-5">
            Smarter pricing, seamless project management, and a tailored brief—designed for your success.
          </p>
          <button className="mt-8 px-4 py-1 text-[11px] border-[1px] bg-gradient-to-b from-[#2555D400] to-[#1B57DF] text-white text-sm font-semibold rounded-md hover:opacity-90 transition duration-300">
            Start For Free
          </button>
        </div>
        
      </div>
        <div className='contanier w-[80%] md:w-[75%] mx-auto'>
          <img src="/s1.png" alt="Main Visual" className="c my-20" />
        </div>
      </div>
      
    )
}

export default Hero