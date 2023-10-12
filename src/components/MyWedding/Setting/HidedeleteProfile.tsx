import React from "react";

const HidedeleteProfile = () => {
  return (
    <div className="border h-full pl-20 pt-5 rounded-md p-6 flex flex-col gap-y-4">
      <div className="flex items-center border rounded-lg p-4">
        <div className="flex-1">
          <p className="text-xl font-bold">Hide Profile</p>
          <p className="text-lg">Your Profile is currently visible.</p>
          <p className="text-sm">
            When you hide your Profile, you will not be visible on Match360.com.
            You will neither be able to send invitations or messages.
          </p>
        </div>

        <div className="mt-3  gap-x-3">
          <button className="border px-3 p-y-2 font-bold text-slate-50 bg-[#FF44CB] rounded-full text-lg border-[#FF44CB] hover:shadow-xl">
            Hide
          </button>
        </div>
      </div>
      <div className="flex items-center border rounded-lg p-4">
        <div className="flex-1">
          <p className="text-xl font-bold">Delete Profile</p>
          <p className="text-lg">Your Profile is currently visible.</p>
          <p className="text-sm">
            When you hide your Profile, you will not be visible on Match360.com.
            You will neither be able to send invitations or messages.
          </p>
        </div>

        <div className="mt-3  gap-x-3">
          <button className="border px-3 p-y-2 font-bold text-slate-50 bg-[#FF44CB] rounded-full text-lg border-[#FF44CB] hover:shadow-xl">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default HidedeleteProfile;
