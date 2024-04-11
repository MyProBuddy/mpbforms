"use client";

import React from 'react';


const Cta = () => {
    return(
        <div className='flex bg-[#5F248E] py-8 items-center justify-center'>
            <img src="/docs.png" alt="cta" className="h-[120px] pr-8 object-cover"/>
            <div className='flex-col'>
               <h1 className='text-white text-2xl font-bold pb-2'> Make use of our “Grant Proposal Template” to effectively convey your idea. </h1>
               <div className='p-2 rounded-full w-[120px] bg-[#EC3D28] text-white text-center font-bold text-l'>Order now</div>
            </div>
        </div>
    )
}

export default Cta;