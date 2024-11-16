import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/download.jpg",
    title: "Jacket",
    desc: "Men Yarn Full-Zip",
    rating: 4,
    price: "4000.00",
  },
  {
    img: "/alexunder-hess-TjaylnLofm4-unsplash.jpg",
    title: "Headphone",
    desc: "Technology Yarn Full-Zip",
    rating: 4,
    price: "2000.00",
  },
  {
    img: "/daniel-l-Y90QA1Kd8Fg-unsplash.jpg",
    title: "Perfume",
    desc: "Sents Yarn Full-Zip",
    rating: 5,
    price: "1500.00",
  },
  {
    img: "/e-commerce-8837703_1920.jpg",
    title: "Mystry Box",
    desc: "Box Yarn Full-Zip",
    rating: 4,
    price: "5000.00",
  },
  {
    img: "/pexels-alexandra-maria-58259-336372.jpg",
    title: "Women's Wear",
    desc: "Women's Yarn Full-Zip",
    rating: 4,
    price: "1500.00",
  },
  {
    img: "/pexels-daiangan-102129.jpg",
    title: "Men's Wear",
    desc: "Men Yarn Full-Zip",
    rating: 5,
    price: "1500.00",
  },
  {
    img: "/pexels-doouglasma-14691508.jpg",
    title: "Jacket",
    desc: "Smart Watch",
    rating: 4,
    price: "1500.00",
  },
  {
    img: "/pexels-melvin-buezo-1253763-2529148.jpg",
    title: "Yeezes",
    desc: "Men Yarn Full-Zip",
    rating: 3,
    price: "1500.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pd-4">New Products</h2>

        <div
          className=" grid grid-cols-1 place-item-center sm:place-items-start sm:grid-cols-2 
      lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10"
        >
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
