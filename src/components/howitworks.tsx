'use client'
import React, { useEffect, useState } from 'react';
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import digital from '../img/amico.png';
import action from '../img/cuate.png';
import first from '../img/1.svg';
import second from '../img/2.svg';
import third from '../img/3.svg';
import fourth from '../img/4.svg';

function Howitworks() {
  const content = [
    {
      title: "List Your Business",
      description:
        "Quickly create a profile for your business, highlighting your unique culture and employer brand.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Post a Job",
      description:
        "Specify the types of positions you typically fill, attracting the most relevant candidates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="https://images.pexels.com/photos/671956/pexels-photo-671956.jpeg?auto=compress&cs=tinysrgb&w=800"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Hiring",
      description:
        "Our intelligent system automatically matches applicants to your job criteria, saving you time.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getImageBasedOnScroll = (scrollPosition: number) => {
    if (scrollPosition < 1600) {
      return digital;
    } else if (scrollPosition >= 1600 && scrollPosition < 1800) {
      return action;
    } else if (scrollPosition >= 1800 && scrollPosition < 1900) {
      return digital;
    } else if (scrollPosition >= 1900 && scrollPosition < 2100) {
      return action;
    } else {
      return digital;
    }
  };

  const getBackgroundBasedOnScroll = (scrollPosition: number, action: string) => {
    if (scrollPosition < 1600 && action === 'first') {
      return 'bg-light-purple text-dark-purple transition duration-300';
    } else if (scrollPosition >= 1600 && scrollPosition < 1800 && action === 'second') {
      return 'bg-light-purple text-dark-purple transition duration-300';
    } else if (scrollPosition >= 1800 && scrollPosition < 1900 && action === 'third') {
      return 'bg-light-purple text-dark-purple transition duration-300';
    } else if (scrollPosition >= 1900 && scrollPosition < 2100 && action === 'fourth') {
      return 'bg-light-purple text-dark-purple transition duration-300';
    } else {
      return 'text-[#717171]';
    }
  };

  return (
    <div>
      <div className='flex flex-col items-center p-10'>
        <p className='text-lg font-semibold text-dark-purple'>HOW IT WORKS</p>
        <p className='text-2xl font-semibold'>Struggling to find qualified candidates? We are here to help.</p>
      </div>
      <StickyScroll content={content} />
      <div className='flex flex-wrap items-center justify-around p-10 mt-20'>
        <Image src={getImageBasedOnScroll(scrollPosition)} alt='digital' width={300} height={300} />
        <div className='flex flex-col p-10' style={{ width: '500px' }}>
          <p className='text-lg font-semibold text-dark-purple'>ACTIONABLE INSIGHTS</p>
          {/* <p className='text-2xl font-semibold'>Master your money</p> */}
          <div className='flex flex-col justify-between mt-2'>
            <div className={`flex items-center rounded-lg p-1 ${getBackgroundBasedOnScroll(scrollPosition, 'first')}`}>
              <Image src={first} alt='first' width={30} height={10} className='mr-2' />
              <p className='text-md font-semibold'>Identify Hidden Talent Gems</p>
            </div>
            <div className={`flex items-center rounded-lg p-1 ${getBackgroundBasedOnScroll(scrollPosition, 'second')}`}>
              <Image src={second} alt='second' width={30} height={10} className='mr-2' />
              <p className='text-md font-semibold'>Refine Jobs with AI</p>
            </div>
            <div className={`flex items-center rounded-lg p-1 ${getBackgroundBasedOnScroll(scrollPosition, 'third')}`}>
              <Image src={third} alt='third' width={30} height={10} className='mr-2' />
              <p className='text-md font-semibold'>Optimize Recruitment Efficiently</p>
            </div>
            <div className={`flex items-center rounded-lg p-1 ${getBackgroundBasedOnScroll(scrollPosition, 'fourth')}`}>
              <Image src={fourth} alt='fourth' width={30} height={10} className='mr-2' />
              <p className='text-md font-semibold'>Foster Diverse, Powerful Teams</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Howitworks