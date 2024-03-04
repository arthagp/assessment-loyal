import React, { useEffect } from "react";
import { MdMeetingRoom } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { separateWord, getTime } from "@/lib/utils";

interface NavRoomProps {
  setActiveSheet: React.Dispatch<React.SetStateAction<string>>;
}

const NavRoom: React.FC<NavRoomProps> = ({ setActiveSheet }) => {
  const pathname = usePathname();

  const userIconClick = () => {
    setActiveSheet("user");
  };

  const breakoutRoomClick = () => {
    setActiveSheet("breakoutroom");
  };

  const iconSize = 25;
  return (
    <div className="fixed bottom-0 inset-x-0 p-5 px-10 bg-gray-800 flex justify-between items-center text-white gap-3">
      <div className="flex items-center gap-4">
        <p>{getTime()}</p>
        <span className="h-9 w-[2px] bg-white"></span>
        <p className="hidden md:block text-center">{separateWord(pathname)}</p>
      </div>
      <div className="flex items-center gap-10"></div>
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
