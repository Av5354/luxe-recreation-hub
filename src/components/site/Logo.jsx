import { Gem } from "lucide-react";

export default function Logo({ small = false }) {
  return (
    <div className="select-none">
      <div className="mb-1 inline-flex items-center">
        <span className="bg-crimson px-1.5 py-[2px] text-[10px] font-bold tracking-tight text-white">
          ET
        </span>
        <span className="bg-white px-1.5 py-[2px] text-[10px] font-bold italic tracking-tight text-ink">
          Edge
        </span>
      </div>
      <div
        className={`text-gold-gradient font-display leading-[0.9] tracking-[0.06em] ${
          small ? "text-2xl" : "text-3xl md:text-[2.6rem]"
        }`}
      >
        <div>IMPACT</div>
        <div className="flex items-center gap-[0.06em]">
          <span>IC</span>
          <Gem
            className={small ? "h-5 w-5" : "h-6 w-6 md:h-9 md:w-9"}
            strokeWidth={1.2}
            style={{ color: "var(--gold-bright)" }}
          />
          <span>NS</span>
        </div>
      </div>
      <div className="mt-1 flex items-center gap-2">
        <span className="text-[10px] font-semibold italic tracking-wide text-foreground/85">
          Powered by
        </span>
        <span className="font-display text-base tracking-[0.14em] text-gold">GRAZIA</span>
      </div>
    </div>
  );
}
