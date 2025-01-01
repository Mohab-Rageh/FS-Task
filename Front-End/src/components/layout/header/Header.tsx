import { LeftSide } from "./LeftSide";
import RightSide from "./RightSide";

const Header = ({ name }: { name: string }) => {
  return (
    <header className="top-nav flex justify-between items-center  pt-6 pb-6 pl-10 pr-10 ">
      <LeftSide name={name} />
      <RightSide />
    </header>
  );
};

export default Header;
