import Product from '@/components/product/productItem';
import { productList } from '@/constants';
import React from 'react';


export default async function Products() {
  return (
    <div className='container'>
      <div className='mt-10 md:mt-20'>
        <h1 className='text-xl md:text-2xl font-bold'>Products</h1>
        <div className='grid grid-cols-4 gap-4 p-2 mt-5'>
          {productList.map((product) => {
            return <Product product={product} key={product._id} />;
          })}
        </div>
      </div>
    </div>
  );
}
