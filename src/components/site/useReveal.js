import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Reveals children matching `selector` inside the returned ref with a
 * staggered fade + rise as the section scrolls into view.
 *
 * The tween is created paused and only played from the trigger's onEnter,
 * so the animation lifecycle is decoupled from ScrollTrigger refreshes —
 * targets can never get stuck mid-stagger at opacity 0.
 */
export function useReveal(selector = "[data-reveal]", options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll(selector);
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      const tween = gsap.from(targets, {
        opacity: 0,
        y: options.y ?? 28,
        duration: options.duration ?? 0.9,
        ease: "power3.out",
        stagger: options.stagger ?? 0.09,
        paused: true,
      });

      ScrollTrigger.create({
        trigger: el,
        start: options.start ?? "top 82%",
        once: true,
        onEnter: () => tween.play(),
      });
    }, el);

    // Recalculate trigger positions once everything (fonts, images) has loaded.
    const onLoad = () => ScrollTrigger.refresh();
    if (document.readyState === "complete") {
      ScrollTrigger.refresh();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    // Safety net: if anything still hasn't revealed after 4s, show it.
    const failsafe = window.setTimeout(() => {
      targets.forEach((t) => {
        if (Number(getComputedStyle(t).opacity) < 0.05) {
          gsap.to(t, { opacity: 1, y: 0, duration: 0.5, overwrite: true });
        }
      });
    }, 4000);

    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(failsafe);
      ctx.revert();
    };
  }, [selector, options.y, options.duration, options.stagger, options.start]);

  return ref;
}
