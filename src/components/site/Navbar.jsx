import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { gsap } from "@/lib/gsap";

const LINKS = [
  { label: "ABOUT US" },
  { label: "MEMBERSHIP", caret: true },
  { label: "COMMUNITIES", caret: true },
  { label: "INSIGHTS", caret: true },
  { label: "EVENTS & AWARDS" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    gsap.from("[data-nav-item]", {
      opacity: 0,
      y: -14,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.07,
      delay: 0.15,
    });
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1240px] items-start justify-between px-5 pt-5 md:px-8">
        <div data-nav-item>
          <Logo />
        </div>

        <nav className="hidden items-center gap-7 pt-2 lg:flex">
          {LINKS.map((l) => (
            <button
              key={l.label}
              data-nav-item
              className="story-link inline-flex items-center gap-1 text-[11.5px] font-medium tracking-[0.13em] text-foreground/90 transition-colors hover:text-gold"
            >
              {l.label}
              {l.caret ? <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} /> : null}
            </button>
          ))}
          <button
            data-nav-item
            className="gold-ring bg-crimson/15 px-4 py-2.5 text-[11px] font-semibold tracking-[0.12em] text-crimson-bright transition-all hover:bg-crimson hover:text-white"
          >
            BECOME A MEMBER
          </button>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="pt-3 text-gold lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-gold/15 bg-ink/95 px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <button
                key={l.label}
                className="flex items-center justify-between text-left text-xs tracking-[0.13em] text-foreground/90"
              >
                {l.label}
                {l.caret ? <ChevronDown className="h-4 w-4" /> : null}
              </button>
            ))}
            <button className="gold-ring mt-1 bg-crimson px-4 py-2.5 text-[11px] font-semibold tracking-[0.12em] text-white">
              BECOME A MEMBER
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
