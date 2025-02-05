import React from "react";
import { features } from "../data";

const Feature3 = () => {
  const { feature3 } = features;
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature3;
  return (
    <section className="section">
      <div className="container mx-auto ">
        <div
          className="flex flex-col lg:flex-row
        lg:items-center lg:gap-x-[30px]"
        >
          <div className="flex-1" data-aos="fade-right" data-aos-offset="400">
            <div className="pretitle">{pretitle}</div>
            <h2 className="title">{title}</h2>
            <p className="lead">{subtitle}</p>
            <a
                href="https://www.upwork.com/freelancers/~016ee239ce423c4bb7?mp_source=share"
                target='_blank'  className="btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all">
              {btnLink} <img src={btnIcon} alt="Button Icon" />
            </a>
          </div>
          <div className="flex-1" data-aos="fade-left" data-aos-offset="300">
            <img src={image} alt="Feature 1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;