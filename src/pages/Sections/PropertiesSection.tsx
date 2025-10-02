import PropertyCard from "../../components/PropertyCard";
import type { HeaderProps } from "../../components/SectionHeader";
import SectionHeader from "../../components/SectionHeader";
import { PropertyCards } from "../../lib/Constant";
import type { PropertyCardType } from "../../lib/types";

const PropertiesHeader: HeaderProps = {
  btnText: "Properties",
  title: "Discover homes that Inspire",
  subtitle: "Luxury residences where design meets comfort.",
};

const PropertiesSection = () => {
  return (
    <div className=" mb-28">
      <SectionHeader {...PropertiesHeader} />

      <div className=" flex flex-wrap w-full max-w-7xl mx-auto mt-12">
        {PropertyCards.map((card: PropertyCardType, index) => (
          <div key={index} className="w-1/2 p-2">
            <PropertyCard {...card} />
          </div>
        ))}
      </div>

      <button className=" button-black flex mx-auto mt-14 ">See all properties</button>
    </div>
  );
};

export default PropertiesSection;
