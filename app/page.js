import Link from 'next/link';

export default function Page() {
  return (
    <div className='bg-black min-h-screen  text-white flex flex-col  p-6' >
      <h1 className="text-4xl font-bold pt-20 hover:text-[#FE347E] ml-40">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="mt-6">
      <Link 
          href="week-2" 
          className="block hover:underline hover:text-[#FE347E] ml-40">
          Week 2 Assignment
        </Link>
      </div>

      <div className="mt-8">
        <Link 
          href="week-3" 
          className="block hover:underline hover:text-[#FE347E] ml-40">
          Week 3 Assignment
        </Link>
       </div>

       <div className="mt-6">
        <Link 
          href="week-4" 
          className="block hover:underline hover:text-[#FE347E] ml-40">
          Week 4 Assignment
        </Link>
       </div>
       
       <div className="mt-8">
        <Link 
          href="week-5" 
          className="block hover:underline hover:text-[#FE347E] ml-40">
          Week 5 Assignment
        </Link>
       </div>

       <div className="mt-10">
        <Link 
          href="week-6" 
          className="block hover:underline hover:text-[#FE347E] ml-40">
          Week 6 Assignment
        </Link>
       </div>

       <div className="mt-10">
        <Link 
          href="week-7" 
          className="block hover:underline hover:text-[#FE347E] ml-40">
          Week 7 Assignment
        </Link>
       </div>

       <div className="mt-12">
        <Link 
          href="week-8" 
          className="block hover:underline hover:text-[#FE347E] ml-40">
          Week 8 Assignment
        </Link>
       </div>
     
    </div>
  );
}