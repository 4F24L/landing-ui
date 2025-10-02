import { IoIosArrowRoundForward } from "react-icons/io";
import type { BlogCardType } from "../lib/types";

const BlogCard = (card: BlogCardType) => {
  return (
    <div className="relative bg-white w-full p-3 py-5 rounded-3xl shadow space-y-4  text-lg group">
      <span className=" absolute bg-white rounded-full p-2 -rotate-45 right-5 top-7 opacity-0 group-hover:opacity-100 z-10">
        <IoIosArrowRoundForward size={30} />
      </span>
      <div className="overflow-hidden rounded-3xl">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-64 object-cover group-hover:scale-[1.015] duration-700 ease-in"
        />
      </div>
      <div className=" flex justify-between">
        <span>{card.title}</span>
        <span className=" flex items-center gap-2 bg-neutral-100 px-2.5 py-0.5 rounded-3xl">
          <span className=" size-1.5 bg-[#ff7926] rounded-full"></span>
           {card.tag}
          <span className=" size-1.5 bg-[#ff7926] rounded-full"></span>
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
