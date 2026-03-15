import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isauth,setauth]=useState(false)
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-400">
          PortfolioBuilder
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="hover:text-indigo-400 cursor-pointer transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-indigo-400 cursor-pointer transition">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="hover:text-indigo-400 cursor-pointer transition">
            <Link to="/portfolio-editor">Create Portfolio</Link>
          </li>
          <li className="hover:text-indigo-400 cursor-pointer transition">
            <Link to="/project-details">Projects</Link>
          </li>
        </ul>

        {/* Button */}
        <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg font-medium transition">
          <Link to="/login">{isauth ? "Logout" : "Login"}</Link>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;