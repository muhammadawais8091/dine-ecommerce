"use client"

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import E01 from "@/components/Assets/image/E01.png";
import E3 from "@/components/Assets/image/E3.png";
import E4 from "@/components/Assets/image/E4.png";
import E5 from "@/components/Assets/image/E5.png";
import E6 from "@/components/Assets/image/E6.png";
import E7 from "@/components/Assets/image/E7.png";
import E8 from "@/components/Assets/image/E8.png";
import E9 from "@/components/Assets/image/E9.png";
import Feature from "@/components/Assets/image/Feature.webp";
import Vent3 from "@/components/Assets/image/Vent3.webp";

import PropTypes from 'prop-types';
// import E10 from "@/components/Assets/image/E10.png";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProductProps {
  imageUrl: StaticImageData;
  name: string;
  price: number;
}

const ProductComponent: React.FC<ProductProps> = ({ imageUrl, name, price }) => (
  <Link href="#">
    <div className="flex flex-col justify-center align-middle pt-8 pb-8 h-[400px] w-[338px] space-x-4 transition duration-500 hover:scale-125">
      <Image src={imageUrl} alt={name} className="w-[380px] h-[400px]" />
      <p className="flex justify-center font-semibold leading-6 mt-2 text-1.1rem tracking-wide">{name}</p>
      <p className="flex justify-center text-1.2rem font-semibold">{`$${price}`}</p>
    </div>
  </Link>
);

const WeHave = () => {
  const products = [
    { imageUrl: E01, name: 'Cameryn Sash Tie Dress', price: 545 },
    { imageUrl: E3, name: 'Flex Sweatshirt', price: 175 },
    { imageUrl: E4, name: 'Brushed Raglan Sweatshirt', price: 195 },
    { imageUrl: E5, name: 'Brushed Raglan Sweatshirt', price: 195 },
    { imageUrl: E6, name: 'Brushed Raglan Sweatshirt', price: 195 },
    { imageUrl: E7, name: 'Brushed Raglan Sweatshirt', price: 195 },
    { imageUrl: E8, name: 'Brushed Raglan Sweatshirt', price: 195 },
  ];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className='p-[4rem] '>
      <div className='flex flex-col gap-[1rem] mb-[2rem] align-middle'>
        <span className='flex tracking-wide justify-center font-semibold text-12px text-[#0062f5]'>PRODUCTS</span>
        <h2 className='flex  justify-center font-bold text-3xl tracking-wider'>Check What We Have</h2>
      </div>

      <section>
        <div>
          <Slider {...settings} className="">
            {products.map((product, index) => (
              <ProductComponent key={index} {...product} />
            ))}
          </Slider>
        </div>

        <section className='pt-16'>
          <div className='flex flex-col font-extrabold leading-[49px] absolute -bottom-[2500px] tracking-widest pl-[670px] text-4xl'>Unique and <p> Authentic Vintage</p> Designer Jewellery</div>
          <div className=' pl-20 pr-20 bg-[#fbfcff] grid h-[884] w-[220] pt-24'>
            {/* left div */}
            <div className=' grid grid-cols-2 gap-[2rem]'>
              <div className='font-bold leading-[110px] text-[6.875rem] absolute opacity-0.07 z-[1] text-[#ecedef]'>Different from others</div>
              <div className='w-[100%] z-[2]'>
                <h3 className='font-[600] text-[1.125rem] leading-5 tracking-[0.03em] mb-[1rem] h-[426] w-[20]'>Using Good Quality Materials</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className='w-[100%] z-[2]'>
                <h3 className='font-[600] text-[1.125rem] leading-5 tracking-[0.03em] mb-[1rem] h-[426] w-[20]'>100% Handmade Products</h3>
                <p className='block font-[300] leading-[22px] text-[1rem] text-[black] margin-block-start-[1em] margin-block-end-[1em]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className='w-[100%] z-[2]'>
                <h3 className='font-[600] text-[1.125rem] leading-5 tracking-[0.03em] mb-[1rem] h-[426] w-[20]'>Modern Fashion Design</h3>
                <p className='block font-[300] leading-[22px] text-[1rem] text-[#212121] margin-block-start-[1em] margin-block-end-[1em]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <div className='w-[100%] z-[2]'>
                <h3 className='font-[600] text-[1.125rem] leading-5 tracking-[0.03em] mb-[1rem] h-[426] w-[20]'>Discount for Bulk Orders</h3>
                <p className='block font-[300] leading-[22px] text-[1rem] text-[#212121] margin-block-start-[1em] margin-block-end-[1em]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            {/* right div */}
            <div className='flex justify-center align-middle gap-[2.5rem] pt-10'>
              <Image src={Feature} alt='fttr' className='aspect-auto h-[350px] overflow-clip'></Image>
              <div>
                <p className='font-light text-[1rem] text-justify leading-[26px] pt-32'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                <button className='bg-black text-white text-[.875rem]  font-semibold leading-[18px] pt-[10px] pb-[10px] w-[279px] h-[40px]'><Link href={"./products"}>See All Products</Link></button>
              </div>
            </div>
          </div>
        </section>
      </section >

    </div >
  )
}
export default WeHave;