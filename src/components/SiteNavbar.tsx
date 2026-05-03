"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#screenshots", label: "Screenshots" },
  { href: "#reviews", label: "Reviews" },
  { href: "#pricing", label: "Pricing" },
] as const;

function LogoMark() {
  return (
    <a href="#" className="flex shrink-0 items-center gap-2 sm:gap-2.5">
      <Image
        src="/logo.jpeg"
        alt="Callie"
        width={36}
        height={36}
        className="h-9 w-9 shrink-0 rounded-xl object-cover shadow-[0_12px_28px_-6px_rgba(16,185,129,0.45)] ring-1 ring-white/15"
        priority
      />
      <span className="truncate text-lg font-semibold tracking-tight text-white sm:text-xl">callie</span>
    </a>
  );
}

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  const drawer =
    open && mounted ? (
      <div className="fixed inset-0 z-[100] md:hidden">
        <button
          type="button"
          className="absolute inset-0 z-0 bg-black/70 backdrop-blur-[6px]"
          aria-label="Close menu"
          onClick={close}
        />
        <div
          id="mobile-nav-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="absolute right-0 top-0 z-10 flex h-[100dvh] w-[min(100vw,320px)] flex-col border-l border-white/10 bg-[#050907]/97 shadow-[0_0_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
        >
          <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">Menu</span>
            <button
              type="button"
              onClick={close}
              className="rounded-xl p-2 text-white/85 transition hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto overscroll-contain px-3 py-4" aria-label="Page sections">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-xl px-4 py-3.5 text-[15px] font-semibold text-white/88 transition hover:bg-white/[0.06] hover:text-white active:bg-white/[0.09]"
                onClick={close}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="border-t border-white/[0.08] p-4">
            <a
              href="#download-badges"
              onClick={close}
              className="flex w-full items-center justify-center rounded-full bg-emerald-500/95 py-3 text-sm font-semibold text-white shadow-[0_12px_36px_-8px_rgba(16,185,129,0.5)] ring-1 ring-emerald-300/25 transition hover:bg-emerald-400/95"
            >
              Get the app
            </a>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <>
      <nav className="nav-glass sticky top-0 z-50 px-3 py-3 sm:px-5 md:px-6 md:py-3.5 lg:px-8" aria-label="Primary">
        {/* Mobile / small tablet */}
        <div className="flex items-center justify-between gap-3 md:hidden">
          <LogoMark />
          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#download-badges"
              className="rounded-full bg-emerald-500/95 px-3 py-2 text-[11px] font-semibold leading-none text-white shadow-[0_12px_36px_-8px_rgba(16,185,129,0.55)] ring-1 ring-emerald-300/25 transition hover:bg-emerald-400/95"
            >
              Get the app
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-xl p-2.5 text-white/90 transition hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-expanded={open}
              aria-controls="mobile-nav-dialog"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-x-6 lg:gap-x-8">
          <LogoMark />
          <div className="flex min-w-0 flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:gap-x-7">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="nav-link text-sm font-semibold whitespace-nowrap">
                {label}
              </a>
            ))}
          </div>
          <a
            href="#download-badges"
            className="justify-self-end rounded-full bg-emerald-500/95 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_36px_-8px_rgba(16,185,129,0.55)] ring-1 ring-emerald-300/25 transition hover:bg-emerald-400/95"
          >
            Get the app
          </a>
        </div>
      </nav>

      {mounted && drawer ? createPortal(drawer, document.body) : null}
    </>
  );
}
