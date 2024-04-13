import React from 'react'

function DemoForm() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-400 to-purple-800 text-white'>
      <h3 className='text-3xl font-semibold' style={{marginBottom: '20px'}}>Book A Demo</h3>
      <h5 className='text-xl font-normal text-center'>Streamline your hospitality hiring with our AI-driven platform <br /><span className='text-lg'> Book a demo today and transform your recruitment process!</span></h5>
      <div className='rounded-3xl flex flex-col items-center bg-light-purple' style={{padding: '50px 100px', marginTop: '20px'}}>
        <div className='flex flex-col items-start justify-start m-3'>
          <h5 className='text-black mb-1'>Full Name</h5>
          <input type="text" placeholder='enter your name' className='rounded-lg py-2 px-6 border-2 border-dark-purple text-sm' style={{outline: 'none'}} />
        </div>
        <div className='flex flex-col items-start justify-start m-3'>
          <h5 className='text-black mb-1'>Enter your email</h5>
          <input type="email" placeholder='enter your email address'  className='rounded-lg py-2 px-6 border-2 border-dark-purple text-sm' style={{outline: 'none'}} />
        </div>
        <div className='flex flex-col items-start justify-start m-3'>
          <h5 className='text-black mb-1'>Number</h5>
          <input type="text" placeholder='enter your number'  className='rounded-lg py-2 px-6 border-2 border-dark-purple text-sm' style={{outline: 'none'}} />
        </div>
        <div className='flex flex-col items-start justify-start m-3'>
          <h5 className='text-black mb-1'>Company Name</h5>
          <input type="text" placeholder='enter your name'  className='rounded-lg py-2 px-6 border-2 border-dark-purple text-sm' style={{outline: 'none'}} />
        </div>
        <div className='flex flex-col items-start justify-start m-3'>
          <h5 className='text-black mb-1'>Website / Zomato link</h5>
          <input type="text" placeholder='enter your name'  className='rounded-lg py-2 px-6 border-2 border-dark-purple text-sm' style={{outline: 'none'}} />
        </div>
        <button className='bg-dark-purple text-white rounded-lg py-2 px-6 mt-5'>Submit</button>
      </div>

      </div>
  )
}

export default DemoForm;