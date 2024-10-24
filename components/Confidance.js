import React from 'react'

const Confidance = () => {
    return (
        <div className="bg-black text-white  flex flex-col items-center md:mx-20 mx-4">
            <h1 className="sm:text-3xl  text-2xl md:text-4xl text-center font-bold md:mb-20 mb-10">
                Create with Confidence, Deliver with Precision
            </h1>

            <div className="grid gap-6 sm:grid-cols-3 grid-cols-1 text-center ">
                {/* Card 1 */}
                <div className="p-6 rounded-lg border md:col-span-2 border-white ">
                    <h2 className="md:text-3xl sm:text-2xl text-xl font-semibold mb-2">See All Your Progress in One Place!</h2>
                    <p className="text-gray-400 mb-4">Track everything you've achieved with clear insights into your projects, income, and clients—all in one place.</p>
                    <div className="flex justify-between">
                        <img src='/s8.png' />

                    </div>
                </div>

                {/* Card 2 */}
                <div className="p-6 rounded-lg border border-white  ">
                    <h2 className="md:text-3xl sm:text-2xl text-xl font-semibold mb-2">Show What You're Good At</h2>
                    <p className="text-gray-400 mb-4">Unleash your potential by focusing on your top services to maximize success.</p>
                  <div>
                    <img src='/s9.png' />
                  </div>
                </div>

                {/* Card 3 */}
                <div className="p-6 rounded-lg border border-white ">
                    <h2 className="md:text-3xl sm:text-2xl text-xl font-semibold mb-2">Easily Track Feedback</h2>
                    <p className="text-gray-400 mb-4">Streamline client feedback collection to enhance your performance and showcase testimonials in one place.</p>
                    <div className="flex items-center">
                        <img src="/s11.png" alt="Feedback chart" className="w-full" />
                        <div className="ml-4">
                           
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="p-6 rounded-lg border border-white md:col-span-2">
                    <h2 className="md:text-3xl sm:text-2xl text-xl font-semibold mb-2">Get a Clear View of Your Monthly Wins!</h2>
                    <p className="text-gray-400 mb-4">Visualize your monthly progress with clear insights into your workload.</p>
                    <img src="/s10.png" alt="Monthly Work Overview" className="w-full md:min-h-[80%]" />
                </div>
            </div>
        </div>
    )
}

export default Confidance