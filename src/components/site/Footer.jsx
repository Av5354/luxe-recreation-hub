import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Logo from "./Logo";
import { useReveal } from "./useReveal";

const COLS = [
  {
    title: "Quick Links",
    items: ["About Us", "Membership", "Communities", "Insights", "Events & Awards"],
  },
  {
    title: "Communities",
    items: ["CEO Council", "CXO Forum", "Founders Circle", "Women Leaders", "NextGen Icons"],
  },
  {
    title: "Resources",
    items: ["Reports", "Thought Leadership", "Newsroom", "Media Kit", "FAQs"],
  },
];

const SOCIALS = [Linkedin, Twitter, Instagram, Facebook];

export default function Footer() {
  const ref = useReveal();

  return (
    <footer ref={ref} className="section-dark hairline-top">
      <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div data-reveal>
            <Logo small />
            <p className="mt-5 max-w-xs text-[12.5px] leading-[1.7] text-foreground/70">
              An invitation-only council of India's most influential leaders — convening for
              extraordinary experiences, thought leadership and curated networking.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="gold-ring flex h-9 w-9 items-center justify-center rounded-full text-gold transition-all hover:bg-crimson hover:text-white"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.4} />
                </a>
              ))}
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.title} data-reveal>
              <h3 className="font-display text-[13px] tracking-[0.14em] text-gold uppercase">
                {c.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {c.items.map((it) => (
                  <li key={it}>
                    <a
                      href="#"
                      className="text-[12.5px] text-foreground/70 transition-colors hover:text-gold"
                    >
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          data-reveal
          className="mt-11 grid gap-4 border-t border-gold/15 pt-8 text-[12.5px] text-foreground/70 sm:grid-cols-3"
        >
          <p className="flex items-start gap-2">
            <MapPin className="mt-[2px] h-4 w-4 shrink-0 text-gold" strokeWidth={1.4} />
            The Times of India Building, Dr. D. N. Road, Mumbai 400001
          </p>
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.4} />
            connect@impacticons.in
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.4} />
            +91 22 2273 3535
          </p>
        </div>
      </div>

      <div className="border-t border-gold/15 bg-ink">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-2 px-5 py-5 text-[11.5px] tracking-[0.06em] text-foreground/55 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Impact Icons. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-gold">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-gold">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
