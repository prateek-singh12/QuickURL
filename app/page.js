
import { Unlink } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2">
        
        <div className="flex flex-col items-center justify-center h-screen bg-gray-300 p-8">
          <Unlink size="58" color="blue" />
          <h1 className="text-4xl font-bold text-blue-900">Welcome to Quickurl </h1>
          <p className="mt-4 text-blue-900">Your one-stop solution for shortening URLs quickly and easily.</p>
        </div>


        <div className="flex flex-col items-center justify-center h-screen bg-white p-8">
          <img src="images.jpeg" alt="Hero Image" className=" w-80 h-80" />
          <h2 className="text-3xl font-semibold text-blue-900 mt-4">Get Started Now!</h2>
          <li className='flex space-x-4'>
            <Link href="/shorten" className="text-white hover:underline bg-blue-500 px-3 py-1 rounded">
              Try Now
            </Link>
            <Link href="/github" className="text-white hover:underline bg-gray-700 px-3 py-1 rounded    ">
              Github
            </Link>

          </li>
        </div>

      </section>
    </main>
  );
}
