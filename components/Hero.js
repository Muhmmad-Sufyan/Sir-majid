import React from 'react'

const Hero = () => {
    return (
        <div className="contanier mx-auto flex flex-col justify-center items-center mt-32 px-4 lg:px-20">
        <div className="text-center mx-20">
          <h1 className="text-xl md:text-6xl 2xl:text-9xl font-[400] text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F5] via-blue-500 to-[#2555D4] md:mb-10 mb-5 md:w-[75%] w-[100%] mx-auto" >
            Own Your Freelance Journey, Smarter with Artie
          </h1>
          <p className="text-gray-400 mt-4  font-[400] 2xl:text-4xl text-[14px] md:mb-5 mb-5">
            Smarter pricing, seamless project management, and a tailored brief—designed for your success.
          </p>
          <button className="mt-8 px-4 py-1 text-[11px] border-[1px] bg-gradient-to-b from-[#2555D400] to-[#1B57DF] text-white text-sm font-semibold rounded-md hover:opacity-90 transition duration-300">
            Start For Free
          </button>
        </div>
        
        <div className='contanier'>
          <img src="/s1.png" alt="Main Visual" className="w-[89%] mx-auto my-20" />
        </div>
      
        {/* Uncomment to display additional sections */}
        {/* <div className="p-8 flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-7xl w-full">
            <div className="p-6 border-[1px] rounded-lg shadow-lg">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-500 to-indigo-500">
                See All Your Progress in One Place!
              </h2>
              <p className="text-gray-400 mt-2">
                Track everything you’ve achieved with clear insights into your projects, income, and clients—all in one place.
              </p>
              <div className="mt-6 flex justify-between gap-4">
                <div className="bg-gradient-to-b from-[#2555D400] to-[#1B57DF] text-white font-semibold p-4 rounded-lg hover:opacity-90 transition duration-300">
                  <i className="bx bx-folder-plus" style={{ color: '#ffffff' }} />
                  <h3 className="text-white">10</h3>
                  <p className="text-gray-400 text-sm">Projects Completed</p>
                </div>
                <div className="bg-[#1C1F2A] p-4 rounded-lg">
                  <h3 className="text-white">$10k</h3>
                  <p className="text-gray-400 text-sm">Total Revenue</p>
                </div>
                <div className="bg-[#1C1F2A] p-4 rounded-lg">
                  <h3 className="text-white">5</h3>
                  <p className="text-gray-400 text-sm">Clients Saved</p>
                </div>
              </div>
            </div>
      
            <div className="p-6 border-[1px] rounded-lg shadow-lg">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-500 to-indigo-500">
                Show What You're Good At
              </h2>
              <p className="text-gray-400 mt-2">
                Unleash your potential by focusing on your top services to maximize success.
              </p>
              <div className="mt-6">
                <div className="bg-[#1C1F2A] p-4 rounded-lg">
                  <h3 className="text-white">Top Services</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex justify-between text-gray-400">
                      <span>Design</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded">
                      <div className="h-full bg-blue-500 rounded" style={{ width: '90%' }}></div>
                    </div>
      
                    <div className="flex justify-between text-gray-400">
                      <span>Marketing</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded">
                      <div className="h-full bg-blue-500 rounded" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="p-6 border-[1px] rounded-lg shadow-lg">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-500 to-indigo-500">
                Easily Track Feedback
              </h2>
              <p className="text-gray-400 mt-2">
                Streamline client feedback collection to enhance your performance and showcase testimonials.
              </p>
              <div className="mt-6">
                <div className="bg-[#1C1F2A] p-4 rounded-lg">
                  <h3 className="text-white">Client Satisfaction</h3>
                  <div className="h-40 flex justify-center items-center">
                    <p className="text-gray-400">Chart Example</p>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="p-6 border-[1px] rounded-lg shadow-lg">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-500 to-indigo-500">
                Get a Clear View of Your Monthly Wins!
              </h2>
              <p className="text-gray-400 mt-2">
                Visualize your monthly progress with clear insights into your workload.
              </p>
              <div className="mt-6">
                <div className="bg-[#1C1F2A] p-4 rounded-lg">
                  <h3 className="text-white">Monthly Work Overview</h3>
                  <div className="h-40 flex justify-center items-center">
                    <p className="text-gray-400">Chart Example</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      
    )
}

export default Hero