"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

export type ReviewCarouselItem = {
  name: string;
  handle: string;
  text: string;
  stars: number;
};

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ReviewsCarouselMobile({ testimonials }: { testimonials: ReviewCarouselItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const updateActiveFromScroll = useCallback(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const slides = root.querySelectorAll<HTMLElement>("[data-review-slide]");
    if (!slides.length) return;

    const mid = root.scrollLeft + root.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;

    slides.forEach((slide, i) => {
      const center = slide.offsetLeft + slide.offsetWidth / 2;
      const dist = Math.abs(mid - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });

    setActive((prev) => (prev !== best ? best : prev));
  }, []);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    updateActiveFromScroll();

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveFromScroll);
    };

    root.addEventListener("scroll", onScroll, { passive: true });

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(updateActiveFromScroll) : null;
    ro?.observe(root);

    return () => {
      root.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      ro?.disconnect();
    };
  }, [updateActiveFromScroll, testimonials.length]);

  const goTo = (index: number) => {
    const root = scrollerRef.current;
    const slides = root?.querySelectorAll<HTMLElement>("[data-review-slide]");
    const slide = slides?.[index];
    if (!slide) return;

    slide.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
    setActive(index);
  };

  return (
    <div className="px-5 sm:px-8">
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-gray-950 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-gray-950 to-transparent"
          aria-hidden
        />
        <div
          ref={scrollerRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer reviews"
          className="flex gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-3 pt-1 scroll-px-5 -mx-1 px-1 overscroll-x-contain touch-pan-x"
        >
          {testimonials.map((t, idx) => (
            <article
              key={t.name}
              data-review-slide
              aria-roledescription="slide"
              aria-label={`${idx + 1} of ${testimonials.length}`}
              className="snap-center shrink-0 w-[min(88vw,340px)] bg-white/[0.05] border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg shadow-black/25 first:ml-1 last:mr-1"
            >
              <div className="flex mb-3">
                {[...Array(t.stars)].map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-white/82 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div>
                <div className="text-white font-semibold text-sm">{t.name}</div>
                <div className="text-white/35 text-xs">{t.handle}</div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 mt-2">
        <nav className="flex justify-center items-center gap-2" aria-label="Review pagination">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-current={active === i ? "true" : undefined}
              aria-label={`Go to review ${i + 1} of ${testimonials.length}`}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 ${
                active === i ? "h-2 w-7 bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.45)]" : "h-2 w-2 bg-white/25 hover:bg-white/45"
              }`}
            />
          ))}
        </nav>
        <p className="text-center text-white/30 text-xs">
          Swipe or tap dots — scroll still works
        </p>
      </div>
    </div>
  );
}
