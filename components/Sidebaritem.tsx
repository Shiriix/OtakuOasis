import React, { ReactNode } from "react";
import { IconType } from "react-icons/lib";

interface SidebarItemProps {
  label: string;
  href: string;
  icon: IconType;
  onclick?: () => void;
}

const Sidebaritem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onclick,
}) => {
  return (
    <div className="flex flex-row items-center">
      <div className="relative rounded-full h-14 h-14 flex items-center justify-center p-4 hover:bg-red-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
        <Icon size={28} color="red" />
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-fullhover:bg-red-300 hover:bg-opacity-10 cursor-pointer">
        <Icon size={24} color="red" />
        <p className="hidden lg:block text-black text-xl">{label}</p>
      </div>
    </div>
  );
};

export default Sidebaritem;
