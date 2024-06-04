"use client";

import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="20QUNgFIrK0"
        onClose={() => setOpen(false)}
      />

      <div className="hero-banner-two position-relative pt-250 lg-pt-200 md-pt-150">
        <img
          src="/images/shape/shape_26.svg"
          alt="shape"
          className="absolute top-[12%] left-[8%] w-[11.9%] max-w-[248px]shapeleft"
        />
        <img
          src="/images/shape/shape_27.svg"
          alt="shape"
          className="absolute top-[13%] right-[9%] w-[9.1%] max-w-[193px]"
        />

        <div className="containerhero">
          <div className="row">
            <div
              className="col-lg-8 col-md-9 m-auto text-center"
              data-aos="fade-up"
            >
              <h1 className="herotit">
                {/* <img
                  src="/images/shape/shape_25.svg"
                  alt="shape"
                  className="lazy-img shapes line-shape"
                /> */}
                <span className="span1 ">Know Your Best</span><br/>
                <span className="span2 mt-4">
                  Grants & Government Schemes<br/>
                </span>
                <span className="span1">For Your Business/Startup</span>
              </h1>
              <p className="ptext mb-75 pt-12 lg-mb-50 lg-pt-10">
                Click here to Get your Grant Proposal Template for ₹2,499

              </p>
              <div className="d-sm-flex justify-content-center align-items-center mt-10">
                <Link
                  href="#pricing"
                  className="btn1 mb-25 ms-2 me-3"
                >
                  Get Started
                </Link>
               
              </div>
            </div>
          </div>
          {/* End .row */}

          {/* /.illustration-holder */}
        </div>
        {/* /.container */}
      </div>
    </>
  );
};

export default Hero;
