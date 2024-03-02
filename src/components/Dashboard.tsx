"use client";

import React, { useState } from "react";
import Image from "next/image";
import heroImage from "../../public/hero-image.svg";
import { Button } from "./ui/button";
import { FaVideo, FaKeyboard } from "react-icons/fa";
import useInput from "@/hooks/useInput";
import Modal from "./common/Modal";

const Dashboard = () => {
  const [value, onChange, reset] = useInput("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  // console.log(isOpen);

  const valueLink = "qed-wrf-qwe";
  return (
    <>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)} accessLink={valueLink} />
      )}
      <div className="w-full min-h-screen bg-gray-100 flex justify-between items-center p-5 lg:p-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center max-sm:mt-20">
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-10">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 lg:mb-8">
              Rapat dan Video Untuk Semua Orang
            </h1>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4 lg:mb-8">
              Rapat dan Video Untuk Semua Orang adalah platform komunikasi
              online yang memungkinkan pengguna untuk melakukan rapat,
              konferensi, dan berbagi video dengan mudah. Dengan fitur-fitur
              canggih yang disediakan, platform ini mengubah cara orang
              berinteraksi dan berkolaborasi secara virtual.
            </p>
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
              <Button onClick={openModal} className="flex gap-2">
                <span>
                  <FaVideo />
                </span>{" "}
                Rapat Baru
              </Button>
              <div className="flex items-center rounded-lg px-4 py-2 bg-white w-full lg:w-auto">
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
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
