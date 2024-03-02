import ContentMedia from "@/components/ContentMedia";
import NavRoom from "@/components/common/NavRoom";
import SheetRoom from "@/components/common/SheetRoom";
import React from "react";

const RoomPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex justify-center items-center gap-5 p-10 mb-10">
        <ContentMedia />
        <SheetRoom />
      </div>
      <NavRoom />
    </div>
  );
};

export default RoomPage;
