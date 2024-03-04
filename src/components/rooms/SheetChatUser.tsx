import React, { useEffect, useState } from "react";
import { getChat } from "@/api/fetch";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getFirstThreeWord } from "@/lib/utils";
import LayoutSheet from "./LayoutSheet";

interface SheetChatUserProps {
  userId: string | null;
  setOpenChat: () => void;
}

const SheetChatUser: React.FC<SheetChatUserProps> = ({
  userId,
  setOpenChat,
}) => {
  const [chats, setChats] = useState([]);

  const handleChats = async () => {
    try {
      if (userId) {
        const response = await getChat({ userId });
        if (response) {
          setChats(response.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleChats();
  }, [userId]);

  return (
    <LayoutSheet>
      <Button className="my-2" onClick={setOpenChat}>
        Kembali
      </Button>
      <h2 className="text-lg font-semibold mb-2">
        Chat From : {userId ? userId : "Unknown"}
      </h2>
      {/* Daftar Pengguna dalam Rapat */}
      <div className="rounded-md w-full border border-neutral-400 ">
        <div className="flex justify-between border-b border-neutral-400 p-2">
          <p>Chats</p>
          <p>{chats.length}</p>
        </div>
        <div className="flex flex-col max-h-[400px] mt-2 p-2 px-5 overflow-y-auto gap-2">
          {chats.map((chat: any) => (
            <div className="flex flex-col gap-5 border-b text-sm">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="text-white text-sm bg-neutral-600">
                  {getFirstThreeWord(userId || "").toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <p>{chat.chat}</p>
            </div>
          ))}
        </div>
      </div>
    </LayoutSheet>
  );
};

export default SheetChatUser;
