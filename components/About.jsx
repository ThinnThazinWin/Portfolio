import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/menu/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-fullp-2 flex items-center'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I develop in building web 
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I  build 
            front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. 
          </p>
          <p className='py-2 text-gray-600'>
         
            I have experience working  with IT support and 
             front-end developer trainees. In my spare  time
            I study from Youtube channel where I learn web
            developement and various front-end technologies. 
            Now, If I have a chance, I'm strongly willing to join up
            with your team and I believe I'll get neat and tidy roadmap 
            from company to work as developer. And also I'm surely I'll try the best to pay best result for company.
           
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out my sample e-commerce project.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;