import Image from 'next/image';
import React from 'react';

export default function Newsletter() {
  return (
		<section className="relative px-[24px] xl:px-[50px] font-personal h-full pb-[100px]">
      <div className='shadow-[0px_26px_47px_-7px_rgba(0,0,0,0.45)] xl:flex h-[500px] mt-50px flex flex-col sm:flex-row items-center justify-evenly bg-dark-purple w-full px-[25px] rounded-3xl'>
        <div className="flex flex-col items-start h-full justify-evenly xl:w-1/2">
          <div className="flex flex-col items-start">
            <h2 className="text-4xl xl:text-6xl text-white -ml-1">Our Newsletter</h2>
            <p className="text-lg sm:text-xl text-white mt-10">
              Stay up-to-date with our latest offers, events, and insider tips. Sign up for our newsletter and unlock exclusive deals straight to your inbox!
            </p>
          </div>
          <div className='bg-white w-full h-16 border-none rounded-2xl flex items-center justify-between px-5 py-2'>
            <input type="text" className='w-1/2 outline-none bg-transparent' placeholder='your email address' />
            <button className='bg-light-purple text-black font-medium px-5 py-2 rounded-2xl'>Subscribe</button>
          </div>
        </div>
        <Image src="https://ik.imagekit.io/7guc79cmq/Group%20427319590.png?updatedAt=1713519351553" alt="mobile" width={400} height={400} className='hidden xl:block' />
        <Image src="https://ik.imagekit.io/7guc79cmq/Group%20427319590.png?updatedAt=1713519351553" alt="mobile" width={120} height={120} className='absolute bottom-[35px] xl:hidden' />
      </div>
		</section>
  );
}
