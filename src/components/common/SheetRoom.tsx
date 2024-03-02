"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const SheetRoom = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-1/3 h-[95%] bg-gray-100 rounded-md p-4">
      <h2 className="text-lg font-semibold mb-2">Orang DALAM RAPAT</h2>
      <div className="border-b-2 border-gray-300 mb-2"></div>
      {/* Form Pencarian Pengguna */}
      <div className="mb-4">
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700"
        >
          Cari Pengguna:
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="search"
            id="search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Masukkan nama pengguna..."
          />
        </div>
      </div>
      {/* Daftar Pengguna dalam Rapat */}
      <div className="rounded-md h-auto w-[80%]">
        <div>
          <p>Kontributor</p>
          <p>1</p>
        </div>
        <div className="flex items-center mt-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AGP</AvatarFallback>
          </Avatar>
          <p className="ml-2">
            Artha Gusfi P <span className="text-gray-500">(Anda)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SheetRoom;
