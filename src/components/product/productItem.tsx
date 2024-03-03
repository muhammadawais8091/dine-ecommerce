'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IProduct } from '@/interfaceTypes';


export default function Product({ product }: { product: IProduct }) {
  return (
    <Link href={`product/${product.slug.current}`}>
      <div className=''>
        <Image
          src={product.image}
          alt="Image"
          width={720}
          height={394}
          className="w-full"
          loader={({ src }) => `${src}`}
          unoptimized
        />

        <div>
          <h3 className='font-bold text-base py-1'>{product.name}</h3>
        </div>

        <div>
          <h3 className='font-bold text-base'>${product.price}</h3>
        </div>
      </div>
    </Link>
  );
}
