import React from "react";

function Footer() {
  return (
    <>
      <div>
        <div className=" bg-gray-100 p-5 rounded-xl max-w-[1320px]  flex flex-col mx-auto sm:flex-row">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 text-center md:text-left my-10 px-5 gap-6">
            <div className="cursor-pointer ">
              <p className="text-[20px] font-semibold my-5 text-blue-600 ">
                Features
              </p>
              <div className="flex gap-10">
                <div>
                  <p className="text-[15px]  py-1">Home v1</p>
                  <p className="text-[15px]  py-1">Home V2</p>
                  <p className="text-[15px]  py-1">Home V3</p>
                  <p className="text-[15px]  py-1">Properties V1</p>
                  <p className="text-[15px]  py-1">Properties V2</p>
                  <p className="text-[15px] py-1">Properties V3</p>
                  <p className="text-[15px]  py-1">Complexes</p>
                  <p className="text-[15px]  py-1">Blog V1</p>
                  <p className="text-[15px]  py-1">Blog V2</p>
                  <p className="text-[15px]  py-1">Blog V3</p>
                  <p className="text-[15px]  py-1">Blog post</p>
                  <p className="text-[15px]  py-1">Contact V1</p>
                  <p className="text-[15px]  py-1">Contact V2</p>
                  <p className="text-[15px]  py-1">Contact V3</p>
                </div>
                <div>
                  <p className="text-[15px] text-semibold  py-1">About us V2</p>
                  <p className="text-[15px] text-semibold  py-1">About us V1</p>
                  <p className="text-[15px] text-semibold  py-1">About us V3</p>
                  <p className="text-[15px] text-semibold  py-1">Agent</p>
                  <p className="text-[15px] text-semibold  py-1">Agents V1</p>
                  <p className="text-[15px] text-semibold  py-1">Agents V2</p>
                  <p className="text-[15px] text-semibold  py-1">Agents V3</p>
                  <p className="text-[15px] text-semibold  py-1">Review</p>
                  <p className="text-[15px] text-semibold  py-1">Property</p>
                </div>
              </div>
            </div>
            <div className="cursor-pointer ">
              <h1 className="text-[20px] font-semibold my-5 text-blue-600">
                Utility pages
              </h1>
              <p className="text-[15px]  py-1">404 Not found</p>
              <p className="text-[15px]  py-1">Changelog</p>
              <p className="text-[15px]  py-1">Log In V1</p>
              <p className="text-[15px]  py-1">Log In V2</p>
              <p className="text-[15px]  py-1">Style guide</p>
              <p className="text-[15px]  py-1">Search Results</p>
            </div>

            <div className="cursor-pointer ">
              <h1 className="text-[20px] font-semibold my-5 text-blue-600">
                Keep Yourself Up to Date
              </h1>
              <p className="text-[15px] py-1 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque facilisi elementum aliquam a feugiat porta etiam.
              </p>
              <form className="my-10">
                <div class="flex items-center">
                  <input
                    type="text"
                    class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none shadow-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email addres"
                  />
                  <button class="bg-blue-500 text-white rounded-r px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    subscribe
                  </button>
                </div>
              </form>

              <hr className="h-[2px] bg-gray-300 my-[100px]" />
              <div className="flex gap-5 ">
                <div>
                  <h2 className="text-blue-600 text-bold">Contact us:</h2>
                  <span className="text-bold">hello@homix.com</span>
                </div>
                <div>
                  <h2 className="text-blue-600 text-bold">Phone:</h2>
                  <span className="text-bold">(120) 450 - 6589</span>
                </div>
                <div>
                  <h2 className="text-blue-600 text-bold">Location:</h2>
                  <span className="text-bold">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[16px] p-5 md:mx-20 ">
          Copyright © 2024 TNC Resida | Designed by prakashkumar - Powered by
          Simbanic
        </p>
      </div>
    </>
  );
}

export default Footer;
