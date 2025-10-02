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
    <div className=" mb-20">
      <SectionHeader {...FeatureHeader} />

      <div className=" columns-3 gap-4 mt-12 max-w-7xl mx-auto">
        {featCards.map((card: FeatCard, index) => (
          <div key={index} className=" break-inside-avoid mb-4">
            <FeatureCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
