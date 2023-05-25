import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import smartCityImg from '../public/assets/projects/smart.png';
import travelImg from '../public/assets/projects/travel.png'
import expenseTrackerImg from '../public/assets/projects/expense.png'
import todoImg from '../public/assets/projects/todo.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Smart City App'
            backgroundImg={smartCityImg}
            projectUrl='/smartCity'
            tech='React Native'
          />
          <ProjectItem
            title='Travel App'
            backgroundImg={travelImg}
            projectUrl='/travel'
            tech='React Native'

          />
          <ProjectItem
            title='Expense Tracker App'
            backgroundImg={expenseTrackerImg}
            projectUrl='/expenseTracker'
            tech='React Native'

          />
           <ProjectItem
            title='To Do App'
            backgroundImg={todoImg}
            projectUrl='/todo'
            tech='React Native'

          />
         
        </div>
      </div>
    </div>
  );
};

export default Projects;