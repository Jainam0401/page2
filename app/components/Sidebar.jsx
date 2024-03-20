import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { CiCalculator1 } from "react-icons/ci";
export default function Sidebar(){
    return(
      <>
        <div className="flex fixed z-0 bg-[#2b7aa5]">
            <div className="bg-[#2b7aa5] h-screen  mt- pt- w-32">
         
<div>
      <nav className="flex flex-col bg-[#2b7aa5] w-40 h-screen px-4 tex-gray-900 border border-purple-900">
        <div className="flex flex-wrap mt-8">
          <div className="w-1/2">
            
            
          </div>
          
        </div>
        <div >
        <div >
        <div className=' text-center hover:bg-sky-500 mt-[10px] px-2 py-8'>
<AiOutlineUnorderedList className='fill-white text-center item-center content-center ml-[48px] '/>
<h3 className='text-white m-3 text-center'>orders <br /> dashboard</h3>
</div>


<div  className='text-center hover:bg-sky-500  px-2 mt-[1px] py-4'>
<FaBook  className='fill-white content-center ml-[48px] '/>
<h3 className='text-white m-3 text-center'>create <br /> orders</h3>
</div>

<div  className='text-center hover:bg-sky-500  px-2 mt-[1px] py-4'>
<CiCalculator1  className='fill-white content-center ml-[48px]'/>
<h3 className='text-white m-3 text-center'>rate <br /> calculator</h3>
</div>
    </div>
        </div>
      </nav>
    </div>
            </div>
        </div>
      </>
    )
  }