import React from 'react'
import portfolio from '../data/portfolio'
import PortfolioItem from './PortfolioItem'

function Portfolio() {
  return (
    <div className='flex flex-col items-center justify-center'>
    <div className="flex flex-col md:flex-row items-center justify-center m-3">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {portfolio.map(project => (
                <PortfolioItem
                    imgUrl={project.imgUrl}
                    title={project.title}
                    link={project.link}
                    stack={project.stack}
                />
            ))}
        </div>
    </div>
    <h2 className='font-bold'>Find more on {' '}
        <a
        href="https://github.com/helboi4"
        target="_blank"
        className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
        rel="noreferrer noopener"
        >my github page </a></h2>
    </div>
  )
}

export default Portfolio