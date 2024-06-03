"use client";

import Link from "next/link";
import { useState } from "react";


const NewHero = () => {
  const [isOpen, setOpen] = useState(false);

  return (


<main className="main">
  
      <section className="hero">
        <div className="container">
          <div className="hero__wrap">
            <h1 className="title">
              <span  className="span1">KNOW THE BEST</span> <br/> <span className=" span2 text-[#F47217]">GRANTS & GOVERNMENT SCHEMES</span> <br/> <span  className="span1">FOR YOUR BUSINESS/ STARTUP.</span>
            </h1>
            <p className="desc">
              Click here to know more ! <br/>
            </p>
            <div className="flex flex-wrap align-center justify-center gap-3">
              <a href="#" className="btn1">Get Started</a>
            
            </div>
          </div>
        </div>
      </section>      
</main>
  );
};

export default NewHero;
