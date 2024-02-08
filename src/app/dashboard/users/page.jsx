import { deleteUser } from "@/app/lib/actions";
import { fetchUsers } from "@/app/lib/utils";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function UsersPage({ searchParams }) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || "1";
  const { count, users } = await fetchUsers(q, page);

  return (
    <section id="container" className="bg-bgSoft rounded-md p-4 mt-4">
      <div id="top" className="flex items-center justify-between">
        <Search placeholder="Search for a user..." />

        <Link href="/dashboard/users/add">
          <button className="p-2.5 bg-[#5d57c9] text-text border-none rounded  ">
            Add New
          </button>
        </Link>
      </div>
      <table className="m-2 w-full">
        <thead>
          <tr className="items-center">
            <td className="p-2.5">Name</td>
            <td className="p-2.5">Email</td>
            <td className="p-2.5">Created At</td>
            <td className="p-2.5">Role</td>
            <td className="p-2.5">Status</td>
            <td className="p-2.5">Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="p-2.5">
                <div
                  id="user"
                  className="flex m-1 gap-2.5 justify-start items-center"
                >
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full object-fit max-h-[50px]"
                  />
                  {user.username}
                </div>
              </td>
              <td className="p-2.5"> {user.email} </td>
              <td className="p-2.5">
                {user?.createdAt?.toString().slice(4, 16)}
              </td>
              <td className="p-2.5">{user?.isAdmin ? "Admin" : "Not Admin"}</td>
              <td className="p-2.5">
                {user?.isActive ? "Active" : "Not Active"}
              </td>
              <td className="p-2.5">
                <div id="buttons" className="flex flex-row gap-2.5">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className="px-2.5 py-1.5 text-text border-none rounded-md bg-teal-600 ">
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
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
