import React from 'react';
import { MacbookScroll } from "../components/ui/macbook-scroll";
import Link from 'next/link';
import { IconBadge } from '@tabler/icons-react';
import free from '../img/free.png';
import dashboardImage from '../img/Screenshot 2024-04-13 at 5.28.48 PM.png';
import Image from 'next/image';
import { ContainerScroll } from './ui/container-scroll-animation';

function TryFree() {
  return (
    <div className='bg-white flex items-center justify-around' id='product'>
      {/* <div>
        <p className='text-3xl'>Try HiredInn free for <span className='text-dark-purple font-semibold'>14 days!</span></p>
        <p className='text-md'>A lifetime skips above whatever books software beams opposite the jest</p>
      </div> */}
      {/* <div className="overflow-hidden w-full">
        <MacbookScroll
          title={
            <span>
              Try HiredInn!
            </span>
          }
          // badge={
          //   <Link href="https://peerlist.io/manuarora">
          //     <IconBadge className="h-10 w-10 transform -rotate-12" />
          //   </Link>
          // }
          src='https://ik.imagekit.io/7guc79cmq/Screenshot%202024-04-13%20at%205.28.48%E2%80%AFPM.png?updatedAt=1713010014162'
          showGradient={false}
        />
      </div> */}
      <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black ">
              Try HiredInn <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Free for 14 days
              </span>
            </h1>
          </>
        }
      >
        <Image
          src='https://ik.imagekit.io/7guc79cmq/Screenshot%202024-04-16%20at%202.43.41%E2%80%AFPM.png?updatedAt=1713258894725'
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
    </div>
  )
}

export default TryFree