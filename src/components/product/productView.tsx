'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { IProduct } from '@/interfaceTypes';
import QuantityCounter from './quantityCounter';

const sizes = ['S', 'M', 'L', 'XL', 'XXl'];

export default function ProductView({ product }: { product: IProduct }) {
  const [productSize, setSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);


  function handleQuantity(qty: number) {
    setQuantity(qty);
  }

  return (
    <div className='container'>
      <div className='mt-10 md:mt-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
          <div className='flex gap-4 md:gap-6'>
            <div>
              <Image src={product.image} width={100} height={100} alt='Image' />
            </div>

            <div className='w-full'>
              <Image src={product.image} width='660' height='700' className='w-full h-full' alt='Image' />
            </div>
          </div>

          <div>
            <div>
              <h1 className='text-2xl py-2'>{product.name}</h1>

              <h3 className='text-base font-extrabold text-gray-500  py-1'>{product.category.name}</h3>
            </div>

            <div className='py-2 my-4'>
              <div className='text-normal font-bold mb-3'>SELECT SIZE</div>
              <div className='flex gap-2'>
                {sizes.map((size) => {
                  return (
                    <Button key={size} className={`hover:bg-black hover:text-white rounded ${productSize === size ? 'bg-black text-white' : ''}`} onClick={() => setSize(size)}>
                      {size}
                    </Button>
                  );
                })}
              </div>
            </div>

            <div className='mb-8'>
              <div className='text-normal font-bold mb-3'>Quantity</div>
              
              <QuantityCounter quantity={quantity} onCounter={handleQuantity} />
            </div>

            <div className='flex items-center mb-5'>
              <Button className='bg-black rounded text-white hover:bg-black'>
                <ShoppingCart />
                <span className='px-4'> Add to Cart</span>
              </Button>
              <div className='text-2xl font-bold px-4'>$ {product.price}</div>
            </div>
          </div>
        </div>

        <div className='mt-10 md:mt-20'>
          <h2 className='text-xl font-bold py-6'>Product Information</h2>
          <hr className='border-solid border-[1.2px]' />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 py-4'>
            <div className='col-span-1 text-base text-gray-700 font-bold'>PRODUCT DETAILS</div>
            <div className='col-span-2 text-gray-700'>{product.description}</div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 py-4'>
            <div className='col-span-1 text-base text-gray-700 font-bold'>PRODUCT CARE</div>
            <div className='col-span-2 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, repellat voluptatibus! Assumenda quod molestias, laborum ad eum pariatur hic sint itaque voluptas doloremque maxime eaque
              reiciendis repudiandae natus quisquam eligendi?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
