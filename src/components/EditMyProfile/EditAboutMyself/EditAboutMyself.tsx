import React from "react";
import { Input } from "antd";

const { TextArea } = Input;
const EditAboutMyself = () => {
  return (
    <div>
      <div className="mb-3">
        <span>
          This section will help you make a strong impression on your potential
          partner. So, express yourself.
          <span className="text-yellow-500 font-bold">
            (NOTE: This section will be screened everytime you update it. Allow
            upto 24 hours for it to go live. )
          </span>
        </span>
      </div>
      <TextArea rows={4} placeholder="Max Character is 2500" maxLength={2500} />
    </div>
  );
};

export default EditAboutMyself;
