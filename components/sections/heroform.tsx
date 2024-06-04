'use client';

import { useEffect } from 'react';

const VismeContactForm: React.FC = () => {
  useEffect(() => {
    // Load the Visme forms script when the component mounts
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

return (
    <section className='h-full w-screen pt-10 pb-6' id="hero">
      <h2 className="text-[#5F248E] text-2xl font-bold text-center px-4 pb-4">SCHEDULE A FREE INTRODUCTORY CALL WITH OUR EXPERTS,TODAY!</h2>
        <div className='w-full flex items-center justify-center md:justify-center mt-6 gap-4'>
          
        </div>
            {/* <h1 className='text-xl text-center font-bold lg:text-[28px] w-full sm:w-7/10 sm:text-3xl text-[#5F248E] px-2 sm:px-4 uppercase'>Know the best <span className='text-[#FF8F40]'>Grants and Government Schemes </span> for your<br className='hidden sm:block'/> business idea / startup </h1> */}
            <div
      className="visme_d"
      data-title="Grants LP form"
      data-url="mxggmeq8-grants-lp-form"
      data-domain="forms"
      data-full-page="false"
      data-min-height="500px"
      data-form-id="72159"
    ></div>
    </section>
);
};

export default VismeContactForm;
