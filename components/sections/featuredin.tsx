"use client";

import React from 'react';
import Image from 'next/image';


const Featuredin = () => {
    return (
        <div>
            <div className="text-black py-8">
                <h2 className="text-[#5F248E] text-2xl font-bold text-center pb-4">FEATURED IN</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    <Image width={170} height={120} src="/featuredin/forbes.png" alt="forbes" className="h-[105px] w-[150px] mb-0"/>
                    <Image width={170} height={120} src="/featuredin/yourstory.png" alt="yourstory" className="h-[105px] w-[150px] mb-0"/>
                    <Image width={170} height={120} src="/featuredin/innsurge.png" alt="inc42" className="h-[105px] w-[150px] mb-0"/>
                    <Image width={170} height={120} src="/featuredin/indianachiever.png" alt="techinasia" className="h-[105px] w-[150px] mb-0"/>
                    <Image width={170} height={120} src="/featuredin/passionvista.png" alt="entrepreneur" className="h-[105px] w-[150px] mb-0"/>
                    <Image width={170} height={120} src="/featuredin/internet2.png" alt="techinasia" className="h-[105px] w-[150px] mb-0"/>
                </div>
            </div>
        </div>
    )
}

export default Featuredin;