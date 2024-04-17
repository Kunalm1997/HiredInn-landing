import Image from 'next/image'
import React from 'react';
import aboutUs from '../../img/aboutus.jpg';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import jobseekers from '../../img/jobseekers.jpeg';
import employees from '../../img/employee.jpg';

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
    <div className='p-20 flex flex-col justify-around h-screen'>
      <div className='flex'>
        <Image src={aboutUs} alt='aboutus' style={{height: '400px', width: '1000px'}} className='mt-10' />
        <div className='relative'>
          <h1 className='text-7xl font-bold tracking-widest absolute -start-20 top-0'>ABOUT US</h1>
          <div className='p-10 mt-10'>
            <TypewriterEffectSmooth words={words} />
            {/* <h3 className='text-3xl mt-5 font-normal'>HiredInn - Where AI meets Human</h3> */}
            <div className='mt-10'>
              <div>
                <p className='text-dark-purple text-xl mt-10 font-medium'>Revolutionizing Recruitment in Hospitality & Entertainment</p>
                <p className='pl-2 pt-2'>Discover HiredInn, the advanced AI-driven platform transforming recruitment for the hospitality industry, theaters, and hotels. Our commitment? A smarter, quicker, and fairer hiring process.</p>
              </div>
              <div>
                <p className='text-dark-purple text-xl mt-10 font-medium'>The Old Way: Slow and Biased</p>
                <p className='pl-2 pt-2'>Traditional hiring in hospitality and entertainment is often a prolonged journey bogged down by endless resumes and interviews, draining resources, and perpetuating biases.</p>
              </div>
              <div>
                <p className='text-dark-purple text-xl mt-10 font-medium'>The HiredInn Solution: Fast, Fair & Cost-Effective</p>
                <p className='pl-2 pt-2'>HiredInn harnesses cutting-edge AI to automate resume screening, reducing time spent and diminishing bias. Our algorithms analyze candidates skills and job requirements precisely, ensuring the perfect match while predictive analytics forecast hiring needs for strategic planning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-between mt-10'>
        <h2 className='font-semibold text-4xl text-gray-900 bg-gradient-to-br from-purple-400 to-purple-800 inline-block text-transparent bg-clip-text'>A WIN FOR ALL</h2>
        <div className='flex flex-col mt-10 mr-10 items-center justify-evenly'>
          <div className='flex items-center flex-1/2 my-10'>
            <div className='flex flex-col items-start justify-evenly m-16'>
              <p className='text-dark-purple text-3xl mt-4 font-medium'>Employers</p>
              <p className='pt-2'>Reduce hiring time and costs by up to 50%, <br /> accessing a broader pool of qualified candidates.</p>
            </div>
            <Image src={employees} alt='employee' width={300} className='drop-shadow-2xl' />
          </div>
          <div className='flex items-center flex-1/2 my-10'>
          <Image src={jobseekers} alt='jobseekers' width={300} className='drop-shadow-2xl' />
            <div className='flex flex-col items-end justify-evenly m-16'>
              <p className='text-dark-purple text-3xl mt-4 font-medium'>Job Seekers</p>
              <p className='pt-2 text-right'>Enjoy a transparent process with personalized job<br /> recommendations and constructive feedback.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center mt-16 py-10'>
        <p className='font-semibold text-5xl text-gray-900 bg-gradient-to-br from-purple-400 to-purple-800 inline-block text-transparent bg-clip-text'>Vision for the Future</p>
        <p className='text-xl text-gray-900 font-semibold px-36 text-center'>We&apos;re continuously innovating, planning deeper integrations with hiring systems, and expanding our AI capabilities to enhance user experiences. With HiredInn, hiring becomes faster, fairer, and more efficient, saving upto <span className='text-4xl'>40%</span> hiring costs—unlocking potential at every level.<br />
        </p>
        <p className='text-xl font-semibold mt-5'>Join HiredInn - Embrace the Future of Hiring</p>
      </div>
    </div>
  )
}

export default About