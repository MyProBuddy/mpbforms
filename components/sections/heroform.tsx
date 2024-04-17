'use client';

import { useEffect } from 'react';

const VismeContactForm: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

return (
    <div className='h-full w-screen my-14 ' id="hero">
            <h1 className='text-2xl text-center font-bold lg:text-[28px] sm:text-3xl text-[#5F248E] mx-2 uppercase'>Know the best <span className='text-[#FF8F40]'>Grants and Schemes </span> for your business idea / startup </h1>
            <div className="visme_d" data-title="Contact Me Contact Form" data-url="mxgm06x8-contact-me-contact-form" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="57414"></div>
    </div>
);
};

export default VismeContactForm;
