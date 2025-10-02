import { MdStar } from "react-icons/md";
import Slider from "../../components/Slider";
import SquareBox from "../../components/SquareBox";
import UserIcon from "../../components/UserIcon";
import { user1 } from "../../lib/Constant";

const HeroNext = () => {
  return (
    <div className=" w-full flex flex-col justify-center items-center py-28">
      <SquareBox />
      <div className=" text-2xl flex mt-3 gap-2">
        <MdStar color="#ff7926" />
        <MdStar color="#ff7926" />
        <MdStar color="#ff7926" />
        <MdStar color="#ff7926" />
      </div>
      <p className=" text-5xl max-w-5xl text-center text-neutral-800 my-5 leading-tight">
        It feels healthier, smoother & more radiant than ever. I love knowing
        I’m using something natural and effective!
      </p>

      <div className=" flex flex-col items-center">
        <UserIcon imgUrl={user1} />
        <p className=" font-medium text-lg mt-1.5">Minedly Licsa</p>
        <p className=" text-neutral-600 text-sm">@Ceo Faunder</p>
      </div>

      <Slider/>
    </div>
  );
};

export default HeroNext;
