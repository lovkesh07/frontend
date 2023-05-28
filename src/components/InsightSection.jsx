import React from 'react'
import img1 from "../assets/corpoimg.jpg"
import img2 from "../assets/corpoimg2.jpg"

const InsightSection = () => {
  return (
    <div className=' w-full py-5 px-4 md:px-6 lg:px-10 flex flex-col lg:flex-row gap-5 bg-[#E7E4E1]'>
    <div className=' w-full lg:w-1/2 flex flex-col'>
      <p className=' text-2xl text-gray-500 py-3'>insights</p>
      <h1 className='text-4xl py-5'>Take a look at bright insight</h1>
      <img src={img1} className=' w-full lg:w-[700px] py-5'/>
      <h1 className='text-4xl py-3'>kellton launches its Global Custom Experience and Innovation Lab</h1>
    </div>
    <div className=' w-full lg:w-1/2 flex flex-col gap-5'>
        <div className=' flex flex-row'>

        <div>
            <img src={img2}/>
        </div>
        <div className='flex flex-col px-2'>
            <span className=' py-1 text-gray-500'>Blog</span>
            <span className=' py-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero fuga iure, doloribus molestias accusamus nulla aperiam. Amet corporis officiis perferendis cupiditate, temporibus hic maiores provident eos quam ad voluptate quod.</span>
            <span className=' py-1 text-gray-500'>25 May,2023</span>
        </div>
        </div>
        <div className=' flex flex-row'>

        <div>
            <img src={img2}/>
        </div>
        <div className='flex flex-col px-2'>
            <span className=' py-1 text-gray-500'>Blog</span>
            <span className=' py-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero fuga iure, doloribus molestias accusamus nulla aperiam. Amet corporis officiis perferendis cupiditate, temporibus hic maiores provident eos quam ad voluptate quod.</span>
            <span className=' py-1 text-gray-500'>25 May,2023</span>
        </div>
        </div>
        <div className=' flex flex-row'>

        <div>
            <img src={img2}/>
        </div>
        <div className='flex flex-col px-2'>
            <span className=' py-1 text-gray-500'>Blog</span>
            <span className=' py-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero fuga iure, doloribus molestias accusamus nulla aperiam. Amet corporis officiis perferendis cupiditate, temporibus hic maiores provident eos quam ad voluptate quod.</span>
            <span className=' py-1 text-gray-500'>25 May,2023</span>
        </div>
        </div>
        <div className=' flex flex-row'>

        <div>
            <img src={img2}/>
        </div>
        <div className='flex flex-col px-2'>
            <span className=' py-1 text-gray-500'>Blog</span>
            <span className=' py-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero fuga iure, doloribus molestias accusamus nulla aperiam. Amet corporis officiis perferendis cupiditate, temporibus hic maiores provident eos quam ad voluptate quod.</span>
            <span className=' py-1 text-gray-500'>25 May,2023</span>
        </div>
        </div>
    </div>
    </div>
  )
}

export default InsightSection
