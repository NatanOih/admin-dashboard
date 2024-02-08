"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between p-[20px] rounded-lg items-center bg-bgSoft">
      <span className="text-textSoft font-bold capitalize">
        {pathname.split("/").pop()}{" "}
      </span>
      <article className="flex flex-row items-center gap-10">
        <div className="flex p-[10px] rounded-lg items-center gap-[10px] bg-[#2e374a]">
          <MdSearch />
          <input
            type="text"
            className="bg-transparent border-none outline-none text-text"
            placeholder="Search"
          />
        </div>
        <div className="flex gap-[20px]">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </article>
    </nav>
  );
}
