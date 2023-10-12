import Link from 'next/link';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';

const PartnerLocation = () => {
  return (
    <div>
      <div className='flex justify-between border-b-4 pb-3 mb-3'>
        <span className='font-bold'>Location</span>
        <div>
          <Link href='/mywedding/myProfile/editMyProfile'>
            <button>
              <AiFillEdit />
            </button>
          </Link>
        </div>
      </div>
      <div className='flex justify-between mt-3'>
        <div>
          {/* div for left side */}
          <div>
            <span className='mr-12'>Country living in</span>
            <span>:</span>
            <span>Bangladesh</span>
          </div>
          <div>
            <span className='mr-9'>State living in</span>
            <span>:</span>
            <span>Doesn&apos;t Matter</span>
          </div>
          <div>
            <span className='mr-16'>City / District</span>
            <span>:</span>
            <span>Doesn&apos;t Matter</span>
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

export default PartnerLocation;
