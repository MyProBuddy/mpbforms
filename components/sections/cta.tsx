"use client";

import React from 'react';
import Image from 'next/image';


const Cta = () => {
    return(
        <div className='flex bg-[#5F248E] p-6 items-center justify-center'>
            <Image  src="/docs.png" alt="cta" width={180} height={150} className="pr-8 object-cover hidden md:block"></Image>
            <div className='flex-col '>
               <h1 className='text-white text-lg sm:text-3xl font-bold pb-2 sm:text-left text-center mb-3 '> Make use of our Grant Proposal Template “GPT” to effectively convey your idea. </h1>
               <div className='p-2 rounded-full w-[150px] bg-[#EC3D28] sm:mx-0 mx-auto text-white text-center font-bold text-base sm:text-xl'><a href='#hero'>Order now</a></div>
            </div>
        </div>
    )
}

export default Cta;