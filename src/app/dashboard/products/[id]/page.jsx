import { fetchProduct } from "@/app/lib/utils";
import Image from "next/image";
import React from "react";

export default async function singleProductPage({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <section id="container" className="flex gap-12 mt-5">
      <div
        id="infoContainer"
        className="flex 1 flex-col gap-2 text-textSoft  bg-bgSoft p-5 font-bold rounded-xl relative h-max"
      >
        <div id="imgContainer" className="relative   h-[300px] w-[300px]">
          <Image className="rounded-xl " src="/noavatar.png" alt="ss" fill />
        </div>
        {product.title}
      </div>
      <div id="formContainer" className="flex-[3]  bg-bgSoft p-5 rounded-xl">
        <form
          action={updateProduct}
          className="flex flex-col gap-3
        
        
         [&>input]:p-5
         [&>input]:border-[#2e374a]
         [&>input]:rounded-md
         [&>input]:bg-bg
         [&>input]:text-text
        

         [&>select]:p-5
         [&>select]:border-[#2e374a]
         [&>select]:rounded-md
         [&>select]:bg-bg
         [&>select]:text-text
         
         [&>textarea]:p-5
         [&>textarea]:border-[#2e374a]
         [&>textarea]:rounded-md
         [&>textarea]:bg-bg
         [&>textarea]:text-text
         
         [&>label]:text-sm
         [&>label]:p-1

         [&>button]:w-full
         [&>button]:p-5
         [&>button]:bg-teal-600
         [&>button]:text-text
         [&>button]:border-none
         [&>button]:rounded-md
         [&>button]:cursor-pointer
         [&>button]:mt-5
         
         "
        >
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={product.size || "size"}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={product.desc}
          ></textarea>
          <label>Color</label>
          <button> Update </button>
        </form>
      </div>
    </section>
  );
}
