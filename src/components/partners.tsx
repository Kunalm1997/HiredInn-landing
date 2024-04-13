import Image from 'next/image'
import React from 'react';
import ss from '../img/Screenshot 2024-02-12 at 8.59 1.png';

function Partners() {
  return (
    <div className='p-10 m-10 flex flex-col items-center'>
      {/* <p className='text-md'>We offers the world’s leading brands premium digital solutions</p>
      <p className='text-6xl font-bold mt-5'>PARTNERS</p> */}
      <Image src={ss} alt='ss' width={1200} height={1000} />
    </div>
  )
}

export default Partners