import Form from "../components/Form";
import Subnav from "../components/Subnav";
import DisplayNav from "../components/DisplayAddress";
import BorderBottomComponent from "../components/BorderBottomComponent";
import Formbar from "../components/Formbar";
export default function CreateOrder() {
  return (
    <>
      <BorderBottomComponent />
      {/* <Formbar/> */}
      <div className="flex flex-col md:flex-row w-full h-full justify-between gap-3">
        <div className="w-full md:max-w-[70%]">
          <Form />
        </div>
        <div className="w-full   md:max-w-[30%]   bg-white" >
          <DisplayNav />
        </div>
      </div>
    </>
  );
}
