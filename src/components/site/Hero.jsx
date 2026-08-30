import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-img]", { scale: 1.1, opacity: 0, duration: 1.6 })
        .from(
          "[data-hero-line]",
          { opacity: 0, y: 26, duration: 0.9, stagger: 0.13 },
          "-=1.0",
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
      {/* left-to-right vignette so text stays legible */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.11_0.006_40/0.92)_0%,oklch(0.11_0.006_40/0.55)_38%,transparent_65%)]" />
      {/* top + bottom fades */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.11_0.006_40/0.75)_0%,transparent_30%,transparent_55%,oklch(0.11_0.006_40/0.95)_100%)]" />

      <div className="relative mx-auto flex h-full max-w-[1240px] flex-col justify-end px-5 pb-14 md:px-8 md:pb-16">
        <div data-hero-line className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-gold/70" />
          <p className="text-[12px] font-semibold tracking-[0.22em] text-crimson-bright uppercase">
            India Leadership Council (ILC)
          </p>
        </div>
        <h1
          data-hero-line
          className="text-gold-gradient font-display text-[30px] leading-[1.12] tracking-[0.04em] uppercase md:text-[44px]"
        >
          An Exclusive Platform
        </h1>
        <p
          data-hero-line
          className="font-display mt-1.5 text-[24px] tracking-[0.05em] text-foreground uppercase md:text-[36px]"
        >
          For CEO Community
        </p>
        <div data-hero-line className="mt-8">
          <button className="group inline-flex items-center gap-4 bg-crimson px-7 py-3.5 text-[11.5px] font-semibold tracking-[0.16em] text-white shadow-[0_8px_30px_-8px_oklch(0.52_0.2_25/0.7)] transition-all hover:bg-crimson-bright">
            BECOME A MEMBER
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
