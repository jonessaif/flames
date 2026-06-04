# Flames Hybrid Immersive Scroll Design

## Goal

Convert the Flames homepage from a premium static destination page into an immersive, scroll-responsive hospitality experience while preserving the existing visual language: dark luxury theme, gold accents, premium typography, real venue photography, and the "Play Downstairs. Relax Upstairs." positioning.

The experience should make visitors feel that Flames is an active two-floor social club where they can spend an entire evening.

## Approved Direction

Use a Hybrid Immersive approach instead of a full WebGL venue model.

This means:

- Use Framer Motion scroll transforms, CSS perspective, sticky scenes, image layering, and pointer-responsive depth.
- Avoid heavy 3D model dependencies for the first pass.
- Keep the website fast, editable, accessible, and production-ready.
- Add real motion and transformation as the user scrolls, especially in above-the-fold and early homepage sections.

## Homepage Scope

The homepage receives the immersive treatment. Other pages keep the current premium structure with lighter reveal/hover motion unless later requested.

The homepage order remains:

1. Hero
2. Choose Your Experience
3. Real Moments
4. Tonight At Flames
5. Why Choose One?
6. Menu
7. Reserve

## Hero Scene

The hero becomes a layered 3D-feeling stage.

Behavior:

- Keep headline: "Play Downstairs. Relax Upstairs."
- Keep current primary CTA hierarchy.
- Keep Arabia and 147 visible as two connected halves of one destination.
- Add scroll-driven depth: background media, content, and visual frame move at different rates.
- Add subtle pointer tilt on capable devices.
- Keep strong dark overlays so the headline remains readable.
- Disable pointer tilt and heavy transforms for reduced-motion users.

Implementation:

- Refactor the current hero visual into reusable layered media elements.
- Use `useScroll`, `useTransform`, and `useReducedMotion`.
- Use CSS `perspective`, `transform-style: preserve-3d`, and layered translations.

## Choose Your Experience Scene

Turn the section into a sticky scroll transformation that explains the two-floor concept through motion.

Behavior:

- The section pins visually while the two experience panels rotate/slide into a clean final layout.
- Flames 147 and Flames of Arabia remain equal weight.
- Motion should suggest downstairs-to-upstairs movement without becoming literal or gimmicky.
- Cards retain existing photography, typography, borders, and gold accents.

Implementation:

- Add a new `ImmersiveExperienceScene` component or enhance `ExperienceChooser` if the existing boundaries stay clear.
- Use a tall scroll section with sticky inner content.
- Map scroll progress to panel `x`, `y`, `rotateX`, `rotateY`, `scale`, and opacity.

## Real Moments Gallery

Make gallery images feel alive and spatial.

Behavior:

- Images should lift, scale, and drift subtly as they enter the viewport.
- Prioritize people, hookah, snooker, rooftop energy, and social moments.
- Avoid making photos feel like a carousel or ad banner.

Implementation:

- Keep the current masonry/grid concept.
- Add depth classes and per-card motion variants.
- Use different transform ranges for large and small cards.

## Events And Reservation

Events should feel like an active poster wall. Reservation should feel tactile and conversion-focused.

Behavior:

- Event cards gain hover tilt, layered images, and subtle scroll reveal.
- Reservation experience selection should feel more interactive.
- Keep forms accessible and keyboard-friendly.

Implementation:

- Enhance existing components instead of replacing their content model.
- Keep event data CMS-ready.
- Avoid motion that blocks form usability.

## Performance And Accessibility

Guardrails:

- No mandatory Three.js dependency in this pass.
- No oversized videos or heavy canvas scene.
- Use existing optimized Next Image flow.
- Respect `prefers-reduced-motion`.
- Preserve keyboard navigation and accessible contrast.
- Avoid scroll-jacking. Native page scrolling must remain intact.
- Avoid layout shift by keeping stable section heights and image dimensions.

## Verification

Run:

- `npm test`
- `git diff --check`
- `npm run build`

Preview:

- Restart the Next.js dev server on port `3003`.
- Verify the homepage responds with HTTP 200.
- Inspect desktop and mobile manually where possible.

## Non-Goals

- Do not redesign the brand system.
- Do not convert every page into a 3D scene.
- Do not add a full 3D venue model.
- Do not make food/menu the primary story.
- Do not use gimmicky or excessive animation.
