import Image from 'next/image';
import React from 'react';
import AboutMySelf from './AboutMySelf/AboutMySelf';
import AboutMyselfExpectation from './AboutMyselfExpectation/AboutMyselfExpectation';
import Profile from './Profile/Profile';
import NavButton from './NavButton/NavButton';
import ReligiousBg from './ReligiousBg/ReligiousBg';
import FamilyBg from './FamilyBg/FamilyBg';
import EducationCareer from './EducationCareer/EducationCareer';
import Location from './Location/Location';
import Hobbies from './Hobbies/Hobbies';
import Partnerinfo from './Partnerinfo/Partnerinfo';
import PartnerLocation from './PartnerLocation/PartnerLocation';
import PartnerEducationCareer from './PartnerEducationCareer/PartnerEducationCareer';
import PartnerOtherDetails from './PartnerOtherDetails/PartnerOtherDetails';
import MyContactInfo from './MyContactInfo/MyContactInfo';

const MyProfile = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <div className='border rounded-lg shadow-2xl mt-4 mb-20'>
          <div className='flex justify-center py-11'>
            <Image
              src='/download.jpg'
              width={300}
              height={360}
              alt='dfd'
              className='border-2 rounded-lg hover:scale-125 transition ease-in-out duration-700'
            />
          </div>
          <div className='flex flex-col'>
            {/* have paste New component here with div  */}
            <div className='flex'>
              <Profile />
            </div>
            {/* have paste New component here with div  */}
            {/* have paste New component here with div  */}
            <div className='w-[1287px] pl-4 my-3'>
              <AboutMyselfExpectation />
            </div>
            {/* have paste New component here with div  */}
            {/* have paste New component here with div  */}
            {/* have paste New component here with div  */}
            <div className='px-4 py-6'>
              <NavButton />
            </div>
            {/* have paste New component here with div  */}
            <div
              className='px-4 py-6'
              id='basic'
            >
              <div className='flex justify-center border-2 py-4'>
                <span className='font-bold'>My Profile</span>
              </div>
            </div>
            {/* have paste New component here with div  */}
            <div className='px-4 py-6'>
              <AboutMySelf />
            </div>
            {/* have paste New component here with div  */}
            {/* have paste New component here with div  */}
            <div className='px-4 py-6'>
              <ReligiousBg />
            </div>
            {/* have paste New component here with div  */}
            {/* have paste New component here with div  */}
            <div className='px-4 py-6'>
              <FamilyBg />
            </div>
            {/* have paste New component here with div  */}
            {/* have paste New component here with div  */}
            <div className='px-4 py-6'>
              <EducationCareer />
            </div>
            {/* have paste New component here with div  */}
            {/* have paste New component here with div  */}
            <div className='px-4 py-6'>
              <Location />
            </div>
            {/* have paste New component here with div  */}
            {/* have paste New component here with div  */}
            <div className='px-4 py-6'>
              <Hobbies />
            </div>
            {/* have paste New component here with div  */}
            {/* have paste New component here with div  */}
            <div
              className='px-4 py-6'
              id='partnerPerference'
            >
              <div className='flex justify-center border-2 py-4'>
                <span className='font-bold'>Partner Preferences</span>
              </div>
            </div>
            {/* have paste New component here with div  */}
            <div className='px-4 py-6'>
              <Partnerinfo />
            </div>
            {/* have paste New component here with div  */}
            <div className='px-4 py-6'>
              <PartnerLocation />
            </div>
            {/* have paste New component here with div  */}
            <div className='px-4 py-6'>
              <PartnerEducationCareer />
            </div>
            {/* have paste New component here with div  */}
            <div className='px-4 py-6'>
              <PartnerOtherDetails />
            </div>
            {/* have paste New component here with div  */}
            <div className='px-4 py-6'>
              <div className='flex justify-center border-2 py-4'>
                <span className='font-bold'>My Contact Info</span>
              </div>
            </div>
            {/* have paste New component here with div  */}
            <div className='px-4 py-6'>
              <MyContactInfo />
            </div>
            {/* have paste New component here with div  */}
            <div className='px-4 py-6'>
              <div className='flex justify-between py-4 px-3'>
                <div></div>
                <button>
                  <span>Back to Top</span>
                </button>
              </div>
            </div>
            {/* have paste New component here with div  */}

            <div className='px-4 py-6'>
              <div className='flex justify-between border-2 py-4 px-3'>
                <button>
                  <span>Preview your profile</span>
                </button>
                <button>
                  <span>Print</span>
                </button>
              </div>
            </div>
            {/* have paste New component here with div  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
