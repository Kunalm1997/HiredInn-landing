import React from 'react';
import { MacbookScroll } from "../components/ui/macbook-scroll";
import Link from 'next/link';
import { IconBadge } from '@tabler/icons-react';
import free from '../img/free.png';
import dashboardImage from '../img/Screenshot 2024-04-13 at 5.28.48 PM.png';

function TryFree() {
  return (
    <div className='bg-white flex items-center justify-around'>
      {/* <div>
        <p className='text-3xl'>Try HiredInn free for <span className='text-dark-purple font-semibold'>14 days!</span></p>
        <p className='text-md'>A lifetime skips above whatever books software beams opposite the jest</p>
      </div> */}
      <div className="overflow-hidden w-full">
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
      </div>
    </div>
  )
}

export default TryFree