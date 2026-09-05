import React from 'react'
import { motion as Motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <Motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
            id='projects'
            className='py-16 md:py-24 bg-dark-200 overflow-hidden'
        >
            <div className='container mx-auto px-4 md:px-6'>
                <h2 className='text-3xl md:text-5xl font-bold mb-4 text-center'>
                    My <span className='text-purple-100'>Projects</span>
                </h2>

                <p className='text-gray-400 text-center text-sm md:text-base max-w-2xl mx-auto mb-12 md:mb-16'>
                    A selection of my recent work.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto justify-items-center'>
                    {Array.isArray(projects) && projects.length > 0 ? (
                        projects.map((project, index) => (
                            <div key={index} className="w-full max-w-100 md:max-w-none">
                                <ProjectCard {...project} />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 col-span-full">No projects found.</p>
                    )}
                </div>
            </div>
        </Motion.div>
    )
}

export default Projects