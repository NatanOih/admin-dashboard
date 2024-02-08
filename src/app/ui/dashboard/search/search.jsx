"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import React from "react";
import { MdSearch } from "react-icons/md";

export default function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      e.target.value.length > 1 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <article
      id="container"
      className="flex items-center gap-2.5 bg-[#2e374a] p-2.5 rounded-lg w-max"
    >
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleSearch}
        className="bg-transparent border-none outline-none text-text "
      />
    </article>
  );
}
