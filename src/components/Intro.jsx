import React from 'react'

function intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Helena</h1>
        <p className="text-base md:text-xl mb-3 font-medium">Full stack Engineer</p>
        <p className="text-sm max-w-xl mb-6 font-bold">I am a software engineer with three years experience. I am currently looking for work after 2 years at Universal Music Group as a full stack developer. I worked with Java, Spring, Angular, Ionic and AWS in that role. My biggest acheivement was completing an ionic app rewrite and new identity provider integration in half the time estimated by the senior frontend engineer on my team, therefore doubling productivity. I'm hoping to keep stacking up sucesses like that in my next role, and to learn some new technologies.
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
