import { squareImg1, squareImg2 } from "../lib/Constant";

const SquareBox = () => {
  return (
    <div className=" relative flex size-24">
      <img src={squareImg1} alt="SquareImg2" className="square-img translate-4 " />
      <img src={squareImg2} alt="SquareImg1" className="square-img" />
    </div>
  );
};

export default SquareBox;
