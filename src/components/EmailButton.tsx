"use client";

import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

type EmailButtonProps = {
  href: string;
  text?: string;
  ariaLabel?: string;
  variant?: "apply" | "icon";
  children?: ReactNode;
};

export default function EmailButton({
  href,
  text = "Email Us",
  ariaLabel = "Send email",
  variant = "apply",
  children,
}: EmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const email = href.replace(/^mailto:/, "").split("?")[0];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement("textarea");

      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.style.opacity = "0";

      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 4000);
  };

  const handleClick = async () => {
    await copyEmail();

    window.setTimeout(() => {
      window.location.href = href;
    }, 800);
  };

  if (variant === "icon") {
    return (
      <div className="relative">
        <button
          type="button"
          onClick={handleClick}
          aria-label={ariaLabel}
          title={ariaLabel}
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary-bg)] bg-white shadow transition-colors hover:bg-[var(--primary-bg)]"
        >
          {children}
        </button>

        {copied && (
          <span
            role="status"
            aria-live="polite"
            className="absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-3 py-2 text-xs text-white shadow-lg"
          >
            Email copied
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="mt-8">
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center gap-3 rounded-2xl bg-[var(--primary-bg)] px-10 py-5 font-semibold text-white transition-colors hover:bg-[var(--primary-hover)]"
      >
        {copied ? "Email copied" : text}
        {copied ? <Check size={20} /> : <ArrowRight size={20} />}
      </button>

      {copied && (
        <p
          role="status"
          aria-live="polite"
          className="mt-3 max-w-md font-bold text-sm leading-6 text-gray-600"
        >
          {email} was copied.
        </p>
      )}
    </div>
  );
}
