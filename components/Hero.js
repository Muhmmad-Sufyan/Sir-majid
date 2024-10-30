import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <div>
            <div className="container mx-auto flex flex-col justify-center items-center mt-16 md:mt-32 px-4 lg:px-20">
                <div className="text-center md:mx-20 mx-10 sm:mx-16">
                    <h1 className="text-lg xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl font-[400] text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F5] via-blue-500 to-[#2555D4] md:mb-10 mb-5 md:w-[75%] w-full mx-auto">
                        Own Your Freelance Journey, Smarter with Artie
                    </h1>
                    <p className="text-gray-400 mt-4 font-[400] 2xl:text-4xl text-[14px] md:mb-5 mb-5">
                        Smarter pricing, seamless project management, and a tailored brief—designed for your success.
                    </p>
                    <button className="mt-8 px-6 md:px-10 py-2 border-[1px] bg-gradient-to-b from-[#2555D400] to-[#1B57DF] text-white text-sm font-semibold rounded-md hover:opacity-90 transition duration-300">
                        Start For Free
                    </button>
                </div>
            </div>

            <div className="container w-[80%] md:w-[75%] mx-auto my-20">
                <Image src="/s1.png" alt="Main Visual" width={1200} height={800} className="w-full" />
            </div>
        </div>
    );
};

export default Hero;
