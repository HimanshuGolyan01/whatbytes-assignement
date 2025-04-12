import { User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="min-w-[60rem] md:w-[85rem] lg:w-[90rem] border-b border-gray-300 bg-white shadow-sm">
      <div className="flex justify-between items-center min-w-full px-4 py-4">
        <div className="font-bold text-2xl flex-grow">
          WhatBytes
        </div>
        <div className="flex items-center gap-2 border-2 border-gray-300 rounded-lg px-4 py-1 font-medium">
          <User  className="w-5 h-5" />
          <span className="whitespace-nowrap">Himanshu</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;