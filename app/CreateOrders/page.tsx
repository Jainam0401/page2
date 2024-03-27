import Form from "../components/Form";
import Subnav from "../components/Subnav";
import DisplayNav from "../components/DisplayAddress";
import BorderBottomComponent from "../components/BorderBottomComponent";
export default function CreateOrder() {
  return (
    <>
      <BorderBottomComponent />
      <div className="flex w-full h-full justify-between gap-3">
        <div className="w-full max-w-[80%]">
          <Form />
        </div>
        <div className="w-full max-w-[20%] bg-gray-400" >
          <DisplayNav />
        </div>
      </div>
    </>
  );
}
