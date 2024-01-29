"use client";

import Image from 'next/image'
import useWindowDimensions from './utils/useWindowDimensions';
import Sidebar from './sidebar';

export default function Home() {
  const { width } = useWindowDimensions();
  return (
    <>
      {/* <Sidebar/> */}
      <main className="flex flex-col items-center justify-between p-7 lg:p-24">
        <div className="mb-4 mx-4">
          <span>
            <h1>Lucas Maybury</h1>
            <h2>Fullstack Software Engineer</h2>
          </span>
        </div>
        

        <div id='profile' className="m-4">
          <Image 
            src='/profile-pic.jpg' 
            width={width > 800 ? 300 : 200 }
            height={width > 800 ? 300 : 200}
            alt="Picture of the author"
            className='rounded-full'
          />
        </div>

        <div id='personal-statement' className="m-4 md:max-w-[32rem]">
          <span >
              A professional full-stack developer with an eye for design. Communicative and blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          </span>
        </div>
      </main>
    </>
  );
}
