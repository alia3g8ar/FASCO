"use client";
import { useState, useEffect, useRef } from "react";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

import { navMenu } from "../../lib/navMenu";

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navContainerRef = useRef<HTMLElement | null>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        navContainerRef.current &&
        hamburgerButtonRef.current &&
        !navContainerRef.current.contains(e.target as Node) &&
        !hamburgerButtonRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

  return (
    <header
      className="flex items-center py-6 px-4 md:px-16 relative z-50 font-custom "
      dir="rtl"
    >
      {/* Right Side - Logo and Menu Items */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide  text-gray-800 no-underline"
        >
          TINKO
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          {navMenu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="hover:text-black transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Left Side - Actions */}
      <div className="hidden md:flex items-center gap-4 mr-auto">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
          <Search className="w-6 h-6 text-gray-700" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition relative">
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </button>
        <Link
          href="/signup"
          className="px-5 py-2 rounded-lg bg-black text-white text-sm font-medium shadow-lg hover:scale-105 transition"
        >
          ثبت نام
        </Link>
      </div>

      {/* Hamburger Button (Mobile) */}
      <button
        ref={hamburgerButtonRef}
        onClick={handleMenuToggle}
        aria-label="باز و بسته کردن منو"
        aria-expanded={isMenuOpen}
        type="button"
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 p-2 rounded-lg mr-auto fixed top-4 left-4 z-50"
      >
        <span
          className={`h-0.5 w-6 bg-black rounded transition-all mb-1.5 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-black rounded transition-all mb-1.5 ${
            isMenuOpen ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-black rounded transition-all ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Navigation */}
      <nav
        ref={navContainerRef}
        className={`fixed inset-0 z-40 md:hidden bg-white transition-all ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center justify-center gap-6 h-full text-gray-700 text-lg">
          {navMenu.map((item) => (
            <li key={item.path}>
              <Link href={item.path} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}

          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
            <Search className="w-6 h-6 text-gray-700" />
          </button>

          <button className="p-2 hover:bg-gray-100 rounded-lg transition relative">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>

          <li>
            <Link
              href="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="px-5 py-2 rounded-lg bg-black text-white text-sm font-medium shadow-lg hover:scale-105 transition"
            >
              ثبت نام
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
