'use client';

import React, { useEffect } from 'react';

const ContactForm: React.FC = () => {
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
    <div className="visme_d" data-title="Contact Me Contact Form" data-url="mxgm06x8-contact-me-contact-form?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="57414"></div>
  );
};

export default ContactForm;
