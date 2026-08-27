import SectionHeading from "./SectionHeading";
import { useReveal } from "./useReveal";
import m1 from "@/assets/member-1.jpg";
import m2 from "@/assets/member-2.jpg";
import m3 from "@/assets/member-3.jpg";
import m4 from "@/assets/member-4.jpg";
import m5 from "@/assets/member-5.jpg";
import m6 from "@/assets/member-6.jpg";
import m7 from "@/assets/member-7.jpg";

const MEMBERS = [
  { img: m1, name: "Anand Mahindra", role: ["Chairman, Mahindra Group"] },
  { img: m2, name: "Sanjiv Puri", role: ["Chairman & MD,", "ITC Limited"] },
  { img: m3, name: "Kiran Mazumdar-Shaw", role: ["Chairperson,", "Biocon Limited"] },
  { img: m4, name: "Harsh Mariwala", role: ["Chairman,", "Marico Ltd."] },
  { img: m5, name: "Nadir Godrej", role: ["Chairman, Godrej", "Industries Limited"] },
  { img: m6, name: "N. R. Narayana Murthy", role: ["Founder,", "Infosys"] },
  { img: m7, name: "Ajay Piramal", role: ["Chairman, Piramal", "Group"] },
];

export default function AdvisoryBoard() {
  const ref = useReveal("[data-reveal]", { stagger: 0.07 });

  return (
    <section ref={ref} className="section-dark hairline-top">
      <div className="mx-auto max-w-[1240px] px-5 py-12 md:px-8 md:py-14">
        <div className="relative flex items-center justify-center">
          <div data-reveal className="w-full">
            <SectionHeading>Advisory Board Members</SectionHeading>
          </div>
          <button
            data-reveal
            className="gold-ring absolute right-0 hidden px-4 py-2.5 text-[10.5px] font-semibold tracking-[0.12em] text-foreground/90 transition-colors hover:bg-crimson hover:text-white lg:block"
          >
            VIEW ALL MEMBERS
          </button>
        </div>
        <button className="gold-ring mx-auto mt-5 block px-4 py-2.5 text-[10.5px] font-semibold tracking-[0.12em] text-foreground/90 lg:hidden">
          VIEW ALL MEMBERS
        </button>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7 lg:gap-3">
          {MEMBERS.map((m) => (
            <figure
              key={m.name}
              data-reveal
              className="card-dark group overflow-hidden rounded-sm text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50"
            >
              <div className="overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-[130px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 lg:h-[125px]"
                />
              </div>
              <figcaption className="px-2 py-3">
                <p className="text-[11.5px] font-medium text-gold">{m.name}</p>
                <p className="mt-1 text-[10.5px] leading-[1.5] text-muted-foreground">
                  {m.role.map((r) => (
                    <span key={r} className="block">
                      {r}
                    </span>
                  ))}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
