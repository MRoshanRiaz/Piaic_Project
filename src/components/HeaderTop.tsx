import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between item-center">
          <div className="hidden lg:flex gap-1">
            <div className="_header_top_icon_wrapper">
              <FaSquareFacebook />
            </div>
            <div className="_header_top_icon_wrapper">
              <BsTwitterX />
            </div>
            <div className="_header_top_icon_wrapper">
              <AiFillInstagram />
            </div>
            <div className="_header_top_icon_wrapper">
              <FaLinkedin />
            </div>
          </div>

          <div className=" text-gray-500 text-[12px]">
            <b>Free Shipping</b> This Week Order Over Rs:1000
          </div>

          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="currency"
              id="currency"
            >
              <option value="USD $"> USD $</option>
              <option value="EUR $"> EUR $</option>
              <option value="Rs $"> RS $</option>
            </select>

            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="language"
              id="language"
            >
              <option value="English"> English</option>
              <option value="Urdu"> Urdu</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
