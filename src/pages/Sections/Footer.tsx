import NewsLetter from "../../components/NewsLetter";

const Footer = () => {
  return (
    <div className=" h-full">
      <NewsLetter />

      <div className=" gap-8 md:h-[30rem] flex flex-col md:flex-row justify-center md:justify-between md:items-center max-w-xs sm:max-w-2xl md:max-w-6xl mx-auto text-lg py-12 md:py-0">
        <div className=" flex flex-col gap-5">
          <p className=" font-semibold text-xl">Cetfar</p>
          <p className="text-wrap max-w-sm text-neutral-500 text-base">
            Contemporary architecture, prime locations, and upscale home design
            to inspire your next journey.
          </p>
        </div>
        <div className=" flex flex-col md:flex-row gap-10 leading-16 ">
          <div className="footer-style button-nav">
            <p>Pages</p>
            <li>Properties</li>
            <li>Features</li>
          </div>
          <div className="footer-style button-nav">
            <p>Resources</p>
            <li>Blog</li>
            <li>Contact</li>
          </div>
          <div className="footer-style button-nav">
            <p>Utility Pages</p>
            <li>Privacy Policy</li>
            <li>404</li>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
