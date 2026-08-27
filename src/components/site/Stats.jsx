import { useEffect, useRef } from "react";
import { ArrowRight, Star, User, Users } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import TimesGroupMark from "./TimesGroupMark";

const STATS = [
  { icon: Users, value: 0, suffix: "", label: ["ADVISORY", "BOARD MEMBERS"] },
  { icon: User, value: 20, suffix: "+", label: ["CXO", "MEMBERS"] },
  { icon: Star, value: 35, suffix: "+", label: ["ENGAGEMENT", "ACTIVITIES"] },
];

export default function Stats() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-stat]", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 82%", once: true },
      });

      root.current.querySelectorAll("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: root.current, start: "top 82%", once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.v));
          },
        });
      });
    }, root);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="section-dark hairline-top">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-12 md:px-8 md:py-14 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-0">
        <div className="flex flex-col justify-center gap-6 lg:pr-10">
          {STATS.map((s) => (
            <div key={s.label[1]} data-stat className="flex items-center gap-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-crimson/70">
                <s.icon className="h-5 w-5 text-crimson-bright" strokeWidth={1.6} />
              </span>
              <span className="font-display min-w-[74px] text-[34px] leading-none text-gold">
                <span data-count={s.value}>0</span>
                {s.suffix}
              </span>
              <span className="text-[11.5px] leading-[1.5] tracking-[0.1em] text-foreground/85">
                {s.label[0]}
                <br />
                {s.label[1]}
              </span>
            </div>
          ))}
        </div>

        <div className="hidden w-px bg-gold/15 lg:block" />

        <div data-stat className="flex flex-col items-center justify-center px-4 text-center">
          <h3 className="font-display text-[19px] leading-[1.45] tracking-[0.06em] text-gold uppercase md:text-[21px]">
            Enabling Change.
            <br />
            Facilitating Growth
          </h3>
          <TimesGroupMark className="mt-6" />
        </div>

        <div className="hidden w-px bg-gold/15 lg:block" />

        <div data-stat className="flex flex-col justify-center lg:pl-10">
          <p className="text-[12.5px] leading-[1.85] text-foreground/85">
            India Leadership Council (ILC), an exclusive, by-invitation community curated by The
            Times Group, unites visionary leaders across industries to drive impact and meaningful
            transformation.
          </p>
          <button className="group mt-4 inline-flex w-fit items-center gap-3 text-[12px] font-semibold tracking-[0.08em] text-crimson-bright">
            Read More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
