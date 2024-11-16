import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="container pt-16 pb-16">
      <h2 className="font-medium text-2xl pb-4 font-center" >Testimonials</h2>

      <div className="grid lg:grid-cols-[300px,1fr] gap-8 items-stretch">
        {/* Testimonial Card */}
        <div className="border border-gray-300 rounded-2xl p-6 lg:p-4 w-[280px] lg:w-[300px] flex flex-col items-center justify-center h-[500px]">
          <div className="text-center flex flex-col items-center gap-2">
            <Image
              className="rounded-full inline-block"
              src="/Hugh-Jackman.webp"
              width={80}
              height={80}
              alt="dp"
            />
            <h2 className="text-gray-500 font-black text-[20px]">
              Hugh Jackman
            </h2>
            <p className="text-sm text-gray-500">CEO & Founder WOLVERINE.in</p>
            <Image
              className="inline-block py-2"
              src="/Wolves Claws.png"
              width={50}
              height={50}
              alt="quotes"
            />
            <p className="max-w-[200px] text-gray-500 text-center">
              The wolverine has a reputation for ferocity and strength out of
              proportion to its size, with the documented ability to kill prey
              many times larger than itself.
            </p>
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="bg-red-600 bg-[url(/maxresdefault.jpg)] bg-cover h-[500px] rounded-2xl flex items-center justify-center">
          <div className="bg-[#ffffffab] w-[90%] sm:w-[80%] md:w-[60%] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
            <button className="bg-black text-white px-4 py-2 rounded-md">
              15% Discount
            </button>
            <h2 className="font-extrabold text-2xl text-[#272727]">
              Deadpool & Wolverine In Theater Now
            </h2>
            <p className="text-gray-700 text-lg">
              Starting @ Rs:500
              <span className="font-bold ml-1">Book Your Tickets Now</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
