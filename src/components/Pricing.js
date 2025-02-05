import React, { useState } from "react";
import { pricing } from "../data";
import { HiCheck, HiOutlineArrowNarrowRight } from "react-icons/hi";

const Pricing = () => {
  const [index, setIndex] = useState(1);
  const { title, cards } = pricing;
  return <section id="pricing" className="section">
    <div className="container mx-auto">
      <h2 
      className="h2 mb-10 lg:mb-20 text-center"
      data-aos="fade-up"
      data-aos-delay="200"
      >{title}</h2>
      <div className="flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center">
        {cards.map((card, cardIndex) => {
          const {icon, title, services, price, userAmount, btnText, delay} = card;
          return <div 
            data-aos="fade-up"
            data-aos-delay={delay}
            data-aos-offset="300"
            key={cardIndex}>
            <div
            onClick={() => setIndex(cardIndex)}
            className={`${cardIndex === index ? 'bg-white shadow-2xl' : 
            'border border-gray-100'} w-[350px] h-[500px]
            rounded-[12px] p-[40px] cursor-pointer`}>
              <div className='mb-8'>
                <img src={icon} alt='card icon' />
              </div>
              <div className="text-[32px] font-semibold mb-8">{title}</div>
              <div className="flex flex-col gap-y-2 mb-6">
              {services.map((service, index) => {
                const { name } = service;
                return (
                <div
                className='flex items-center gap-x-[10px]'
                key={index}>
                  <HiCheck />
                  <div>{name}</div>
                </div>
                );
              })}
              </div>
              <div className="mb-10">
                <div>
                  <span className="text-2xl font-semibold">{price}/</span>
                  <span className="text-xl text-light font-light">year</span>
                </div>
                <div className="text-base text-light">{userAmount}</div>
              </div>
              <a
                  href="https://www.upwork.com/freelancers/~016ee239ce423c4bb7?mp_source=share"
                  target='_blank'
                  className={`${cardIndex === index ? 'bg-accent hover:bg-accentHover text-white' : 'border border-accent text-accent'} btn btn-sm space-x-[14px]`}>
                <span>{btnText}</span>
                <HiOutlineArrowNarrowRight />
              </a>
            </div>
          </div>
        })}
      </div>
    </div>
  </section>;
};

export default Pricing;
