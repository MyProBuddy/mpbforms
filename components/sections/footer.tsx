"use client";

import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-[#5F248E]">
            <div className="footer-container flex flex-col md:flex-row justify-between items-center px-4 py-2">
                <div className="left-section">
                    <p className="text-l font-bold text-white text-center sm:text-left">More Information  <br></br>www.myprobuddy.com</p>
                </div>
                <div className="middle-section py-4 ">
                    <ul className="social-icons flex space-x-2">
                        <li className="px-4"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width={20} height={20} x={2} y={2} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg></a></li>
                        <li className="px-4"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width={4} height={12} x={2} y={9} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                        <li className="px-4"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg></a></li>
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