import Link from 'next/link';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';

const AboutMyselfExpectation = () => {
  return (
    <div>
      <div>
        <div className='flex justify-between border-b-4 pb-3 mb-3'>
          <span className='font-bold'>About Myself & Partner Expectations</span>
          <div>
            <button>
              <Link href='/mywedding/myProfile/editMyProfile'>
                <AiFillEdit />
              </Link>
            </button>
          </div>
        </div>
        <div>
          <div>
            <span>
              I have a Masters in Engineering. Growing up, I was a disciplined
              and focused student with a good academic record. I am a Banking
              Professional by profession. I love to socialize and interact with
              people. I appreciate honesty and integrity in a person and seek
              the same qualities in my future soulmate. Kindly feel free to
              contact if you wish to take things forward. I have a Masters in
              Engineering. Growing up, I was a disciplined and focused student
              with a good academic record. I am a Banking Professional by
              profession. I love to socialize and interact with people. I
              appreciate honesty and integrity in a person and seek the same
              qualities in my future soulmate. Kindly feel free to contact if
              you wish to take things forward. I have a Masters in Engineering.
              Growing up, I was a disciplined and focused student with a good
              academic record. I am a Banking Professional by profession. I love
              to socialize and interact with people. I appreciate honesty and
              integrity in a person and seek the same qualities in my future
              soulmate. Kindly feel free to contact if you wish to take things
              forward. I have a Masters in Engineering. Growing up, I was a
              disciplined and focused student with a good academic record. I am
              a Banking Professional by profession. I love to socialize and
              interact with people. I appreciate honesty and integrity in a
              person and seek the same qualities in my future soulmate. Kindly
              feel free to contact if you wish to take things forward.
            </span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMyselfExpectation;
