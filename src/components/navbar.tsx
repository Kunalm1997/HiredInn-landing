'use client'
import Image from 'next/image'
import React, { useState } from 'react'
// import logo from '../img/Frame 1215971618.svg';
import logo from '../img/HiredInn.svg';
import bookdemovector from '../img/Vector.svg';
import Link from 'next/link';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <div className="flex justify-between items-center px-10 py-4 bg-white rounded-xl my-2 mx-4 relative">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="logo" width={150} height={20} className="cursor-pointer" />
        </Link>
      </div>
      {/* Hamburger Menu */}
      <div className="flex items-center md:hidden">
        <button onClick={toggleMenu} className="outline-none focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2 md:hidden w-full p-5 z-10">
          <ul className='flex flex-col items-center'>
            <Link href="/">
              <li className="m-1 active:border-b-2 hover:border-b-2 hover:border-dark-purple cursor-pointer" onClick={toggleMenu}>Home</li>
            </Link>
            <li className="m-1 active:border-b-2 hover:border-b-2 hover:border-dark-purple cursor-pointer">Hiring Feature</li>
            <li className="m-1 active:border-b-2 hover:border-b-2 hover:border-dark-purple cursor-pointer">Product</li>
            <li className="m-1 active:border-b-2 hover:border-b-2 hover:border-dark-purple cursor-pointer">Contact</li>
          </ul>
          <div className="flex flex-col justify-around items-center py-2">
            <Link href="/bookademo">
              <button className="flex items-center justify-between p-2 m-1 rounded-xl text-sm text-dark-purple" style={{ background: '#F9F5FD' }} onClick={toggleMenu}>
                <Image src={bookdemovector} alt="logo" width={15} height={20} className="mr-2" />
                Book a demo
              </button>
            </Link>
            <button className="flex items-center justify-between px-5 py-2 m-1 rounded-3xl text-sm bg-light-purple">
              Find Jobs
            </button>
            <button className="flex items-center justify-between px-5 py-2 m-1 rounded-3xl text-sm text-white bg-dark-purple">
              Hire Talent
            </button>
          </div>
        </div>
      )}

      {/* Regular Menu for Desktop */}
      <div className="hidden md:flex justify-between items-center w-full">
        <ul className='flex ml-20'>
          <Link href="/">
            <li className="mx-4 active:border-b-2 hover:border-b-2 hover:border-dark-purple cursor-pointer font-semibold">Home</li>
          </Link>
          <li className="mx-4 active:border-b-2 hover:border-b-2 hover:border-dark-purple cursor-pointer font-semibold">Hiring Feature</li>
          <li className="mx-4 active:border-b-2 hover:border-b-2 hover:border-dark-purple cursor-pointer font-semibold">Product</li>
          <li className="mx-4 active:border-b-2 hover:border-b-2 hover:border-dark-purple cursor-pointer font-semibold">Contact</li>
        </ul>
        <div className='flex justify-around items-center' style={{ width: '30%' }}>
          <Link href="/bookademo">
            <button className="flex items-center justify-between p-2 rounded-xl text-sm text-dark-purple" style={{ background: '#F9F5FD' }}>
              <Image src={bookdemovector} alt="logo" width={15} height={20} className="mr-2" />
              Book a demo
            </button>
          </Link>
          <button className="flex items-center justify-between px-5 py-2 rounded-3xl text-sm bg-light-purple">
            Find Jobs
          </button>
          <button className="flex items-center justify-between px-5 py-2 rounded-3xl text-sm text-white bg-dark-purple">
            Hire Talent
          </button>
        </div>
      </div>
    </div>

    // <div className="flex justify-between items-center px-10 py-4 bg-white rounded-xl my-2 mx-4">
    //   <div className='flex justify-around items-center'>
    //     <Image src={logo} alt="logo" width={150} height={20} className='cursor-pointer' />
    //     <div style={{ marginLeft: '30px' }}>
    //       <ul className="flex">
    //         <li className="mx-4 active:border-b-2 hover:border-b-2 hover:border-dark-purple cursor-pointer">Home</li>
    //         <li className="mx-4 active:border-b-2 hover:border-b-2 hover:border-dark-purple cursor-pointer">Hiring Feature</li>
    //         <li className="mx-4 active:border-b-2 hover:border-b-2 hover:border-dark-purple cursor-pointer">Product</li>
    //         <li className="mx-4 active:border-b-2 hover:border-b-2 hover:border-dark-purple cursor-pointer">Contact</li>
    //       </ul>
    //     </div>
    //   </div>

    //   <div className='flex justify-around items-center' style={{ width: '30%' }}>
    //     <button className='flex items-center justify-between p-2 rounded-xl text-sm text-dark-purple' style={{ background: '#F9F5FD' }}>
    //       <Image src={bookdemovector} alt="logo" width={15} height={20} className='mr-2' />
    //       Book a demo
    //     </button>
    //     <button className='flex items-center justify-between px-5 py-2 rounded-3xl text-sm bg-light-purple'>
    //       Find Jobs
    //     </button>
    //     <button className='flex items-center justify-between px-5 py-2 rounded-3xl text-sm text-white bg-dark-purple'>
    //       Hire Talent
    //     </button>
    //   </div>
    // </div>
  )
}

export default Navbar