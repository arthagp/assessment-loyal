import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";

type ModalProps = {
  onClose: () => void;
  accessLink: string;
};

const Modal = ({ onClose, accessLink }: ModalProps) => {
  const [copied, setCopied] = useState(false);

  // Fungsi untuk menyalin teks ke clipboard
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(accessLink)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      })
      .catch((error) => {
        console.error("Error copying to clipboard: ", error);
      });
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md mx-4">
        <div className="text-lg font-bold mb-4">Berikut Info Akses Anda</div>
        <div className="text-sm text-gray-600 mb-4">
          Kirimkan link ini kepada orang yang ingin diajak rapat. Pastikan untuk
          menyimpannya agar Anda juga dapat menggunakannya nanti.
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 relative">
          <input
            type="text"
            value={accessLink}
            readOnly
            className="flex-grow outline-none"
          />
          <button onClick={copyToClipboard} className="ml-2 focus:outline-none">
            <FiCopy className="text-gray-500 cursor-pointer" />
          </button>
          {copied && (
            <div className="absolute bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md bottom-0 right-0 mb-2 mr-2">
              Link berhasil disalin
            </div>
          )}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
