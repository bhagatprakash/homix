import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import card from "../../Assect/Image/card-1.jpg";
import card1 from "../../Assect/Image/card-2.jpg";
import card2 from "../../Assect/Image/card-3.jpg";
import card3 from "../../Assect/Image/card-4.jpg";
import card4 from "../../Assect/Image/card-5.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const cards = [
    {
      id: 1,
      Image: card,
      title: "Coastal Haven",
      description: "Central Park",
      lorem: "Los Angeles",
      button: "34 storey building",
      button1: "4 apartments",
    },
    {
      id: 2,
      Image: card1,
      title: "Urban Escape",
      description: "Central Park",
      lorem: "miami",
      button: "14 storey building",
      button1: "3 apartments",
    },
    {
      id: 3,
      Image: card2,
      title: "Timeless Elegance",
      description: "Central Park",
      lorem: "New york",
      button: "16 storey building",
      button1: "2 apartments",
    },
    {
      id: 4,
      Image: card3,
      title: "Mountain Vista",
      description: "Central Park",
      lorem: "Pakistan",
      button: "24 storey building",
      button1: "6 apartments",
    },
    {
      id: 5,
      Image: card4,
      title: " Tropical Paradise",
      description: "Central Park",
      lorem: "India",
      button: "11 storey building",
      button1: "2 apartments",
    },
  ];

  return (
    <div className="max-w-[1320px] mx-auto py-10">
      <div>
        <h1 className="text-5xl mx-5 my-5 font-bold text-left">
          Our residential complexes
        </h1>
      </div>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="p-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src={card.Image}
                alt="image"
                className="h-[250px] w-full rounded-lg"
              />
              <h2 className="text-xl text-left my-5 font-bold mb-2">
                {card.title}
              </h2>
              <p className="text-left text-[18px] font-semibold">
                {card.description}
              </p>
              <p className="text-left text-[15px] text-gray-400 font-semibold">
                {card.lorem}
              </p>
              <hr className="w-[300px]  my-5" />
              <div className="flex flex-wrap justify-between my-5">
                <span className="inline-block py-1 text-[8px] md:text-[12px] lg:text-[14px] text-gray-500 mb-2 text-left">
                  <span className="bg-gray-200 text-primary font-semibold p-3 rounded-3xl">
                    {card.button}
                  </span>
                </span>
                <span className="inline-block py-1 text-[8px] md:text-[16px] lg:text-[14px]  text-gray-500 mb-2 text-left">
                  <span className="bg-gray-200 text-primary font-semibold p-3 rounded-3xl">
                    {card.button1}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
