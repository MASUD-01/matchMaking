import Link from 'next/link';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';

const FamilyBg = () => {
  return (
    <div>
      <div className='flex justify-between border-b-4 pb-3 mb-3'>
        <span className='font-bold'>Family info</span>
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
            <span className='mr-12'>Father&apos;s Status</span>
            <span>:</span>
            <span>Enter Now</span>
          </div>
          <div>
            <span className='mr-9'>Mother&apos;s Status</span>
            <span>:</span>
            <span>Enter Now</span>
          </div>
          <div>
            <span className='mr-16'>Family Location</span>
            <span>:</span>
            <span>Dhaka, Bangladesh</span>
          </div>
          <div>
            <span className='mr-9'>Native Place</span>
            <span>:</span>
            <span>Not Specified</span>
          </div>
        </div>
        {/* div for right side */}
        <div>
          <div>
            <span className='mr-5'>No. of Brothers</span>
            <span>:</span>
            <span>Enter Now</span>
          </div>
          <div>
            <span className='mr-28'>No. of Sisters</span>
            <span>:</span>
            <span>Enter Now</span>
          </div>
          <div>
            <span>Family Type</span>
            <span className='ml-16'>:</span>
            <span>Not Specified</span>
          </div>
          <div>
            <span className='mr-9'>Family Values</span>
            <span>:</span>
            <span>Not Specified</span>
          </div>
          <div>
            <span className='mr-16'>Family Affluence</span>
            <span>:</span>
            <span>Enter Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyBg;
