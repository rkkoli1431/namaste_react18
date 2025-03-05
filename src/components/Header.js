import { TiShoppingCart } from "react-icons/ti";
import { LOGO_URL } from "../utils/constents";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    console.log("Header Rendered");

    useEffect(() => {
        console.log("useEffect Called");
    }, [btnName]);

    return (
        <header className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img className="h-12 w-auto" src={LOGO_URL} alt="Logo" />
                </div>

                {/* Navigation Items */}
                <nav>
                    <ul className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
                        <li>
                            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-blue-600 transition">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-blue-600 transition">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/cart" className="hover:text-blue-600 transition flex items-center">
                                <TiShoppingCart className="text-2xl" />
                            </Link>
                        </li>
                        <li>
                            <button 
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                                onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
                            >
                                {btnName}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
