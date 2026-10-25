'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Home,
  Building2,
  ShieldCheck,
  MessageSquareHeart,
  PhoneCall,
  LogIn,
  UserPlus,
  ChevronRight,
} from "lucide-react";

interface NavLinkItem {
  name: string;
  href: string;
  id: string;
  icon: React.ReactNode;
}

const navLinks: NavLinkItem[] = [
  { name: "Home", href: "#home", id: "home", icon: <Home className="w-4 h-4" /> },
  { name: "Properties", href: "#properties", id: "properties", icon: <Building2 className="w-4 h-4" /> },
  { name: "Why Us", href: "#about", id: "about", icon: <ShieldCheck className="w-4 h-4" /> },
  { name: "Client Stories", href: "#stories", id: "stories", icon: <MessageSquareHeart className="w-4 h-4" /> },
  { name: "Contact", href: "#contact", id: "contact", icon: <PhoneCall className="w-4 h-4" /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect & active section tracking
  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar background
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track current active section
      const scrollPosition = window.scrollY + 120;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled || isOpen
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-gray-900/5 border-b border-gray-100/90 text-gray-800"
            : "bg-transparent border-b border-transparent text-white"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="#home"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            aria-label="Addis E-State Home"
          >
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-xl overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="Addis E-State Logo"
                fill
                sizes="48px"
                className={`object-contain transition-all duration-300 ${isScrolled || isOpen ? "" : "brightness-0 invert"
                  }`}
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black italic tracking-tight leading-none flex items-center">
                <span
                  className={`transition-colors duration-300 ${isScrolled || isOpen ? "text-orange-500" : "text-white"
                    }`}
                >
                  Addis_
                </span>
                <span
                  className={`transition-colors duration-300 ${isScrolled || isOpen
                      ? "text-blue-600"
                      : "text-white"
                    }`}
                >
                  EState
                </span>
              </span>
              <span
                className={`text-[9px] sm:text-[10px] uppercase font-bold tracking-widest mt-1 transition-colors duration-300 ${isScrolled || isOpen ? "text-gray-400" : "text-white/90"
                  }`}
              >
                Real Estate • Ethiopia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Desktop Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${isActive
                      ? isScrolled
                        ? "text-orange-600 bg-orange-50/90 font-bold shadow-xs"
                        : "text-white bg-white/20 font-bold shadow-xs"
                      : isScrolled
                        ? "text-gray-700 hover:text-orange-600 hover:bg-gray-100/70"
                        : "text-white/85 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call to Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="#contact">
              <button
                type="button"
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${isScrolled
                    ? "text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    : "text-white border border-white/30 hover:bg-white/15"
                  }`}
              >
                Login
              </button>
            </Link>
            <Link href="#contact">
              <button
                type="button"
                className="px-5 py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Sign Up
              </button>
            </Link>
          </div>

          <div className="flex items-center gap-2.5 lg:hidden">
            {/* Tablet Quick Action CTA (hidden on very small screens) */}
            <Link href="#contact" className="hidden sm:inline-flex">
              <button
                type="button"
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-sm transition-all"
              >
                Explore Homes
              </button>
            </Link>

            {/* Mobile Hamburger / Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/50 cursor-pointer ${isScrolled || isOpen
                  ? "text-gray-800 bg-gray-50 hover:bg-gray-100 border-gray-200"
                  : "text-white bg-black/20 hover:bg-black/30 border-white/20"
                }`}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-navigation"
        className={`fixed top-20 left-0 right-0 z-40 lg:hidden transition-all duration-300 ease-out origin-top ${isOpen
            ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto"
            : "opacity-0 -translate-y-4 scale-y-95 pointer-events-none"
          }`}
        aria-hidden={!isOpen}
      >
        <div className="mx-4 sm:mx-6 my-2 bg-white/98 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-100 p-4 sm:p-6 text-gray-800 flex flex-col gap-3">
          {/* Navigation Links */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${isActive
                      ? "bg-orange-50 text-orange-600 font-bold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-orange-500"
                    }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`p-1.5 rounded-lg ${isActive
                          ? "bg-orange-100 text-orange-600"
                          : "bg-gray-100 text-gray-500"
                        }`}
                    >
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 ${isActive ? "text-orange-500" : "text-gray-400"
                      }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
            <Link href="#contact" onClick={() => setIsOpen(false)} className="w-full">
              <button
                type="button"
                className="w-full py-2.5 rounded-xl font-bold text-sm text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <LogIn className="w-4 h-4 text-gray-500" />
                Login
              </button>
            </Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="w-full">
              <button
                type="button"
                className="w-full py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <UserPlus className="w-4 h-4" />
                Sign Up
              </button>
            </Link>
          </div>

          <div className="pt-2 text-center border-t border-gray-100/80">
            <a
              href="tel:+251911000000"
              className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-orange-600 hover:text-orange-700 py-1"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Direct Hotline: +251 911 000 000</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;