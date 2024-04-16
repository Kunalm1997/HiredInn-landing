'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import laptopBanner from '../img/222.svg';
import DemoDialogBox from './demoDialogBox';

function DemoForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [link, setLink] = useState('');
  const [dialogueOpen, dialogueClose] = useState(false);

  const setOpen = () => {
    dialogueClose(true);
  }

  const handleBookDemoClick = async () => {
    const data = { name, email, number, companyName, link };
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data && data.data.id) {
          // alert(`Thank you for your interest ${name}! We will get back to you soon!`);
          setOpen();
          setName("");
          setEmail("");
          setNumber("");
          setCompanyName("");
          setLink("");
        } else {
            alert("Apologies! Please try again.");
        }
      })
      .catch((err) => {
          alert("Ooops! unfortunately some error has occurred.");
      });
  return true;
  };

  return (
    <div className='flex flex-col sm:flex-row items-center justify-evenly h-screen bg-gradient-to-br from-purple-400 to-purple-800 text-white overflow-auto py-12'>
      <div className='flex flex-col items-center justify-evenly w-1/2 h-screen'>
        <h3 className='text-3xl font-semibold'>Book A Demo</h3>
        <h5 className='sm:text-2xl font-normal text-center'>Streamline your hospitality hiring with our AI-driven platform <br /><span className='sm:text-xl'> Book a demo today and transform your recruitment process!</span></h5>
        <Image src={laptopBanner} alt='demo' width={900} height={500} className='my-5 sm:mt-0' />
      </div>
      <div className='rounded-3xl flex flex-col items-center bg-light-purple sm:w-1/3' style={{padding: '50px', margin: '20px'}}>
        <div className='flex flex-col items-start justify-start m-3 text-black'>
          <h5 className='mb-1'>Full Name</h5>
          <input type="text" required placeholder='enter your name' className='sm:w-96 rounded-lg py-2 px-6 border-2 border-dark-purple text-sm' style={{outline: 'none'}} value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='flex flex-col items-start justify-start m-3 text-black'>
          <h5 className='mb-1'>Enter your email</h5>
          <input type="email" required autoComplete="email" placeholder='enter your email address' className='sm:w-96 rounded-lg py-2 px-6 border-2 border-dark-purple text-sm' style={{outline: 'none'}} value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='flex flex-col items-start justify-start m-3 text-black'>
          <h5 className='mb-1'>Number</h5>
          <input type="text" required placeholder='enter your number'  className='sm:w-96 rounded-lg py-2 px-6 border-2 border-dark-purple text-sm' style={{outline: 'none'}} value={number} onChange={(e) => setNumber(e.target.value)} />
        </div>
        <div className='flex flex-col items-start justify-start m-3 text-black'>
          <h5 className='mb-1'>Company Name</h5>
          <input type="text" required placeholder='enter your company name'  className='sm:w-96 rounded-lg py-2 px-6 border-2 border-dark-purple text-sm' style={{outline: 'none'}} value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </div>
        <div className='flex flex-col items-start justify-start m-3 text-black'>
          <h5 className='mb-1'>Website / Zomato link</h5>
          <input type="text" required placeholder='enter the link'  className='sm:w-96 rounded-lg py-2 px-6 border-2 border-dark-purple text-sm' style={{outline: 'none'}} value={link} onChange={(e) => setLink(e.target.value)} />
        </div>
        <button 
          className={`bg-dark-purple text-white rounded-lg py-2 px-6 mt-5 ${name === '' || email === '' || number === '' || companyName === '' || link === '' ? 'opacity-50 cursor-not-allowed' : ''}`} 
          disabled={name === '' || email === '' || number === '' || companyName === '' || link === ''}
          onClick={handleBookDemoClick}
        >
          Book a Demo
        </button>
      </div>
      {dialogueOpen && <DemoDialogBox open={dialogueOpen} setOpen={dialogueClose} />}
      </div>
  )
}

export default DemoForm;