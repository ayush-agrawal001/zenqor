"use client";

import Lenis from "lenis";
import { createContext, useContext, useEffect, useState } from "react";

const SmoothScrollerContext = createContext<Lenis | null>(null);

export const SmoothScrollerProvider = ({ children }: { children: React.ReactNode }) => {
  const [lenisRaf, setLenisRaf] = useState<Lenis | null>(null);
  const [rafState, setRafState] = useState<number>(0);

  useEffect(() => {
    const scroller = new Lenis({
      duration: 1.2,        // Set default duration for scroll animations
      wheelMultiplier: 0.4,
    });
    function raf(time: number) {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }

    const rf = requestAnimationFrame(raf);

    setRafState(rf);
    setLenisRaf(scroller);

    return () => {
      if (scroller) {
        scroller.destroy();
        cancelAnimationFrame(rafState);
      }
    };
  }, []);

  return (
    <SmoothScrollerContext.Provider value={lenisRaf}>
      {children}
    </SmoothScrollerContext.Provider>
  );
};

export const useSmoothScroller = () => {
  const lenis = useContext(SmoothScrollerContext);
  return lenis;
};
