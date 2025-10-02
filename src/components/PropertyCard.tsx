import { GoLocation } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import type { PropertyCardType } from "../lib/types";

const PropertyCard = (card: PropertyCardType) => {
  return (
    <div className="relative bg-white w-full p-3 py-5 rounded-3xl shadow space-y-4  text-lg group">
      <span className=" absolute bg-white rounded-full p-2 -rotate-45 right-5 top-7 opacity-0 group-hover:opacity-100 z-10">
        <IoIosArrowRoundForward size={30} />
      </span>
      <div className="overflow-hidden rounded-3xl">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-80 object-cover group-hover:scale-[1.015] duration-700 ease-in"
        />
      </div>
      <div className=" flex justify-between">
        <span>{card.title}</span>
        <span className=" flex items-center ">
          <PiCurrencyDollarSimpleBold /> {card.price}
        </span>
      </div>
      <div className=" flex justify-between">
        <span className=" flex gap-2 items-center text-neutral-600">
          {" "}
          <GoLocation /> {card.location}
        </span>
        <span className="flex text-sm text-neutral-600 gap-2">
          <span className="card-btn">{card.beds} Bedroom</span>
          <span className="card-btn">{card.baths} Bathroom</span>
        </span>
      </div>
    </div>
  );
};

export default PropertyCard;
