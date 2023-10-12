import React, { useState } from "react";

export type SwitchChangeEventHandler = (
  checked: boolean,
  event?: React.MouseEvent<HTMLButtonElement>
) => void;
type Props = {
  onChange?: SwitchChangeEventHandler;
  checked?: boolean;
  size?: "large" | "small";
};
const SwitchCustom = ({ onChange, checked, size }: Props) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange && onChange(isChecked);
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          {/* -----check background */}
          <div
            className={`box block ${
              size === "small" ? "h-5 w-8" : "h-8 w-14"
            }  rounded-full ${isChecked ? "bg-[#FF44CB]" : "bg-gray-400"}`}
          ></div>
          {/* -----check circle */}
          <div
            className={`absolute left-1 top-1 flex ${
              size === "small" ? "h-[12px] w-[12px]" : "h-6 w-6"
            }   items-center justify-center rounded-full bg-white transition ${
              isChecked ? "translate-x-full" : ""
            }`}
          ></div>
        </div>
      </label>
    </>
  );
};

export default SwitchCustom;
