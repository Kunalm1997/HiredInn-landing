import Image from 'next/image'
import React from 'react';
import firstGif from '../img/Gif/clock.gif';
import secondGif from '../img/Gif/diagram.gif';
import thirdGif from '../img/Gif/shield.gif';
import fourthGif from '../img/Gif/support.gif';

function Choose() {
  const CardDetails = [
    {
      img: firstGif,
      heading: 'Accelerated Recruitment',
      desc: 'HiredInn reduces hiring time and costs by up to 50% through AI automation, streamlining the process from screening to hiring.',
    },
    {
      img: secondGif,
      heading: 'Enhanced Fairness',
      desc: 'By utilizing advanced AI algorithms, HiredInn minimizes biases, ensuring a fair selection process based on precise skill and job requirement analysis.',
    },
    {
      img: thirdGif,
      heading: 'Prediction AI',
      desc: 'Employ AI-driven predictive analytics for strategic hiring and tailor AI models to meet specific organizational criteria, optimizing recruitment outcomes.',
    },
    {
      img: fourthGif,
      heading: 'Cost Efficiency & Innovation',
      desc: 'Continually advancing AI capabilities not only save up to 40% on hiring expenses but also promise a continuously improving and efficient hiring landscape.',
    },
  ]

  return (
    <div className='bg-dark-purple rounded-2xl text-center flex flex-col items-center text-white border-t-2 py-20 leading-loose'>
      <h3 className='text-3xl'>Why Choose Hired Inn</h3>
      <h5 className='text-lg mt-3'>Where to grow your business as a photographer site or social media?</h5>
      <div className='flex flex-wrap justify-evenly items-center w-full mt-10'>
        {CardDetails.map((item, index) =>
          <div className='bg-white text-black rounded-2xl px-5 py-8 m-2 flex flex-col items-center' style={{ width: '300px', height: '250px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }} key={index}>
            <Image src={item.img} alt='logo' width={50} height={50} />
            <h3 className='text-lg mt-3 font-medium'>{item.heading}</h3>
            <h5 className='text-xs mt-3 text-wrap text-[#717171]'>{item.desc}</h5>
          </div>
        )}
      </div>
    </div>
  )
}

export default Choose;