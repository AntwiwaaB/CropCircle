import React from 'react';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Tomato',
    price: '$33.33',
    rating: 4.5,
    imageUrl: '../assets/images/tomato.png',
  },
  {
    id: 2,
    name: 'Pepper',
    price: '$33.33',
    rating: 4.7,
    imageUrl: '../assets/images/pepper.png',
  },
  {
    id: 3,
    name: 'Cucumber',
    price: '$25.00',
    rating: 4.8,
    imageUrl: '../assets/images/cucumber.png',
  },
  {
    id: 4,
    name: 'Carrot',
    price: '$20.00',
    rating: 4.6,
    imageUrl: '../assets/images/carrot.png',
  },
  {
    id: 5,
    name: 'Lettuce',
    price: '$15.00',
    rating: 4.9,
    imageUrl: '../assets/images/lettuce.png',
  },
];

const ProductList = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-full max-w-[1679px] h-auto relative z-[303] mt-[24px]'>
        <div className='flex w-full h-full gap-[26px] justify-center items-center flex-wrap'>
          {products.map((product) => (
            <div key={product.id} className='w-[246px] h-[297px] relative'>
              <div className='w-full h-full bg-[#fff] rounded-[8px] border border-[#fff] relative'>
                <div
                  className='w-full h-[168px] bg-cover bg-no-repeat rounded-t-[8px]'
                  style={{ backgroundImage: `url(${product.imageUrl})` }}
                />
                <span className="flex h-[20.842px] justify-start items-center font-['Montserrat'] text-[16px] font-semibold leading-[19.504px] text-[#000] absolute top-[180px] left-[10px]">
                  {product.name}
                </span>
                <span className="flex h-[15.632px] justify-start items-center font-['Montserrat'] text-[12px] font-light leading-[14.628px] text-[#000] absolute top-[205px] left-[10px]">
                  {product.price}
                </span>
                <div className='absolute bottom-[10px] left-[10px] flex items-center'>
                  <span className='text-[8px] font-light text-[#000]'>{product.rating}</span>
                  <img src="../assets/images/star.png" alt="star" className='w-[12px] h-[12px] ml-[2px]' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;