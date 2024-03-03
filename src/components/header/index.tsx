import Image from 'next/image'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import React from 'react'
import { Search, ShoppingCart } from 'lucide-react'

const Header = () => {
  return (
    <header>
      <nav>
        <div className='container py-[20px]'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <Link href='/'>
                <Image src='/dine-market.webp' alt='Dine Market Logo' width={150} height={50} className='app-logo' />
              </Link>

              <div className='flex items-center ml-[130px]'>
                <div className='flex items-center gap-[40px] text-base font-normal'>
                  <Link href='/products'> Male </Link>
                  <Link href='/products'> Female </Link>
                  <Link href='/products'> Kids </Link>
                  <Link href='/products'> All Products </Link>

                  <div className='relative'>
                    <Search className='absolute left-[10px] top-[10px]' width={20} />

                    <Input type='text' className='min-w-[300px] px-[35px] min-h-[45px]' placeholder=' What are you looking for?' />
                  </div>
                </div>
              </div>
            </div>

            <div className='pt-0'>
              <Link href='/cart'>
                <div className='bg-gray-200 p-2 md:p-3 rounded-full relative'>

                  <span className='rounded-full px-1 bg-red-500 absolute top-0 right-0 text-xs text-white font-bold'>3</span>
                  <ShoppingCart />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header