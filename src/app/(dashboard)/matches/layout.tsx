import Link from 'next/link';
import React from 'react';

const layout = ({ children }: { children: any }) => {
  return (
    <div>
      <ul className='flex gap-x-4 justify-center border'>
        <Link href={''}>matches</Link>
        <Link href={'/matches/myprofile'}>My Profile</Link>
        <Link href={''}>My Photos</Link>
        <Link href={''}>Partner Prefarence</Link>
      </ul>
      <div className=''>{children}</div>
    </div>
  );
};

export default layout;
