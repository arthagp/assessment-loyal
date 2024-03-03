import React, { useState } from "react";
import ContentMedia from "@/components/etc/ContentMedia";
import NavRoom from "@/components/common/NavRoom";
import SheetRoomUser from "@/components/rooms/SheetRoomUsers";
import SheetRoomBreakOutRoom from "./SheetRoomBreakOutRoom";
import MediaAccess from "../etc/MediaAccess";

const RoomPage = () => {
  const [activeSheet, setActiveSheet] = useState("user"); // Inisialisasi state activeSheet dengan "user"

  return (
    <div className="flex flex-col md:h-screen">
      <div className="flex-1 flex max-sm:flex-col justify-center items-center gap-5 p-5 md:p-10 mb-10">
        <MediaAccess />
        {activeSheet === "user" && <SheetRoomUser />}
        {activeSheet === "breakoutroom" && <SheetRoomBreakOutRoom />}
      </div>
      <NavRoom setActiveSheet={setActiveSheet} />{" "}
    </div>
  );
};

export default RoomPage;
