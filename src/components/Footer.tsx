"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ChevronUp } from "lucide-react";
import { footerData } from "../data/footer";

export default function Footer() {
  return (
    <footer className="bg-[#F7F8F5]">
      <div className="mx-auto lg:max-w-[80%] px-6 py-14">
        {/* Top Row */}
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Company */}
          <div>
            <Link href={footerData.company.href}>
              <Image
                src={footerData.company.logo}
                alt={footerData.company.name}
                width={170}
                height={170}
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-600">
              {footerData.company.description}
            </p>

            <div className="mt-6 flex gap-3">
              {footerData.socials.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary-bg)] bg-white shadow transition hover:bg-[#649B27]"
                  >
                    <Icon className="h-4 w-4 text-[var(--primary-text)] transition-colors hover:text-white" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Offices */}
          {footerData.offices.map((office) => (
            <div key={office.country}>
              <h1 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
                {office.country}
              </h1>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex gap-2">
                  <MapPin
                    size={16}
                    style={{ color: "var(--primary-bg)" }}
                    className="mt-1 shrink-0"
                  />
                  <span>{office.address}</span>
                </div>

                {office.postalCode && (
                  <p className="ml-5">Postal Code: {office.postalCode}</p>
                )}

                <div className="flex gap-2">
                  <Phone
                    size={16}
                    style={{ color: "var(--primary-bg)" }}
                    className="mt-1 shrink-0"
                  />
                  <span>{office.phone.join(" / ")}</span>
                </div>

                <div className="flex gap-2">
                  <Mail
                    size={16}
                    style={{ color: "var(--primary-bg)" }}
                    className="mt-1 shrink-0"
                  />
                  <span>{office.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
          {footerData.links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 transition hover:text-green-600"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-[#D2CACA]" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 md:flex-row">
          <p>
            Copyright © 2012-{new Date().getFullYear()} iOneSoft Solutions Pte
            Ltd. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/join-us">Join Us</Link>

            <Link href="/disclaimer">Disclaimer</Link>

            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>

        {/* Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-bg)] text-white shadow-lg transition hover:bg-[#558620]"
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      </div>
    </footer>
  );
}
