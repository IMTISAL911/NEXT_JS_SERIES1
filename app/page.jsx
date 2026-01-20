"use client";

import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0);

  function ADD () {
setCount(count+1)
  }

  function DEcrease (){
    setCount(count-1)
  }
  return(

    <div className="m-screen flex flex-col items-center justify-center gap-4">
    
    <h1 className="text-center text-red-500 bg-green-500">COUNTER APP</h1>

<p className="text-center">{count}</p>

<div className="flex gap-4 ">
<button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={ADD}>ADD</button>
<button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={DEcrease}>decrease</button>
</div>
    </div>
  )
}