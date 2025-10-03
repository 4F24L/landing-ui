import NavBar from "../components/NavBar"
import BlogSection from "./Sections/BlogSection"
import FaqSection from "./Sections/FaqSection"
import FeatureSection from "./Sections/FeatureSection"
import Footer from "./Sections/Footer"
import HeroNext from "./Sections/HeroNext"
import HeroSection from "./Sections/HeroSection"
import PropertiesSection from "./Sections/PropertiesSection"

const HomePage = () => {
  return (
    <div className="relative h-screen overflow-x-hidden">
      <div className=" fixed w-full flex justify-center top-10 z-10">
        <NavBar/>
      </div>
        <HeroSection/>
        <HeroNext/>
        <FeatureSection/>
        <PropertiesSection/>
        <BlogSection/>
        <FaqSection/>
        <Footer/>
    </div>
  )
}

export default HomePage