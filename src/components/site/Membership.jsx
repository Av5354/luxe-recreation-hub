import { Crown, Users, Share2, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useReveal } from "./useReveal";

const OFFERS = [
  { n: "01", icon: Crown, label: ["Extraordinary", "Experiences"] },
  { n: "02", icon: Users, label: ["Thought", "Leadership"] },
  { n: "03", icon: Share2, label: ["Curated", "Networking"] },
  { n: "04", icon: Star, label: ["Growth", "Opportunities"] },
];

export default function Membership() {
  const ref = useReveal();

  return (
    <section ref={ref} className="section-dark hairline-top">
      <div className="mx-auto max-w-[1240px] px-5 py-12 md:px-8 md:py-14">
        <div data-reveal>
          <SectionHeading>Membership Offerings</SectionHeading>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OFFERS.map((o) => (
            <div
              key={o.n}
              data-reveal
              className="card-dark flex items-center gap-4 rounded-sm px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45"
            >
              <span className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-crimson text-[15px] text-white">
                {o.n}
              </span>
              <div className="flex flex-1 flex-col items-center text-center">
                <o.icon className="h-7 w-7 text-gold" strokeWidth={1.2} />
                <p className="mt-2.5 text-[12.5px] leading-[1.55] text-foreground/90">
                  {o.label[0]}
                  <br />
                  {o.label[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
