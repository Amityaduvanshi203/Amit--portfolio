import React from 'react'

const ProjectCard = ({ title, description, image, tech, code }) => {
  return (
    <div className='bg-dark-200 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
      
      <img 
        src={image} 
        alt={title} 
        className='w-full h-60 object-cover'
      />

      <div className='p-6'>
        
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        
        <p className='text-gray-400 mb-4'>{description}</p>

        <div className='flex flex-wrap gap-2 mb-4'>
          {/* Safe tech map */}
          {Array.isArray(tech) &&
            tech.map((item, index) => (
              <span
                key={index}
                className='bg-dark-400 px-3 py-1 rounded-full text-sm'
              >
                {item}
              </span>
            ))
          }
        </div>

        <div className='flex gap-2'>
          <a
            href={code}
            className='flex-1 text-center px-4 py-2 bg-purple-100 rounded-lg font-medium hover:bg-purple-700 transition duration-300'
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
