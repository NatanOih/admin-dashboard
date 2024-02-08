import Image from "next/image";
import React from "react";

export default function Transactions() {
  return (
    <article className="bg-bgSoft p-5 rounded-xl flex flex-col gap-5">
      <h2 className="font-extralight text-textSoft ">Lastet Transactions</h2>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-1.5">Name</td>
            <td className="p-1.5">Status</td>
            <td className="p-1.5">Date</td>
            <td className="p-1.5">Name</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-1.5">
              <div className="flex gap-2.5 items-center">
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />{" "}
                John Doe
              </div>
            </td>
            <td>
              <span
                className={`${"p-1.5 bg-green-800 rounded-sm text-sm"} ${""}`}
              >
                Pending
              </span>
            </td>
            <td className="p-1.5 "> 15.02.2003 </td>
            <td className="p-1.5"> $3.200 </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
