import React from "react";
import footerImage from "../Assect/Image/header image.svg";

function Footer() {
  return (
    <>
      <div>
        <div className="bg-gray-100 p-5 rounded-xl max-w-[1320px] flex flex-col mx-auto sm:flex-row">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center lg:text-left my-10 px-5 gap-6">
            <div className="cursor-pointer">
              <p className="text-[20px] font-semibold my-5 text-blue-600">
                Features
              </p>
              <div className="flex gap-10 lg:justify-start justify-evenly">
                <div>
                  <p className="text-[15px] py-1">Home v1</p>
                  <p className="text-[15px] py-1">Home V2</p>
                  <p className="text-[15px] py-1">Home V3</p>
                  <p className="text-[15px] py-1">Properties V1</p>
                  <p className="text-[15px] py-1">Properties V2</p>
                  <p className="text-[15px] py-1">Properties V3</p>
                  <p className="text-[15px] py-1">Complexes</p>
                  <p className="text-[15px] py-1">Blog V1</p>
                  <p className="text-[15px] py-1">Blog V2</p>
                  <p className="text-[15px] py-1">Blog V3</p>
                  <p className="text-[15px] py-1">Blog post</p>
                  <p className="text-[15px] py-1">Contact V1</p>
                  <p className="text-[15px] py-1">Contact V2</p>
                  <p className="text-[15px] py-1">Contact V3</p>
                </div>
                <div>
                  <p className="text-[15px] text-semibold py-1">About us V1</p>
                  <p className="text-[15px] text-semibold py-1">About us V2</p>
                  <p className="text-[15px] text-semibold py-1">About us V3</p>
                  <p className="text-[15px] text-semibold py-1">Agent</p>
                  <p className="text-[15px] text-semibold py-1">Agents V1</p>
                  <p className="text-[15px] text-semibold py-1">Agents V2</p>
                  <p className="text-[15px] text-semibold py-1">Agents V3</p>
                  <p className="text-[15px] text-semibold py-1">Review</p>
                  <p className="text-[15px] text-semibold py-1">Property</p>
                </div>
              </div>
            </div>

            <div className="cursor-pointer">
              <h1 className="text-[20px] font-semibold my-5 text-blue-600">
                Utility pages
              </h1>
              <p className="text-[15px] py-1">404 Not found</p>
              <p className="text-[15px] py-1">Changelog</p>
              <p className="text-[15px] py-1">Log In V1</p>
              <p className="text-[15px] py-1">Log In V2</p>
              <p className="text-[15px] py-1">Style guide</p>
              <p className="text-[15px] py-1">Search Results</p>
            </div>

            <div className="cursor-pointer">
              <h1 className="text-[20px] font-semibold my-5 text-blue-600">
                Keep Yourself Up to Date
              </h1>
              <p className="text-[15px] py-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque facilisi elementum aliquam a feugiat porta etiam.
              </p>
              <form className="my-10">
                <div className="flex items-center">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none shadow-lg focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
                    placeholder="Enter your email address"
                  />
                  <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2">
                    Subscribe
                  </button>
                </div>
              </form>
              <hr className="h-[2px] bg-gray-300 my-10" />
              <div className="flex flex-col gap-4 lg:flex-row">
                <div>
                  <h2 className="text-blue-600 font-bold">Contact us:</h2>
                  <span className="font-semibold">hello@homix.com</span>
                </div>
                <div>
                  <h2 className="text-blue-600 font-bold">Phone:</h2>
                  <span className="font-semibold">(120) 450 - 6589</span>
                </div>
                <div>
                  <h2 className="text-blue-600 font-bold">Location:</h2>
                  <span className="font-semibold">San Francisco</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row justify-center items-center lg:justify-between my-10">
          <img src={footerImage} alt="footerImage" className=" mb-4 lg:mb-0" />
          <p className="text-[16px] p-5 ">
            Copyright © 2024 TNC Resida | Designed by prakashkumar - Powered by
            Simbanic
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
