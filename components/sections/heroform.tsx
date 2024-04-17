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
    <div className="visme_d" data-title="Contact Me Contact Form" data-url="mxgm06x8-contact-me-contact-form" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="57414"></div>
  );
};

export default VismeContactForm;
