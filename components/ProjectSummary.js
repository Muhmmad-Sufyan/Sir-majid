import React from 'react'

const ProjectSummary = () => {
    return (
        <div className=" max-w-full min-w-md ">
        <div
          className="md:mx-20 mx-4 border-[1px] rounded-2xl p-8 flex gap-1 my-10 md:flex-row flex-col"
          style={{
            background:
              'linear-gradient(195.05deg, rgba(37, 85, 212, 0.1) 0%, rgba(37, 85, 212, 0.02) 50%, rgba(37, 85, 212, 0.06) 100%)',
          }}
        >
          <div className="md:w-[50%] pt-10 w-full">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-2">
              Stop Guessing and Start Knowing!
            </h1>
            <p className="text-[gray] text-justify md:text-center pb-3 md:w-[80%] mx-auto">
              Get accurate estimates, timelines, and a custom project brief by
              answering detailed, designer-focused questions. Artie does the
              planning, so you can focus on creating.
            </p>
            <img src="/s6.png" alt="Description 1" className="w-full" />
          </div>
          <div className="flex justify-center md:mt-20 mt-10 md:w-[50%] w-full">
            <img
              src="/s7.png"
              alt="Description 2"
              className="z-50 flex md:opacity-70 md:-mt-16 -mt-8 w-auto"
            />
          </div>
        </div>
      </div>
      
    )
}

export default ProjectSummary