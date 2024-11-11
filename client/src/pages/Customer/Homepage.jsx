// Homepage.jsx
import React from 'react';
import './index.css';
import ProductList from './ProductList';

export default function Homepage() {
  return (
    <div className='main-container w-[1728px] h-[2352px] bg-[#f5f5f5] relative overflow-hidden mx-auto my-0'>
      <div className='flex w-[1697px] h-[64px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] justify-between items-center flex-nowrap bg-[#f2eded] rounded-[16px] relative overflow-hidden z-[334] mt-[8px] mr-0 mb-0 ml-[17px]'>
        <span className="flex w-[296.405px] h-[32px] justify-start items-start shrink-0 basis-auto font-['Poppins'] text-[36px] font-semibold leading-[30px] text-[#028f02] relative text-left whitespace-nowrap z-[335]">
          CropCircle
        </span>
        <div className='flex w-[885px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] relative overflow-hidden z-[336]'>
          <input className='w-[885px] h-[48px] shrink-0 bg-transparent border-none absolute top-0 left-0 z-[340]' />
          <div className='w-[24px] h-[24px] shrink-0 relative overflow-hidden z-[337]'>
            <div className='w-[19px] h-[19px] bg-[url(../assets/images/b38c4029-428d-4eff-9b5a-7e5b5ffa5362.png)] bg-[length:100%_100%] bg-no-repeat relative z-[338] mt-[2.5px] mr-0 mb-0 ml-[2.5px]' />
          </div>
          <span className="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#111111] relative text-left whitespace-nowrap z-[339]">
            Search for product, customer, etc...
          </span>
        </div>
        <div className='flex w-[267px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[341]'>
          {/* User Profile Section */}
          <div className='flex w-[32px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[16px] border-solid border border-[rgba(17,17,17,0.25)] relative z-[342]'>
            <div className='w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[343]'>
              <div className='w-[13px] h-[14.337px] bg-[url(../assets/images/bcf3d0b7-315c-461d-b83f-5dbae1473333.png)] bg-[length:100%_100%] bg-no-repeat relative z-[344] mt-[0.83px] mr-0 mb-0 ml-[1.5px]' />
            </div>
          </div>
          <div className='w-[24px] h-[24px] shrink-0 relative z-[345]'>
            <div className='w-[24px] h-[24px] absolute top-0 left-0 z-[346]'>
              <div className='w-full h-full bg-[url(../assets/images/09f28bb4-ca92-453a-9d5f-3c0c43ec10d5.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 z-[347]' />
            </div>
          </div>
          <div className='flex w-[138px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[348]'>
            <div className='w-[48px] h-[48px] shrink-0 bg-[url(../assets/images/6c674216-e124-4b8b-b548-47c88f87e256.png)] bg-cover bg-no-repeat rounded
                        <div className='w-[48px] h-[48px] shrink-0 bg-[url(../assets/images/6c674216-e124-4b8b-b548-47c88f87e256.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[349]' />
            <div className='flex w-[82px] flex-col gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[350]'>
              <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-semibold leading-[17px] text-[#000] relative text-left whitespace-nowrap z-[351]">
                Bernice
              </span>
              <span className="flex w-[82px] h-[15px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[12px] font-normal leading-[14.88px] text-[#000] relative text-left whitespace-nowrap z-[352]">
                welcome back
              </span>
            </div>
          </div>
          <div className='w-[24px] h-[24px] shrink-0 relative overflow-hidden z-[353]'>
            <div className='w-[17px] h-[3px] bg-[url(../assets/images/6b6cd73a-d2cc-4e3d-9d07-6a7d23cc7c7e.png)] bg-[length:100%_100%] bg-no-repeat relative z-[354] mt-[10.5px] mr-0 mb-0 ml-[3.5px]' />
          </div>
        </div>
      </div>

      {/* Promotional Section */}
      <div className='w-[1602px] h-[384px] relative z-[314] mt-[80px] mr-0 mb-0 ml-[64px]'>
        <div className='w-[1069.5px] h-[384px] bg-[url(../assets/images/83e40e3b-97c9-4c0d-a6f3-bb1d3140ff01.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[309]'>
          <div className='w-[586px] h-[384px] bg-[url(../assets/images/8c7e104fc23269e2e029593c722fb0b2048abe8f.png)] bg-cover bg-no-repeat rounded-[10px] absolute top-0 left-[460px] z-[307]' />
          <span className="flex w-[523px] h-[185px] justify-start items-start font-['Montserrat'] text-[44px] font-bold leading-[53.636px] text-[#000] absolute top-[95px] left-[108px] text-left z-[310]">
            Get Up to 50% off
            <br />
            for any farm produce
          </span>
          <button className='flex w-[172px] h-[48px] items-start flex-nowrap rounded-[8px] border-none absolute top-[292px] left-[108px] z-[311] pointer'>
            <div className='flex pt-[12px] pr-[20px] pb-[12px] pl-[20px] gap-[8px] justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[#028f02] rounded-[8px] border-solid border border-[#7e56d8] relative overflow-hidden shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] z-[312]'>
              <span className="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-medium leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[313]">
                Shop Now
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Product List Section */}
      <ProductList />
    </div>
  );
}