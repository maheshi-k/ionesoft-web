"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/Logo.webp";

import { useState } from "react";
import { ArrowRight, ChevronDown, TextAlignEnd, X } from "lucide-react";

import { menuItems } from "../data/menu";
import { headerData } from "../data/header";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <nav className="relative flex justify-between items-center px-6 lg:px-10 py-5">
      {/* Logo */}
      <Image src={Logo} alt="iOneSoft" width={200} height={60} />

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-8 items-center">
        <div className="flex gap-8 text-lg">
          {menuItems.map((item) =>
            item.children ? (
              <div key={item.title} className="relative group">
                <div className="flex items-center gap-1 font-semibold hover:text-[var(--primary-hover)] transition-colors">
                  <Link href={item.url}>{item.title}</Link>
                  <ChevronDown size={16} />
                </div>

                <div
                  className="
                    absolute left-0 top-full pt-2 w-80
                    opacity-0 invisible
                    drop-shadow-sm
                    group-hover:opacity-100
                    group-hover:visible
                    transition-all duration-200
                    z-50
                  "
                >
                  <div className="bg-[var(--background)] rounded-lg shadow-lg overflow-hidden">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.url!}
                        className="block px-4 py-3 border-b border-[#f2f5ed] hover:bg-[var(--primary-hover-opc)]"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.title}
                href={item.url!}
                className="font-semibold hover:text-[var(--primary-hover)] transition-colors"
              >
                {item.title}
              </Link>
            ),
          )}
        </div>

        <Link
          href={headerData.ctaButton.href}
          className="flex items-center gap-3 rounded-lg bg-[var(--primary-bg)] px-5 py-2 text-lg font-semibold text-white transition-colors hover:bg-[var(--primary-hover)]"
        >
          {headerData.ctaButton.text}
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="lg:hidden"
      >
        {isOpen ? <X size={28} /> : <TextAlignEnd size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden z-50">
          <div className="flex flex-col p-5">
            {menuItems.map((item) =>
              item.children ? (
                <div key={item.title}>
                  <div className="flex items-center justify-between w-full py-3 font-medium">
                    <Link href={item.url} onClick={() => setIsOpen(false)}>
                      {item.title}
                    </Link>

                    <button onClick={() => toggleDropdown(item.title)}>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          openDropdown === item.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {openDropdown === item.title && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.url!}
                          className="block py-2 text-gray-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.title}
                  href={item.url!}
                  className="py-3 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ),
            )}

            <Link
              href={headerData.ctaButton.href}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--primary-bg)] px-5 py-3 text-white transition-colors hover:bg-[var(--primary-hover)]"
            >
              {headerData.ctaButton.text}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
