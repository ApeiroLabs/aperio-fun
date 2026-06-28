# Aperio design language

## 1. Visual theme and atmosphere

Aperio is a warm editorial reading room with the spatial confidence of a small gallery. The canvas feels like uncoated paper, the typography carries the personality, and asymmetry prevents the site from becoming a generic blog template.

## 2. Color palette and roles

- Paper: `oklch(96.8% 0.012 83)`, primary canvas.
- Ink: `oklch(22% 0.018 55)`, primary text.
- Muted ink: `oklch(48% 0.018 61)`, metadata.
- Rule: `oklch(82% 0.018 73)`, dividers.
- Vermilion: `oklch(54% 0.15 35)`, links and editorial marks.
- Night paper: `oklch(19% 0.012 62)`, optional dark canvas.

## 3. Typography rules

The brand words are warm, lucid, and curious. Fraunces, Newsreader, and Playfair Display were rejected as reflex choices. Aperio uses Iowan Old Style for Latin display text and a self-hosted Noto Serif SC variable font for stable Chinese rendering across platforms. Their calligraphic contrast makes Chinese and English feel printed rather than typeset by a product template. Navigation and metadata use a restrained system sans stack.

- Display: `clamp(3.8rem, 10vw, 9.5rem)`, 0.86 line height, `-0.055em`.
- H1: `clamp(2.8rem, 6vw, 5.8rem)`, 0.98 line height, `-0.035em`.
- H2: `clamp(1.75rem, 3vw, 2.8rem)`, 1.08 line height, `-0.022em`.
- Body: `clamp(1.08rem, 1.2vw, 1.2rem)`, 1.86 line height.
- Metadata: `0.75rem`, uppercase English labels only, `0.12em`.

## 4. Component styling

Navigation remains cardless and uses a hand-drawn underline effect on hover and focus. Article rows are separated by rules, not containers. Buttons are text links with arrow movement and a minimum 40px hit area. Focus rings use vermilion at 2px.

## 5. Layout principles

Desktop uses a twelve-column editorial grid with deliberate empty columns. Reading measure is capped at 68 characters. Spacing follows an 8px base rhythm with oversized 96px and 144px section pauses.

## 6. Depth and elevation

The site is flat like paper. Hierarchy comes from scale, rules, ink density, and whitespace. Shadows and floating cards are not part of the language.

## 7. Do and do not

- Do let type and whitespace carry the visual identity.
- Do preserve visible dates and reading context.
- Do use vermilion sparingly as an annotation.
- Do keep article pages quieter than the home page.
- Do not use gradients, glass surfaces, generic cards, or pill buttons.
- Do not add decorative imagery without a real editorial purpose.
- Do not animate layout properties.

## 8. Responsive behavior

At 760px the grid becomes one column, the masthead condenses, and metadata moves above titles. All targets remain at least 40px. The body keeps a comfortable 20px edge inset and supports safe areas.

## 9. Agent prompt guide

- Colors: paper `oklch(96.8% 0.012 83)`, ink `oklch(22% 0.018 55)`, muted `oklch(48% 0.018 61)`, rule `oklch(82% 0.018 73)`, accent `oklch(54% 0.15 35)`.
- Build a home hero on paper with an Iowan Old Style or Songti SC headline at `clamp(3.8rem, 10vw, 9.5rem)`, weight 400, line-height 0.86, letter-spacing `-0.055em`.
- Build an article row with a 1px rule, date in 12px system sans, title in 32px editorial serif, and a vermilion underline that scales from the left on hover.
- Build an article body at max-width `68ch`, font-size `clamp(1.08rem, 1.2vw, 1.2rem)`, line-height 1.86, with 2.2em paragraph spacing and no card surface.
