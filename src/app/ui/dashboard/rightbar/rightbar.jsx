import Image from "next/image";
import React from "react";
import { MdPlayCircleFilled } from "react-icons/md";

export default function RightBar() {
  return (
    <section className="fixed ">
      <div className="relative rounded-lg mb-5  bg-gradient-to-r py-5 px-6 from-[#182237] to-[#253352] ">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
          <Image
            className="object-cover opacity-20"
            src="/astronaut.png"
            alt="astronaut"
            fill
          />
        </div>
        <article className="flex flex-col gap-6">
          <span className="font-bold"> 🔥 NOW NOW NOW </span>
          <h3 className="font-medium text-sm text-textSoft">
            {" "}
            Some Prodect to boost your thingy ayeee{" "}
          </h3>
          <span> some over content </span>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="p-2.5 flex items-center bg-[#5d57c9] text-white w-fit border-none rounded-md ">
            <MdPlayCircleFilled /> Watch
          </button>
        </article>
      </div>
    </section>
  );
}
