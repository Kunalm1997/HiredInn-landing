'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import fb from '../img/Item → Link.svg';
import tt from '../img/Item → Link (1).svg';
import yt from '../img/Item → Link (2).svg';
import ln from '../img/Item → Link (3).svg';
import insta from '../img/Item → Link (4).svg';
import location from '../img/location.svg';
import phone from '../img/phone.svg';
import email from '../img/email.svg';
import DialogBox from './dialogBox';

function Footer() {
  const [dialogueOpen, dialogueClose] = useState(false);

  const setOpen = () => {
    dialogueClose(true);
  }

  return (
    <div className='bg-[#180036] flex flex-wrap flex-col justify-between w-full sm:px-20 py-10 text-white'>
      <div className='flex justify-around items-center p-5 flex-wrap'>
        <p className='text-white text-center'>Dont miss out on the latest updates and news!</p>
        <div className='flex border-2 border-slate-400 rounded-3xl p-1 justify-between mt-2 sm:mt-0'>
          <input type="text" className='bg-transparent text-sm px-5 outline-none' placeholder='Enter your email address here ..'  onChange={setOpen} />
          <button className='flex items-center justify-between px-5 py-2 rounded-3xl text-sm text-white bg-dark-purple'>
            Subscribe
          </button>
        </div>
      </div>

      <div className='flex justify-around items-start p-0 flex-wrap'>
        <div className='flex flex-col my-1'>
          <p className='text-xs sm:mt-0 mr-0 sm:mr-6' style={{ width: '300px' }}>Our platform offers an all-encompassing recruitment solution specifically designed for the hospitality industry, making the hiring process more efficient. By harnessing advanced AI technology, we ensure smooth management of applicant tracking, provide personalized job suggestions.</p>
          <div className='flex'>
            <Image src={fb} alt='fb' width={50} height={20} className='cursor-pointer hover:bg-light-purple rounded-xl' />
            <Image src={tt} alt='fb' width={50} height={20} className='cursor-pointer hover:bg-light-purple rounded-xl' />
            <Image src={yt} alt='fb' width={50} height={20} className='cursor-pointer hover:bg-light-purple rounded-xl' />
            <Image src={ln} alt='fb' width={50} height={20} className='cursor-pointer hover:bg-light-purple rounded-xl' />
            <Image src={insta} alt='fb' width={50} height={20} className='cursor-pointer hover:bg-light-purple rounded-xl' />
          </div>
        </div>
        {/* <div className='flex flex-col justify-between m-1'>
          <p className='mb-2 text-md font-semibold'>HiredInn</p>
          <p className='my-2 text-xs cursor-pointer'>Why HiredInn</p>
          <p className='my-2 text-xs cursor-pointer'>Enterprise</p>
          <p className='my-2 text-xs cursor-pointer'>Customer Story</p>
          <p className='my-2 text-xs cursor-pointer'>Security</p>
          <p className='my-2 text-xs cursor-pointer'>Pricing</p>
        </div>
        <div className='flex flex-col justify-between m-1'>
          <p className='mb-2 text-md font-semibold'>Resources</p>
          <p className='my-2 text-xs cursor-pointer'>Download</p>
          <p className='my-2 text-xs cursor-pointer'>Help Center</p>
          <p className='my-2 text-xs cursor-pointer'>Events</p>
          <p className='my-2 text-xs cursor-pointer'>Guides</p>
          <p className='my-2 text-xs cursor-pointer'>Partner</p>
          <p className='my-2 text-xs cursor-pointer'>Directories</p>
        </div>
        <div className='flex flex-col justify-between m-1'>
          <p className='mb-2 text-md font-semibold'>Company</p>
          <p className='my-2 text-xs cursor-pointer'>About us</p>
          <p className='my-2 text-xs cursor-pointer'>Contact us</p>
          <p className='my-2 text-xs cursor-pointer'>Products</p>
          <p className='my-2 text-xs cursor-pointer'>Login</p>
          <p className='my-2 text-xs cursor-pointer'>Sign up</p>
          <p className='my-2 text-xs cursor-pointer'>FAQ</p>
        </div> */}
        <div className='flex flex-col m-0'>
          <p className='mb-2 text-md font-semibold'>Get in touch with us</p>
          <div className='flex items-center'>
            <Image src={location} alt='location' width={15} height={20} />
            <p className='my-2 text-xs ml-3'>Balewadi High Street, Pune <br />India</p>
          </div>
          <div className='flex items-center'>
            <Image src={phone} alt='phone' width={15} height={20} />
            <p className='my-2 text-xs ml-3'><a href="tel:+123 345123 556" className='text-white'>+91-8600504978</a></p>
          </div>
          <div className='flex items-center'>
            <Image src={email} alt='email' width={15} height={20} />
            <p className='my-2 text-xs ml-3'><a href="mailto:hello@hiredinn.co" className='text-white'>hello@hiredinn.co</a></p>
          </div>
        </div>
      </div>

      <div className='flex justify-center sm:justify-between items-center border-t-2 border-slate-200 p-5 flex-wrap'>
        <p>HiredInn - © 2024 All Rights Reserved</p>
        <p>Made with ❤️ by HiredInn</p>
      </div>

      {dialogueOpen && <DialogBox open={dialogueOpen} setOpen={dialogueClose} />}
    </div>
  )
}

export default Footer