'use client'
import React, { useEffect, useState } from 'react';
import BannerImage from '../img/Group 427319579.png';
import Image from 'next/image';
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

function Banner() {
  const words = [
    {
      text: "Staff",
    },
    {
      text: "up",
    },
    {
      text: "seamlessly",
    },
    {
      text: "with",
    },
    {
      text: "HiredInn",
      className: 'text-dark-purple font-semibold',
    },
  ];

  const [index, setIndex] = useState(0);
  const phrases = ["Hotels", "Restaurants", "Resorts", "Theaters", "Caterers"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col justify-center items-center mx-20 mt-20 px-5 pt-5 leading-normal text-center'>
      <h1 className='text-2xl md:text-4xl'>Tired of the same old hiring platforms?</h1>
      <TypewriterEffectSmooth words={words} />
      <h2 className='md:text-xl text-[#717171]'>Introducing the first AI-powered hiring solution for <span className='text-dark-purple font-semibold transition-all'>{phrases[index]}</span></h2>
      <button className='flex items-center justify-between px-5 py-2 rounded-3xl lg:text-lg text-white mt-5 bg-dark-purple'>
        Book a Demo
      </button>
      <Image src={BannerImage} alt='banner_image' width={800} height={300} className='mt-20' />
    </div>
  )
}

export default Banner