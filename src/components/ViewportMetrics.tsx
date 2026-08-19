"use client";

import { useEffect } from "react";

const KEYBOARD_THRESHOLD = 140;

export default function ViewportMetrics() {
  useEffect(() => {
    const root = document.documentElement;

    const updateViewport = () => {
      const viewport = window.visualViewport;
      const height = Math.round(viewport?.height ?? window.innerHeight);
      const offsetTop = Math.round(viewport?.offsetTop ?? 0);
      const keyboardInset = Math.max(
        0,
        Math.round(window.innerHeight - height - offsetTop),
      );

      root.style.setProperty("--app-viewport-height", `${height}px`);
      root.style.setProperty("--app-viewport-offset-top", `${offsetTop}px`);
      root.style.setProperty("--app-keyboard-inset", `${keyboardInset}px`);
      root.dataset.virtualKeyboard = keyboardInset >= KEYBOARD_THRESHOLD ? "open" : "closed";
    };

    updateViewport();
    window.addEventListener("resize", updateViewport, { passive: true });
    window.addEventListener("orientationchange", updateViewport, { passive: true });
    window.visualViewport?.addEventListener("resize", updateViewport, { passive: true });
    window.visualViewport?.addEventListener("scroll", updateViewport, { passive: true });

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("orientationchange", updateViewport);
      window.visualViewport?.removeEventListener("resize", updateViewport);
      window.visualViewport?.removeEventListener("scroll", updateViewport);
      root.style.removeProperty("--app-viewport-height");
      root.style.removeProperty("--app-viewport-offset-top");
      root.style.removeProperty("--app-keyboard-inset");
      delete root.dataset.virtualKeyboard;
    };
  }, []);

  return null;
}
