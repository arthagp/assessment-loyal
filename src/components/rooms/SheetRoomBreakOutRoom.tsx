"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MdSearch } from "react-icons/md";
import { AuthUser } from "@/types/AuthUser";
import { User } from "@/types/User";
import { getUsers, verifyToken } from "@/api/fetch";
import { getFirstThreeWord } from "@/lib/utils";
import { useDebounce } from "use-debounce";
import { getBreakOutRooms } from "@/api/fetch";

type ListRoom = {
  id: string;
  name: string;
  userIds: string[];
};

const SheetRoomBreakOutRoom = () => {
  //TODO : Daftar List, jumlah/length room
  //TODO : Nama room, jumlah user di dalam room
  const [listRoom, setListRoom] = useState<ListRoom[]>([]);

  const handleListRoom = async () => {
    try {
      const response = await getBreakOutRooms();
      if (response) {
        setListRoom(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleListRoom();
  }, []);

  return (
    <div className="w-1/3 h-[95%] bg-gray-100 rounded-md p-5">
      <h2 className="text-lg font-semibold mb-2">Breakout Room</h2>
      {/* Form Pencarian Pengguna */}
      {/* Daftar Pengguna dalam Rapat */}
      <div className="rounded-md w-full border border-neutral-400 ">
        <div className="flex justify-between border-b border-neutral-400 p-3">
          <p>Daftar Room</p>
          <p>{listRoom.length}</p>
        </div>
        <div className="flex flex-col max-h-[400px] mt-2 p-3 overflow-y-auto gap-2">
          {/* Daftar breakout room */}
          {listRoom.map((list) => (
            <div key={list.id} className="flex justify-between">
              <h4>{list.name}</h4>
              <p>{list.userIds.length} Peserta</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SheetRoomBreakOutRoom;
