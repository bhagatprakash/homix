import React from "react";
import propeties from "../../Assect/Image/discoverImage.jpg";

function Properties() {
  return (
    <div className="max-w-[1320px] mx-auto my-[100px]">
      <div className="bg-accent/20">
        <div className="max-w-[1320px] relative grid grid-cols-1 lg:gap-[50px] content-center sm:text-center  lg:grid-cols-2 ">
          <div className="relative">
            <img
              src={propeties}
              alt="properties"
              className="w-full h-[500px] object-cover object-center rounded-lg"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="text-left p-3 my-10 lg:my-1">
            <p className="text-[40px] font-bold">
              Discover properties that will improve your
              <span className="text-primary">
                {" "}
                life and that of your family
              </span>
            </p>
            <p className="font-semibold text-gray-500 text-[18px] my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh
              pretium nunc mauris sed adipiscing. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <h2 className="font-semibold text-gray-500 text-[18px] my-5">
              Gravida ante quis nisl amet, suspendisse massa. Venenatis
              imperdiet mauris lacus justo, hac nibh. Cursus in et odio at at
              commodo.
            </h2>
            <div className="flex flex-col md:flex-row  rounded-md overflow-hidden my-10">
              <button className="px-4 py-3 md:py-5 w-full md:w-[180px] rounded-lg bg-primary text-white font-semibold hover:bg-black">
                To Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Properties;
