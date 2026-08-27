import { useEffect, useRef } from "react";
import { ArrowRight, Gem } from "lucide-react";
import { gsap } from "@/lib/gsap";
import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-img]", { scale: 1.12, opacity: 0, duration: 1.6 })
        .from("[data-hero-diamond]", { opacity: 0, scale: 0.8, duration: 1.2 }, "-=1.1")
        .from(
          "[data-hero-line]",
          { opacity: 0, y: 26, duration: 0.9, stagger: 0.13 },
          "-=0.9",
        );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-[560px] w-full overflow-hidden bg-ink md:h-[660px]">
      <img
        data-hero-img
        src={heroBg}
        alt="India Leadership Council members photographed at a heritage fort"
        width={1920}
        height={912}
        className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--ink)_18%,transparent_62%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.11_0.006_40/0.85)_0%,transparent_35%,oklch(0.11_0.006_40/0.55)_100%)]" />

      <div
        data-hero-diamond
        className="pointer-events-none absolute top-1/2 left-[52%] hidden -translate-y-1/2 md:block"
      >
        <Gem
          className="h-[240px] w-[240px] text-gold-bright/85 drop-shadow-[0_0_60px_oklch(0.78_0.13_82/0.6)]"
          strokeWidth={0.5}
        />
      </div>

      <div className="relative mx-auto flex h-full max-w-[1240px] flex-col justify-end px-5 pb-16 md:px-8 md:pb-20">
        <p
          data-hero-line
          className="text-[13px] font-semibold tracking-[0.14em] text-crimson-bright uppercase"
        >
          India Leadership Council (ILC)
        </p>
        <h1
          data-hero-line
          className="text-gold-gradient font-display mt-3 text-[28px] leading-[1.1] tracking-[0.04em] uppercase md:text-[40px]"
        >
          An Exclusive Platform
        </h1>
        <p
          data-hero-line
          className="font-display mt-1 text-[24px] tracking-[0.03em] text-foreground uppercase md:text-[34px]"
        >
          For CEO Community
        </p>
        <button
          data-hero-line
          className="group mt-7 inline-flex w-fit items-center gap-4 bg-crimson px-6 py-3.5 text-[11.5px] font-semibold tracking-[0.14em] text-white transition-all hover:bg-crimson-bright"
        >
          BECOME A MEMBER
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
