import React from 'react'
import celebrate from '../assets/celebrate.gif'
import { AiOutlineMail } from 'react-icons/ai';

const Email = () => {
  const email = localStorage.getItem('email')
  return (
    <>
    <p className='text-center mt-20 font-bold text-4xl mb-28'>AT</p>
    <div className='flex-row text-center justify-center items-center mt-5'>
      <div className='font-bold text-4xl mb-5 text-[#4a154b]'>Verfy Your Email</div>
      <div className='text-lg'>We have sent an Email to </div>
      <p className='font-bold'>{email}</p>
      <div className='mb-10 text-lg '>Click the link inside to get started</div>
      <a className="px-20 py-2 ml-4 bg-gray-300 font-bold hover:bg-gray-200 rounded-lg" href="https://mail.google.com"><AiOutlineMail className=' inline-block text-blue-600 mr-5 text-2xl'/> Open Gmail</a>
      <p className='mt-7 text-md font-bold text-[#4a154b] hover:text-gray-600'>Resend Email</p>
    </div>
    </>
    
  )
}

export default Email