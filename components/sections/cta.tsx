"use client";

import React from 'react';
import Image from 'next/image';


const Cta = () => {
    return(
        <div className='flex bg-[#5F248E] py-8 items-center justify-center'>
            <Image  src="/docs.png" alt="cta" width={180} height={150} className="pr-8 object-cover"></Image>
            <div className='flex-col'>
               <h1 className='text-white text-3xl font-bold pb-2'> Make use of our “Grant Proposal Template” to effectively convey your idea. </h1>
               <div className='p-2 rounded-full w-[150px] bg-[#EC3D28] text-white text-center font-bold text-xl'>Order now</div>
            </div>
        </div>
    )
}

export default Cta;