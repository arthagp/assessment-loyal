import React from "react";
import { MdMeetingRoom } from "react-icons/md";
import { IoMdMic, IoMdMicOff } from "react-icons/io";
import { FaVideo, FaVideoSlash, FaUsers, FaPhoneSlash } from "react-icons/fa";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

interface NavRoomProps {
  setActiveSheet: React.Dispatch<React.SetStateAction<string>>;
}

const NavRoom: React.FC<NavRoomProps> = ({ setActiveSheet }) => {
  const router = useRouter();

  const userIconClick = () => {
    setActiveSheet("user");
  };

  const breakoutRoomClick = () => {
    setActiveSheet("breakoutroom");
  };

  const goToDashboard = () => {
    router.push("/");
  };

  const iconSize = 25;
  return (
    <div className="fixed bottom-0 inset-x-0 p-5 px-10 bg-gray-800 flex justify-between items-center text-white">
      <div className="flex items-center gap-4">
        <p>11:02</p>
        <span className="h-9 w-[2px] bg-white"></span>
        <p>wds-fsw-rdw</p>
      </div>
      <div className="flex items-center gap-10">
        <FaPhoneSlash
          onClick={goToDashboard}
          className="cursor-pointer bg-red-400 rounded-full h-10 w-10 p-2"
          size={iconSize}
        />
      </div>
      <div className="flex items-center gap-5">
        <FaUsers
          className="cursor-pointer"
          size={iconSize}
          onClick={userIconClick}
        />
        <MdMeetingRoom
          className="cursor-pointer"
          size={iconSize}
          onClick={breakoutRoomClick}
        />
      </div>
    </div>
  );
};

export default NavRoom;
