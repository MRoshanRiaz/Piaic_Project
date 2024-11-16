import React from "react";
import { FaCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-blackish text-gray-500 text-center py-4 pb-16 md:pb-4">
      <span>Copyright </span>
      <FaCopyright className="inline mx-1" />
      <span>Logo</span> <br />
      All Rights Reserved 2023.
    </div>
  );
};

export default Footer;
