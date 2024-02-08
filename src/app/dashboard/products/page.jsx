import { deleteProduct } from "@/app/lib/actions";
import { fetchProducts } from "@/app/lib/utils";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Products({ searchParams }) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || "1";
  const { count, products } = await fetchProducts(q, page);

  return (
    <section id="container" className="bg-bgSoft rounded-md p-5 mt-4">
      <div id="top" className="flex items-center justify-between">
        <Search placeholder="Search for a product..." />

        <Link href="/dashboard/products/add">
          <button className="p-2.5 bg-[#5d57c9] text-text border-none rounded  ">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-2.5">Title</td>
            <td className="p-2.5">Description</td>
            <td className="p-2.5">Price</td>
            <td className="p-2.5">Created at</td>
            <td className="p-2.5">Stock</td>
            <td className="p-2.5">Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product?.id}>
              <td className="p-2.5">
                <div id="user" className="flex gap-2.5 items-center">
                  <Image
                    src={product.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  {product.title}
                </div>
              </td>
              <td className="p-2.5"> {product.desc} </td>
              <td className="p-2.5"> {product.prcie} </td>
              <td className="p-2.5">
                {product.createAt.toString.slice(4, 16)}
              </td>
              <td className="p-2.5"> {product.stock}</td>

              <td className="p-2.5">
                <div id="buttons" className="flex flex-row gap-2.5">
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className="px-2.5 py-1.5 text-text border-none rounded-md bg-teal-600 ">
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <button className="px-2.5 py-1.5 text-text border-none rounded-md bg-red-700 ">
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </section>
  );
}
