"use client";

import React, { useState } from "react";
import Image from "next/image";
import heroImage from "../../public/hero-image.svg";
import { Button } from "./ui/button";
import { FaVideo, FaKeyboard } from "react-icons/fa";
import useInput from "@/hooks/useInput";

const Dashboard = () => {
  //note : sementara di dalam app/page menggunakan CSR

  //TODO: jika input ada isinya maka button gabung aktivasi, jika tidak ada isinya button gabung di disable
  const { value, onChange, reset } = useInput("");

  return (
    <div className="w-full min-h-screen bg-gray-200 flex justify-between items-center p-20">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <div className="text-center lg:text-left lg:w-1/2 lg:pr-10">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6 sm:mb-8">
            Rapat dan Video Untuk Semua Orang
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
            Rapat dan Video Untuk Semua Orang adalah platform komunikasi online
            yang memungkinkan pengguna untuk melakukan rapat, konferensi, dan
            berbagi video dengan mudah. Dengan fitur-fitur canggih yang
            disediakan, platform ini mengubah cara orang berinteraksi dan
            berkolaborasi secara virtual.
          </p>
          <div className="flex gap-5">
            <Button className="flex gap-2">
              <span>
                <FaVideo />
              </span>{" "}
              Rapat Baru
            </Button>
            {/* TODO: input */}
            <div className="flex items-center rounded-lg px-4 py-2 bg-white">
              <span className="mr-2">
                <FaKeyboard />
              </span>
              <input
                type="text"
                placeholder="Masukan Kode"
                className="outline-none focus:border-blue-500 flex-grow"
                value={value}
                onChange={onChange}
              />
            </div>
            <button
              disabled={!value}
              className={`${
                value ? "bg-blue-500" : "bg-gray-300"
              } rounded-lg px-4 py-2 text-white`}
            >
              Gabung
            </button>
          </div>
        </div>
        <div className="flex justify-center lg:w-1/2 lg:pl-10">
          <Image
            src={heroImage}
            alt="Platform Video Conference"
            width={650}
            height={650}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
