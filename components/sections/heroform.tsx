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
      <p className='text-md text-[#000] md:text-2xl text-center text-bold md:text-center'>Schedule a FREE Introductory call with our experts, Today!</p>
        <div className='w-full flex items-center justify-center md:justify-center mt-6 gap-4'>
         <a href='http://calendly.com/amrish-kcw'> <button className='w-48 h-12 text-sm sm:text-base rounded bg-[#5F248E] text-[#fff] font-bold hover:bg-fuchsia-700 hover:text-white transition-colors'><span className='schedule'>Schedule Now !</span></button> </a>
          
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
