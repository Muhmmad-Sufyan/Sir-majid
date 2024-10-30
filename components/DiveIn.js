import React from 'react'

const DiveIn = () => {
  return (
    <div className="md:mx-20 mx-4 border border-gray-300 rounded-2xl p-8" style={{background: 'linear-gradient(195.05deg, rgba(37, 85, 212, 0.1) 0%, rgba(37, 85, 212, 0.02) 50%, rgba(37, 85, 212, 0.06) 100%)'}}>
    <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-4">Ready to Dive In?</h1>
    <p className="text-justify md:text-center text-gray-400 md:w-[80%] w-full mx-auto mb-6">
        Get ready to experience the power of Artie’s detailed, designer-focused questions. Each question is crafted to uncover the specifics of your creative process, ensuring that every project runs smoothly from start to finish. Explore how these tailored insights can help you deliver exceptional results, time after time.
    </p>

    <div className="relative flex justify-center my-10 md:my-20">
        <img src="/s4.png" className="absolute left-0 hidden md:block" width={600} height={600} alt="Design element left" />
        <img src="/s3.png" className="z-50 opacity-100 sm:opacity-90 md:opacity-80 -mt-8 md:-mt-16" width={600} alt="Main design element" />
        <img src="/s5.png" className="absolute right-0 hidden md:block" width={600} height={600} alt="Design element right" />
    </div>
</div>

  )
}

export default DiveIn