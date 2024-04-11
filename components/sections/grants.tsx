"use client";

import Image from "next/image";

import Marquee from "react-fast-marquee";

const Grants = () => {
    return (
        <div className="text-black py-8">
             <h2 className="text-[#5F248E] text-2xl font-bold text-center pb-4">EXPLORE THE TOP GRANTS & SCHEMES FOR YOUR IDEA</h2>
            <Marquee>
             <div className="text-center p-6">
                <Image src="/grants/abby.png" alt="abby" width={180} height={80}></Image>
                <span>ABBY</span><br></br>
                <span>Bengaluru</span> 
            </div>
            <div className="text-center p-6">
                <Image src="/grants/alveofit.png" alt="alveofit" width={180} height={80}></Image>
                <span>ALVEOFIT</span><br></br>
                <span>Pune</span> 
            </div>
            <div className="text-center p-6">
                <Image src="/grants/apchemi.png" alt="apchemi" width={180} height={80}></Image>
                <span>APCHEMI</span><br></br>
                <span>Mumbai</span> 
            </div>
            <div className="text-center p-6">
                <Image src="/grants/artfills.png" alt="artfills" width={180} height={80}></Image>
                <span>ARTFILLS</span><br></br>
                <span>Nashik</span> 
            </div>
            <div className="text-center p-6">
                <Image src="/grants/eventgenie.png" alt="eventgenie" width={180} height={80}></Image>
                <span>EVENT GENIE</span><br></br>
                <span>Mumbai</span> 
            </div>
            <div className="text-center p-6">
                <Image src="/grants/greenpodlabs.png" alt="greenpodlabs" width={180} height={80}></Image>
                <span>GREENPOD LABS</span><br></br>
                <span>Bengaluru</span> 
            </div>
            <div className="text-center p-6">
                <Image src="/grants/Nauticalwings.png" alt="Nauticalwings" width={180} height={80}></Image>
                <span>NAUTICAL WINGS</span><br></br>
                <span>Bengaluru</span> 
            </div>
            <div className="text-center p-6">
                <Image src="/grants/raptee.png" alt="raptee" width={180} height={80}></Image>
                <span>RAPTEE</span><br></br>
                <span>chennai</span> 
            </div>
            <div className="text-center p-6">
                <Image src="/grants/sixtyplus.png" alt="sixtyplus" width={180} height={80}></Image>
                <span>SIXTY PLUS</span><br></br>
                <span>chennai</span> 
            </div>
             </Marquee>
        </div>

    
    )
}

export default Grants;