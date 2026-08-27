import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Reveals children matching `selector` inside the returned ref with a
 * staggered fade + rise as the section scrolls into view.
 */
export function useReveal(selector = "[data-reveal]", options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll(selector);
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y: options.y ?? 28,
        duration: options.duration ?? 0.9,
        ease: "power3.out",
        stagger: options.stagger ?? 0.09,
        scrollTrigger: {
          trigger: el,
          start: options.start ?? "top 80%",
          once: true,
        },
      });
    }, el);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [selector, options.y, options.duration, options.stagger, options.start]);

  return ref;
}
