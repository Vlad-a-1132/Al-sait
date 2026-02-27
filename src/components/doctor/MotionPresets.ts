"use client";

const duration = 0.45;
const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function makeMotionPresets(reducedMotion: boolean) {
  if (reducedMotion) {
    return {
      vSection: { hidden: { opacity: 1 }, show: { opacity: 1 } },
      vCard: { rest: {}, hover: {} },
      vBtn: { rest: {}, hover: {}, tap: {} },
      vIcon: { rest: {}, hover: {} },
      vSwap: { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } },
      vStagger: { hidden: {}, show: {} },
      vReveal: { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } },
    };
  }
  return {
    vSection: {
      hidden: { opacity: 0, y: 12 },
      show: { opacity: 1, y: 0, transition: { duration, ease } },
    },
    vCard: {
      rest: { scale: 1, y: 0 },
      hover: { scale: 1.02, y: -2, transition: { duration: 0.35, ease } },
    },
    vBtn: {
      rest: { scale: 1 },
      hover: { scale: 1.02, transition: { duration: 0.3 } },
      tap: { scale: 0.98 },
    },
    vIcon: { rest: { rotate: 0 }, hover: { rotate: 3 } },
    vSwap: {
      initial: { opacity: 0, x: -8 },
      animate: { opacity: 1, x: 0, transition: { duration, ease } },
      exit: { opacity: 0, x: 8, transition: { duration: 0.3 } },
    },
    vStagger: {
      hidden: { opacity: 0 },
      show: (i: number) => ({ opacity: 1, transition: { delay: i * 0.06, duration } }),
    },
    vReveal: {
      hidden: { opacity: 0, y: 14 },
      show: { opacity: 1, y: 0, transition: { duration, ease } },
    },
  };
}
