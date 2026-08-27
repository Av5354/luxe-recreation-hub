import { Crown } from "lucide-react";

export default function TimesGroupMark({ className = "" }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Crown className="h-7 w-7 text-gold" strokeWidth={1} />
      <div className="my-1 h-px w-28 bg-gold/40" />
      <div className="font-display text-lg leading-tight tracking-[0.14em] text-gold">
        THE TIMES
      </div>
      <div className="font-display text-lg leading-tight tracking-[0.14em] text-gold">GROUP</div>
      <div className="mt-1 h-px w-28 bg-gold/40" />
    </div>
  );
}
