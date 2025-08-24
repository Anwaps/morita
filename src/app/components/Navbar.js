"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, Mail } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");


  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120; // offset navbar fixed
        if (window.scrollY >= sectionTop) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // เรียกตอน mount เพื่อ set initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // กำหนด class ของ link
  const linkClass = useCallback(
    (sectionId) =>
      activeSection === sectionId
        ? "border-b-2 border-red-600 cursor-pointer"
        : "hover:text-red-600 duration-300 cursor-pointer",
    [activeSection]
  );

  // smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const yOffset = -100; // offset navbar
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setNavbarIsOpen(false);
  };

  return (
    <header className="w-full bg-white shadow fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="/morita-brand.webp"
              alt="Morita Logo"
              width={120}
              height={40}
              priority
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6 ml-auto">
            <button onClick={() => scrollToSection("home")} className={linkClass("home")}>หน้าเเรก</button>
            <button onClick={() => scrollToSection("about")} className={linkClass("about")}>เกี่ยวกับบริษัท</button>
            <button onClick={() => scrollToSection("service")} className={linkClass("service")}>สินค้าเเละบริการของบริษัท</button>
            <button onClick={() => scrollToSection("vision")} className={linkClass("vision")}>วิสัยทัศน์ของบริษัท</button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors duration-300 flex items-center cursor-pointer"
            >
              ติดต่อเรา <Mail className="ml-2" />
            </button>
            <Image
              src="/morita-group.webp"
              alt="Morita Group"
              width={80}
              height={40}
              priority
            />
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-auto flex items-center space-x-2">
            <Image src="/morita-group.webp" alt="Morita Group" width={36} height={36} />
            <button
              aria-label="Toggle navigation menu"
              className="p-2 rounded-md hover:bg-gray-100 cursor-pointer hover:text-red-700"
              onClick={() => setNavbarIsOpen(!navbarIsOpen)}
            >
              {navbarIsOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navbarIsOpen && (
        <nav className="lg:hidden bg-white shadow-lg px-4 py-3 space-y-3 flex flex-col transition-all duration-300 ease-in-out">
          <button onClick={() => scrollToSection("home")} className={linkClass("home")}>หน้าเเรก</button>
          <button onClick={() => scrollToSection("about")} className={linkClass("about")}>เกี่ยวกับบริษัท</button>
          <button onClick={() => scrollToSection("service")} className={linkClass("service")}>สินค้าเเละบริการของบริษัท</button>
          <button onClick={() => scrollToSection("vision")} className={linkClass("vision")}>วิสัยทัศน์ของบริษัท</button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors duration-300 flex items-center justify-center"
          >
            ติดต่อเรา <Mail className="ml-2" />
          </button>
        </nav>
      )}
    </header>
  );
}
