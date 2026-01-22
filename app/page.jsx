// // "use client";

// // import { useState } from "react";

// // export default function Home() {

// //   const [count, setCount] = useState(0);

// //   function ADD () {
// // setCount(count+1)
// //   }

// //   function DEcrease (){
// //     setCount(count-1)
// //   }
// //   return(

// //     <div className="m-screen flex flex-col items-center justify-center gap-4">
    
// //     <h1 className="text-center text-red-500 bg-green-500">COUNTER APP</h1>

// // <p className="text-center">{count}</p>

// // <div className="flex gap-4 ">
// // <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={ADD}>ADD</button>
// // <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={DEcrease}>decrease</button>
// // </div>
// //     </div>
// //   )
// // }


"use client";

import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputValue, setInputvalue] = useState("");
  const [submittext, setSubmitText] = useState([]);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setSubmitText([...submittext, inputValue]);
    setInputvalue("");
  }

  function handleDelete(index) {
    setSubmitText(submittext.filter((_, i) => i !== index));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">

      {/* FORM CENTERED */}
      <div className="grid place-items-center min-h-screen">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Event Handling Function Form
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter something..."
              value={inputValue}
              onChange={(e) => setInputvalue(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <button
              type="submit"
              className="bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Submit
            </button>

            <div className="mt-4 flex flex-col gap-2">
              {submittext.map((text, index) => (
                <div
                  key={index}
                  className="group bg-purple-500 text-white px-4 py-2 rounded-lg flex justify-between items-center"
                >
                  <span className="truncate">{text}</span>
                  <FaTrash
                    onClick={() => handleDelete(index)}
                    className="opacity-0 group-hover:opacity-100 cursor-pointer transition"
                  />
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>

      {/* ROUTING SECTION BELOW FORM */}
      <div className="flex justify-center pb-10 -mt-24">
        <div className="w-full max-w-md text-white">
          <h2 className="font-bold text-lg mb-4 text-center">
            Link Routing
          </h2>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 flex flex-col gap-4">
            <Link href="/about" className="text-center hover:underline">
              Go to About Page
            </Link>

            <Link href="/contact" className="text-center hover:underline">
              Go to Contact Page
            </Link>

            <button
              onClick={() => router.push("/about")}
              className="bg-blue-600 rounded-lg px-4 py-2 hover:bg-blue-500 transition"
            >
              Go to About
            </button>

            <button
              onClick={() => router.push("/contact")}
              className="bg-blue-600 rounded-lg px-4 py-2 hover:bg-blue-500 transition"
            >
              Go to Contact
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
