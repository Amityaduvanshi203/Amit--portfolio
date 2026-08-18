import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

const Work = () => {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='experience'
            className='py-20 bg-dark-100'
        >
            <div className='container mx-auto px-6'>
                <h1 className='text-3xl md:text-5xl font-bold mb-4 text-center'>Work <span className='text-purple-100'>Experience</span></h1>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>A brief overview of my professional journey.</p>
                <div className='max-w-3xl mx-auto'>
                    <div className='space-y-12'>
                        {
                            workData.map((data, index) => (
                                <div key={index} className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-0.5 before:h-full before:bg-purple-100 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                    {/* timeline */}
                                    <div className='absolute -left-2 top-0 w-6 h-6 rounded-full bg-purple-100'>
                                        
                                    </div>
                                    {/* box */}
                                    <div className='bg-dark-300 rounded-2xl p-6'>
                                        <div className='flex justify-between items-start mb-2'>
                                            <h3 className='text-xl font-semibold'>{data.role}</h3>
                                            <span className='text-purple-100 px-3 py-1 bg-purple/20 rounded-full text-xs md:text-sm'>{data.duration}</span>
                                        </div>
                                        <p className='text-gray-400 mb-2'>{data.company}</p>
                                        <p className='text-gray-300'>{data.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Work
