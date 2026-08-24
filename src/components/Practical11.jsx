import { useEffect, useState } from "react";

function Practical11(){
    const[count,setCount]=useState(0);
     useEffect(()=>{
        document.title = `Click :${count}`;
     },[count]);
    return(
        <div>
            Count:{count}
            <p><button onClick={()=>setCount(count+1)}>Increment</button></p>
        </div>
    );
}
export default Practical11;
