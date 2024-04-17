"use client";

import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-[#5F248E]">
            <div className="footer-container flex flex-col md:flex-row justify-between items-center px-4 py-2">
            <div className="middle-section py-4 ">
                    <ul className="social-icons flex space-x-2">
                        <li className="px-4"><a href="https://www.instagram.com/myprobuddy/"><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width={20} height={20} x={2} y={2} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg></a></li>
                        <li className="px-4"><a href="https://www.linkedin.com/company/myprobuddy/"><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width={4} height={12} x={2} y={9} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                        <li className="px-4"><a href="https://www.youtube.com/@MyProBuddy"><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg></a></li>
                        <li className="px-4"><a href= "mailto: reachus@myprobuddy.com"><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></a></li>
                    </ul>
                </div>
                
               
                <div className="right-section" >
                    <p className="text-l my-2 font-bold sm:text-right text-white text-center"><a href="/termsandconditions">Terms and Conditions</a></p>
                </div>
                <div className="right-section" >
                    <p className="text-l my-2 font-bold sm:text-right text-white text-center"><a href="/privacypolicy">Privacy Policy</a></p>
                </div>
                <div className="right-section" >
                    <p className="text-l my-2 font-bold sm:text-right text-white text-center"><a href="/refundpolicy">Refund Policy</a></p>
                </div>
                <div className="left-section">
                    <p className="text-l font-bold my-2 text-white text-center sm:text-left">© 2024 All Rights Reserved - MyProBuddy</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;