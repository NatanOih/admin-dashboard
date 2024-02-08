"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MenuLink({ item }) {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`hover:bg-[#2e374a] rounded-lg flex p-[15px] flex-row gap-[10px] ${
        pathname === item.path && "bg-[#2e374a]"
      } items-center`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}
