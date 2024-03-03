import React from "react";
import { FaUsers } from "react-icons/fa"; // Anda bisa mengganti dengan "react-icons" yang sesuai
import { MdMeetingRoom } from "react-icons/md";

interface NavRoomProps {
  setActiveSheet: React.Dispatch<React.SetStateAction<string>>;
}

const NavRoom: React.FC<NavRoomProps> = ({ setActiveSheet }) => {
  const userIconClick = () => {
    setActiveSheet("user");
  };

  const breakoutRoomClick = () => {
    setActiveSheet("breakoutroom");
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
        {/* Tambahkan tombol lain di sini jika diperlukan */}
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
