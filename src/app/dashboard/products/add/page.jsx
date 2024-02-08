import { addProduct } from "@/app/lib/actions";
import React from "react";

export default function AddProductPage() {
  return (
    <section id="container" className="bg-bgSoft p-5 rounded-lg mt-5">
      <form
        action={addProduct}
        className="flex flex-wrap justify-between gap-8"
      >
        <input
          className="w-[45%] p-5 bg-bg text-text border-2 border-solid border-[#2e374a] rounded-sm "
          type="text"
          placeholder="title"
          name="title"
          required
        />
        <select
          className=" w-[45%] p-5 bg-bg text-text border-2 border-solid border-[#2e374a] rounded-sm "
          name="cat"
          id="cat"
        >
          <option className="bg-bg text-text p-2 rounded-md" value="general">
            {" "}
            Choose a category
          </option>
          <option className="bg-bg text-text p-2 rounded-md" value="phone">
            {" "}
            Kitech{" "}
          </option>
          <option className="bg-bg text-text p-2 rounded-md" value="computer">
            {" "}
            computer{" "}
          </option>
        </select>
        <input
          className=" w-[45%] p-5 bg-bg text-text border-2 border-solid border-[#2e374a] rounded-sm "
          inputmode="numeric"
          placeholder="price"
          name="stock"
        />
        <input
          className=" w-[45%] p-5 bg-bg text-text border-2 border-solid border-[#2e374a] rounded-sm "
          inputmode="numeric"
          placeholder="price"
          name="stock"
        />
        <input
          className="w-[45%]  p-5 bg-bg text-text border-2 border-solid border-[#2e374a] rounded-sm "
          inputmode="text"
          placeholder="color"
          name="color"
        />
        <input
          className="w-[45%]  p-5 bg-bg text-text border-2 border-solid border-[#2e374a] rounded-sm "
          inputmode="text"
          placeholder="size"
          name="size"
        />
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
