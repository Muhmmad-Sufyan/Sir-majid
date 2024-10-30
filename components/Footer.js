import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className="container md:w-[80%] 2xl:w-[75%] md:mx-auto rounded-2xl border-[1px] mt-20 mb-10 p-8 text-white" style={{ background: 'linear-gradient(195.05deg, rgba(37, 85, 212, 0.1) 0%, rgba(37, 85, 212, 0.02) 50%, rgba(37, 85, 212, 0.06) 100%)' }}>
            <Image src="/logo.png" width={150} height={50} alt="Logo" />

            <div className="flex sm:flex-row flex-col items-center gap-20">
                <div className="sm:w-[80%] w-[95%]">
                    <h1 className="font-bold md:text-3xl lg:text-4xl mb-10">Ready to Elevate Your Design Process to the Next Level?</h1>
                    <p className="font-thin text-[#999494] my-10">Transform your creative workflow with Artie’s AI-powered tools—automating pricing, timelines, and project briefs with precision so you can focus on what you do best: designing.</p>

                    <button className="mt-8 border-[0.5px] py-3 my-5 px-16 bg-gradient-to-b from-[#2555D400] to-[#1B57DF] text-white font-semibold rounded-md hover:opacity-90 transition duration-300">
                        Start For Free
                    </button>

                    <p className="text-sm mb-4">✉️ Connect with us: hello@freelancepriceai.com</p>
                    <p className="text-sm">© 2024 - Made with 💙 by Mariam Abbadi</p>
                </div>

                <ul className="w-[16%] gap-8 text-xl flex items-start justify-center flex-col -mt-44 font-bold">
                    <li><Link href="#" className="cursor-pointer text-sm sm:text-lg">Home</Link></li>
                    <li><Link href="#features" className="cursor-pointer text-sm sm:text-lg">Features</Link></li>
                    <li><Link href="/about" className="cursor-pointer text-sm sm:text-lg">About</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
