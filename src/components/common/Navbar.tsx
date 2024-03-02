import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  // logo, avatar (username), dan login/register , jika sudah login maka login/register disapper
  return (
    <div className="w-full fixed inset-0 p-10 h-16 bg-gray-200 flex justify-between items-center">
      <div>
        <Link href={"/"} className="text-neutral-600 text-3xl font-semibold">
          <span className="text-blue-400">Go</span>Meet
        </Link>
      </div>
      <div className="flex justify-center items-center gap-5">
        <p className="text-neutral-600 font-light">Username</p>
        <Avatar>
          {/* sementara avatar */}
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>AGP</AvatarFallback>
        </Avatar>
        {/* garis vertikal */}
        <span className="h-10 w-[2px] bg-black"></span>
        <div className="flex gap-3">
          <Button>Login</Button>
          <Button variant={"secondary"}>Register</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
