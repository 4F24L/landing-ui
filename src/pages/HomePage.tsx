import NavBar from "../components/NavBar"
import FeatureSection from "./Sections/FeatureSection"
import HeroNext from "./Sections/HeroNext"
import HeroSection from "./Sections/HeroSection"

const HomePage = () => {
  return (
    <div className="relative h-screen">
      <div className=" fixed w-full flex justify-center top-10 z-10">
        <NavBar/>
      </div>
        <HeroSection/>
        <HeroNext/>
        <FeatureSection/>
        
    </div>
  )
}

export default HomePage