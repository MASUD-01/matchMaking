import Link from 'next/link';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';

const MyContactInfo = () => {
  return (
    <div>
      <div className='flex justify-between border-b-4 pb-3 mb-3'>
        <span className='font-bold'>My Contact Info</span>
        <div>
          <button>
            <Link href='/mywedding/myProfile/editMyProfile'>
              <AiFillEdit />
            </Link>
          </button>
        </div>
      </div>
      <div className='flex justify-between mt-3'>
        <div>
          {/* div for left side */}
          <div>
            <span className='mr-[10rem]'>Mobile</span>
            <span>:</span>
            <span>+880-1786244417</span>
          </div>
          <div>
            <span className='mr-28'>Contact Person</span>
            <span>:</span>
            <span>-</span>
          </div>
          <div>
            <span className='mr-1'>Relationship with the member</span>
            <span>:</span>
            <span>-</span>
          </div>
          <div>
            <span className='mr-9'>Convenient Time to Call</span>
            <span>:</span>
            <span>-</span>
          </div>
          <div>
            <span className='mr-16'>Display Option</span>
            <span>:</span>
            <span>
              You have chosen to display your contact details to all premium
              members.
            </span>
          </div>
        </div>
        {/* div for right side */}
        <div>
          {/* <div>
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
          <div>
            <span className="mr-9">Marital Status</span>
            <span>:</span>
            <span>Never Married</span>
          </div>
          <div>
            <span className="mr-16">Posted by</span>
            <span>:</span>
            <span>Self</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MyContactInfo;
