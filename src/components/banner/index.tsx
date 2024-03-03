import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

const Banner = () => {
  return (
    <section>
      <div className='container py-[50px]'>
        <div className='flex justify-between'>
          <div className='py-[60px]'>
            <div className='flex flex-col justify-between h-full'>
              <div>
                <div>
                  <span className='bg-blue-100 px-4 py-2 rounded text-blue-700 font-bold'>Sale 70%</span>
                </div>

                <div className='mt-10'>
                  <h1 className='font-semibold text-5xl md:text-6xl'>An Industrial Take on Street wear</h1>
                </div>

                <p className='mt-10 w-80 text-base text-gray-400'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>

                <div className='mt-10'>
                  <Link href='/products' className='inline-flex rounded-0 bg-black text-white px-3 py-3'>
                    <ShoppingCart />

                    <span className='px-3'>Start Shopping</span>
                  </Link>
                </div>
              </div>

              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-10'>
                <Image src='/Featured1.webp' alt='Image' width='0' height='0' sizes='100vw' className='w-full h-auto max-w-[100px]' />
                <Image src='/Featured2.webp' alt='Image' width='0' height='0' sizes='100vw' className='w-full h-auto max-w-[100px]' />
                <Image src='/Featured3.webp' alt='Image' width='0' height='0' sizes='100vw' className='w-full h-auto max-w-[100px]' />
                <Image src='/Featured4.webp' alt='Image' width='0' height='0' sizes='100vw' className='w-full h-auto max-w-[100px]' />
              </div>
            </div>
          </div>

          <div className='hidden md:block'>
            <div className='bg-orange-100 rounded-full p-2'>
              <Image src='/header.webp' alt='Image' width={750} height={750} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner