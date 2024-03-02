"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { verifyToken } from "@/api/fetch";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";

interface AuthUser {
  username: string;
  name: string;
  address: string;
}

const Navbar = () => {
  // logo, avatar (username), dan login/register , jika sudah login maka login/register disapper
  // fetching verifyToken setelah itu data nya di simpan di authUser

  const [authUser, setAuthUser] = useState<AuthUser | null>(null);

  const router = useRouter();

  const handleAuthUser = async () => {
    try {
      const response: AxiosResponse<AuthUser> | undefined = await verifyToken();
      if (response) {
        setAuthUser(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const routeLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  // console.log(authUser);

  useEffect(() => {
    handleAuthUser();
  }, []);

  return (
    <div className="w-full fixed inset-0 p-10 h-16 bg-gray-200 flex justify-between items-center">
      <div>
        <Link href={"/"} className="text-neutral-600 text-3xl font-semibold">
          <span className="text-blue-400">Go</span>Meet
        </Link>
      </div>
      <div className="flex justify-center items-center gap-5">
        {authUser && ( // Tampilkan elemen hanya jika authUser tersedia
          <>
            <p className="text-neutral-600 font-light">{authUser.name}</p>
            <Avatar>
              {/* Sementara avatar */}
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AGP</AvatarFallback>
            </Avatar>
            {/* Garis vertikal */}
          </>
        )}
        <span className="h-10 w-[2px] bg-black"></span>
        <div className="flex gap-3">
          {authUser ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Button onClick={routeLogin}>Login</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
