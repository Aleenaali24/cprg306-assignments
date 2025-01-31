"use client";

import {useState} from "react";

export default function Counter(){
  const[count, setCount] = useState(0); // 0 is the initial value of count, and it returns an array with two elemnents count and setCount which is a function that updates the count value 

  const increment = () => setCount(count + 1); // increment function that increments the count value by 1
 
  return(
    <div>
      <p>{count}</p> 
      <button onClick={increment} className="p-2 m-2 bg-purple-800 before:">Increment</button> 
    </div>
  )




{}} 