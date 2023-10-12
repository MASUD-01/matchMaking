import Link from 'next/link';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';

const EducationCareer = () => {
  return (
    <div>
      <div>
        <div className='flex justify-between border-b-4 pb-3 mb-3'>
          <span className='font-bold'>Education & Career</span>
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
              <span className='mr-12'>Highest Qualification</span>
              <span>:</span>
              <span>M.E / M.Tech - Engineering</span>
            </div>
            <div>
              <span className='mr-9'>College&#40;s&#41; Attended</span>
              <span>:</span>
              <span>A C T College of Engineering & Technology</span>
            </div>
            <div>
              <span className='mr-16'>Annual Income</span>
              <span>:</span>
              <span>Above USD 500K</span>
            </div>
          </div>
          {/* div for right side */}
          <div>
            <div>
              <span className='mr-9'>Working With</span>
              <span>:</span>
              <span>Private Company</span>
            </div>
            <div>
              <span className='mr-16'>Working As</span>
              <span>:</span>
              <span>Banking Professional</span>
            </div>
            <div>
              <span className='mr-5'>Employer Name</span>
              <span>:</span>
              <span>A Credit Academy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCareer;
