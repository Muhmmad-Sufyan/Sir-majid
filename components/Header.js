import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import React from 'react';

const Header = () => {
    return (
        <header className="container mx-auto py-5 lg:px-32 flex sm:justify-between items-center gap-10 sm:gap-5">
            <Image src="/logo.png" width={100} height={50} className="md:w-[16%] w-[40%] pl-5 2xl:w-[30%]" alt="Logo" />

            <ul className="flex gap-5 sm:gap-10 md:gap-20 w-auto md:w-[60%] text-[13px] font-[500] xl:text-2xl">
                <li><Link href="#" className="cursor-pointer text-sm">Home</Link></li>
                <li><Link href="#features" className="cursor-pointer text-sm">Features</Link></li>
                <li><Link href="#about" className="cursor-pointer text-sm">About</Link></li>
            </ul>
        </header>
    );
};

export default Header;


{/* <header className="md:container-xl  mx-auto py-5  lg:px-32 flex sm:justify-between items-center gap-10 sm:gap-5">
<img src="/logo.png" className="md:w-[16%] w-[40%] pl-5 2xl:w-[30%]" alt="Logo"  />

<ul className="flex gap-5 sm:gap-10 md:gap-20 w-auto md:w-[60%] text-[13px] font-[500] xl:text-2xl">
  <Link href="#" className="cursor-pointer text-sm  ">Home</Link>
  <Link href="#features" className="cursor-pointer text-sm  ">Features</Link>
  <Link href="#about" className="cursor-pointer text-sm  ">About</Link>
</ul>
</header> */}