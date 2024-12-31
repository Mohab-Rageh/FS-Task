import NotificationIcon from "../../../assets/notification.svg";
import SettingsIcon from "../../../assets/settings.svg";
import MailIcon from "../../../assets/mail.svg";
import PersonIcon from "../../../assets/person-thum.png";
import { Badge } from "@mui/material";

const RightSide = () => {
  return (
    <div className="right-side flex items-center">
      <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
        <Badge color="error" variant="dot">
          <img src={NotificationIcon} alt="Notifications" />
        </Badge>
      </button>
      <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
        <img src={MailIcon} alt="Notifications" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
        <img src={SettingsIcon} alt="Notifications" />
      </button>
      <img
        width={40}
        height={40}
        src={PersonIcon}
        alt="Avatar"
        className="w-10 h-10 rounded-2xl object-center object-cover"
      />
    </div>
  );
};

export default RightSide;
