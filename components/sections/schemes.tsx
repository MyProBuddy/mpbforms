"use client";

import Image from "next/image";

import Marquee from "react-fast-marquee";

const Schemes = () => {
    return (
        <div className="text-black bg-[#F47217] py-8">
            <h2 className="text-white text-2xl font-bold text-center pb-4">EXPLORE THE TOP GRANTS & SCHEMES FOR YOUR IDEA</h2>
            <Marquee direction="right">
             <div className="text-center p-6 ">
                <Image src="/schemes/gail.png" className="rounded" alt="abby" width={180} height={80}></Image>
            </div>
            <div className="text-center p-6">
                <Image src="/schemes/nabventures.png" className="rounded" alt="alveofit" width={180} height={80}></Image>
            </div>
            <div className="text-center p-6">
                <Image src="/schemes/nidhiprayas.png" className="rounded" alt="apchemi" width={180} height={80}></Image>
            </div>
            <div className="text-center p-6">
                <Image src="/schemes/niif.png" className="rounded" alt="artfills" width={180} height={80}></Image>
            </div>
            <div className="text-center p-6">
                <Image src="/schemes/seedfundscheme.png" className="rounded" alt="eventgenie" width={180} height={80}></Image>
            </div>
            <div className="text-center p-6">
                <Image src="/schemes/cdc70.png" className="rounded" alt="greenpodlabs" width={180} height={80}></Image>
            </div>
            <div className="text-center p-6">
                <Image src="/schemes/startuptn.png" className="rounded" alt="greenpodlabs" width={180} height={80}></Image>
            </div>
            <div className="text-center p-6">
                <Image src="/schemes/nvcl.png" className="rounded" alt="greenpodlabs" width={180} height={80}></Image>
            </div>
            <div className="text-center p-6">
                <Image src="/schemes/tbd.png" className="rounded" alt="greenpodlabs" width={180} height={80}></Image>
            </div>
            <div className="text-center p-6 ">
                <Image src="/schemes/gail.png" className="rounded" alt="abby" width={180} height={80}></Image>
            </div>
            <div className="text-center p-6">
                <Image src="/schemes/nabventures.png" className="rounded" alt="alveofit" width={180} height={80}></Image>
            </div>
            <div className="text-center p-6">
                <Image src="/schemes/nidhiprayas.png" className="rounded" alt="apchemi" width={180} height={80}></Image>
            </div>
            <div className="text-center p-6">
                <Image src="/schemes/niif.png" className="rounded" alt="artfills" width={180} height={80}></Image>
            </div>
            <div className="text-center p-6">
                <Image src="/schemes/seedfundscheme.png" className="rounded" alt="eventgenie" width={180} height={80}></Image>
            </div>
            <div className="text-center p-6">
                <Image src="/schemes/tbd.png" className="rounded" alt="greenpodlabs" width={180} height={80}></Image>
            </div>
           
             </Marquee>
        </div>

    
    )
}

export default Schemes;