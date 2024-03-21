import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { CiCalculator1 } from "react-icons/ci";

export default function Sidebar() {
  return (
    <div className="fixed top-[48px] left-0 bottom-0 z-20 sidebar-container">
      <div className="sidebar-container h-screen mt-0 pt-0 w-32">
        <nav className="flex flex-col w-32 h-screen px-4 text-gray-900 ">
          <div className="flex flex-wrap mt-8">
            <div className="w-1/2"></div>
          </div>
          <div className="sidebar-container">
            <div className=" w-fit hover:bg-sky-500">
              <div className=" hovering text-center mx-auto mt-[0px] px-auto z-10 py-4">
                <AiOutlineUnorderedList className="fill-white text-center m-auto" />
                <h3 className="text-white m-3 text-center">orders <br /> dashboard</h3>
              </div>
              <div className="hovering text-center mx-auto hover:bg-sky-500 px-auto mt-[1px] py-4">
                <FaBook className="fill-white m-auto" />
                <h3 className="text-white m-3 text-center">create <br /> orders</h3>
              </div>
              <div className="hovering text-center mx-auto hover:bg-sky-500 px-auto mt-[1px] py-4">
                <CiCalculator1 className="fill-white m-auto" />
                <h3 className="text-white m-3 text-center">rate <br /> calculator</h3>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
