import React from "react";

function Banner() {
  return (
    <div
      className="max-w-[1420px] mx-auto bg-banner h-[700px] bg-cover bg-no-repeat flex items-center justify-center"
      style={{ objectFit: "cover" }}
    >
      <div className="text-center container mx-auto my-auto px-4">
        <h1 className="md:text-[60px] text-[37px] font-semibold">
          The best place to find
        </h1>
        <h1 className="md:text-[60px] text-[37px] text-primary font-semibold">
          your dream house
        </h1>
        <br />
        <p className="text-[18px] md:text-[21px] font-semibold text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipiscing elit
        </p>
        <p className="text-[18px] md:text-[21px] font-semibold text-gray-500 py-2">
          current one with ease.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center rounded-md overflow-hidden my-10">
          <input
            type="text"
            className="px-4 py-3 md:py-5 rounded-lg w-full md:w-[500px] lg:w-[700px] mb-4 md:mb-0 md:mr-4"
            placeholder="Search for city, neighborhood, agent, address..."
          />
          <button className="px-4 py-3 md:py-5 w-full md:w-[150px] rounded-lg bg-primary text-white font-semibold hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
export default Banner;
