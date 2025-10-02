import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import type { faqType } from "../lib/types";

const FaqCard = (faq: faqType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className=" bg-white rounded-2xl shadow-md p-2 w-full"
    >
      <div className=" flex justify-between pr-4 ">
        <p className=" faq">{faq.question} </p>
        <span
          className={`${
            isOpen ? "rotate-45 -translate-1" : "rotate-0"
          } transition-transform duration-700 pt-3`}
        >
          <FaPlus />
        </span>
      </div>
      <div
        className={`overflow-hidden transition-[max-height] duration-700 ease-in-out 
        ${isOpen ? "max-h-20" : "max-h-0"} 
        text-neutral-600 border-t border-neutral-100 `}
      >
        <p className="text-neutral-500 faq">{faq.answer}</p>
      </div>
    </div>
  );
};

export default FaqCard;
