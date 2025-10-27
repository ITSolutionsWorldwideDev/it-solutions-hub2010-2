// components/layout/nav-bar.tsx
"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { menuItems } from "@/lib/menu";

export default function NavbarHome() {
  //   const [hoveredItem, setHoveredItem] = useState(null);
  //   const [hideTimeout, setHideTimeout] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (item: string) => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredItem(null);
    }, 300);

    hideTimeout.current = timeout;
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const toggleDropdown = (itemLabel: any) => {
    setOpenDropdown((prev) => (prev === itemLabel ? null : itemLabel));
  };

  return (
    <>
      <nav className="relative z-10 flex items-center justify-between px-4 py-5 text-white 2xl:text-xl lg:px-8 gap-5">
        <div className="flex items-center space-x-2 w-32">
          <Link href="/">
            <img
              src="/assets/images/main-logo.svg"
              alt="IT Solutions Worldwide Logo"
            />
          </Link>
        </div>

        <div className="xl:hidden">
          <button onClick={toggleMenu} className="focus:outline-none cursor-pointer">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        <ul className="hidden xl:flex space-x-6">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="{item.link}" className="hover:underline">
                {item.label}
              </Link>
              {item.dropdown && hoveredItem === item.label && (
                <ul
                  className="absolute left-0 mt-1 w-48 bg-white text-black shadow-lg rounded z-20"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown.map((subItem, sIdx) => (
                    <li key={sIdx}>
                      <Link
                        href={subItem.link}
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="hidden xl:block">
          <Link href="/contact-us">
            <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>
      </nav>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-10"
            onClick={toggleMenu}
          ></div>
          <div className="fixed top-16 left-0 w-full h-screen bg-white shadow-lg z-20 overflow-y-auto">
            <ul className="flex flex-col space-y-4 p-4 ">
              {menuItems.map((item, idx) => (
                <li key={idx} className="relative">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.link}
                      onClick={toggleMenu}
                      className="hover:underline"
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="focus:outline-none cursor-pointer"
                      >
                        <svg
                          className={`h-5 w-5 transform ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                  {item.dropdown && openDropdown === item.label && (
                    <ul className="pl-4 space-y-2">
                      {item.dropdown.map((subItem, sIdx) => (
                        <li key={sIdx}>
                          <Link
                            href={subItem.link}
                            onClick={toggleMenu}
                            className="hover:underline"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <Link
                  href="/contact-us"
                  onClick={toggleMenu}
                  className="bg-[#278083] text-white px-4 py-2 rounded-md transition hover:bg-[#278083]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
