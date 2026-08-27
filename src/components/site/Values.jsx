import { Cog, Network, Target, Scale } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useReveal } from "./useReveal";

const VALUES = [
  {
    icon: Cog,
    title: "IMPLEMENT",
    sub: "Build Today",
    body: "Understanding and aligning strategic initiatives with actionable plans to drive sustainable and measurable results for a better future.",
  },
  {
    icon: Network,
    title: "INSIGHT",
    sub: "See Beyond",
    body: "Comprehensive knowledge-sharing and deep-dive discussions that go beyond the surface, providing foresight and perspective.",
  },
  {
    icon: Target,
    title: "IMPACT",
    sub: "Lead with Purpose",
    body: "Be committed to creating meaningful, lasting impact for both the community at large and the industry.",
  },
  {
    icon: Scale,
    title: "INTEGRITY",
    sub: "Do What's Right",
    body: "Upholding the highest ethical standards and fostering trust within the community to build strong, lasting relationships.",
  },
];

export default function Values() {
  const ref = useReveal();

  return (
    <section ref={ref} className="section-dark hairline-top">
      <div className="mx-auto max-w-[1240px] px-5 py-12 md:px-8 md:py-14">
        <div data-reveal>
          <SectionHeading>We Embrace The Values Of</SectionHeading>
        </div>

        <div className="mt-9 grid gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {VALUES.map((v) => (
            <div key={v.title} data-reveal className="group">
              <div className="flex items-start gap-3.5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-crimson/60 transition-transform duration-300 group-hover:scale-110">
                  <v.icon className="h-4.5 w-4.5 text-crimson-bright" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-display text-[14.5px] tracking-[0.1em] text-gold">
                    {v.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] text-foreground/85">{v.sub}</p>
                </div>
              </div>
              <p className="mt-4 text-[11.5px] leading-[1.8] text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
