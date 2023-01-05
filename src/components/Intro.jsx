import React from 'react'

function intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Helena</h1>
        <p className="text-base md:text-xl mb-3 font-medium">Full stack Engineer</p>
        <p className="text-sm max-w-xl mb-6 font-bold">I'm a software engineer with one years experience. Trained in full-stack, currently working in a backend role using Java and Spring at UK Retailer Marks and Spencers. I have worked extensively with Azure devops in my job and am currently focused on expanding my devops skills. Outside of work I create both frontend and backend projects using other languages like Javascript and python. 
        <br/>
        Feel free to peruse my website and{' '}
        <a
        href="https://www.linkedin.com/in/helenahc/"
        target="_blank"
        className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
        rel="noreferrer noopener"
        >contact me </a>{' '}
        for oppurtunities.
        </p>
    </div>
  )
}

export default intro