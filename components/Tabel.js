import React from 'react'

const Tabel = () => {
    return (
          <>
          
          
        <div className="max-w-7xl mx-4">
            <h2 className="text-2xl lg:text-4xl font-semibold text-white  mb-10">Category</h2>

            {/* Table */}
            <div className="overflow-x-auto  rounded-lg shadow-lg">
                <table className="min-w-full text-white">
                    <thead>
                        <tr className="border-b border-[#2555D4]">
                            <th className="sm:p-4 p-2 text-left">Total Projects</th>
                            <th className="sm:p-4 p-2 text-center">10</th>
                            <th className="sm:p-4 p-2 text-center">50</th>
                            <th className="sm:p-4 p-2 text-center">Unlimited</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#2555D4]">

                        {/* Row 1 */}
                        <tr>
                            <td className="sm:p-4 p-2">Monthly Generations</td>
                            <td className="sm:p-4 p-2 text-center">10</td>
                            <td className="sm:p-4 p-2 text-center">30</td>
                            <td className="sm:p-4 p-2 text-center">Unlimited</td>
                        </tr>

                        <tr>
                            <td className="sm:p-4 p-2 flex items-center gap-1">
                                Price Generations
                                <span className="text-sm text-gray-400 cursor-pointer">ⓘ</span>
                            </td>
                            <td className="sm:p-4 p-2 text-center">Basic</td>
                            <td className="sm:p-4 p-2 text-center">Detailed</td>
                            <td className="sm:p-4 p-2 text-center">Unlimited</td>
                        </tr>


                        <tr>
                            <td className="sm:p-4 p-2 flex items-center gap-1">
                                Brief Generations
                                <span className="text-sm text-gray-400 cursor-pointer">ⓘ</span>
                            </td>
                            <td className="sm:p-4 p-2 text-center">-</td>
                            <td className="sm:p-4 p-2 text-center">-</td>
                            <td className="sm:p-4 p-2 text-center">✔</td>
                        </tr>

                        <tr>
                            <td className="sm:p-4 p-2 flex items-center gap-1">
                                Estimated Work Days
                                <span className="text-sm text-gray-400 cursor-pointer">ⓘ</span>
                            </td>
                            <td className="sm:p-4 p-2 text-center">-</td>
                            <td className="sm:p-4 p-2 text-center">✔</td>
                            <td className="sm:p-4 p-2 text-center">Advanced</td>
                        </tr>

                        <tr>
                            <td className="sm:p-4 p-2 flex items-center gap-1">
                                Project Tracker
                                <span className="text-sm text-gray-400 cursor-pointer">ⓘ</span>
                            </td>
                            <td className="sm:p-4 p-2 text-center">Basic</td>
                            <td className="sm:p-4 p-2 text-center">Advanced</td>
                            <td className="sm:p-4 p-2 text-center">Advanced</td>
                        </tr>


                        <tr>
                            <td className="sm:p-4 p-2 flex items-center gap-1">
                                Client Satisfaction Tracking
                                <span className="text-sm text-gray-400 cursor-pointer">ⓘ</span>
                            </td>
                            <td className="sm:p-4 p-2 text-center">-</td>
                            <td className="sm:p-4 p-2 text-center">✔</td>
                            <td className="sm:p-4 p-2 text-center">✔</td>
                        </tr>
                        <tr>
                            <td className="sm:p-4 p-2 flex items-center gap-1">
                            Total Completed Projects
                            </td>
                            <td className="sm:p-4 p-2 text-center">-</td>
                            <td className="sm:p-4 p-2 text-center">✔</td>
                            <td className="sm:p-4 p-2 text-center">✔</td>
                        </tr>
                        <tr>
                            <td className="sm:p-4 p-2 flex items-center gap-1">
                            Total Income Generated
                            </td>
                            <td className="sm:p-4 p-2 text-center">-</td>
                            <td className="sm:p-4 p-2 text-center">✔</td>
                            <td className="sm:p-4 p-2 text-center">✔</td>
                        </tr>
                        <tr>
                            <td className="sm:p-4 p-2 flex items-center gap-1">
                            Total Clients Served
                            </td>
                            <td className="sm:p-4 p-2 text-center">-</td>
                            <td className="sm:p-4 p-2 text-center">✔</td>
                            <td className="sm:p-4 p-2 text-center">✔</td>
                        </tr>
                        <tr>
                            <td className="sm:p-4 p-2 flex items-center gap-1">
                            Top Earning Services
                            </td>
                            <td className="sm:p-4 p-2 text-center">-</td>
                            <td className="sm:p-4 p-2 text-center">✔</td>
                            <td className="sm:p-4 p-2 text-center">✔</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div className="flex md:justify-end gap-3 flex-col md:flex-row mx-4 md:mx-0 mt-10 gasm:p-4 p-2">
                <button className="md:px-20 sm:px-16 px-10 py-3 rounded-xl bg-white text-black">Start for free</button>
                <button className="md:px-20 sm:px-16 px-10 py-3 rounded-xl bg-white text-black">Start now</button>
                <button className="md:px-20 sm:px-16 px-10 py-3 rounded-xl bg-blue-600 text-white">Start now</button>
            </div>
        </div>
          </>

    )
}

export default Tabel