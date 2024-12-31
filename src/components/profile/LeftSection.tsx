import { Divider } from "@mui/material";
import PersonImage from "../../assets/Person.png";
import CameraImage from "../../assets/camera.svg";
import { useLocation, useNavigate } from "react-router-dom";

interface LeftSectionProps {
  avatar?: string;
  name: string;
  title: string;
  selectedSection: string;
  setSelectedSection: (section: string) => void;
}

const LeftSection = ({
  avatar = PersonImage,
  name,
  title,
  selectedSection,
  setSelectedSection,
}: LeftSectionProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const updateSection = (newSection: string) => {
    queryParams.set("section", newSection);
    navigate(`${location.pathname}?${queryParams.toString()}`);
    setSelectedSection(newSection);
  };

  const renderSectionItem = (section: string, label: string) => (
    <li
      onClick={() => updateSection(section)}
      className={`cursor-pointer p-4 rounded-lg text-[18px] leading-[27px] text-[#051d49] 
        ${selectedSection === section ? "bg-[#f4f8fe] text-[#0f6cbd]" : ""}`}
    >
      {label}
    </li>
  );

  return (
    <div className="flex flex-col gap-4 w-[393px] bg-white rounded-[24px] p-6 shadow-lg">
      <div className="p-4 flex flex-col gap-4 ">
        <div className="relative w-fit">
          <img src={avatar} alt="Person" width={120} height={120} />
          <img
            src={CameraImage}
            alt="Upload img"
            width={40}
            height={40}
            className="absolute bottom-[-8px] right-[-8px] cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-[20px] text-[#051d49]">
            {name}
          </span>
          <span className="text-[16px] text-[#737791]">{title}</span>
        </div>
      </div>
      <Divider />
      <div className="p-4">
        <ul className="flex flex-col gap-2">
          {renderSectionItem("personal-information", "Personal Information")}
          {renderSectionItem("financial-information", "Financial Information")}
        </ul>
      </div>
    </div>
  );
};

export default LeftSection;
