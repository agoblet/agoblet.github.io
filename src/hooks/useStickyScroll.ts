import { useEffect, useReducer } from "react";

export type StickyScroll = {
  componentY: number;
  scrollY: number;
};

export function useStickyScroll(
  from: number = -200,
  to: number = 0,
  ignoreBounceScroll: boolean = true
): number {
  const reducer = (scroll: StickyScroll, scrollY: number): StickyScroll => {
    if (ignoreBounceScroll && scrollY < 0) {
      return scroll;
    }

    return {
      componentY: Math.min(
        Math.max(scroll.componentY - scrollY + scroll.scrollY, from),
        to
      ),
      scrollY: scrollY,
    };
  };
  const [scroll, dispatch] = useReducer(reducer, { componentY: 0, scrollY: 0 });

  const handleScroll = () => dispatch(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scroll.componentY;
}
