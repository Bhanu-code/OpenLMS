"use client"
import { GraduationCap } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 py-3 backdrop-blur-sm sticky top-0 z-10 border-b-[0.5px] border-gray-300">
      <Link href={"/"}>
        <div className="flex gap-2 items-center">
          <GraduationCap size={30} />
          <h2 className="font-bold text-2xl">OpenLMS</h2>
        </div>
      </Link>
      <div className="flex gap-2 items-center">
            <Link href={"/signin"}> <Button>Sign In</Button></Link>
      </div>
    </div>
  );
}


