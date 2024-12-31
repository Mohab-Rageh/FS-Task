import { useState } from "react";
import MainLogo from "../../../assets/Preformly-Logo.svg";
import leftSideBarData from "./LeftSideBarData";

const LeftSidebar = () => {
  const [selected, setSelected] = useState("Section 1");

  return (
    <aside className="left-sidebar bg-white border-r flex flex-col gap-10 p-6">
      <img
        className="cursor-pointer"
        width={45}
        height={45}
        src={MainLogo}
        alt="Logo"
      />

      <ul className="flex flex-col gap-6">
        {leftSideBarData.map(({ name, Icon }) => (
          <li
            key={name}
            className={` sidebar-item flex justify-center items-center p-2 cursor-pointer ${selected === name ? "selected" : ""}`}
            onClick={() => setSelected(name)}
          >
            {Icon}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSidebar;
