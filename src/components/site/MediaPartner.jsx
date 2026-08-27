import { useReveal } from "./useReveal";

export default function MediaPartner() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundImage: "var(--gradient-crimson)" }}
    >
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle,oklch(1_0_0/0.35)_1px,transparent_1.2px)] [background-size:14px_14px]" />
      <div className="relative mx-auto max-w-[1240px] px-5 py-8 text-center md:px-8">
        <p data-reveal className="text-[11.5px] font-semibold tracking-[0.16em] text-white/95">
          OUTDOOR MEDIA PARTNER
        </p>
        <div data-reveal className="mt-4 inline-block">
          <p className="font-display text-[30px] leading-none tracking-[0.06em] text-white">
            ACME
          </p>
          <p className="mt-1 border-t border-b border-white/70 py-[3px] text-[10px] font-semibold tracking-[0.22em] text-white">
            ADVERTISING CO.
          </p>
          <p className="mt-1 text-[7px] tracking-[0.28em] text-white/80">
            OUTDOOR MEDIA PROFESSIONALS
          </p>
        </div>
      </div>
    </section>
  );
}
