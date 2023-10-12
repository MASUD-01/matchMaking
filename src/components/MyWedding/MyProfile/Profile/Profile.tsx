import React from "react";

const Profile = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center border rounded-lg bg-gradient-to-r from-pink-200 via-red-400 to-orange-200 shadow-lg mx-4 my-3 py-3">
          <span className="text-zinc-100 font-bold text-xl">
            Shazzad Auncon
          </span>
        </div>
        {/* div for Age,height etc & my profile info starts*/}
        <div className="flex  pb-3">
          {/* age,height info & My profile */}
          <div className="px-4">
            {/* age,height info */}
            <div className="flex justify-between">
              {/* div for left side */}
              <div>
                <div>
                  <span className="mr-12">Age / Height</span>
                  <span>:</span>
                  <span>25 /</span>
                </div>
                <div>
                  <span className="mr-9">Marital Status</span>
                  <span>:</span>
                  <span>Never Married</span>
                </div>
                <div>
                  <span className="mr-16">Posted by</span>
                  <span>:</span>
                  <span>Self</span>
                </div>
              </div>
              {/* div for right side */}
              <div>
                <div>
                  <span className="mr-5">Religion / Community</span>
                  <span>:</span>
                  <span>Muslim, Khoja</span>
                </div>
                <div>
                  <span className="mr-28">Location</span>
                  <span>:</span>
                  <span>Dhaka</span>
                </div>
                <div>
                  <span>Mother Tongue</span>
                  <span className="ml-16">:</span>
                  <span>Bengali</span>
                </div>
              </div>
            </div>
            {/* age,height info ends*/}

            {/* Manage your Profile */}
            <div className="border-2 rounded-lg mt-5">
              <div className="flex flex-col justify-around px-3 py-3">
                <div className="border-b-2 pb-3">
                  <span>Manage your Profile</span>
                </div>
                {/* My profile edit */}
                <div className="flex justify-between gap-96 mt-3 ">
                  <div className="flex flex-col">
                    <span className="hover:text-blue-600">
                      <a href="as">&#x2022; Edit Personal Profile</a>
                    </span>
                    <span className="hover:text-blue-600">
                      <a href="as">&#x2022; Edit Partner Profile</a>
                    </span>
                    <span className="hover:text-blue-600">
                      <a href="as">&#x2022; Edit Contact Details</a>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="hover:text-blue-600">
                      <a href="as">&#x2022; View Profile Stats</a>
                    </span>
                    <span className="hover:text-blue-600">
                      <a href="as">&#x2022; Add Photos</a>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="hover:text-blue-600">
                      <a href="as">&#x2022; Set Contact Filters</a>
                    </span>
                    <span className="hover:text-blue-600">
                      <a href="as">&#x2022; Hide / Delete Profile</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* My profile ends*/}
          </div>
        </div>
        {/* div for Age,height etc & my profile info ends*/}
      </div>
    </div>
  );
};

export default Profile;
