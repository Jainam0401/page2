import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { CiCalculator1 } from "react-icons/ci";
import Link from 'next/link';
export default function Sidebar() {
  return (
    <nav className="z-20 flex flex-col w-40  bg-[#2b7aa5] text-gray-900 ">
      <div className=" mt-10">
        <Link href={"/orderList"}>
        <div className=" hover:bg-sky-500 text-center mx-auto mt-[0px] z-10 py-4 ">
          <AiOutlineUnorderedList className="fill-white text-center m-auto" />
          <h3 className="text-white m-3 text-center">
            orders <br /> dashboard
          </h3>
        </div>
        </Link>
        
        <div className=" text-center mx-auto hover:bg-sky-500 px-auto mt-[1px] py-4">
          <FaBook className="fill-white m-auto" />
          <h3 className="text-white m-3 text-center">
            create <br /> orders
          </h3>
        </div>
        <div className=" text-center mx-auto hover:bg-sky-500 px-auto mt-[1px] py-4">
          <CiCalculator1 className="fill-white m-auto" />
          <h3 className="text-white m-3 text-center">
            rate <br /> calculator
          </h3>
        </div>
      </div>
    </nav>
  );
}
