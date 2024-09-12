import React from "react";
import Star from "../assets/Star.svg";
import StartFilled from "../assets/Star_fill.svg";

const Card = ({ item }) => {
  const { name, popular, price, rating, votes, image, available } = item;
  return (
    <div>
      <div className="relative min-h-[22rem] min-w-80">
        <img
          className="w-full h-auto object-cover rounded-2xl"
          src={image}
          alt={name}
        />
        {popular && (
          <span className="bg-yellow text-black absolute top-2 left-2 px-3 py-1 rounded-full text-xs font-semibold">
            Popular
          </span>
        )}
        <div className="mt-2">
          <div className="flex justify-between items-center p-1">
            <h2 className="text-2xl font-semibold text-white">{name}</h2>
            <p className="text-base text-gray-dark font-bold rounded-lg py-0.5 px-3 bg-green-light">
              {price}
            </p>
          </div>
          <div className="flex justify-between items-center mt-1">
            <div>
              <img
                src={votes >= 1 ? StartFilled : Star}
                alt="Star"
                width={22}
                height={22}
                className="mr-1 inline-block"
              />
              <span className="text-base text-gray-light font-semibold">
                {rating} ({votes} votes)
              </span>
            </div>
            {!available && <p className="text-sm text-red">Sold out</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
