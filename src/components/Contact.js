import { time } from "framer-motion";
import { useState, useEffect } from "react";
const Contact = ()=>{
    const [count, setCount] = useState(0);
useEffect(()=>{
    const timer = setInterval(()=>{
        console.log("Set Interval About");
    },1000);
    console.log("Contact Use Effect");
    return ()=>{
        clearInterval(timer);
        console.log("useEffect Return");
    }
},[])
    return(
        <div className="w-full fixed top-40 left-0 z-50">
            <h1>Contact Page </h1>
            <h2>WelCome To MY Contact Page</h2>
            <h2>Count: {count}</h2>
            <button onClick={()=>{
                setCount(count + 1);
            }}
            >Increse</button>
        </div>
    );
};
export default Contact;