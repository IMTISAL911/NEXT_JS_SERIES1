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

// "use client";

// import { useState } from "react";
// import { FaTrash } from "react-icons/fa";

// export default function Home() {
//   const [inputValue, setInputvalue] = useState('');
//   const [submittext, setSubmitText] = useState([]);

//   function handleSubmit(event) {
//     event.preventDefault();
//     if (inputValue.trim() === "") return;

//     setSubmitText([...submittext, inputValue]);
//     setInputvalue("");
//   }

//   function handleDelete(indexToDelete) {
//     const filtered = submittext.filter((_, index) => index !== indexToDelete);
//     setSubmitText(filtered); 
//   }

//   return (
//     <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
//       <div className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-md">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Event Handling Function FORM
//         </h1>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Enter something..."
//             value={inputValue}
//             onChange={(e) => setInputvalue(e.target.value)}
//             className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />

//           <button
//             type="submit"
//             className="bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
//           >
//             Submit
//           </button>

//           <div className="mt-4 flex flex-col gap-2">
//             {submittext.map((text, index) => (
//               <div
//                 key={index}
//                 className="group bg-purple-500 text-white px-5 py-1 rounded-lg flex justify-between items-center"
//               >
//                 <span>{text}</span>

//                 <FaTrash
//                   onClick={() => handleDelete(index)}
//                   className="opacity-0 group-hover:opacity-100 cursor-pointer ml-2 transition"
//                 />
//               </div>
//             ))}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }







"use client";

import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function Home() {
  const [inputValue, setInputvalue] = useState('');
  const [submittext, setSubmitText] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.trim() === "") return;

    setSubmitText([...submittext, inputValue]);
    setInputvalue("");
  }

  function handleDelete(indexToDelete) {
    const filtered = submittext.filter((_, index) => index !== indexToDelete);
    setSubmitText(filtered); 
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Event Handling Function FORM
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter something..."
            value={inputValue}
            onChange={(e) => setInputvalue(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            Submit
          </button>

          <div className="mt-4 flex flex-col gap-2">
            {submittext.map((text, index) => (
              <div
                key={index}
                className="group bg-purple-500 text-white px-5 py-1 rounded-lg flex justify-between items-center"
              >
                <span>{text}</span>

                <FaTrash
                  onClick={() => handleDelete(index)}
                  className="opacity-0 group-hover:opacity-100 cursor-pointer ml-2 transition"
                />
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}
