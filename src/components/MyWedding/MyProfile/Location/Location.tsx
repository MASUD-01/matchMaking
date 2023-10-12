import Link from 'next/link';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';

const Location = () => {
  return (
    <div>
      <div className='flex justify-between border-b-4 pb-3 mb-3'>
        <span className='font-bold'>Location</span>
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
            <span className='mr-12'>Current Residence</span>
            <span>:</span>
            <span>Dhaka, Bangladesh</span>
          </div>
          <div>
            <span className='mr-9'>State Of Residence</span>
            <span>:</span>
            <span>Dhaka</span>
          </div>
        </div>
        {/* div for right side */}
        <div>
          <div>
            <span className='mr-5'>Residency Status</span>
            <span>:</span>
            <span>Muslim, Khoja</span>
          </div>
          <div>
            <span className='mr-28'>Zip / Pin code</span>
            <span>:</span>
            <span>Not Specified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
