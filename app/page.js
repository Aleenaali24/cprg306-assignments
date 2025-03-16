import Link from 'next/link';

export default function Page() {

  const Webdev2Assignments = [2, 3, 4, 5, 6, 7, 8];
 
  return (
    <div className='bg-black min-h-screen  text-white flex flex-col  p-6' >
      <h1 className="text-4xl font-bold pt-20 hover:text-[#FE347E] ml-40">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="mt-6 ">
     <ul className="pl-40">
        {Webdev2Assignments.map((assignment) => (
          <li key={assignment} className="text-xl hover:text-[#FE347E] ">
            <Link href={`/week-${assignment}`}>
              Week {assignment} Assignment
            </Link>
          </li>
        ))}
     </ul>
     </div>
    </div>
  );
}