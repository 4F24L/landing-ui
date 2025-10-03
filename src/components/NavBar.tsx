import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`md:max-w-2xl w-full bg-white flex flex-col md:flex-row justify-between items-center mx-11 px-2.5 py-1 transition-[max-height] scale-105 duration-700 ease-in md:h-14 
        ${isOpen ? "max-h-72 h-64 rounded-4xl" : "max-h-16 h-16 rounded-full"}`}
    >
        <p className="hidden md:block font-medium text-lg px-2">Cetfar</p>

      <div className=" flex md:hidden justify-between items-center h-full max-h-16 w-full">
        <p className=" font-medium text-lg px-2">Cetfar</p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" md:hidden mr-3 transition-transform duration-1000"
        >
          {isOpen ? <RxCross2 size={25} /> : <MdOutlineMenu size={25} />}{" "}
        </button>
      </div>

      <ul className="hidden md:flex button-nav space-x-1.5">
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#properties">Properties</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#faq">Faq</a>
        </li>
      </ul>

      <button className="hidden md:block button-black">Get Started</button>

      {/* Mobile Menu  */}
      <div
        className={`overflow-hidden md:hidden  w-full flex flex-col items-end ${
          isOpen ? "visible" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-end md:hidden button-nav space-x-1.5">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#properties">Properties</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#faq">Faq</a>
          </li>
        </ul>

        <button className="block md:hidden button-black w-full my-5 ">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
