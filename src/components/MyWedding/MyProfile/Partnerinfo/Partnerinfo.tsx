import Link from 'next/link';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';

const Partnerinfo = () => {
  return (
    <div>
      <div className='flex justify-between border-b-4 pb-3 mb-3'>
        <span className='font-bold'>Basic Info</span>
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
            <span className='mr-12'>Age</span>
            <span>:</span>
            <span>25 /</span>
          </div>
          <div>
            <span className='mr-9'>Height</span>
            <span>:</span>
            <span>22 to 30</span>
          </div>
          <div>
            <span className='mr-16'>Religion / Community</span>
            <span>:</span>
            <span>Muslim:Sunni Hanafi, Muslim:Bengali</span>
          </div>
        </div>
        {/* div for right side */}
        <div>
          <div>
            <span className='mr-5'>Mother tongue</span>
            <span>:</span>
            <span>Bengali, Urdu</span>
          </div>
          <div>
            <span className='mr-28'>Marital status</span>
            <span>:</span>
            <span>Never Married</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerinfo;
