import { useState } from "react";
import { Quote } from "lucide-react";
import { useReveal } from "./useReveal";
import avatar from "@/assets/testimonial-1.jpg";

const QUOTES = [
  {
    text: "Being part of ILC has transformed the way I think about leadership. The insights, peer interactions, and experiences are truly unmatched.",
    name: "Rohit Bansal",
    role: "CEO, Leading Tech Company",
  },
  {
    text: "The calibre of conversations within the council is exceptional. Every engagement leaves me with a sharper perspective on building for the long term.",
    name: "Rohit Bansal",
    role: "CEO, Leading Tech Company",
  },
  {
    text: "ILC brings together the people shaping India's growth story. The access, the trust and the candour in the room are rare.",
    name: "Rohit Bansal",
    role: "CEO, Leading Tech Company",
  },
];

export default function MembersSpeak() {
  const ref = useReveal();
  const [i, setI] = useState(1);
  const q = QUOTES[i];

  return (
    <div ref={ref} className="flex flex-col justify-center px-2 py-8 md:px-8">
      <h2
        data-reveal
        className="font-display text-center text-[18px] tracking-[0.12em] text-gold uppercase"
      >
        Members Speak
      </h2>

      <div data-reveal className="mt-8 flex gap-4">
        <Quote className="h-7 w-7 shrink-0 rotate-180 fill-crimson-bright text-crimson-bright" />
        <div>
          <p className="text-[14px] leading-[1.75] text-foreground/95">{q.text}</p>
          <div className="mt-6 flex items-center gap-3.5">
            <img
              src={avatar}
              alt={q.name}
              loading="lazy"
              width={512}
              height={512}
              className="h-11 w-11 rounded-full border border-gold/40 object-cover"
            />
            <div>
              <p className="text-[13px] font-semibold text-gold">{q.name}</p>
              <p className="text-[11.5px] text-muted-foreground">{q.role}</p>
            </div>
          </div>
        </div>
      </div>

      <div data-reveal className="mt-7 flex items-center justify-center gap-2.5">
        {QUOTES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Testimonial ${idx + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              idx === i ? "bg-crimson-bright" : "bg-crimson/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
