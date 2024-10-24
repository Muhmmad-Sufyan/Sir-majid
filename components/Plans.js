import React from 'react'

const Plans = () => {
    return (
        <>
            <div className="bg-black text-white flex flex-col items-center py-8 md:mx-20 sm:mx-10 mx-4 ">
                {/* Pricing Header */}
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
                Pricing
                </h1>
                <p className="text-gray-400 mb-12">Find a plan that fits your needs.</p>

                {/* Monthly Section */}
                <h2 className="text-3xl font-semibold mb-4">Monthly</h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center  sm:gap-2 gap-4 mb-12">
                    {/* Starter Plan */}
                    <div className="p-6 rounded-3xl border  border-white" style={{background: 'linear-gradient(195.05deg, rgba(37, 85, 212, 0.1) 0%, rgba(37, 85, 212, 0.02) 50%, rgba(37, 85, 212, 0.06) 100%)'}}>
                        <h3 className="text-xl font-semibold text-center">Starter Plan</h3>
                        <p className="mt-2 text-center">$9/mo</p>
                        <p className="mt-4 text-center text-gray-400">Ideal for freelance designers starting with AI.</p>
                        <ul className="text-gray-400 mt-4 list-disc list-inside">
                            <li>Basic AI tools</li>
                            <li>Email support</li>
                        </ul>
                        <button className="mt-8 px-6 py-2 border-2 bg-gradient-to-b from-[#2555D400] to-[#1B57DF] text-white font-semibold rounded-full hover:opacity-90 transition duration-300">
                            Try for free
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="p-6 rounded-3xl border  border-white" style={{background: 'linear-gradient(195.05deg, rgba(37, 85, 212, 0.1) 0%, rgba(37, 85, 212, 0.02) 50%, rgba(37, 85, 212, 0.06) 100%)'}}>
                        <h3 className="text-xl font-semibold text-center">Pro Plan</h3>
                        <p className="mt-2 text-center">$29/mo</p>
                        <p className="mt-4 text-center text-gray-400">
                            Created for professionals requiring advanced customization.
                        </p>
                        <ul className="text-gray-400 mt-4 list-disc list-inside">
                            <li>Customized Tools</li>
                            <li>Priority email support</li>
                        </ul>
                        <button className="mt-8 px-6 py-2 border-2 bg-gradient-to-b from-[#2555D400] to-[#1B57DF] text-white font-semibold rounded-full hover:opacity-90 transition duration-300">
                            Get started
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div className="p-6 rounded-3xl border  border-white" style={{background: 'linear-gradient(195.05deg, rgba(37, 85, 212, 0.1) 0%, rgba(37, 85, 212, 0.02) 50%, rgba(37, 85, 212, 0.06) 100%)'}}>
                        <h3 className="text-xl font-semibold text-center">Premium Plan</h3>
                        <p className="mt-2 text-center">$59/mo</p>
                        <p className="mt-4 text-center text-gray-400">
                            Designed for professionals needing full customization.
                        </p>
                        <ul className="text-gray-400 mt-4 list-disc list-inside">
                            <li>Full customized tools</li>
                            <li>24/7 support</li>
                        </ul>
                        <button className="mt-8 px-6 py-2 border-2 bg-gradient-to-b from-[#2555D400] to-[#1B57DF] text-white font-semibold rounded-full hover:opacity-90 transition duration-300">
                            Try for free
                        </button>
                    </div>
                </div>

                {/* Annual Section */}
                <h2 className=" font-semibold mb-4"><span className='text-3xl'>Annually</span> <span>-30%</span></h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center  gap-4 sm:gap-2 mb-12">
                    {/* Starter Plan Annually */}
                    <div className="p-6 rounded-3xl border   border-white" style={{background: 'linear-gradient(195.05deg, rgba(37, 85, 212, 0.1) 0%, rgba(37, 85, 212, 0.02) 50%, rgba(37, 85, 212, 0.06) 100%)'}}>
                        <h3 className="text-xl font-semibold text-center">Starter Plan</h3>
                        <p className="mt-2 text-center">$7/mo</p>
                        <p className="mt-4 text-center text-gray-400">
                            Ideal for freelance designers starting with AI.
                        </p>
                        <ul className="text-gray-400 mt-4 list-disc list-inside">
                            <li>Basic AI tools</li>
                            <li>Email support</li>
                        </ul>
                        <button className="mt-8 px-6 py-2 border-2 bg-gradient-to-b from-[#2555D400] to-[#1B57DF] text-white font-semibold rounded-full hover:opacity-90 transition duration-300">
                            Try for free
                        </button>
                    </div>

                    {/* Pro Plan Annually */}
                    <div className="p-6 rounded-3xl border  border-white" style={{background: 'linear-gradient(195.05deg, rgba(37, 85, 212, 0.1) 0%, rgba(37, 85, 212, 0.02) 50%, rgba(37, 85, 212, 0.06) 100%)'}}>
                        <h3 className="text-xl font-semibold text-center">Pro Plan</h3>
                        <p className="mt-2 text-center">$24/mo</p>
                        <p className="mt-4 text-center text-gray-400">
                            Created for professionals requiring advanced customization.
                        </p>
                        <ul className="text-gray-400 mt-4 list-disc list-inside">
                            <li>Customized Tools</li>
                            <li>Priority email support</li>
                        </ul>
                        <button className="mt-8 px-6 py-2 border-2 bg-gradient-to-b from-[#2555D400] to-[#1B57DF] text-white font-semibold rounded-full hover:opacity-90 transition duration-300">
                            Get started
                        </button>
                    </div>

                    {/* Premium Plan Annually */}
                    <div className="p-6 rounded-3xl border  border-white" style={{background: 'linear-gradient(195.05deg, rgba(37, 85, 212, 0.1) 0%, rgba(37, 85, 212, 0.02) 50%, rgba(37, 85, 212, 0.06) 100%)'}}>
                        <h3 className="text-xl font-semibold text-center">Premium Plan</h3>
                        <p className="mt-2 text-center">$49/mo</p>
                        <p className="mt-4 text-center text-gray-400">
                            Designed for professionals needing full customization.
                        </p>
                        <ul className="text-gray-400 mt-4 list-disc list-inside">
                            <li>Full customized tools</li>
                            <li>24/7 support</li>
                        </ul>
                        <button className="mt-8 px-6 py-2 border-2 bg-gradient-to-b from-[#2555D400] to-[#1B57DF] text-white font-semibold rounded-full hover:opacity-90 transition duration-300">
                            Try for free
                        </button>
                    </div>
                </div>
            </div>

            <div className=" md:my-20 my-5 md:ml-3 sm:ml-2 ml-0" id='features'>
                <h1 className="text-3xl sm:text-5xl text-center md:text-6xl mb-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-500 to-indigo-500">
                    Feature Comparison
                </h1>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center pt-2 gap-2     ">
                    {/* Starter Plan */}
                    <div className="p-6 text-center border-[#2555D4] " >
                        <h2 className="text-xl font-semibold">Starter Plan</h2>
                        <p className="mt-2">$9/mo</p>
                        <p className="mt-4 text-gray-400">
                            Ideal for freelance designers starting with AI.
                        </p>
                        <button className="mt-6 bg-white text-black py-2 px-10 rounded-md">Start for free</button>
                    </div>

                    {/* Pro Plan */}
                    <div className="p-6 text-center border-[#2555D4]" >
                        <h2 className="text-xl font-semibold">Pro Plan</h2>
                        <p className="mt-2">$29/mo</p>
                        <p className="mt-4 text-gray-400">
                            Created for professionals requiring advanced customization.
                        </p>
                        <button className="mt-6 bg-white text-black py-2 px-10 rounded-md">Start now</button>
                    </div>

                    {/* Premium Plan */}
                    <div className="p-6 text-center border-[#2555D4]" >
                        <h2 className="text-xl font-semibold">Premium Plan</h2>
                        <p className="mt-2">$59/mo</p>
                        <p className="mt-4 text-gray-400">
                            Designed for professionals needing full customization.
                        </p>
                        <button className="mt-6 bg-blue-600 text-white py-2 px-10 rounded-md">Start now</button>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Plans