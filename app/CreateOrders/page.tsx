import Form from "../components/Form";
import Subnav from "../components/Subnav";
import DisplayNav from "../components/DisplayAddress";
import BorderBottomComponent from "../components/BorderBottomComponent";
import Formbar from "../components/Formbar";
export default function CreateOrder() {
  return (
    <>

      <div className="flex-col md:flex-row lg:flex-row flex">
        <BorderBottomComponent />
      </div>

      <div className="flex w-full h-full justify-between gap-3 md:w-[1/4] px-4 md:min-w-full lg:w-full sm:w-[3/5]">
        {/* <div className="w-full max-w-[80%]"> */}
        <Form />
        {/* </div> */}
        {/* <div className="w-full max-w-[20%] h-[calc(100vh-48px)]  bg-white">
          <DisplayNav />
        </div> */}
      </div>
    </>
  );
}
