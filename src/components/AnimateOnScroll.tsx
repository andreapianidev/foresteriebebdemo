"use client";

import { useEffect, useRef, useState } from "react";

type Animation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "fade"
  | "slide-up"
  | "scale-up"
  | "rotate-in"
  | "blur-in";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const animationStyles: Record<Animation, { hidden: React.CSSProperties; visible: React.CSSProperties }> = {
  "fade-up": {
    hidden: { opacity: 0, transform: "translateY(40px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  "fade-down": {
    hidden: { opacity: 0, transform: "translateY(-40px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  "fade-left": {
    hidden: { opacity: 0, transform: "translateX(60px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  "fade-right": {
    hidden: { opacity: 0, transform: "translateX(-60px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  "zoom-in": {
    hidden: { opacity: 0, transform: "scale(0.9)" },
    visible: { opacity: 1, transform: "scale(1)" },
  },
  "zoom-out": {
    hidden: { opacity: 0, transform: "scale(1.1)" },
    visible: { opacity: 1, transform: "scale(1)" },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-up": {
    hidden: { opacity: 0, transform: "translateY(80px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  "scale-up": {
    hidden: { opacity: 0, transform: "scale(0.8) translateY(20px)" },
    visible: { opacity: 1, transform: "scale(1) translateY(0)" },
  },
  "rotate-in": {
    hidden: { opacity: 0, transform: "rotate(-5deg) translateY(30px)" },
    visible: { opacity: 1, transform: "rotate(0) translateY(0)" },
  },
  "blur-in": {
    hidden: { opacity: 0, filter: "blur(10px)", transform: "translateY(20px)" },
    visible: { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" },
  },
};

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 800,
  className = "",
  threshold = 0.15,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const styles = animationStyles[animation];
  const currentStyle = isVisible ? styles.visible : styles.hidden;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...currentStyle,
        transitionProperty: "opacity, transform, filter",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
