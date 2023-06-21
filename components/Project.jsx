
import React from 'react';

import ecommerce1 from '../public/assets/projects/ecommerce1.png'
import ecommerce2 from '../public/assets/projects/ecommerce2.png'
import ecommerce3 from '../public/assets/projects/ecommerce3.png'
import ecommerce4 from '../public/assets/projects/ecommerce4.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full  '>
      <div className='max-w-[1240px] mx-auto px-2 py-10'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Project
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8 mt-10'>
          <ProjectItem
            title='E-commerce'
            backgroundImg={ecommerce1}
            projectUrl='/ecommerce1'
            tech='Next and Tailwind'
          />
          <ProjectItem
            title='E-commerce'
            backgroundImg={ecommerce3}
            projectUrl='/ecommerce3'
            tech='Next and Tailwind'

          />
          <ProjectItem
            title='E-commerce'
            backgroundImg={ecommerce2}
            projectUrl='/ecommerce2'
            tech='Next and Tailwind'

          />
           <ProjectItem
            title='E-commerce'
            backgroundImg={ecommerce4}
            projectUrl='/ecommerce4'
            tech='Next and Tailwind'

          />
          
         
        </div>
      </div>
    </div>
  );
};

export default Projects;