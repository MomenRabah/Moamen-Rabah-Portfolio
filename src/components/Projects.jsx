import React from 'react';
import { PROJECTS } from '../constants';
import projectImg from '../assets/projectImg.png'


function Projects() {
  return (
    <div className='border-b border-[#d9d9d9] pb-12 lg:mb-35'>
      <h2 className='mt-14 mb-4 lg:mb-14 text-center text-4xl'>Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
            <img src={project.image} alt={project.title} className='mb-6 rounded hidden lg:block'/>
            </div>
            <div className='w-full mt-16 max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 font-light'>{project.description}</p>
              
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#3ccf4e] hover:underline'
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;