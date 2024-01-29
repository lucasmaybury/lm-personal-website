import Image from 'next/image'
import Sidebar from './sidebar';

export default function Home() {
  return (
    <>
      <Sidebar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div id='profile' className="w-72 m-6">
          <Image 
            src='/profile-pic.jpg' 
            width={300}
            height={300}
            alt="Picture of the author"
            className='rounded-full'
          />
        </div>
        <div id='personal-statement'>
          <span >
              A professional full-stack developer with an eye for design. Communicative and blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          </span>
        </div>
      </main>
    </>
  );
}
