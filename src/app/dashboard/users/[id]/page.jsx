import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/utils";
import Image from "next/image";
import React from "react";

export default async function singleUserPage({ params }) {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <section id="container" className="flex gap-12 mt-5">
      <div
        id="infoContainer"
        className="flex 1 flex-col gap-2 text-textSoft  bg-bgSoft p-5 font-bold rounded-xl relative h-max"
      >
        <div id="imgContainer" className="relative   h-[300px] w-[300px]">
          <Image
            className="rounded-xl "
            src={user.img || "/noavatar.png"}
            alt="ss"
            fill
          />
        </div>
        {user.username}
      </div>
      <div id="formContainer" className="flex-[3]  bg-bgSoft p-5 rounded-xl">
        <form
          action={updateUser}
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
          <input type="hidden" name="id" value={user.id} />
          <label> {user.username} </label>
          <input type="text" name="username" placeholder={user.username} />
          <label> Email </label>
          <input type="email" name="email" placeholder={user.email} />
          <label> Password </label>
          <input type="Password" name="Password" />
          <label> Phone </label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label> Address </label>
          <input type="text" name="Address" placeholder={user.address} />
          <label> Is Admin </label>
          <select name="isAdmin" id="isAdmin">
            <option selected={user.isAdmin} value={true}>
              Yes
            </option>
            <option selected={!user.isAdmin} value={false}>
              No
            </option>
          </select>
          <label> Is Active? </label>
          <select name="isActive" id="isActive">
            <option selected={user.isActive} value={true}>
              Yes
            </option>
            <option selected={!user.isActive} value={false}>
              No
            </option>
          </select>
          <button> Update </button>
        </form>
      </div>
    </section>
  );
}
