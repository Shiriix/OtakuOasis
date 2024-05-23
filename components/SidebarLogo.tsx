import { useRouter } from "next/router";
import { GiSharpShuriken } from "react-icons/gi";
import React from "react";
const SidebarLogo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-red-300 hover:bg-opacity-10 cursor-pointer transition"
    >
      <GiSharpShuriken size={28} color="red" />
    </div>
  );
};

export default SidebarLogo;
