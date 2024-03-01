import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  // logo, avatar (username), dan login/register , jika sudah login maka login/register disapper
  return (
    <div className="w-full fixed inset-0 p-10 h-16 bg-gray-100 flex justify-between items-center">
      <div>
        <h1 className="text-neutral-600 text-3xl font-semibold">
          <span className="text-blue-400">Go</span>Meet
        </h1>
      </div>
      <div className="flex justify-center items-center gap-5">
        <p className="text-neutral-600 font-light">Username</p>
        <Avatar>
          {/* sementara avatar */}
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>AGP</AvatarFallback>
        </Avatar>
        <span className="h-10 w-1 bg-black"></span>
        <div className="flex gap-3">
          <Button>Login</Button>
          <Button variant={"secondary"}>Register</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
