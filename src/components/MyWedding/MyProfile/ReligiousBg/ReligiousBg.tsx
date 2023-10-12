import Link from 'next/link';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';

const ReligiousBg = () => {
  return (
    <div>
      <div className='flex justify-between border-b-4 pb-3 mb-3'>
        <span className='font-bold'>Religion info</span>
        <div>
          <button>
            <Link href='/mywedding/myProfile/editMyProfile'>
              <AiFillEdit />
            </Link>
          </button>
        </div>
      </div>

      <div>
        {/* div for left side */}
        <div>
          <span className='mr-12'>Religion</span>
          <span>:</span>
          <span>Muslim</span>
        </div>
        <div>
          <span className='mr-9'>Community</span>
          <span>:</span>
          <span>Khoja</span>
        </div>
        <div>
          <span className='mr-16'>Sub community</span>
          <span>:</span>
          <span>Not Specified</span>
        </div>
        <div>
          <span className='mr-9'>Mother Tongue</span>
          <span>:</span>
          <span>Bengali</span>
        </div>
      </div>
    </div>
  );
};

export default ReligiousBg;
