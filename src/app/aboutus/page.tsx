'use client'
import Image from 'next/image'
import React, { useState } from 'react';
import aboutUs from '../../img/aboutus.jpg';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import jobseekers from '../../img/jobseekers.jpeg';
import employees from '../../img/employee.jpg';
import { LuExternalLink } from "react-icons/lu";
import Newsletter from '@/components/newsletter';
import Footer from '@/components/footer';
import tick from './right-arrow_318392.png';
import { IoIosArrowDropright } from "react-icons/io";
import DialogBox from '@/components/dialogBox';

function About() {
  const words = [
    {
      text: "HiredInn",
      className: 'text-dark-purple font-semibold sm:text-4xl text-3xl',
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

  const rules = [
    {heading: 'Revolutionizing Recruitment in Hospitality & Entertainment', desc: 'Discover HiredInn, the advanced AI-driven platform transforming recruitment for the hospitality industry.'},
    {heading: 'The Old Way: Slow and Biased', desc: 'Traditional hiring in hospitality and entertainment is often a prolonged journey bogged down by endless resumes and interviews, draining resources, and perpetuating biases.'},
    {heading: 'The HiredInn Solution: Fast, Fair & Cost-Effective', desc: 'HiredInn harnesses cutting-edge AI to automate resume screening, reducing time spent and diminishing bias.'},
  ]

  const [dialogueOpen, dialogueClose] = useState(false);

  const setOpen = () => {
    dialogueClose(true);
  }

  return (
    <>
      <div className=' flex flex-col justify-around'>
        <div className='pt-10 xl:p-20 flex flex-col xl:flex-row justify-evenly items-center'>
          <div className='flex flex-col w-full xl:w-1/2'>
            <div className='flex flex-col px-7 items-center sm:items-start'>
              <p className='text-xl text-dark-purple uppercase font-medium sm:text-left text-center'>About us</p>
              <TypewriterEffectSmooth words={words} />
              <p className='sm:text-left text-center'>We&apos;re continuously innovating, planning deeper integrations with hiring systems, and expanding our AI capabilities to enhance user experiences. With HiredInn, hiring becomes faster, fairer, and more efficient, saving upto 40% hiring costs unlocking potential at every level.</p>
            </div>
            <div className='flex xl:items-center justify-evenly h-full my-16 mx-5 sm:mx-0 items-start flex-col'>
              <div className='w-full flex items-center justify-evenly m-1 bg-white rounded-2xl drop-shadow-2xl my-4 border-2 cursor-pointer border-light-purple py-3 px-5 sm:px-0'>
                <div className='flex flex-col items-start'>
                  <h4 className='text-dark-purple text-xl sm:text-2xl font-semibold'>Smart Staffing</h4>
                  <p className='text-sm my-2 flex sm:hidden'>Unlock talent with precision and efficiency through AI-powered hiring.</p>
                  <p className='text-sm my-2 hidden sm:flex'>Unlock talent with precision and efficiency <br /> through AI-powered hiring.</p>
                </div>
                <Image src='https://ik.imagekit.io/7guc79cmq/GIF/Animation%20-%201713726191318.gif?updatedAt=1713727087539' alt='smart staffing' width={120} height={200} />
              </div>
              <div className='w-full flex items-center justify-evenly m-1 bg-white rounded-2xl drop-shadow-2xl my-4 border-2 cursor-pointer border-light-purple py-3 px-5 sm:px-0'>
                <Image src='https://ik.imagekit.io/7guc79cmq/GIF/Animation%20-%201713725902939.gif?updatedAt=1713727087594' alt='smart staffing' width={120} height={200} />
                <div className='flex flex-col items-start'>
                  <h4 className='text-dark-purple text-xl sm:text-2xl font-semibold'>Career Craft</h4>
                  <p className='text-sm my-2 flex sm:hidden'>Fine-Tuning Your Professional Profile with Precision.</p>
                  <p className='text-sm my-2 hidden sm:flex'>Fine-Tuning Your Professional Profile with <br/>  Precision.</p>
                </div>
              </div>
            </div>
            {/* <button className='text-left bg-dark-purple rounded-3xl tracking-wider w-fit px-5 py-2 text-white mt-5 my-5 xl:my-0 flex items-center text-lg'>Start Hiring <LuExternalLink className='ml-2' /></button> */}
          </div>
          <div className='flex items-center'>
            <Image src='https://ik.imagekit.io/7guc79cmq/3659193-removebg.png?updatedAt=1713718155760' alt='aboutus' width={600} height={550} className='hidden sm:block ml-0 xl:ml-10' />
            <Image src='https://ik.imagekit.io/7guc79cmq/3659193-removebg.png?updatedAt=1713718155760' alt='aboutus' width={350} height={550} className='ml-0 xl:ml-10 block sm:hidden' />
            {/* <Image src='https://images.pexels.com/photos/4353624/pexels-photo-4353624.jpeg?auto=compress&cs=tinysrgb&w=800' alt='aboutus' width={250} height={250} className='m-3' />
            <div className='flex flex-col'>
              <Image src='https://images.pexels.com/photos/4473504/pexels-photo-4473504.jpeg?auto=compress&cs=tinysrgb&w=800' alt='aboutus' width={200} height={200} className='m-3' />
              <Image src='https://images.pexels.com/photos/7640743/pexels-photo-7640743.jpeg?auto=compress&cs=tinysrgb&w=800' alt='aboutus' width={250} height={250} className='m-3' />
            </div> */}
          </div>
        </div>
        <div className='bg-dark-purple rounded-3xl text-white flex flex-col xl:flex-row py-[100px] xl:w-full items-center justify-evenly'>
          <div className='flex flex-col xl:items-start items-center justify-between'>
            <p className='text-lg text-white uppercase font-medium border-b border-white'>A LONG VISION</p>
            <h2 className='text-2xl xl:text-4xl font-medium mt-5 text-center xl:text-left'>Key Points Which Make HiredInn <br /> Different</h2>
            <div className='flex flex-col mt-10'>
              {rules.map((item, index) => {
                return (
                  <div key={index} className='flex items-start xl:w-[500px] w-[300px] my-3'>
                    <Image src={tick} alt='tick' width={20} height={20} style={{filter: 'invert(1)'}} className='mr-2 mt-2' />
                    <div className='flex flex-col items-start'>
                      <p className='text-xl xl:text-2xl font-semibold'>{item.heading}</p>
                      <p className='text-sm xl:text-md '>{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='flex xl:flex-row'>
            <Image src='https://images.pexels.com/photos/5439433/pexels-photo-5439433.jpeg?auto=compress&cs=tinysrgb&w=800' alt='featureImg' width={300} height={300} className='mx-2 hidden xl:block' />
            <Image src='https://images.pexels.com/photos/5989930/pexels-photo-5989930.jpeg?auto=compress&cs=tinysrgb&w=800' alt='featureImg' height={200} width={200} className='mx-2 hidden xl:block' />
            <Image src='https://images.pexels.com/photos/5439433/pexels-photo-5439433.jpeg?auto=compress&cs=tinysrgb&w=800' alt='featureImg' width={150} height={150} className='mx-2 xl:hidden my-1' />
            <Image src='https://images.pexels.com/photos/5989930/pexels-photo-5989930.jpeg?auto=compress&cs=tinysrgb&w=800' alt='featureImg' height={150} width={150} className='mx-2 xl:hidden my-1' />
          </div>
        </div>
        <div className='mb-0 sm:mb-32 mt-20'>
          <p className='text-2xl text-dark-purple font-medium text-center'>Why We Are Best ?</p>
          <p className='text-4xl font-medium text-center mt-5 mb-10'>A WIN WIN FOR ALL</p>
          <div className='relative flex flex-col items-center'>
            <div className='items-center bg-white border-4 border-dark-purple px-5 py-4 rounded-xl drop-shadow-2xl w-[300px] h-[200px] flex flex-col my-1 sm:absolute top-0 left-[60px]'>
              <Image src='https://ik.imagekit.io/7guc79cmq/GIF/website.gif?updatedAt=1713463046543' alt='gif' width={50} height={50} />
              <p className='text-dark-purple text-2xl text-center font-medium'>Employers</p>
              <p className='pt-2 text-center text-dark-purple text-sm'>Reduce hiring time and costs by up to 50%, accessing a broader pool of qualified candidates.</p>
            </div>
            <div className='bg-dark-purple items-center px-5 py-4 rounded-xl drop-shadow-2xl w-[300px] h-[200px] flex flex-col my-1 sm:absolute top-10 right-[80px]'>
              <Image src='https://ik.imagekit.io/7guc79cmq/GIF/user.gif?updatedAt=1713463046577' alt='gif' width={50} height={50} className='rounded-lg' />
              <p className='text-white text-2xl text-center font-medium mt-2'>Job Seekers</p>
              <p className='pt-2 text-center text-slate-300 text-sm'>Enjoy a transparent process with personalized job recommendations and constructive feedback.</p>
            </div>
          </div>
          <p className='text-2xl sm:text-7xl font-medium text-center p-[20px] sm:p-[200px]'>10x Hiring Process <br/> with <span className='font-semibold text-4xl sm:text-8xl text-gray-900 bg-gradient-to-br from-purple-400 to-purple-800 inline-block text-transparent bg-clip-text'>AI</span> powered</p>
          <div className='relative flex flex-col items-center'>
            <div className='bg-dark-purple items-center px-5 py-4 rounded-xl drop-shadow-2xl w-[300px] h-[200px] flex flex-col my-1 sm:absolute -top-[100px] left-32'>
              <Image src='https://ik.imagekit.io/7guc79cmq/GIF/augmented-reality.gif?updatedAt=1713463046511' alt='gif' width={50} height={50} />
              <p className='text-white text-2xl text-center font-medium mt-2'>Diversity</p>
              <p className='pt-2 text-center text-slate-300 text-sm'>Employers can actively promote diversity, leading to a more innovative and dynamic workforce. </p>
            </div>
            <div className='bg-white items-center border-4 border-dark-purple px-5 py-4 rounded-xl drop-shadow-2xl w-[300px] h-[200px] flex flex-col my-1 sm:absolute -top-[150px] right-44'>
              <Image src='https://ik.imagekit.io/7guc79cmq/GIF/consultation.gif?updatedAt=1713463046639' alt='gif' width={50} height={50} />
              <p className='text-dark-purple text-2xl text-center font-medium'>Communities</p>
              <p className='pt-2 text-center text-dark-purple text-sm'>Foster greater economic inclusivity by providing equal opportunities for individuals from diverse backgrounds.</p>
            </div>
          </div>
        </div>
        {/* <div className='flex flex-col'>
          <p className='text-2xl text-dark-purple font-medium text-center'>Why We Are Best ?</p>
          <p className='text-4xl font-medium text-center mt-10'>A WIN WIN FOR ALL</p>
          <div className='flex flex-col xl:flex-row mt-10 items-center justify-around'>
            <div className='flex items-center flex-col flex-grow'>
              <Image src='https://images.pexels.com/photos/5598292/pexels-photo-5598292.jpeg?auto=compress&cs=tinysrgb&w=800' alt='aboutus1' width={280} height={250} className='xl:m-1 rounded-xl xl:ml-[300px] my-1' />
              <Image src='https://images.pexels.com/photos/5598299/pexels-photo-5598299.jpeg?auto=compress&cs=tinysrgb&w=800' alt='aboutus2' width={280} height={250} className='xl:-m-5 rounded-xl my-1' />
              <Image src='https://images.pexels.com/photos/5598328/pexels-photo-5598328.jpeg?auto=compress&cs=tinysrgb&w=800' alt='aboutus3' width={280} height={250} className='xl:-m-5 rounded-xl xl:ml-[300px] my-1' />
            </div>
            <div className='text-3xl text-center font-normal xl:p-10 p-5 rounded-full bg-dark-purple text-white w-fit h-fit flex-grow drop-shadow-2xl my-5 xl:my-0'>
              <h3>HiredInn</h3>
            </div>
            <div className='flex items-center flex-col flex-grow'>
              <div className='bg-white px-5 py-7 rounded-xl drop-shadow-2xl w-[300px] h-[180px] flex flex-col xl:m-1 xl:mr-[250px] my-1'>
                <p className='text-dark-purple text-2xl font-medium'>Employers</p>
                <p className='pt-2 text-left text-sm'>Reduce hiring time and costs by up to 50%, accessing a broader pool of qualified candidates.</p>
              </div>
              <div className='bg-white px-5 py-7 rounded-xl drop-shadow-2xl w-[300px] h-[180px] flex flex-col xl:-m-2 xl:-mt-[20px] my-1'>
                <p className='text-dark-purple text-2xl font-medium'>Job Seekers</p>
                <p className='pt-2 text-left text-sm'>Enjoy a transparent process with personalized job recommendations and constructive feedback.</p>
              </div>
              <div className='-m-5 bg-white px-5 py-7 rounded-xl drop-shadow-2xl w-[300px] h-[180px] flex flex-col xl:mr-[250px] my-1'>
                <p className='text-dark-purple text-2xl font-medium'>Communities</p>
                <p className='pt-2 text-left text-sm'>Foster greater economic inclusivity by providing equal opportunities for individuals from diverse backgrounds.</p>
              </div>
            </div>
          </div>
        </div> */}
        
        <div className='flex flex-col xl:flex-row items-center xl:justify-evenly justify-center py-20'>
          <div className='flex items-center m-2 bg-white p-5 w-fit xl:w-[500px] h-[200px] rounded-xl'>
            <div className='flex flex-col items-start justify-between h-full'>
              <h2 className='text-xl xl:text-2xl font-semibold'>Hire With Us</h2>
              <p className='text-sm xl:text-md font-normal'>Streamline hiring with Hiredinn. Launching soon. Join waitlist for perks. Stay tuned!</p>
              <>
                <button className='w-fit px-10 py-2 flex items-center bg-dark-purple text-white rounded-3xl' onClick={setOpen}>Join Waitlist <IoIosArrowDropright className='ml-2 text-xl' /></button>
              </>
            </div>
            <Image src='https://ik.imagekit.io/7guc79cmq/4164538.jpg?updatedAt=1713556598656' alt='icon' width={200} height={50} className='hidden xl:block' />
            <Image src='https://ik.imagekit.io/7guc79cmq/4164538.jpg?updatedAt=1713556598656' alt='icon' width={150} height={50} className='xl:hidden' />
          </div>
          <div className='flex items-center m-2 bg-white p-5 w-fit xl:w-[500px] h-[200px] rounded-xl'>
            <div className='flex flex-col items-start justify-between h-full'>
              <h2 className='text-xl xl:text-2xl font-semibold'>Search For Dream Job</h2>
              <p className='text-sm xl:text-md font-normal'>Hospitality careers await. Launch soon. Join waitlist for updates.</p>
              <button className='w-fit px-10 py-2 flex items-center bg-dark-purple text-white rounded-3xl' onClick={setOpen}>Join Waitlist <IoIosArrowDropright className='ml-2 text-xl' /></button>
            </div>
            <Image src='https://ik.imagekit.io/7guc79cmq/194.jpg?updatedAt=1713556570640' alt='icon' width={200} height={50} className='hidden xl:block' />
            <Image src='https://ik.imagekit.io/7guc79cmq/194.jpg?updatedAt=1713556570640' alt='icon' width={150} height={50} className='xl:hidden' />
          </div>
        </div>
        <Newsletter />
        <Footer />
      </div>
       {dialogueOpen && <DialogBox open={dialogueOpen} setOpen={dialogueClose} />}
    </>
  )
}

export default About