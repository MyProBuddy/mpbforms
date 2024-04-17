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
    <div className='h-full mb-12'>
            <h2 className="text-3xl text-center text-xl text-center mt-12 lg:text-[28px] md:text-2xl sm:text-2xl leading-2 text-[#5F248E] font-bold">Know the best <span className='text-[#FF8F40]'>GRANTS & GOVERNMENT SCHEMES </span><br/>for your business idea / startup</h2>
            <div className="visme_d h-screen" data-title="Contact Me Contact Form" data-url="mxgm06x8-contact-me-contact-form" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="57414"></div>
    </div>
);
};

export default VismeContactForm;
