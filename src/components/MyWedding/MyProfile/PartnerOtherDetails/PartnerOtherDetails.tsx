import Link from 'next/link';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';

const PartnerOtherDetails = () => {
  return (
    <div>
      <div className='flex justify-between border-b-4 pb-3 mb-3'>
        <span className='font-bold'>Other Details</span>
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
            <span className='mr-12'>Profile created by</span>
            <span>:</span>
            <span>Doesn&apos;t Matter</span>
          </div>
        </div>
        {/* div for right side */}
        <div>
          <div>
            <span className='mr-9'>Diet</span>
            <span>:</span>
            <span>Doesn&apos;t Matter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerOtherDetails;
