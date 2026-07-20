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
      <Link href={menuItems[0].url}>
        <Image
          src={Logo}
          alt="iOneSoft"
          width={200}
          height={60}
          className="cursor-pointer"
        />
      </Link>

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
        <div className="absolute left-0 top-full z-50 w-full border-t border-gray-100 bg-white shadow-xl lg:hidden">
          <div className="max-h-[calc(100vh-80px)] overflow-y-auto p-4">
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isExpanded = openDropdown === item.title;

                return item.children ? (
                  <div key={item.title} className="relative">
                    {isExpanded && (
                      <span className="absolute -left-4 top-3 h-5 w-1 rounded-r-full bg-[var(--primary-bg)]" />
                    )}

                    <div className="flex items-center justify-between">
                      <Link
                        href={item.url}
                        onClick={() => setIsOpen(false)}
                        className={`flex flex-1 items-center gap-4 rounded-xl px-3 py-3 font-medium transition-colors ${
                          isExpanded
                            ? "text-[var(--primary-bg)]"
                            : "text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        {Icon && (
                          <Icon
                            size={19}
                            strokeWidth={2}
                            className={
                              isExpanded
                                ? "text-[var(--primary-bg)]"
                                : "text-gray-700"
                            }
                          />
                        )}

                        <span>{item.title}</span>
                      </Link>

                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.title)}
                        className="flex h-12 w-12 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-50 hover:text-[var(--primary-bg)]"
                        aria-label={`Toggle ${item.title} submenu`}
                        aria-expanded={isExpanded}
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            isExpanded
                              ? "rotate-180 text-[var(--primary-bg)]"
                              : ""
                          }`}
                        />
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="ml-[22px] border-l border-gray-300 pb-2 pl-4">
                        <div className="space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.url}
                              onClick={() => setIsOpen(false)}
                              className="block rounded-lg px-3 py-2.5 text-sm leading-5 text-gray-700 transition-colors hover:bg-gray-50 hover:text-[var(--primary-bg)]"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.title}
                    href={item.url}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 rounded-xl px-3 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-50 hover:text-[var(--primary-bg)]"
                  >
                    {Icon && (
                      <Icon
                        size={19}
                        strokeWidth={2}
                        className="text-gray-700"
                      />
                    )}

                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </div>

            <Link
              href={headerData.ctaButton.href}
              onClick={() => setIsOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary-bg)] px-5 py-3.5 font-medium text-white transition-colors hover:bg-[var(--primary-hover)]"
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
