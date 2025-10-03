import { MdStar } from "react-icons/md";
import FeatureCard from "../../components/FeatureCard";
import SectionHeader, {
  type HeaderProps,
} from "../../components/SectionHeader";
import { featCards } from "../../lib/Constant";
import type { FeatCard } from "../../lib/types";

const FeatureHeader: HeaderProps = {
  btnText: "Features",
  title: "The essence of extraordinary living lies in the Little things.",
  subtitle: "Explore what makes each Cetfar home unique.",
};

const FeatureSection = () => {
  return (
    <div className=" mb-28">
      <SectionHeader {...FeatureHeader} />

      <div className=" md:columns-3 gap-4 mt-12 max-w-sm sm:max-w-lg md:max-w-7xl mx-auto">
        {featCards.map((card: FeatCard, index) => (
          <div key={index} className=" break-inside-avoid mb-4">
            <FeatureCard {...card} />
          </div>
        ))}
      </div>

      <button className=" flex items-center justify-center rounded-3xl bg-white text-lg px-5 py-2.5 gap-2 mx-auto my-8 shadow-md">
        <MdStar color="#ff7926" />
        Trusted by 50+ clients
      </button>
    </div>
  );
};

export default FeatureSection;
