import React from "react";
import { CarosalData } from "../../Assect/Data/carosalData";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CardCarosal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <button className="slick-prev bg-black text-white p-2 rounded-full shadow-md">
        ←
      </button>
    ),
    nextArrow: (
      <button className="slick-next bg-black text-white p-2 rounded-full shadow-md">
        →
      </button>
    ),
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center bg-white space-x-2 mt-4">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-10">
      <div className="bg-accent/20">
        <h1 className="text-5xl font-bold text-left mx-5">
          Our residential complexes
        </h1>
        <div className="content-center px-4 gap-6 rounded-lg">
          <Slider {...settings}>
            {CarosalData.map((card, index) => (
              <div key={index} className="my-6 bg-white shadow-lg p-2 w-full">
                <div className="h-[225px] overflow-hidden relative">
                  <img
                    src={card.image}
                    alt="card"
                    className="w-full h-full object-cover object-center rounded-lg"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="absolute top-0 left-4 bg-primary mt-3 w-[60px] p-2 text-[12px] font-semibold text-white rounded-2xl">
                    For Sale
                  </span>
                </div>

                <div className="pt-4 pb-2 border-gray-300">
                  <p className="my-1 mx-4 text-[27px] font-semibold dark:text-gray-400 text-left">
                    {card.price}
                    <span className="text-gray-400 text-[15px]">
                      {card.oldprise}
                    </span>
                  </p>
                  <a href="#">
                    <h5 className="text-[20px] mx-4 font-semibold tracking-tight text-gray-900 dark:text-white text-left">
                      {card.type}
                    </h5>
                  </a>
                  <p className="mb-3 text-[16px] mx-4 text-gray-500 font-semibold dark:text-gray-400 text-left">
                    {card.location}
                  </p>

                  <hr className="w-[300px]" />
                  <div className="flex flex-wrap justify-between mx-2 my-5">
                    <span className="inline-block py-2 px-3 text-sm text-gray-500 mb-2 sm:mb-0 text-left">
                      <span className="bg-gray-100 text-primary font-semibold p-3 rounded-3xl">
                        {card.squre}
                      </span>
                    </span>
                    <span className="inline-block py-2 px-3 text-sm text-gray-500 mb-2 sm:mb-0 text-left">
                      <span className="bg-gray-100 text-primary font-semibold p-3 rounded-3xl">
                        {card.bedrooms}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CardCarosal;
