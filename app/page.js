import Link from 'next/link';

export default function Page() {
  return (
    <div className='bg-black min-h-screen  text-white flex flex-col  p-6' >
      <h1 className="text-4xl font-bold pt-20 hover:text-[#FE347E] ml-40">CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="week-2" className='hover:underline hover:text-[#FE347E] ml-40 pt-32'>Week 2 Assignment</Link>
      </p>
    </div>
  );
}