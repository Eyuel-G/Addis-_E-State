'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-20 fixed top-0 left-0 flex items-center justify-between md:justify-around px-4 sm:px-6 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 text-gray-800"
          : "bg-transparent text-white"
        }`}
    >
      <div className="flex items-center flex-shrink-0">
        <div className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 mr-2 sm:mr-3">
          <Image
            src="/logo.png"
            alt="Addis E-State Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex items-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold italic">
          <h1 className="text-orange-500">Addis_</h1>
          <h1 className="text-blue-500">EState</h1>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block md:hidden p-2 text-orange-500 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          {isOpen ? (
            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
          ) : (
            <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-md py-4 px-6 flex flex-col gap-4 z-40 animate-fade-in text-gray-800">
          <Link href="#" onClick={() => setIsOpen(false)} className="text-orange-500 hover:text-orange-600 font-medium">Home</Link>
          <Link href="#" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-orange-600 font-medium">Properties</Link>
          <Link href="#" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-orange-600 font-medium">About</Link>
          <Link href="#" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-orange-600 font-medium">Contact</Link>
          <div className="flex gap-4 pt-2 border-t border-gray-100">
            <Link href="#" onClick={() => setIsOpen(false)} className="w-full">
              <button className="w-full bg-orange-500 text-white rounded-2xl px-4 py-2 hover:bg-orange-600">Login</button>
            </Link>
            <Link href="#" onClick={() => setIsOpen(false)} className="w-full">
              <button className="w-full bg-orange-500 text-white rounded-2xl px-4 py-2 hover:bg-orange-600">SignUp</button>
            </Link>
          </div>
        </div>
      )}

      <ul className={`hidden md:flex justify-center text-lg font-medium gap-8 transition-colors ${isScrolled ? "text-gray-800" : "text-white"}`}>
        <li className="hover:text-orange-500 transition-colors"><Link href="#">Home</Link></li>
        <li className="hover:text-orange-500 transition-colors"><Link href="#">Properties</Link></li>
        <li className="hover:text-orange-500 transition-colors"><Link href="#">About</Link></li>
        <li className="hover:text-orange-500 transition-colors"><Link href="#">Contact</Link></li>
      </ul>

      <div className="hidden sm:flex text-orange-500 gap-3 sm:gap-4">
        <Link href="#">
          <button className="bg-orange-500 text-white font-medium rounded-2xl px-5 py-2 hover:bg-orange-600 transition-colors shadow-sm">Login</button>
        </Link>
        <Link href="#">
          <button className="bg-orange-500 text-white font-medium rounded-2xl px-5 py-2 hover:bg-orange-600 transition-colors shadow-sm">SignUp</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;