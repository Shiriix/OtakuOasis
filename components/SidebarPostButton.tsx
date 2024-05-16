import { useRouter } from "next/router";
import React from "react";
import { GiSharpShuriken } from "react-icons/gi";

const SidebarPostButton = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-red-500 hover:bg-opacity-80 transition cursor-pointer">
        <GiSharpShuriken size={24} color="white" />
      </div>
      <div className="mt-6 hidden lg:block px-4 py-2 rounded-full  bg-red-500 hover:bg-opacity-90 transition cursor-pointer">
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
          {" "}
          Post
        </p>
      </div>
    </div>
  );
};

export default SidebarPostButton;
