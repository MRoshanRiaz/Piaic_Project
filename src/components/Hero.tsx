"use client";

import React from 'react';
import Slider from "react-slick";
import Slide from './Slide';

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        pauseOnHover: false,
    };
  
    const slideData = [
        {
            id: 0,
            img: "/1.png", // Corrected path
            title: "Trending Item",
            mainTitle: "Latest Content",
            price: "$20",
        },
        {
            id: 1,
            img: "/2.png", // Corrected path
            title: "Trending Item",
            mainTitle: "Latest Content",
            price: "$20",
        },
        {
            id: 2,
            img: "/3.png", // Corrected path
            title: "Trending Item",
            mainTitle: "Latest Content",
            price: "$20",
        },
        {
            id: 3,
            img: "/4.png", // Corrected path
            title: "Trending Item",
            mainTitle: "Latest Content",
            price: "$20",
        },
        {
            id: 4,
            img: "/5.png", // Corrected path
            title: "Trending Item",
            mainTitle: "Latest Content",
            price: "$20",
        },
    ];

    return (
        <div>
            <div className='container pt-6 lg:pt-0'>
                <Slider {...settings}>
                    {slideData.map((item) => (
                        <Slide 
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            mainTitle={item.mainTitle}
                            price={item.price}
                        />
                    ))}
                </Slider>
            </div>       
        </div>
    );
};

export default Hero;
