import Image from 'next/image';
import React from 'react';
import smartcityKalaw from '../public/assets/projects/smart.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const todo = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 '>
        <div className='col-span-4 mt-20'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I built this application in React Native and is hosted on GitHub pages.
            This app helps user to note daily routing, roadmap and whatever they do.
             And then, everyone can use easily with simple user interface. I used
             Firebase for authentication and reset password, etc.
            
          </p>
          <Link
            href='https://github.com/ThinnThazinWin/Todo_App'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </Link>
         
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 mt-40'>
          <div className='p-2 '>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React Native
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
      
    </div>
  );
};

export default todo;