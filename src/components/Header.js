import React, { useEffect } from "react";
import HeaderImage from "../Assect/Image/header image.svg";

function Header() {
  useEffect(() => {
    document.getElementById("hamburger").onclick = function toggleMenu() {
      const navToggle = document.getElementsByClassName("toggle");
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
      }
    };
  }, []);
  return (
    <>
      <header>
        <nav className="flex flex-wrap items-center justify-between my-5  lg:px-20 ">
          <div>
            <img src={HeaderImage} className="h-[40px]" alt="header-image" />
          </div>
          <div className="flex lg:hidden">
            <button id="hamburger">
              <img
                className="toggle block"
                src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                width="40"
                height="40"
              />
              <img
                className="toggle hidden"
                src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                width="40"
                height="40"
              />
            </button>
          </div>
          <div className="toggle w-full lg:w-auto lg:flex row-gap-25 text-bold mt-5 md:mt-0 md:border-none hidden">
            <a
              href="#"
              className="block   text-[18px] font-semibold  px-3 py-3  text-center"
            >
              Home
              <i className="fa-solid fa-angle-down text-blue-700 font-semibold mx-2"></i>
            </a>
            <a
              href="#"
              className="block   px-3 py-3 text-[17px]  text-center font-semibold"
            >
              Properties<i className="fa-solid fa-angle-down mx-2"></i>
            </a>
            <a
              href="#"
              className="block  px-3 py-3 text-[17px]   text-center font-semibold "
            >
              Blogs<i className="fa-solid fa-angle-down mx-2"></i>
            </a>
            <a
              href="#"
              className="block  px-3 py-3 text-[17px]   text-center font-semibold "
            >
              About
            </a>
            <a
              href="#"
              className="block  px-2 lg:px-3 py-3 lg:text-[17px]  font-semibold "
            >
              Pages<i className="fa-solid fa-angle-down mx-2"></i>
            </a>
          </div>
          <a
            href="#"
            className="toggle lg:flex w-full lg:w-auto px-8 py-2 sm:text-center text-center bg-black text-[17px] rounded-lg text-white font-semibold border items-center justify-center hidden"
          >
            Contact Us
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
