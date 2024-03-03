import React from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export default function NewsletterForm() {
  return (
    <div className='mt-40 relative'>
      <div className='absolute w-full text-center text-6xl md:text-9xl text-gray-300 opacity-30 font-extrabold'>Newsletter</div>
      <div className='flex items-center justify-center m-4 md:m-40 mb-10'>
        <div className=' text-center'>
          <h1 className='text-3xl md:text-4xl font-bold mb-5'>Subscribe Our Newsletter</h1>

          <p className='text-base'>Get the latest information and promo offers directly</p>

          <div className='flex flex-col md:flex-row gap-2 mt-10'>
            <Input type='text' className='rounded py-[20px] px-[30px]' placeholder='Enter Your Email Address' />

            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
