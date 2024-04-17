"use client";

import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-[#5F248E]">
            <div className="footer-container flex flex-col md:flex-row justify-between items-center px-4 py-2">
                <div className="left-section">
                    <p className="text-l font-bold text-white text-center sm:text-left">More Information  <br></br>Reachus@myprobuddy.com</p>
                </div>
                <div className="middle-section py-4 ">
                    <ul className="social-icons flex space-x-2">
                        <li className="px-4"><a href="https://www.instagram.com/myprobuddy/"><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width={20} height={20} x={2} y={2} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg></a></li>
                        <li className="px-4"><a href="https://www.linkedin.com/company/myprobuddy/"><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width={4} height={12} x={2} y={9} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                        <li className="px-4"><a href="https://www.youtube.com/@MyProBuddy"><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg></a></li>
                    </ul>
                </div>
                <div className="right-section" >
                    <p className="text-l font-bold sm:text-right text-white text-center">Contact us <br></br> +91-99522 37700</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;