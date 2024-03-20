import { BellIcon } from "@heroicons/react/24/outline";

export default function NavBar(){
    return(
      <>
        


  <div className="bg-white border-gray-200 flex flex-wrap  justify-between w-full  p-4">
  <a href="https://flowbite.com/" className=" bg-white flex items-center  rtl:space-x-reverse">
      <img src="https://shypbuddy.in/images/logo.png" className="h-8 bg-white" alt="Flowbite Logo" />
      {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
  </a>
  <div className="bg-white flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  <BellIcon  className=" bg-white justify-end size-8 bg-transparent ml-5" />
      

        <img className="bg-white float-right h-8 w-8 right-2 mr-4 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            
       
       
      </div>
     
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
        
  </div>
 

      </>
    )
  }