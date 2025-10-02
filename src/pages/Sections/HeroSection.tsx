import { heroImg } from "../../lib/Constant";

const HeroSection = () => {
  return (
    <div className=" h-screen p-5">
      <div
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
        className={` bg-cover bg-center h-full flex flex-col text-white justify-center items-center rounded-[2.5rem] space-y-4`}
      >
        <p className=" ">Modern Luxury Residence</p>
        <p className="text-6xl mt-2">Exceptional living Starts Now</p>
        <p className="text-lg max-w-lg text-center font-medium">
          Contemporary architecture, prime locations, and upscale home design to
          inspire your next journey.
        </p>
        <button className="button-white">Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
