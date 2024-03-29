// SidebarButtonStuff.tsx
import React from 'react';
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { CiCalculator1 } from "react-icons/ci";
import Link from 'next/link';

type SidebarProps = {
  openOrClose: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarButtonStuff: React.FC<SidebarProps> = ({ openOrClose, setSidebar }) => {
  const SidebarList = [
    {
      link: "/orderList",
      icon: AiOutlineUnorderedList,
      title: "Orders Dashboard",
    },
    {
      link: "/CreateOrders",
      icon: FaBook,
      title: "Create Orders",
    },
    {
      link: "/RateCalculator",
      icon: CiCalculator1,
      title: "Rate Calculator",
    },
  ];

  return (
    <div className={`absolute md:hidden  top-[100%] left-0 h-screen  z-20 flex-col w-40 bg-[#2b7aa5] text-gray-900 transform ${openOrClose ? 'translate-x-0' : '-translate-x-full md:flex'} transition-transform`}>
      {SidebarList.map(({ link, icon: Icon, title }) => (
        <Link key={link} href={link}>
          <div className='w-full p-4 flex flex-col items-center hover:bg-sky-500'>
            <Icon className='text-xl text-white' />
            <span className='text-base text-center text-white'>{title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SidebarButtonStuff;
