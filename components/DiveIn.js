import React from 'react'

const DiveIn = () => {
  return (
    <div className='md:mx-20 mx-4 border-[1px] rounded-2xl p-8' style={{background: 'linear-gradient(195.05deg, rgba(37, 85, 212, 0.1) 0%, rgba(37, 85, 212, 0.02) 50%, rgba(37, 85, 212, 0.06) 100%)'}}>
       <h1 className='md:text-3xl text-center mb-2 lg:text-4xl text-2xl font-semibold'>Ready to Dive In?</h1>
        <p className='md:text-center text-justify md:w-[80%] w-[100%] mx-auto text-[gray]'>Get ready to experience the power of Artie’s detailed, designer-focused questions. Each question is crafted to uncover the specifics of your creative process, ensuring that every project runs smoothly from start to finish. Explore how these tailored insights can help you deliver exceptional results, time after time.</p>
        <div className='relative flex justify-center md:my-20 my-10'>
            
         <img src="/s4.png" className='absolute left-0 hidden md:block'  width={600} height={600}/>
         <img src="/s3.png" className='z-50  flex md:opacity-80 md:-mt-16 -mt-8 sm:opacity-90 opacity-100 ' width={600} />
         <img src="/s5.png" className='absolute md:right-0 -right-1 sm:hidden md:block' width={600} height={600}/>
        </div>
    </div>
  )
}

export default DiveIn