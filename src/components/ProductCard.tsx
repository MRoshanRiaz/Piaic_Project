import React from "react";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  rating,
  price,
}) => {
  const generateRating = (rating: number) => {
    return (
      <div className="flex gap-1 text-[20px] text-[#FF9529]">
        {[...Array(5)].map((_, index) =>
          index < rating ? <FaStar key={index} /> : <FaRegStar key={index} />
        )}
      </div>
    );
  };

  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px] w-full h-[400px] flex flex-col">
      <div className="w-[200px] h-[200px] overflow-hidden rounded-xl mx-auto">
        <Image
          className="object-cover w-full h-full"
          src={img}
          width={200}
          height={200}
          alt={title}
        />
      </div>

      <div className="space-y-2 py-2 flex-grow flex flex-col justify-between">
        <h2 className="text-blackish font-semibold text-center">{title}</h2>
        <p className="text-gray-500 text-center">{desc}</p>
        <div className="flex justify-center">{generateRating(rating)}</div>
        <div className="font-bold flex justify-center gap-4 text-lg">
          Rs: {price}
          <del className="text-gray-600 font-normal">
            Rs: {parseInt(price) + 500}.00
          </del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
