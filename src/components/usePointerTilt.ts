"use client";

import { useReducedMotion, useSpring } from "framer-motion";
import type { MotionStyle } from "framer-motion";
import type { PointerEvent } from "react";

export function usePointerTilt(maxTilt = 7) {
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 150, damping: 24, mass: 0.45 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 24, mass: 0.45 });

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType === "touch") return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    rotateX.set(y * -maxTilt);
    rotateY.set(x * maxTilt);
  };

  const style: MotionStyle = reduceMotion
    ? {}
    : {
        rotateX,
        rotateY,
        transformPerspective: 1200
      };

  return {
    style,
    handlers: reduceMotion
      ? {}
      : {
          onPointerMove,
          onPointerLeave: resetTilt
        }
  };
}
