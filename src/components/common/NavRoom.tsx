import React from "react";
import { IoMdMic, IoMdMicOff } from "react-icons/io";
import { FaVideo, FaVideoSlash, FaUsers, FaPhoneSlash } from "react-icons/fa";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

const NavRoom = () => {
  const router = useRouter();

  const goToDashboard = () => {
    router.push("/");
  };

  const iconSize = 25;
  return (
    <div className="fixed bottom-0 inset-x-0 p-5 bg-gray-800 flex justify-between items-center text-white">
      <div className="flex items-center gap-4">
        <p>11:02</p>
        <span className="h-9 w-[2px] bg-white"></span>
        <p>wds-fsw-rdw</p>
      </div>
      <div className="flex items-center gap-10">
        <IoMdMic className="cursor-pointer" size={iconSize} />
        {/* <IoMdMicOff className="cursor-pointer" size={iconSize} /> */}
        <FaVideo className="cursor-pointer" size={iconSize} />
        {/* <FaVideoSlash className="cursor-pointer" size={iconSize} /> */}
        <FaPhoneSlash
          onClick={goToDashboard}
          className="cursor-pointer bg-red-400 rounded-full h-10 w-10 p-2"
          size={iconSize}
        />
      </div>
      <div className="flex items-center gap-4">
        <FaUsers className="cursor-pointer" size={iconSize} />
        <BsChatSquareDotsFill className="cursor-pointer" size={iconSize} />
      </div>
    </div>
  );
};

export default NavRoom;
