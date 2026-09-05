import React from 'react'
import { motion as Motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { aboutInfo } from '../assets/assets'

const About = () => {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-dark-200'
        >

            <div className='container mx-0 px-6'>
                <h2 className='text-3xl md:text-5xl font-bold mb-8 text-center'>About <span className='text-purple-100'>Me</span></h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>

                <div className='flex flex-col md:flex-row items-center gap-12'>
                    <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                        <Motion.img
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='w-full h-full object-cover'
                            src={assets.sanket} alt='Profile Img'
                        />
                    </div>
                    <Motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='md:w-1/2'
                    >
                        <div className='rounded-2xl p-8'>
                            <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                            <p className='text-gray-300 mb-6'>I am an Electronics and Telecommunication Engineering student with a strong interest in technology and problem-solving. Alongside my academic foundation in core engineering subjects, I have developed solid programming skills in Python, JavaScript, and full-stack web development. Through project-based learning and hackathon participation, I have worked on building practical applications, focusing on creating efficient, user-oriented, and scalable solutions. These experiences have strengthened my analytical thinking, leadership, and teamwork abilities.</p>
                            <p className='text-gray-300 mb-12'> I am particularly interested in software development, intelligent systems, and data-driven technologies. I continuously explore new tools and technologies to enhance my technical expertise and aim to contribute to impactful, innovation-driven environments. With a mindset of continuous learning and growth, I aspire to build meaningful solutions that combine engineering fundamentals with modern software technologies. </p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {
                                aboutInfo.map((data, index) => (
                                    <div key={index} className='bg-dark-200 duration-300 rounded-2xl p-6 transition-transform hover:-translate-y-2 cursor-pointer'>
                                        <div className='text-purple-100 text-4xl mb-4'>
                                            <data.icon />
                                        </div>
                                        <h4 className='text-xl font-semibold mb-2'>{data.title}</h4>
                                        <p className='text-gray-400'>{data.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </Motion.div>
                </div>
            </div>
        </Motion.div>
    )
}

export default About
