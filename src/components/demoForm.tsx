import Image from 'next/image';
import React from 'react'
import laptopBanner from '../img/222.svg';

function DemoForm() {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-evenly h-screen bg-gradient-to-br from-purple-400 to-purple-800 text-white overflow-auto py-12'>
      <div className='flex flex-col items-center justify-evenly w-1/2 h-screen'>
        <h3 className='text-3xl font-semibold'>Book A Demo</h3>
        <h5 className='sm:text-2xl font-normal text-center'>Streamline your hospitality hiring with our AI-driven platform <br /><span className='sm:text-xl'> Book a demo today and transform your recruitment process!</span></h5>
        <Image src={laptopBanner} alt='demo' width={900} height={500} className='my-5 sm:mt-0' />
      </div>
      <div className='rounded-3xl flex flex-col items-center bg-light-purple sm:w-1/3' style={{padding: '50px', margin: '20px'}}>
        <div className='flex flex-col items-start justify-start m-3 text-black'>
          <h5 className='mb-1'>Full Name</h5>
          <input type="text" placeholder='enter your name' className='sm:w-96 rounded-lg py-2 px-6 border-2 border-dark-purple text-sm' style={{outline: 'none'}} />
        </div>
        <div className='flex flex-col items-start justify-start m-3 text-black'>
          <h5 className='mb-1'>Enter your email</h5>
          <input type="email" required placeholder='enter your email address' className='sm:w-96 rounded-lg py-2 px-6 border-2 border-dark-purple text-sm' style={{outline: 'none'}} />
        </div>
        <div className='flex flex-col items-start justify-start m-3 text-black'>
          <h5 className='mb-1'>Number</h5>
          <input type="number" required placeholder='enter your number'  className='sm:w-96 rounded-lg py-2 px-6 border-2 border-dark-purple text-sm' style={{outline: 'none'}} />
        </div>
        <div className='flex flex-col items-start justify-start m-3 text-black'>
          <h5 className='mb-1'>Company Name</h5>
          <input type="text" required placeholder='enter your name'  className='sm:w-96 rounded-lg py-2 px-6 border-2 border-dark-purple text-sm' style={{outline: 'none'}} />
        </div>
        <div className='flex flex-col items-start justify-start m-3 text-black'>
          <h5 className='mb-1'>Website / Zomato link</h5>
          <input type="text" required placeholder='enter your name'  className='sm:w-96 rounded-lg py-2 px-6 border-2 border-dark-purple text-sm' style={{outline: 'none'}} />
        </div>
        <button className='bg-dark-purple text-white rounded-lg py-2 px-6 mt-5'>Book a Demo</button>
      </div>

      </div>
  )
}

export default DemoForm;