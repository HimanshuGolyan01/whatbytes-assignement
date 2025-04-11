"use client";

import Image from "next/image";
import UpdateModal from "./update-modal";
import { useState } from "react";

const Skillset = () => {
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="text-gray-600 py-6 font-medium">Skill Test</div>

      <div className="border-2 border-gray-300 rounded-lg flex items-center pr-4 py-6 gap-4 my-4">
        <Image
          src="/html.png"
          alt="html logo"
          width={100}
          height={100}
          className="h-[4rem] w-[4rem]"
        />
        <div className="flex-1">
          <div className="font-bold">Hyper Text Markup Language</div>
          <div className="text-gray-700">
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </div>
        </div>
        <div>
          <button  
            className="bg-blue-700 px-6 py-2 rounded-lg hover:bg-blue-800 text-white font-medium"
            onClick={() => setIsUpdateModalOpen(true)}
        >
            Update
          </button>
        </div>
      </div>

      <div className="border-2 border-gray-300 rounded-lg pr-4 py-6 gap-4 my-4">
        <div className="font-bold text-[1.1rem] pl-4">Quick Statistics</div>
        <div className="flex">
            <div className="flex pl-8 pt-2 items-center gap-4 border-r border-gray-300 pr-4">
            <div className="text-[1.5rem] bg-gray-100 rounded-full p-2">🏆</div>
            <div className="flex flex-col">
                <div className="text-[1.5rem] font-bold">1</div>
                <div className="uppercase text-gray-400">your rank</div>
            </div>
            </div>
            <div className="flex pl-8 pt-2 items-center gap-4 border-r border-gray-300 pr-4">
            <div className="text-[1.5rem] bg-gray-100 rounded-full p-2">📆</div>
            <div className="flex flex-col">
                <div className="text-[1.5rem] font-bold">30%</div>
                <div className="uppercase text-gray-400">percentile</div>
            </div>
            </div>
            <div className="flex pl-8 pt-2 items-center gap-4">
            <div className="text-[1.5rem] bg-gray-100 rounded-full p-2">✅</div>
            <div className="flex flex-col">
                <div className="text-[1.5rem] font-bold">10 / 15</div>
                <div className="uppercase text-gray-400">correct answers</div>
            </div>
            </div>
        </div>
      </div>
      {isUpdateModalOpen && <UpdateModal />}
    </div>
  );
};

export default Skillset;
