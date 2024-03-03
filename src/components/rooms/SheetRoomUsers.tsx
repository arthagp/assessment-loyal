"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MdSearch } from "react-icons/md";
import { AuthUser } from "@/types/AuthUser";
import { User } from "@/types/User";
import { getUsers, verifyToken } from "@/api/fetch";
import { getFirstThreeWord } from "@/lib/utils";
import { useDebounce } from "use-debounce";

const SheetRoomUser = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  const [debounced] = useDebounce(searchQuery, 700);

  const handleUsers = async () => {
    try {
      const response = await getUsers();
      if (response) {
        setUsers(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAuthUser = async () => {
    try {
      const response = await verifyToken();
      if (response) {
        setAuthUser(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleAuthUser();
    handleUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [debounced, users]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-1/3 h-[95%] bg-gray-100 rounded-md p-5">
      <h2 className="text-lg font-semibold mb-2">Orang</h2>
      {/* Form Pencarian Pengguna */}
      <div className="border border-neutral-400 rounded md w-full h-10 my-6 flex items-center p-1">
        <MdSearch size={30} className="text-gray-500" />
        <input
          className="w-full h-full px-4 rounded md border-none bg-gray-100 focus:outline-none"
          type="text"
          placeholder="Telusuri Orang"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {/* Daftar Pengguna dalam Rapat */}
      <div className="rounded-md w-full border border-neutral-400 ">
        <div className="flex justify-between border-b border-neutral-400 p-2">
          <p>Kontributor</p>
          <p>{filteredUsers.length}</p>
        </div>
        <div className="flex flex-col max-h-[400px] mt-2 p-2 px-5 overflow-y-auto gap-2">
          {/* Anda */}
          <div className="flex items-center gap-1">
            <Avatar>
              <AvatarFallback className="text-white text-sm bg-neutral-600">
                {getFirstThreeWord(authUser?.name || "").toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <p className="ml-2">
              {authUser?.name} <span className="text-gray-500">(Anda)</span>
            </p>
          </div>
          {/* Users */}
          {filteredUsers.map((user) => (
            <div className="flex items-center gap-1">
              <Avatar>
                <AvatarFallback className="text-white text-sm bg-neutral-500">
                  {getFirstThreeWord(user?.name || "").toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <p className="ml-2">{user.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SheetRoomUser;
