import React from "react";
import Button from "./ui/Button";
import { ArrowDownOutlineIcon, BakeryIcon } from "./ui/Icons";
import Logo from "./ui/Logo";
import Dropdown from "./ui/Dropdown";

const Navbar = () => {
  const pagesDropdown = [
    "Flash Sale",
    "Manufacturers/Publishers",
    "Authors",
    "FAQ",
    "Terms & Conditions",
    "Customer Refund Policy",
    "Vendor Refund Policy",
  ];

  return (
    <div className="flex justify-between m-5 font-light">
      <div className="flex gap-8">
        <Logo />
        <Button className="flex gap-2 items-center justify-center border-1 border-green-200 text-emerald-700 px-1 h-[40px] rounded-md">
          <span>
            <BakeryIcon className="w-5 h-5" />
          </span>
          <span>Bakery</span>
          <span>
            <ArrowDownOutlineIcon className="w-4 h-4" />
          </span>
        </Button>
      </div>
      <div className="flex gap-4 items-center mr-7">
        <a href="/">Shops</a>
        <a href="/">Offers</a>
        <a href="/">Contact</a>
        <div className="relative group">
          <span className="flex items-center gap-1 cursor-pointer">
            Pages
            <ArrowDownOutlineIcon className="w-4 h-4" />
          </span>
          <div className="absolute mt-2 opacity-0 top-full left-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:visible invisible transition-all duration-300 ease-out bg-white z-50 w-[250px] h-auto rounded-lg shadow-lg shadow-gray-900/50">
            <ul className="flex flex-col gap-4 px-5 py-7">
              {pagesDropdown.map((dropdownmenu, index) => (
                <li key={index}>
                  <a
                    href=""
                    className="inline-block hover:text-[#009F7F] transform transition-all duration-200 ease-in-out hover:translate-x-1 hover:scale-105"
                  >
                    {dropdownmenu}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="border-green-500 px-1 h-[40px] border-1 bg-emerald-700 text-white rounded-md w-[70px]">
          Join
        </button>
        <button className="border-green-500 px-1 h-[40px] border-1 bg-emerald-700 text-white rounded-md w-[150px]">
          Become a Seller
        </button>
      </div>
    </div>
  );
};

export default Navbar;
