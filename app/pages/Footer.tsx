"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight, ShieldCheck } from "lucide-react";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

const quickLinks = [
  { name: "Buy Property", href: "#properties" },
  { name: "Rent Property", href: "#properties" },
  { name: "New Projects", href: "#properties" },
  { name: "Commercial Spaces", href: "#properties" },
  { name: "Land & Plots", href: "#properties" },
  { name: "Why Choose Us", href: "#about" },
];

const neighborhoods = [
  { name: "Bole & Atlas" },
  { name: "Kazanchis" },
  { name: "Sarbet & Old Airport" },
  { name: "CMC & Ayat" },
  { name: "Megenagna" },
  { name: "Summit & Jackros" },
];

const services = [
  { name: "Property Valuation", desc: "Certified market appraisals" },
  { name: "Legal Due Diligence", desc: "Title deed verification" },
  { name: "Interior Design", desc: "Turnkey home styling" },
  { name: "Mortgage Advisory", desc: "Bank financing assistance" },
  { name: "Property Management", desc: "Tenant & rental oversight" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-16 sm:pt-20 pb-12 px-4 sm:px-8 md:px-16 lg:px-24 border-t border-gray-800/80 relative overflow-hidden">
      {/* Subtle top edge gradient highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      {/* Ambient background glows matching CTA / Hero theme */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 relative z-10">
        {/* Main Footer Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Contact Info */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col">
            {/* Brand Header */}
            <Link
              href="#home"
              className="inline-flex items-center gap-3 group focus:outline-none w-fit mb-5"
              aria-label="Addis E-State Home"
            >
              <div className="relative h-11 w-11 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md shadow-orange-500/10 group-hover:scale-105 transition-transform duration-300 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Addis E-State Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black italic tracking-tight leading-none flex items-center">
                  <span className="text-orange-500">Addis_</span>
                  <span className="text-blue-700">EState</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest mt-1 text-orange-400">
                  Premium Real Estate • Ethiopia
                </span>
              </div>
            </Link>

            {/* Mission Statement */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Ethiopia&apos;s premier real estate marketplace, connecting buyers, sellers, and renters with verified properties and trusted local expertise since 2015.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+251911123456"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-orange-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium">+251 911 123 456</span>
              </a>

              <a
                href="mailto:addise_estate@gmail.com"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-orange-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium">addise_estate@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-orange-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium">Bole Atlas, Addis Ababa, Ethiopia</span>
              </div>
            </div>

            {/* Trust Pill */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold w-fit">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Vetted Title Deeds &amp; Listings</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="sm:col-span-1 lg:col-span-2 flex flex-col">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-all duration-200 flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Neighborhoods */}
          <div className="sm:col-span-1 lg:col-span-3 flex flex-col">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              Neighborhoods
            </h4>
            <ul className="flex flex-col gap-3">
              {neighborhoods.map((area) => (
                <li key={area.name}>
                  <Link
                    href="#properties"
                    className="flex items-center justify-between text-sm text-gray-400 hover:text-orange-400 transition-colors group py-0.5"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {area.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3.5">
              {services.map((item) => (
                <li key={item.name} className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-200 hover:text-orange-400 transition-colors cursor-pointer">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-400 mt-0.5">
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Socials & Legal */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
          {/* Copyright */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Addis E-State. All rights reserved. Ethiopia&apos;s leading property network.
            </p>
          </div>

          {/* Social Icons */}
          <div className="order-1 md:order-2 flex items-center gap-2.5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-105 shadow-xs"
            >
              <FiFacebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-105 shadow-xs"
            >
              <FiInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-105 shadow-xs"
            >
              <FiTwitter className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-105 shadow-xs"
            >
              <FiYoutube className="w-4 h-4" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="order-3 flex items-center gap-4">
            <Link
              href="#contact"
              className="hover:text-orange-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-700">•</span>
            <Link
              href="#contact"
              className="hover:text-orange-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
