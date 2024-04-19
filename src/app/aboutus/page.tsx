import Image from 'next/image'
import React from 'react';
import aboutUs from '../../img/aboutus.jpg';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import jobseekers from '../../img/jobseekers.jpeg';
import employees from '../../img/employee.jpg';
import { LuExternalLink } from "react-icons/lu";

function About() {
  const words = [
    {
      text: "HiredInn",
      className: 'text-dark-purple font-semibold',
    },
    {
      text: "-",
    },
    {
      text: "Where",
    },
    {
      text: "AI",
    },
    {
      text: "meets",
    },
    {
      text: "Human",
    },
  ];

  return (
    <div className='p-10 xl:p-20 flex flex-col justify-around h-screen'>
      <div className='flex flex-col xl:flex-row justify-evenly items-center'>
        <div className='flex flex-col w-full xl:w-1/2'>
          <div className='flex flex-col'>
            <p className='text-lg text-dark-purple uppercase font-medium'>About us</p>
            <TypewriterEffectSmooth words={words} />
            <p>We&apos;re continuously innovating, planning deeper integrations with hiring systems, and expanding our AI capabilities to enhance user experiences. With HiredInn, hiring becomes faster, fairer, and more efficient, saving upto 40% hiring costs—unlocking potential at every level.</p>
          </div>
          <div className='flex xl:items-center justify-evenly h-full mt-20 items-start'>
            <div className='w-1/2 flex flex-col items-start m-1'>
              <h4 className='text-lg font-semibold'><span className='border-2 border-black rounded-full px-2 mr-2'>1</span>SmartStaffing</h4>
              <p className='text-sm my-2'>Unlock talent with precision and efficiency through AI-powered hiring.</p>
            </div>
            <div className='w-1/2 flex flex-col items-start m-1'>
              <h4 className='text-lg font-semibold'><span className='border-2 border-black rounded-full px-2 mr-2'>2</span>CareerCraft</h4>
              <p className='text-sm my-2'>Fine-Tuning Your Professional Profile with Precision.</p>
            </div>
          </div>
          <button className='text-left bg-dark-purple rounded-lg font-normal tracking-wider w-fit px-5 py-2 text-white mt-5 my-5 xl:my-0 flex items-center text-lg'>Start Hiring <LuExternalLink className='ml-2' /></button>
        </div>
        <div className='flex items-center'>
          <Image src='https://images.pexels.com/photos/4353624/pexels-photo-4353624.jpeg?auto=compress&cs=tinysrgb&w=800' alt='aboutus' width={250} height={250} className='m-3' />
          <div className='flex flex-col'>
            <Image src='https://images.pexels.com/photos/4473504/pexels-photo-4473504.jpeg?auto=compress&cs=tinysrgb&w=800' alt='aboutus' width={200} height={200} className='m-3' />
            <Image src='https://images.pexels.com/photos/7640743/pexels-photo-7640743.jpeg?auto=compress&cs=tinysrgb&w=800' alt='aboutus' width={250} height={250} className='m-3' />
          </div>
        </div>
      </div>
      <div className='flex flex-col mt-[100px]'>
        <p className='text-2xl text-dark-purple font-medium text-center'>Why We Are Best ?</p>
        <p className='text-4xl font-medium text-center mt-10'>A WIN WIN FOR ALL</p>
        <div className='flex flex-col xl:flex-row mt-10 items-center justify-around'>
          <div className='flex items-center flex-col flex-grow'>
            <Image src='https://images.pexels.com/photos/5598292/pexels-photo-5598292.jpeg?auto=compress&cs=tinysrgb&w=800' alt='aboutus1' width={220} height={250} className='xl:m-1 rounded-xl xl:ml-[300px]' />
            <Image src='https://images.pexels.com/photos/5598299/pexels-photo-5598299.jpeg?auto=compress&cs=tinysrgb&w=800' alt='aboutus2' width={300} height={250} className='xl:-m-5 rounded-xl' />
            <Image src='https://images.pexels.com/photos/5598328/pexels-photo-5598328.jpeg?auto=compress&cs=tinysrgb&w=800' alt='aboutus3' width={250} height={250} className='xl:-m-5 rounded-xl xl:ml-[300px]' />
          </div>
          <div className='text-3xl text-center font-normal xl:p-10 p-5 rounded-full bg-dark-purple text-white w-fit h-fit flex-grow drop-shadow-2xl my-5 xl:my-0'>
            <h3>HiredInn</h3>
          </div>
          <div className='flex items-center flex-col flex-grow'>
            <div className='bg-white px-5 py-7 rounded-xl drop-shadow-2xl w-[220px] flex flex-col xl:m-1 xl:mr-[300px]'>
              <p className='text-dark-purple text-2xl font-medium'>Employers</p>
              <p className='pt-2 text-left text-sm'>Reduce hiring time and costs by up to 50%, accessing a broader pool of qualified candidates.</p>
            </div>
            <div className='bg-white px-5 py-7 rounded-xl drop-shadow-2xl w-[300px] flex flex-col xl:-mt-[20px]'>
              <p className='text-dark-purple text-2xl font-medium'>Job Seekers</p>
              <p className='pt-2 text-left text-sm'>Enjoy a transparent process with personalized job recommendations and constructive feedback.</p>
            </div>
            <div className='-m-5 bg-white px-5 py-7 rounded-xl drop-shadow-2xl w-[250px] flex flex-col xl:mr-[300px]'>
              <p className='text-dark-purple text-2xl font-medium'>Communities</p>
              <p className='pt-2 text-left text-sm'>Foster greater economic inclusivity by providing equal opportunities for individuals from diverse backgrounds.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About