import React from "react";
import { IoMdMic, IoMdMicOff } from "react-icons/io";
import { FaVideo, FaVideoSlash, FaUsers } from "react-icons/fa";
import { BsChatSquareDotsFill } from "react-icons/bs";

const NavRoom = () => {
  const iconSize = 25;
  return (
    <div className="fixed bottom-0 inset-x-0 p-5 bg-gray-800 flex justify-between items-center text-white">
      <div className="flex items-center gap-4">
        <p>11:02</p>
        <span className="h-9 w-[2px] bg-white"></span>
        <p>wds-fsw-rdw</p>
      </div>
      <div className="flex items-center gap-4">
        <IoMdMic className="cursor-pointer" size={iconSize} />
        {/* <IoMdMicOff className="cursor-pointer" size={iconSize} /> */}
        <FaVideo className="cursor-pointer" size={iconSize} />
        {/* <FaVideoSlash className="cursor-pointer" size={iconSize} /> */}
      </div>
      <div className="flex items-center gap-4">
        <FaUsers className="cursor-pointer" size={iconSize} />
        <BsChatSquareDotsFill className="cursor-pointer" size={iconSize} />
      </div>
    </div>
  );
};

export default NavRoom;
