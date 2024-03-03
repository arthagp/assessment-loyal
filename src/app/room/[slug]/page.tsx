"use client";

import React, { useState } from "react";
import RoomPage from "@/components/rooms/Room";
import Navbar from "@/components/common/Navbar";
import { Button } from "@/components/ui/button";
import MediaAccess from "@/components/etc/MediaAccess";

const LobbyRoom = () => {
  const [showRoom, setShowRoom] = useState(false);

  const routeToRoom = () => {
    setShowRoom(true);
  };

  const size = 30;

  return (
    <>
      {showRoom ? (
        <RoomPage />
      ) : (
        <>
          <Navbar />
          <div className="w-full max-sm:flex-col min-h-screen bg-gray-100 flex md:justify-between justify-around items-center md:p-20">
            <div className="w-1/2 max-sm:w-[90%] flex justify-center items-center mt-20">
              <MediaAccess />
            </div>
            <div className="flex flex-col justify-center items-center gap-10 w-1/2">
              <div>
                <h2 className="text-4xl font-semibold">Siap Bergabung?</h2>
                {/* (optional) cek apakah ada room */}
                <p>Tidak ada orang lain di sini.</p>
              </div>
              <div className="flex justify-center items-center gap-5">
                <Button onClick={routeToRoom} className="rounded-2xl">
                  Gabung Sekarang
                </Button>
                <Button className="rounded-2xl bg-gray-200 text-gray-700 hover:bg-gray-300">
                  Share screen
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LobbyRoom;
