import Navbar from "@/components/common/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";

const LobbyRoom = () => {
  // TODO: mengecek jika tidak ada orang yang masuk di code tersebut maka, break out room notif 'tidak ada orang disini', akan tetapi jika ada muncul avatar masing2 username 'AG'/'GP'..

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-gray-100 flex justify-between items-center p-20">
        <div className="w-1/2">
          <div className="w-[600px] h-[500px] bg-black"></div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 w-1/2">
          <div>
            <h2 className="text-4xl font-semibold">Siap Bergabung?</h2>
            {/* cek apakah ada room */}
            <p>Tidak ada orang lain di sini.</p>
          </div>
          <div className="flex justify-center items-center gap-5">
            <Button className="rounded-2xl">Gabung Sekarang</Button>
            <Button className="rounded-2xl bg-gray-200 text-gray-700 hover:bg-gray-300">
              Share screen
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LobbyRoom;
