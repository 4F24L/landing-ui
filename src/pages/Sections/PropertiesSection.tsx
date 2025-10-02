import PropertyCard from "../../components/PropertyCard"
import type { HeaderProps } from "../../components/SectionHeader"
import SectionHeader from "../../components/SectionHeader"

const PropertiesHeader : HeaderProps= {
    btnText: 'Properties',
    title: 'Discover homes that Inspire',
    subtitle: 'Luxury residences where design meets comfort.'

}
const PropertiesSection = () => {
  return (
    <div className="">
        <SectionHeader {...PropertiesHeader} />

        <PropertyCard />
    </div>
  )
}

export default PropertiesSection