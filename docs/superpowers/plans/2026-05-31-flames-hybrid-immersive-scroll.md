# Flames Hybrid Immersive Scroll Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the Flames homepage feel like an immersive scroll-responsive two-floor destination while preserving the current luxury visual system.

**Architecture:** Keep the current Next.js App Router and component structure. Add small reusable motion primitives, then enhance the existing homepage components with Framer Motion scroll transforms, CSS perspective, pointer tilt, and reduced-motion guardrails.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Next Image.

---

## File Structure

- Create `src/components/usePointerTilt.ts`: reusable client hook for pointer-responsive `rotateX`/`rotateY` with reduced-motion support.
- Modify `app/globals.css`: add 3D utility classes for perspective, preserve-3d, depth shadows, and scroll-stage visual polish.
- Modify `src/components/Hero.tsx`: add layered 3D stage behavior and pointer tilt to the existing hero composition.
- Modify `src/components/ExperienceChooser.tsx`: convert the two experience cards into a sticky scroll transformation scene.
- Modify `src/components/GalleryPreview.tsx`: add per-tile scroll depth transforms.
- Modify `src/components/EventsPreview.tsx`: add poster-wall depth motion.
- Modify `src/components/CrossExperienceCTA.tsx`: add scroll-reactive split-floor depth treatment.
- Modify `src/components/ReservationCTA.tsx`: add tactile pointer tilt and motion to the reservation panel.
- Modify `tests/site.test.mjs`: assert that immersive scroll primitives are wired.

## Task 1: Motion Primitives And Test Coverage

**Files:**
- Create: `src/components/usePointerTilt.ts`
- Modify: `app/globals.css`
- Modify: `tests/site.test.mjs`

- [ ] **Step 1: Add a failing test for immersive scroll wiring**

Add a test that reads the new hook and key homepage components:

```js
test("homepage uses immersive scroll depth primitives", () => {
  assert.match(read("src/components/usePointerTilt.ts"), /usePointerTilt/);
  assert.match(read("src/components/usePointerTilt.ts"), /useReducedMotion/);
  assert.match(read("src/components/Hero.tsx"), /usePointerTilt/);
  assert.match(read("src/components/ExperienceChooser.tsx"), /useScroll/);
  assert.match(read("src/components/GalleryPreview.tsx"), /useTransform/);
  assert.match(read("src/components/EventsPreview.tsx"), /useTransform/);
  assert.match(read("app/globals.css"), /preserve-3d/);
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run: `npm test`

Expected: fail because `src/components/usePointerTilt.ts` does not exist yet.

- [ ] **Step 3: Add `usePointerTilt`**

Create a client hook that returns `style` and pointer handlers:

```ts
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
```

- [ ] **Step 4: Add CSS depth utilities**

Add classes for 3D containers and depth shadows:

```css
.preserve-3d {
  transform-style: preserve-3d;
}

.depth-stage {
  perspective: 1200px;
  transform-style: preserve-3d;
}

.depth-shadow {
  box-shadow:
    0 28px 80px rgba(0, 0, 0, 0.46),
    inset 0 1px 0 rgba(247, 234, 210, 0.08);
}
```

- [ ] **Step 5: Run tests**

Run: `npm test`

Expected: the new test still fails until components are wired in later tasks.

## Task 2: Hero Layered 3D Stage

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Import `usePointerTilt`**

Add:

```ts
import { usePointerTilt } from "@/components/usePointerTilt";
```

- [ ] **Step 2: Create scroll depth values**

Inside `Hero`, add pointer tilt and depth transforms:

```ts
const heroTilt = usePointerTilt(5);
const contentLift = useTransform(scrollYProgress, [0, 1], [0, -56]);
const visualDepth = useTransform(scrollYProgress, [0, 1], [0, -110]);
const featureDepth = useTransform(scrollYProgress, [0, 1], [0, 48]);
```

- [ ] **Step 3: Apply depth to existing hero elements**

Add `style={{ y: contentLift }}` to the hero copy wrapper, apply `heroTilt.handlers` and `heroTilt.style` to the desktop visual frame, and use `visualDepth` for the image stage.

- [ ] **Step 4: Add depth chips inside the hero media frame**

Use existing labels only: `One Destination`, `Upstairs`, `Downstairs`, `Flames of Arabia`, `Flames 147`. Add `style={{ transform: "translateZ(42px)" }}` to overlay UI so it feels layered.

- [ ] **Step 5: Run tests**

Run: `npm test`

Expected: still may fail until all components are wired, but Hero should compile once build runs.

## Task 3: Sticky Experience Transformation

**Files:**
- Modify: `src/components/ExperienceChooser.tsx`

- [ ] **Step 1: Add scroll imports**

Use:

```ts
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
```

- [ ] **Step 2: Add scroll progress**

Use a root ref:

```ts
const sceneRef = useRef<HTMLDivElement>(null);
const { scrollYProgress } = useScroll({
  target: sceneRef,
  offset: ["start end", "end start"]
});
```

- [ ] **Step 3: Map panel transforms**

Create transforms for the two panels:

```ts
const arabiaY = useTransform(scrollYProgress, [0, 0.52, 1], [70, 0, -28]);
const arabiaRotate = useTransform(scrollYProgress, [0, 0.52], [-10, 0]);
const gameY = useTransform(scrollYProgress, [0, 0.52, 1], [-24, 0, 64]);
const gameRotate = useTransform(scrollYProgress, [0, 0.52], [10, 0]);
```

- [ ] **Step 4: Convert root to sticky scene**

Wrap the current grid in `ref={sceneRef}` with `lg:min-h-[175vh]`, and make the inner grid `lg:sticky lg:top-[calc(var(--header-height)+1.25rem)]`.

- [ ] **Step 5: Apply transforms by card index**

For the Arabia card use `arabiaY` and `arabiaRotate`; for 147 use `gameY` and `gameRotate`. Add `className` utilities `depth-stage preserve-3d`.

## Task 4: Depth Gallery And Poster Events

**Files:**
- Modify: `src/components/GalleryPreview.tsx`
- Modify: `src/components/EventsPreview.tsx`

- [ ] **Step 1: Split gallery tile into a local component**

Create `DepthGalleryTile` inside `GalleryPreview.tsx` with its own `ref`, `useScroll`, `useTransform`, and existing card markup.

- [ ] **Step 2: Add per-tile scroll transforms**

Use `y`, `scale`, and `rotateX` based on scroll progress. Large tiles should move less; smaller tiles should move more.

- [ ] **Step 3: Split event card into a local component**

Create `EventPosterCard` inside `EventsPreview.tsx` with its own `ref`, `useScroll`, `useTransform`, and existing card markup.

- [ ] **Step 4: Add poster-wall transforms**

Use `y`, `rotateZ`, `scale`, and hover lift to make event cards feel like floating posters.

## Task 5: Cross Experience And Reservation Depth

**Files:**
- Modify: `src/components/CrossExperienceCTA.tsx`
- Modify: `src/components/ReservationCTA.tsx`

- [ ] **Step 1: Convert CrossExperienceCTA to a client component**

Add `"use client";`, import motion scroll hooks and `useRef`.

- [ ] **Step 2: Add split-floor scroll transforms**

Use section progress to move text, CTA panel, and image panels at different rates while keeping native scroll.

- [ ] **Step 3: Add reservation tactile depth**

Use `usePointerTilt(4)` on the reservation card and animate selected choice buttons with a small `layout` transition.

## Task 6: Final Verification And Preview

**Files:**
- No new files.

- [ ] **Step 1: Run test suite**

Run: `npm test`

Expected: 6 tests pass.

- [ ] **Step 2: Check whitespace**

Run: `git diff --check`

Expected: no output and exit code 0.

- [ ] **Step 3: Run production build**

Stop any dev server on port `3003`, then run: `npm run build`

Expected: Next.js build completes successfully.

- [ ] **Step 4: Restart preview**

Move `.next` to `/private/tmp/flames-next-build-cache-20260531-immersive-scroll`, then run: `npm run dev -- -p 3003`

Expected: local preview at `http://localhost:3003`.

- [ ] **Step 5: Verify preview response**

Run: `curl -sS -o /dev/null -w %{http_code} http://127.0.0.1:3003`

Expected: `200`.
