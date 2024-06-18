// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import profileImage from "../../Assect/Image/profile-1.jpg";
// import profileImage1 from "../../Assect/Image/profile-1.jpg";
// import profileImage2 from "../../Assect/Image/profile-1.jpg";

// const testimonials = [
//   {
//     image: profileImage,
//     text: "TNC Resida has made my home search a breeze. Their platform is user-friendly,  perfect place with ease  find our dream home quickly and efficiently.",
//     author: "Sarah Thompson",
//     position: "CEO at Homeland",
//     rating: 5,
//   },
//   {
//     image: profileImage1,
//     text: "TNC Resida has been a game-changer in our home-buying journey  Their platform is user-friendly. They helped us find our dream home quickly and efficiently.",
//     author: "Sarah Thompson",
//     position: "CEO at Homeland",
//     rating: 5,
//   },
//   {
//     image: profileImage2,
//     text: "As a first-time homebuyer, I was overwhelmed, but TNC Resida guided me every step of the way. Their commitment to client satisfaction is truly exceptional.",
//     author: "Leslie Alexander",
//     position: "CEO at Homeland",
//     rating: 5,
//   },
// ];

// const CarouselSection = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: true,
//     prevArrow: (
//       <button className="slick-prev bg-black text-white p-2 rounded-full shadow-md ">
//         ←
//       </button>
//     ),
//     nextArrow: (
//       <button className="slick-next bg-black text-white-500 p-2 rounded-full shadow-md">
//         →
//       </button>
//     ),
//   };

//   return (
//     <div className=" bg-primary h-auto md:h-[600px] ">
//       <div className="max-w-[1320px] mx-auto bg-accent/20 my-10 ">
//         <h1 className="text-3xl md:text-5xl font-bold text-left text-white my-10 mx-5 md:mx-10">
//           What Our Clients Say
//         </h1>
//         <Slider {...settings}>
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="px-2 sm:px-4 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1"
//             >
//               <div className="p-6 bg-white border border-gray-500 text-center rounded-lg">
//                 <div className="flex text-left mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <svg
//                       key={i}
//                       className="w-5 h-5 text-yellow-500"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.275 3.94a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.375 2.45a1 1 0 00-.364 1.118l1.275 3.94c.3.921-.755 1.688-1.538 1.118l-3.375-2.45a1 1 0 00-1.175 0l-3.375 2.45c-.783.57-1.838-.197-1.538-1.118l1.275-3.94a1 1 0 00-.364-1.118l-3.375-2.45c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.275-3.94z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p className="text-base sm:text-lg text-left mb-4">
//                   "{testimonial.text}"
//                 </p>
//                 <div className="flex items-center">
//                   <div>
//                     <img
//                       src={testimonial.image}
//                       alt=""
//                       className="h-12 w-12 rounded-full"
//                     />
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-lg font-bold text-left">
//                       {testimonial.author}
//                     </h3>
//                     <p className="text-gray-600 text-left">
//                       {testimonial.position}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default CarouselSection;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import profileImage from "../../Assect/Image/profile-1.jpg";
import profileImage1 from "../../Assect/Image/profile-1.jpg";
import profileImage2 from "../../Assect/Image/profile-1.jpg";
import img from "../../Assect/Image/profile-1.jpg";

const CarouselSection = () => {
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

  const testimonials = [
    {
      image: profileImage,
      text: "TNC Resida has made my home search a breeze. Their platform is user-friendly,rwhelmed,    perfect place with ease  find our dream home quickly and efficiently.",
      author: "Sarah Thompson",
      position: "CEO at Homeland",
      rating: 5,
    },
    {
      image: profileImage2,
      text: "TNC Resida has been a game-changer in our home-buying journey  Their platform is user-friendly. They helped us find our dream home quickly and efficiently.",
      author: "Sarah Thompson",
      position: "CEO at Homeland",
      rating: 5,
    },
    {
      image: profileImage1,
      text: "As a first-time homebuyer, I was overwhelmed, but TNC  of the wayhome-buying journey TheirResida guided me every commitment to client satisfaction is truly exceptional.",
      author: "Leslie Alexander",
      position: "CEO at Homeland",
      rating: 5,
    },
    {
      image: profileImage2,
      text: "TNC Resida has been a game-changer in our home-buying journey  Their platform is user-friendly. They helped us find our dream home quickly and efficiently.",
      author: "Sarah Thompson",
      position: "CEO at Homeland",
      rating: 5,
    },
    {
      image: profileImage2,
      text: "TNC Resida has been a game-changer in our home-buying journey  Their platform is user-friendly. They helped us find our dream home quickly and efficiently.",
      author: "Sarah Thompson",
      position: "CEO at Homeland",
      rating: 5,
    },
  ];

  return (
    <div className="bg-primary">
      <div className="max-w-[1320px] mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl mx-5 my-10 font-bold text-left text-white ">
            What our clients say
          </h1>
        </div>
        <Slider {...settings}>
          {testimonials.map((card) => (
            <div key={card.id} className="px-2">
              <div className="bg-white rounded-lg shadow-md gap-10 p-5">
                <div className="flex text-left mb-4">
                  {[...Array(card.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.275 3.94a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.375 2.45a1 1 0 00-.364 1.118l1.275 3.94c.3.921-.755 1.688-1.538 1.118l-3.375-2.45a1 1 0 00-1.175 0l-3.375 2.45c-.783.57-1.838-.197-1.538-1.118l1.275-3.94a1 1 0 00-.364-1.118l-3.375-2.45c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.275-3.94z" />
                    </svg>
                  ))}
                </div>
                <h2 className="text-[16px] sm:text-[18px] text-left mb-2">
                  {card.text}
                </h2>
                <div className="flex my-5">
                  <div className="">
                    <img
                      src={card.image}
                      alt="img"
                      className="h-[40px] sm:h-[50px]"
                    />
                  </div>
                  <div className="mx-5">
                    <p className="text-left text-[16px] sm:text-[18px] font-semibold">
                      {card.author}
                    </p>
                    <p className="text-left text-[14px] sm:text-[15px] text-gray-400 font-semibold">
                      {card.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselSection;
