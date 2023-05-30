import React from "react";
import { FormatCurrency } from "../index";

const Card = ({ price, name, img_url }) => {
  const quantity = 0;
  return (
    <div className="group relative ">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 p-3">
        <img
          src={img_url}
          alt="Front of men&#039;s Basic Tee in black."
          className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-md"
        />
      </div>

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#" className="">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {name}
            </a>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {FormatCurrency(price)}{" "}
        </p>
      </div>
      <div className="mt-3 flex itmes-center justify-center">
        {quantity === 0 ? (
          <button className=" rounded-full text-white py-1 px-3 bg-blue-500 shadow-lg shadow-blue-500/50 ">Add to cart</button>
        ) : (
            <div className="flex flex-col items-center justify-center">
                <div className="flex gap-5 items-center justify-center">
                    <button className="rounded-tr-lg rounded-bl-lg  bg-red-500 w-8 text-white font-bold text-xl flex items-center justify-center">
                    -
                    </button>
                    <div className="font-bold">1 in cart</div>
                    <button className="rounded-tr-lg rounded-bl-lg bg-blue-500 w-8 text-white font-bold text-xl flex items-center justify-center">+</button>
                </div>
                <button className="bg-red-500 rounded-full py-1 px-3 mt-2 text-white font-semibold">Remove</button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Card;
