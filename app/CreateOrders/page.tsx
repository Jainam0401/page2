import Form from "../components/Form";
import Subnav from "../components/Subnav";
import DisplayNav from "../components/DisplayAddress";
import BorderBottomComponent from "../components/BorderBottomComponent";
import Formbar from "../components/Formbar";
export default function CreateOrder() {
  return (
    <>
      <BorderBottomComponent />
      <Formbar/>
      <div className="flex w-full h-full justify-between gap-3">
        <div className="w-full max-w-[80%]">
          <Form />
        </div>
        <div className="w-full max-w-[20%] h-[calc(100vh-48px)]  bg-white" >
          <DisplayNav />
        </div>
      </div>
    </>
  );
}
