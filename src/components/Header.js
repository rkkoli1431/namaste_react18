import { TiShoppingCart } from "react-icons/ti";
import { LOGO_URL } from "../utils/constents";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () =>{
    const [btnName, setBtnName] = useState("Login");
    console.log("Header Renderd");

    // if no dependency array => useEffect is called on every render
    // if dependency array is empty = [] => useEffect is called on initial render (just one)
    // if dependency array is [btnName] => called everytime btnName is updated 
    useEffect(()=>{
        console.log("useEffect Called");
    },[btnName]);
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
        <div className="nav-items">
            <ul>
                <li>
                    <Link>Home</Link>
                </li>

                <li>
                   <Link to="/about"> About Us</Link>
                </li>
                
                <li>
                    <Link>Contact Us</Link>
                </li>

                <li><TiShoppingCart /></li>
                <button className="login-btn" onClick={()=>{
                    btnName === "Login" 
                    ?setBtnName("Logout"):
                    setBtnName("Login");
                }}>{btnName}</button>
            </ul>
        </div>
        </div>
    );
};

export default Header;