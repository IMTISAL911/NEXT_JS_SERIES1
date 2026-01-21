"use client";

import { useState } from "react";

export default function Contact() {

    const [inputvalue, setInputvalue] = useState("");
    const  [pswrd, setPswrd] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(`Submit:${inputvalue} ${pswrd}`)
    }

    return (
        <div className=" h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            <div className="flex justify-end gap-[2%]  mr-[5%] flex-wrap">
                <a className="text-white hover:text-gray-200 transition-colors duration-200 font-sans font-bold text-lg mt-[2%]" href="#home">Home</a>
                <a className="text-white hover:text-gray-200 transition-colors duration-200 font-sans font-bold text-lg mt-[2%]" href="#about">About</a>
                <a className="text-white hover:text-gray-200 transition-colors duration-200 font-sans font-bold text-lg mt-[2%]" href="#contact">Contact</a>
                <a className="text-white hover:text-gray-200 transition-colors duration-200 font-sans font-bold text-lg mt-[2%]" href="#services">Services</a>
            </div>
             
             <form
             onSubmit={handleSubmit}
             autoComplete="off"
             className="flex flex-col justify-center items-center gap-4 w-11/12 sm:w-3/4 md:w-1/2   h-96 border-2 border-gray-300 bg-white shadow-2xl rounded-lg mx-auto mt-20">
            
            <div>
            <h1 className="text-lg font-bold font-sans text-green-400">LOGIN FORM</h1>
            </div>
  <input 
    type="email" 
    placeholder="Enter your email"
    autoComplete="new-email"
    value={inputvalue}
    onChange={(e)=>setInputvalue(e.target.value)}
    className="border-2 border-gray-300 px-4 py-2 rounded-md outline-none focus:border-purple-500 w-64"
  />

  <input 
    type="password" 
    placeholder="Enter your password"
    autoComplete="new-password"
    value={pswrd}
    onChange={(e)=>setPswrd(e.target.value)}
    className="border-2 border-gray-300 px-4 py-2 rounded-md outline-none focus:border-purple-500 w-64"
  />

<button type="submit" className="bg-purple-500 text-white py-2 w-60 rounded-lg font-bold">Submitt</button>
</form>

        </div>
    )
}

