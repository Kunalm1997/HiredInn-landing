import React from 'react'

function HomepageFeatures() {

  const data = [
    {heading: 'Generative AI', bg: 'green'},
    {heading: 'Automated Pre Screening', bg: 'lightblue'},
    {heading: 'Interview Scheduling', bg: 'red'},
    {heading: 'Smart Shortlisting', bg: 'maroon'},
    {heading: 'Resume Optimization', bg: 'yellow'},
    {heading: 'Geo-Targeting', bg: 'gray'},
    {heading: 'Real-Time Analytics', bg: 'pink'},
    {heading: 'Adaptive Recommendations', bg: 'purple'},
  ]

  return (
    <div className='px-30 py-20 my-10'>
      <h2 className='text-2xl xl:text-4xl text-center font-semibold'>Struggling to Hire? Automate with Hiredinn</h2>
      <div className='flex justify-center items-center flex-col xl:flex-row flex-wrap mx-16 my-10'>
        {data.map((item, index) => {
          return (
            <div key={index} className='flex items-center m-3 bg-white p-5 rounded-xl'>
              <div className={`w-4 h-4 rounded-full m-2`} style={{backgroundColor: item.bg}} />
              <h3 className='text-lg text-center font-medium'>{item.heading}</h3>
            </div>
        )})}
      </div>
    </div>
  )
}

export default HomepageFeatures