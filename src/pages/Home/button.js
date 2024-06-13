import React from "react";

function Button() {
  return (
    <>
      <div
        className="max-w-[1420px] mx-auto flex items-center justify-center my-10"
        style={{ objectFit: "cover" }}
      >
        <div className="text-center container mx-auto my-5">
          <h1 className="md:text-[50px] text-[37px] text-center font-semibold">
            Find the category for you
          </h1>

          <p className="text-[21px] font-semibold md:text-[18px] text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </p>
          <p className="lg:text-[18px] font-semibold text-[21px] text-gray-500 py-2">
            current one with ease.
          </p>

          <div className="flex flex-wrap justify-center gap-2 items-center mx-auto rounded-md overflow-hidden shadow-insetcustom p-3 w-full max-w-[850px] my-10 ">
            <button className="px-4 py-4 w-full sm:w-[200px] rounded-lg bg-black text-white font-semibold ">
              Residential
            </button>
            <button className="px-4 py-4 w-full sm:w-[200px] rounded-lg bg-gray-200 text-black text-[18px] font-semibold hover:bg-gray-400">
              Commercial
            </button>
            <button className="px-4 py-4 w-full sm:w-[200px] rounded-lg bg-gray-200 text-black text-[18px] font-semibold hover:bg-gray-400">
              Apartments
            </button>
            <button className="px-4 py-4 w-full sm:w-[200px] rounded-lg bg-gray-200 text-black text-[18px] font-semibold hover:bg-gray-400">
              Office space
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
