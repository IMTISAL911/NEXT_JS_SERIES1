"use client";

import Link from "next/link"
export default function About () {
    return(
        
        <>        
        <div className="w-1/2 min-h-96 max-h-auto flex ml-[25%] mt-[7%] flex-wrap justify-between  border-2 gap-4 rounded-lg bg-gray-300 p-4"> 
   
   <div className="bg-green-400 w-20 h-20 flex justify-center items-center">
    <h4 className=" text-white ">1</h4>
   </div>

<div className="bg-red-500 w-20 h-20 flex justify-center items-center">
    <h4 className="text-white">2</h4>
   </div>

<div className="bg-pink-500 w-20 h-20 flex justify-center items-center">
    <h4 className="text-white">3</h4>
   </div>

<div className="bg-pink-500 w-20 h-20 flex justify-center items-center" >
    <h4 className="text-white">4</h4>
   </div>

<div className="bg-pink-500 w-20 h-20 flex justify-center items-center">
    <h4 className="text-white">5</h4>
   </div>

<div className="bg-pink-500 w-20 h-20 flex justify-center items-center">
    <h4 className="text-white">6</h4>
   </div>

<div className="bg-pink-500 w-20 h-20 flex justify-center items-center">
    <h4 className="text-white">7</h4>
   </div>

<div className="bg-pink-500 w-20 h-20 flex justify-center items-center">
    <h4 className="text-white">8</h4>
   </div>

<div className="bg-pink-500 w-20 h-20 flex justify-center items-center">
    <h4 className="text-white">9</h4>
   </div>

<div className="bg-pink-500 w-20 h-20 flex justify-center items-center"> 
    <h4 className="text-white">10</h4>
   </div>


        </div>
<div className="justify-center flex mt-[2%]">
    <Link href="/">GO to HOME</Link>
</div>

</>

        
    
    )
}