"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Pagination({ count }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const page = searchParams.get("page") || 1;
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE + ITEM_PER_PAGE * (parseInt(page) - 1) < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div
      id="container"
      className="flex flex-row p-2.5 justify-between items-center"
    >
      {hasPrev ? (
        <button
          onClick={() => handleChangePage("prev")}
          className="py-1.5 bg-slate-700 rounded-md hover:bg-slate-500 px-2.5 disabled:cursor-not-allowed disabled:bg-slate-700"
        >
          Previous
        </button>
      ) : (
        <div> </div>
      )}

      {hasNext ? (
        <button
          onClick={() => handleChangePage("next")}
          className="py-1.5 bg-slate-700 rounded-md hover:bg-slate-500 px-2.5 disabled:cursor-not-allowed"
        >
          Next
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
