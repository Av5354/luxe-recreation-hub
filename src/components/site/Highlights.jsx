import { useState } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useReveal } from "./useReveal";
import h1 from "@/assets/highlight-1.jpg";
import h2 from "@/assets/highlight-2.jpg";
import h3 from "@/assets/highlight-3.jpg";

const VIDEOS = [
  { img: h1, title: ["Eminent Leaders on", "Vision & Impact"] },
  { img: h2, title: ["India Leadership Council's", "EXPERIENCE"] },
  { img: h3, title: ["The Power of Purpose:", "Mentorship Conversation"] },
];

export default function Highlights() {
  const ref = useReveal();
  const [offset, setOffset] = useState(0);
  const items = VIDEOS.map((_, i) => VIDEOS[(i + offset) % VIDEOS.length]);

  return (
    <div ref={ref} className="card-dark rounded-sm px-5 py-8 md:px-8">
      <h2
        data-reveal
        className="font-display flex items-center justify-center gap-3 text-center text-[18px] tracking-[0.12em] text-gold uppercase"
      >
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-crimson-bright" />
        Highlights
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-crimson-bright" />
      </h2>

      <div data-reveal className="mt-7 flex items-center gap-3">
        <button
          onClick={() => setOffset((o) => (o + VIDEOS.length - 1) % VIDEOS.length)}
          aria-label="Previous highlight"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-crimson/70 text-crimson-bright transition-colors hover:bg-crimson hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map((v, i) => (
            <figure key={`${v.title[0]}-${i}`} className="group text-center">
              <div className="relative overflow-hidden rounded-sm border border-gold/20">
                <img
                  src={v.img}
                  alt={v.title.join(" ")}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="h-[86px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/35">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/80 bg-ink/50 transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-3.5 w-3.5 fill-gold text-gold" />
                  </span>
                </span>
              </div>
              <figcaption className="mt-2.5 text-[10.5px] leading-[1.55] text-foreground/85">
                {v.title.map((t) => (
                  <span key={t} className="block">
                    {t}
                  </span>
                ))}
              </figcaption>
            </figure>
          ))}
        </div>

        <button
          onClick={() => setOffset((o) => (o + 1) % VIDEOS.length)}
          aria-label="Next highlight"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-crimson/70 text-crimson-bright transition-colors hover:bg-crimson hover:text-white"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
