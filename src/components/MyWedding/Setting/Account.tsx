import React from "react";

const Account = () => {
  return (
    <div className="border h-40 pl-20 pt-5 rounded-md">
      <p className="text-xl font-bold">Update Email Id</p>
      <div className="">
        <input
          type="text"
          id="inputField"
          className="border-b-2 mt-3 w-72 font-bold text-lg border-gray-300 hover:shadow-md focus:border-[#FF44CB] focus:outline-none transition  duration-300 ease-in-out"
          placeholder="email address"
          defaultValue={"masudo@gmail.com"}
        />
        <div className="mt-3">
          <button className="border px-3 p-y-2 rounded-full font-bold text-[#FF44CB] border-[#FF44CB] hover:shadow-xl">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
