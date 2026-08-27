import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const YEARS = [
  {
    year: "2026",
    active: false,
    date: "Mar 14",
    body: "New Frontiers: India's Growth Strategy and the Great Industrial Liftoff",
  },
  {
    year: "2025",
    active: true,
    date: "Jul – Sep",
    body: "ILC CEO Confluence & Retreat | Reconnect | Reconnect",
  },
  {
    year: "2024",
    active: false,
    date: "Jul – Sep",
    body: "Building Resilience Amid Changing Business Landscape",
  },
  {
    year: "2023",
    active: false,
    date: "Oct – Dec",
    body: "Self Vs Business: How do you balance emotional needs with business needs",
  },
];

export default function JourneyTimeline() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-line]", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
      });
      gsap.from("[data-node]", {
        opacity: 0,
        y: 26,
        duration: 0.8,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
      });
    }, root);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="section-dark hairline-top">
      <div className="mx-auto max-w-[1240px] px-5 py-12 md:px-8 md:py-14">
        <SectionHeading>Journey So Far</SectionHeading>

        <div className="relative mt-9 flex items-start gap-4">
          <button
            aria-label="Previous years"
            className="mt-16 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-crimson/70 text-crimson-bright transition-colors hover:bg-crimson hover:text-white md:flex"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="relative flex-1">
            <div
              data-line
              className="absolute top-[70px] right-2 left-2 hidden h-px bg-gold/25 md:block"
            />
            <div className="grid gap-9 md:grid-cols-4 md:gap-6">
              {YEARS.map((y) => (
                <div key={y.year} data-node className="relative md:pt-0">
                  <p
                    className={`font-display text-[34px] leading-none md:text-[38px] ${
                      y.active ? "text-gold" : "text-muted-foreground/70"
                    }`}
                  >
                    {y.year}
                  </p>
                  <div className="relative mt-6 mb-5 hidden h-3 md:block">
                    <span
                      className={`absolute top-1/2 left-0 h-3 w-3 -translate-y-1/2 rounded-full ${
                        y.active
                          ? "bg-crimson-bright ring-4 ring-crimson/20"
                          : "bg-muted-foreground/55"
                      }`}
                    />
                  </div>
                  <p className="mt-3 text-[11.5px] font-semibold text-crimson-bright md:mt-0">
                    {y.date}
                  </p>
                  <p className="mt-1.5 max-w-[230px] text-[11.5px] leading-[1.75] text-foreground/85">
                    {y.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            aria-label="Next years"
            className="mt-16 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-crimson/70 text-crimson-bright transition-colors hover:bg-crimson hover:text-white md:flex"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
