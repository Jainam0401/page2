import Form from "../components/Form";
import Subnav from "../components/Subnav";
import DisplayAddress from "../components/DisplayAddress";
import BorderBottomComponent from "../components/BorderBottomComponent";
import Formbar from "../components/Formbar";
export default function CreateOrder() {
  return (
    <>
      <div className="flex-col md:flex-row lg:flex-row flex">
        <BorderBottomComponent />
      </div>
      <div className="flex flex-col w-full h-full justify-between gap-3 px-4 md:flex-row md:w-[1/4] lg:w-full sm:w-[3/5]">
        <div className="w-full max-w-full md:max-w-[80%]">
          <Form />
        </div>
        <div className="w-full max-w-full md:max-w-[20%] bg-white">
          <DisplayAddress />
        </div>
      </div>
    </>
  );
}
