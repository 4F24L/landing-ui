import { heroImg } from "../lib/Constant";
import type { HeaderProps } from "./SectionHeader";
import SectionHeader from "./SectionHeader";

const NewsLetterHeader: HeaderProps = {
  btnText: "Subscribe",
  title: "Where your vision Find Its Home",
};

const NewsLetter = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
      className={` bg-cover bg-center h-[500px] flex flex-col text-white justify-center items-center space-y-5 `}
    >
      <SectionHeader {...NewsLetterHeader} />
      <p className="-mt-3 mb-8">Mivar offers more than just a place to live</p>
      <div className=" relative w-full max-w-lg rounded-3xl overflow-hidden flex justify-center items-center">
          <button className="button-black absolute z-10 right-2 top-1">Submit</button>
        <input
          type="email"
          placeholder="JaneSmith@mail.com"
          className="bg-white placeholder:text-neutral-500 outline-none px-3 py-3 w-full "
        />
      </div>

      <p className=" font-medium mt-8">Your Stay, Reimagined with Comfort and Care</p>
    </div>
  );
};

export default NewsLetter;
