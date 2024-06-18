import React from "react";
import image from "../../Assect/Image/bestplace.webp";
import imageCarton from "../../Assect/Image/carton icon.webp";

function Getintuch() {
  return (
    <>
      <div className="bg-primary p-10 my-10">
        <div className="max-w-[1320px] mx-auto my-10">
          <div className="bg-accent/20">
            <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 bg-white rounded-xl p-5">
              <div className="text-left w-full sm:w-auto my-5 lg:my-1 flex flex-col items-center sm:items-start justify-center p-5">
                <p className="text-[24px] sm:text-[40px] font-bold text-left">
                  The best place to discover amazing properties at great prices.
                  <span className="text-primary"> Get in touch today</span>
                </p>
                <p className="font-semibold text-gray-500 text-[16px] sm:text-[18px] my-5 text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  nibh pretium nunc mauris sed adipiscing. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
                <div className="flex flex-col items-center sm:items-start my-5">
                  <button className="px-4 py-3 md:py-4 w-full sm:w-auto max-w-xs sm:max-w-none font-semibold rounded-lg bg-primary text-white hover:bg-black">
                    Find apartments
                  </button>
                </div>
              </div>

              <div className="relative w-full sm:w-auto">
                <img
                  src={image}
                  alt="properties"
                  className="w-full h-full object-cover rounded-lg"
                  style={{ objectFit: "cover" }}
                />
                <button className="absolute top-5 right-5 px-4 py-3 md:py-2 font-semibold rounded-lg bg-primary text-white hover:bg-black">
                  Next
                </button>
                <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg w-full sm:w-[400px]">
                  <div className="flex  sm:flex-row justify-between items-center sm:items-start">
                    <div>
                      <img
                        src={imageCarton}
                        alt="image"
                        className="h-[150px] w-[150px] object-cover"
                      />
                    </div>
                    <div className="my-5 text-center sm:text-left sm:ml-5">
                      <h1 className="text-[20px] sm:text-[25px] text-primary font-bold">
                        Congratulations!
                      </h1>
                      <p className="text-[14px] sm:text-[18px] text-gray-500 font-semibold my-2">
                        You have rented an apartment. Thank you for choosing us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Getintuch;
