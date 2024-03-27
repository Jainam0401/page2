import Form from "../components/form";
import Subnav from "../components/subnav";
import DisplayNav from "../components/DisplayAddress";
import BorderBottomComponent from "../components/BorderBottomComponent";
export default function CreateOrder() {
  return (
    <>
      <BorderBottomComponent />
      <div className="flex w-full h-full justify-between gap-3">
        <div className="w-full max-w-[80%]  bg-black">
          <Form />
        </div>
        <div className="w-full max-w-[20%] bg-gray-400" >
          <DisplayNav />
        </div>
      </div>
    </>
  );
}
