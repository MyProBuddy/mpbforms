"use client";

import exp from 'constants';
import React from 'react';
import Image from 'next/image';


const Partners = () => {
    return (
        <div>
            <div className='flex justify-center items-center py-8 bg-[#f6f6f6] border-black border-b-2'>
                <h1 className='text-black text-3xl font-bold pr-10'>ECOSYSTEM PARTNERS : </h1>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    <Image width={264} height={100} src='/partners/rfd.png' alt='partner1' className='h-[100px] w-[264px] rounded mb-0'/>
                    <Image width={264} height={100} src='/partners/ipr.png' alt='partner2' className='h-[100px] w-[264px] rounded mb-0'/>
                    <Image width={264} height={100} src='/partners/rf.png' alt='partner3' className='h-[100px] w-[264px] rounded mb-0'/>
                    <Image width={264} height={100} src='/partners/sf.png' alt='partner4' className='h-[100px] w-[264px] rounded mb-0'/>
                </div>
            </div>
        </div>
    )
}

export default Partners;