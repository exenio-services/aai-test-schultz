"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-Reveals mit GSAP + ScrollTrigger und weiches Scrollen mit Lenis.
 * Wichtig für SEO: Die Inhalte stehen ohne JavaScript sichtbar im HTML.
 * Erst dieses Skript blendet sie kurz aus und fährt sie beim Scrollen ein.
 * Bei "prefers-reduced-motion: reduce" passiert nichts davon.
 */
export default function ScrollEffects() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const lenis = new Lenis({ autoRaf: false, lerp: 0.1 });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      const elemente = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      const tweens = elemente.map((el) =>
        gsap.from(el, {
          autoAlpha: 0,
          y: 28,
          duration: 0.9,
          delay: Number(el.dataset.revealDelay ?? 0),
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }),
      );

      ScrollTrigger.refresh();

      return () => {
        tweens.forEach((tween) => {
          tween.scrollTrigger?.kill();
          tween.kill();
        });
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    });

    return () => mm.revert();
  }, []);

  return null;
}
