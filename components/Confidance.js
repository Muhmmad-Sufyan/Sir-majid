import React from "react";
import Image from "next/image"; // Import the Image component

const Confidance = () => {
    return (
        <div className="container-xl bg-black text-white flex flex-col items-center px-4 md:px-20 py-12 2xl:my-36">
            <h1 className="text-2xl sm:text-3xl md:text-[40px] 2xl:text-9xl text-center font-[700] mb-10 md:mb-20">
                Create with Confidence, Deliver with Precision
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center md:w-[90%] 2xl:w-[75%]">
                {/* Card 1 */}
                <div className="p-6 rounded-3xl border border-white md:col-span-2 bg-gradient-to-b from-blue-500/10 via-blue-500/5 to-blue-500/20">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-[700] mb-2">See All Your Progress in One Place!</h2>
                    <p className="text-gray-400 mb-4">Track everything you've achieved with clear insights into your projects, income, and clients—all in one place.</p>
                    <div className="flex justify-center">
                        <Image src="/s8.png" width={500} height={500} className="w-full" alt="Progress chart" />
                    </div>
                </div>

                {/* Card 2 */}
                <div className="p-6 rounded-3xl border border-white bg-gradient-to-b from-blue-500/10 via-blue-500/5 to-blue-500/20">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-[700] mb-2">Show What You're Good At</h2>
                    <p className="text-gray-400 mb-4">Unleash your potential by focusing on your top services to maximize success.</p>
                    <div className="flex justify-center">
                        <Image src="/s9.png" width={500} height={500} className="w-full" alt="Top services" />
                    </div>
                </div>

                {/* Card 3 */}
                <div className="p-6 rounded-3xl border border-white bg-gradient-to-b from-blue-500/10 via-blue-500/5 to-blue-500/20">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-[700] mb-2">Easily Track Feedback</h2>
                    <p className="text-gray-400 mb-4">Streamline client feedback collection to enhance your performance and showcase testimonials in one place.</p>
                    <div className="flex justify-center">
                        <Image src="/s11.png" width={500} height={500} className="w-full" alt="Feedback chart" />
                    </div>
                </div>

                {/* Card 4 */}
                <div className="p-6 rounded-3xl border border-white md:col-span-2 bg-gradient-to-b from-blue-500/10 via-blue-500/5 to-blue-500/20">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-[700] mb-2">Get a Clear View of Your Monthly Wins!</h2>
                    <p className="text-gray-400 mb-4">Visualize your monthly progress with clear insights into your workload.</p>
                    <div className="flex justify-center w-full">
                        <Image src="/s10.png" width={500} height={500} className="w-full" alt="Monthly Work Overview" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Confidance;
