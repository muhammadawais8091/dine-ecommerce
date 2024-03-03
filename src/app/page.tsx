import Banner from "@/components/banner";
import NewsletterForm from "@/components/newsLetter";
import ProductItem from "@/components/product/productItem";
import PaidItems from "@/components/products/paidItems";
import { productList } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Banner />

      <PaidItems />

      <div className='mt-20 container'>
        <div className='text-center font-bold'>
          <h6 className='text-[36px] text-blue-600'>PRODUCTS</h6>

          <h2 className='text-3xl mt-5'>Check What We Have</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-10'>
          {productList.map((product) => {
            return <ProductItem product={product} key={product._id} />;
          })}
        </div>

        <div className='mt-20'>
          <div className='flex justify-end'>
            <h1 className='text-3xl md:text-5xl font-bold w-full md:w-5/12'>Unique and Authentic Vintage Designer Jeweller</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-5 '>
            <div className='grid grid-cols-2 gap-4 relative '>
              <div className='absolute text-6xl md:text-9xl text-gray-200 opacity-60'>Different from others</div>
              <div>
                <div className='pb-5 md:pb-12'>
                  <div className='font-bold text-lg pb-5 '>Using Good Quality Materials</div>
                  <p className='text-base'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>

                <div>
                  <div className='font-bold text-lg pb-5 '>Using Good Quality Materials</div>
                  <p className='text-base'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div>
                <div className='pb-5 md:pb-12'>
                  <div className='font-bold text-lg pb-5 '>Using Good Quality Materials</div>
                  <p className='text-base'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>

                <div>
                  <div className='font-bold text-lg pb-5 '>Using Good Quality Materials</div>
                  <p className='text-base'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <Image src='/feature.webp' alt='Image' width={284} height='0' className='w-full h-auto' />
              </div>
              <div>
                <p>
                  This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber,
                  undyed and 100% traceable.
                </p>
                <Link href='/products' className='inline-flex rounded bg-black text-white px-3 py-3 mt-5 md:mt-8'>
                  <span className='px-3'>See All Products</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section>
          <NewsletterForm />
        </section>
      </div>
    </>
  );
}
