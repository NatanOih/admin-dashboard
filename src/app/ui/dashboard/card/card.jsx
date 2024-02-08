import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

export default function Card() {
  return (
    <div className="flex flex-row hover:bg-[#2e374a] w-full bg-bgSoft p-[20px] gap-[20px] rounded-lg cursor-pointer">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-[20px]">
        <span className="text-xl font-extrabold">Title</span>
        <span className="font-bold text-md">10.3</span>
        <span>
          {" "}
          <span className="text-green-500"> 12%</span> more moneyyy
        </span>
      </div>
    </div>
  );
}
