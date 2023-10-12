import Link from 'next/link';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';

const PartnerEducationCareer = () => {
  return (
    <div>
      <div className='flex justify-between border-b-4 pb-3 mb-3'>
        <span className='font-bold'>Education & Career</span>
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
            <span className='mr-12'>Education</span>
            <span>:</span>
            <span>Doesn&apos;t Matter</span>
          </div>
          <div>
            <span className='mr-9'>Working with</span>
            <span>:</span>
            <span>Doesn&apos;t Matter</span>
          </div>
          <div>
            <span className='mr-16'>Profession area</span>
            <span>:</span>
            <span>Doesn&apos;t Matter</span>
          </div>
        </div>
        {/* div for right side */}
        <div>
          <div>
            <span className='mr-5'>Working as</span>
            <span>:</span>
            <span>Doesn&apos;t Matter</span>
          </div>
          <div>
            <span className='mr-28'>Location</span>
            <span>:</span>
            <span>Dhaka</span>
          </div>
          <div>
            <span>Annual income</span>
            <span className='ml-16'>:</span>
            <span>USD less than 40,000 to greater than 500,000.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerEducationCareer;
