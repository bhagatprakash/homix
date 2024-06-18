import React from "react";
import { FetureData } from "../../Assect/Data/cardData";
import { Link } from "react-router-dom";
function TopListing() {
  return (
    <div className="max-w-[1320px] mx-auto relative">
      <div className="bg-accent/20">
        <div className="max-w-[1320px] grid grid-cols-1 gap-[50px] content-center sm:text-center sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-12">
          {FetureData.map((card, index) => (
            <div
              key={index}
              className="my-6 bg-white shadow-lg p-2 w-full sm:w-auto"
            >
              <div className="h-[225px] overflow-hidden relative">
                <Link to={"/proptype_sectoin"}>
                  <img
                    src={card.image}
                    alt="card"
                    className="w-full h-full object-cover object-center rounded-lg "
                    style={{ objectFit: "cover" }}
                  />
                </Link>
                <span className="absolute top-0 left-5 bg-primary mt-3 w-[85px] p-2 text-[15px] font-semibold text-white rounded-2xl">
                  For Sale
                </span>
              </div>

              <div className="pt-4 pb-2 border-gray-300">
                <p className="my-2 mx-4 text-[30px] text-primary font-bold dark:text-gray-400 text-left">
                  {card.price}
                  <span className=" text-gray-400 text-[15px]">
                    {card.oldprise}
                  </span>
                  <span className="text-gray-500 text-[10px]">
                    {card.month}
                  </span>
                </p>
                <a href="#">
                  <h5 className=" text-[20px] mx-4 font-semibold tracking-tight text-gray-900 dark:text-white text-left">
                    {card.type}
                  </h5>
                </a>
                <p className="mb-3 text-[16px] mx-4 text-gray-500 font-semibold dark:text-gray-400 text-left">
                  {card.location}
                </p>

                <hr className="w-[300px] mx-3" />
                <div className="flex justify-center my-5 ">
                  <span className="inline-block py-1 text-[14px] p-5 text-gray-500 mb-2 text-left">
                    <span className=" bg-gray-100 text-primary  font-semibold  p-3 rounded-3xl">
                      {card.squre}
                    </span>
                  </span>
                  <span className="inline-block  py-1 text-[14px] p-5 text-gray-500 mb-2 text-left">
                    <span className=" bg-gray-100 text-primary  font-semibold  p-3 rounded-3xl">
                      {card.bedrooms}
                    </span>
                  </span>
                  <span className="inline-block py-1 text-[14px] p-5 text-gray-500 mb-2 text-left">
                    <span className=" bg-gray-100 text-primary font-semibold p-3 rounded-3xl">
                      {" "}
                      {card.bathrooms}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center">
            <button className="bg-primary  hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg">
              Explore All Listings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopListing;
