import { addUser } from "@/app/lib/actions";
import React from "react";

export default function AddUserPage() {
  return (
    <section id="container" className="bg-bgSoft p-5 rounded-lg mt-5">
      <form action={addUser} className="flex flex-wrap justify-between gap-8">
        <input
          className="w-[45%] p-5 bg-bg text-text border-2 border-solid border-[#2e374a] rounded-sm "
          type="text"
          placeholder="username"
          name="username"
          required
        />
        <input
          className="w-[45%] p-5 bg-bg text-text border-2 border-solid border-[#2e374a] rounded-sm "
          type="email"
          placeholder="email"
          name="email"
          required
        />
        <input
          className="w-[45%] p-5 bg-bg text-text border-2 border-solid border-[#2e374a] rounded-sm "
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input
          className="w-[45%] p-5 bg-bg text-text border-2 border-solid border-[#2e374a] rounded-sm "
          type="phone"
          placeholder="phone"
          name="phone"
          required
        />
        <select
          className=" w-[45%] p-5 bg-bg text-text border-2 border-solid border-[#2e374a] rounded-sm "
          name="isAdmin"
          id="isAdmin"
        >
          <option
            className="bg-bg text-text p-2 rounded-md"
            value={false}
            selected
          >
            Is Admin?
          </option>
          <option className="bg-bg text-text p-2 rounded-md" value={true}>
            yes
          </option>
          <option className="bg-bg text-text p-2 rounded-md" value={false}>
            no
          </option>
        </select>

        <textarea
          className="w-full p-5 bg-bg text-text border-2 border-solid border-[#2e374a] rounded-sm "
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        />
        <button
          className="w-full p-8 bg-teal-600 text-text border-none rounded-md "
          type="submit"
        >
          {" "}
          Submit{" "}
        </button>
      </form>
    </section>
  );
}
