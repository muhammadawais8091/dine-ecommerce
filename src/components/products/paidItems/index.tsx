import Image from 'next/image'
import React from 'react'

const PaidItems = () => {
  return (
    <div className='container py-20'>
      <div className='text-center font-bold'>
        <div className='text-sm text-blue-600'>PROMOTIONS</div>
        <h2 className='text-3xl mt-5'>Our Promotions Events</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
        <div>
          <div className='flex justify-between bg-gray-200 mb-5'>
            <div className='flex items-center pl-2 md:pl-8'>
              <div>
                <h2 className='font-semibold text-xl md:text-2xl'>GET UP TO 60%</h2>
                <p className='text-lg'>For the summer season</p>
              </div>
            </div>
            <div>
              <Image src='/event1.webp' alt='Image' width={260} height={200} className='h-auto' />
            </div>
          </div>
          <div className='flex justify-between bg-gray-800'>
            <div className='flex items-center pl-2 md:pl-8 text-white'>
              <div>
                <h2 className='font-semibold text-2xl'>GET UP TO 60%</h2>
                <p className='text-lg'>For the summer season</p>
              </div>
            </div>
            <div>
              <Image src='/event1.webp' alt='Image' width={260} height={200} className='h-auto' />
            </div>
          </div>
        </div>

        <div className='flex gap-4'>
          <Image src='/event2.webp' alt='Image' width={200} height={0} className='w-full h-auto bg-orange-100' />
          <Image src='/event3.webp' alt='Image' width={200} height={0} className='w-full h-auto bg-gray-200' />
        </div>
      </div>
    </div>
  )
}

export default PaidItems