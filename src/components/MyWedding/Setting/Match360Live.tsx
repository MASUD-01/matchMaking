"use client";
import SwitchCustom from "@/utils/tailwindCustomElement/customCheckbox";

const Match360Live = () => {
  const onChange = (event: any) => {
    console.log(event);
  };
  return (
    <div className="border h-full pl-20 pt-5 rounded-md p-6">
      <p className="text-xl font-bold">Edit your Communication Preferences</p>
      <p className="text-sm">
        Please select the communication channels on which you would want to
        receive updates about Shaadi Live events.
      </p>
      <div className="">
        <div className="flex flex-col gap-y-3">
          <div className="flex justify-between w-2/3 items-center">
            <span className="text-lg">Push Notification</span>

            <SwitchCustom size="small" onChange={onChange} checked={true} />
          </div>
          <div className="flex justify-between w-2/3 items-center">
            <span className="text-lg">Email</span>
            <SwitchCustom size="small" onChange={onChange} />
          </div>
          <div className="flex justify-between w-2/3 items-center">
            <span className="text-lg">SMS</span>
            <SwitchCustom size="small" onChange={onChange} />
          </div>
          <div className="flex justify-between w-2/3 items-center">
            <span className="text-lg">WhatsApp</span>
            <SwitchCustom size="small" onChange={onChange} checked={true} />
          </div>
          <div className="flex justify-between w-2/3 items-center">
            <span className="text-lg">Call</span>
            <SwitchCustom size="small" onChange={onChange} />
          </div>
        </div>

        <div className="mt-3 flex gap-x-3">
          <button className="border px-3 p-y-2 font-bold text-slate-50 bg-[#FF44CB] rounded-full text-lg border-[#FF44CB] hover:shadow-xl">
            Reset
          </button>
          <button className="border px-3 p-y-2 font-bold text-[#FF44CB] rounded-full text-lg border-[#FF44CB] hover:shadow-xl">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Match360Live;
