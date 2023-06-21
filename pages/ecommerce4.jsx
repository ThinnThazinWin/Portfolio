import Image from 'next/image';
import ecommerce4 from '../public/assets/projects/ecommerce4.png'
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const smartCity = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 '>
        <div className='col-span-4 mt-20'>
          <h2 className='mb-5'>Project</h2>
          <Image src={ecommerce4}/>
          <h2 className='mt-5 mb-5'>Overview</h2>
          <p>
            I built this ecommerce with Next.js and is hosted on GitHub pages.
            This app features many services like cart, user, order, shipping and etc. 
            
          </p>
          <Link
            href='https://github.com/ThinnThazinWin/ecommerce'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </Link>
         
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 mt-40 h-[300px]'>
          <div className='p-2 '>
            <p className=' font-bold pb-2'>Technology</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next .js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
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

export default smartCity