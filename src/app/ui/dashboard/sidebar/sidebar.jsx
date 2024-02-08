import { menuItems } from "@/app/lib/data";
import React, { Fragment } from "react";
import MenuLink from "./menuLink";
import Image from "next/image";
import { MdLogout } from "react-icons/md";
import { auth, signOut } from "@/app/auth";
import { logOut } from "@/app/lib/actions";

export default async function Sidebar() {
  const session = await auth();

  return (
    <div className="sticky top-[40px]">
      <div className="flex items-center gap-[20px] pb-[20px]">
        <Image
          className="rounded-full object-cover"
          src={session.img || "/noavatar.png"}
          alt="fsaf"
          width="50"
          height="50"
        />
        <div className="flex flex-col">
          <span className="font-extrabold"> {session.user.username} </span>
          <span className="text-sm text-textSoft"> Administrator </span>
        </div>
      </div>
      <ul className="list-none flex flex-col p-1 justify-center gap-10">
        {menuItems.map((category) => (
          <li className="flex flex-col gap-2" key={category.title}>
            <span className="font-bold text-md text-textSoft">
              {category.title}
            </span>
            {category.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
      <form action={logOut}>
        <button
          className={`hover:bg-[#2e374a] rounded-lg flex p-[15px] flex-row gap-[10px] cursor-pointer items-center`}
        >
          <MdLogout /> Log Out
        </button>
      </form>
    </div>
  );
}
