# Design System: Executive Precision

## 1. Overview & Creative North Star
**The Creative North Star: "The Architectural Editorial"**

This design system is built to move beyond the "standard corporate" look. It rejects the generic grid in favor of an authoritative, high-end editorial experience. We are not just building a consultancy site; we are designing a digital flagship for operational excellence. 

The aesthetic leverages **intentional asymmetry** and **tonal layering** to convey a sense of bespoke intelligence. By using a mix of refined serifs and technical sans-serifs, the system balances the heritage of management consultancy with the precision of modern systems. We break the "template" look by treating whitespace as a structural element—using generous 7rem to 8.5rem gaps (Spacing 20–24) to allow content to breathe, creating a rhythm that feels calm, confident, and premium.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a deep, authoritative navy (`primary: #000a1e`) and a sophisticated array of greys, punctuated by "Old Gold" accents (`tertiary_fixed: #ffdea5`).

### Palette Extras:
- `primary`: #000a1e
- `primary_container`: #002147
- `surface`: #f9f9f9
- `surface_container`: #eeeeee
- `surface_container_low`: #f3f3f3
- `surface_container_high`: #e8e8e8
- `surface_container_lowest`: #ffffff

### The "No-Line" Rule
To achieve a high-end feel, **1px solid borders for sectioning are strictly prohibited.** Do not use lines to separate the "Header" from the "Hero" or "Features" from "Footer." Boundaries must be defined solely through:
- **Background Color Shifts:** A `surface_container_low` section sitting against a `surface` background.
- **Tonal Transitions:** Moving from a light `surface` to a deep `primary_container` to signal a change in context.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, physical layers—like fine stationery.
- **Base Layer:** `surface` (#f9f9f9).
- **Secondary Content:** Use `surface_container` (#eeeeee) for grouped information.
- **Highest Priority Cards:** Use `surface_container_lowest` (#ffffff) to create a "pop" against darker containers. 
*Note: Always nest light inside dark or dark inside light to define depth without lines.*

### The "Glass & Gradient" Rule
For floating navigation bars or high-priority modals, use **Glassmorphism**. Apply `surface` with 80% opacity and a 12px backdrop-blur. 
- **Signature Texture:** For primary CTAs or Hero sections, avoid flat navy. Use a subtle linear gradient from `primary` (#000a1e) to `primary_container` (#002147) at a 135-degree angle to add "soul" and depth.

---

## 3. Typography
Our typography is a dialogue between the visionary (`notoSerif`) and the operational (`inter`).

- **Display & Headlines (Noto Serif):** Used for large-scale editorial moments. The serif evokes history, trust, and high-level strategy.
- **Body & Titles (Inter):** Used for data, descriptions, and UI controls. Inter provides the technical "legibility" required for operational excellence.

**Hierarchy Intent:** 
Use `display-lg` (3.5rem) with wide tracking (-0.02em) for hero statements. Contrast this with `label-md` (Inter, All Caps, +0.1em tracking) for small eyebrow text above headings. This high-contrast scale creates the "Editorial" feel.

---

## 4. Elevation & Depth
In this system, depth is felt, not seen. We avoid heavy dropshadows that clutter the professional aesthetic.

- **The Layering Principle:** Achieve lift by stacking tokens. A `surface_container_lowest` card placed on a `surface_container_high` background creates a natural, soft lift.
- **Ambient Shadows:** If an element must float (e.g., a dropdown), use an extra-diffused shadow: `box-shadow: 0 12px 40px rgba(26, 28, 28, 0.06)`. The shadow color must be a tint of `on_surface`, never pure black.
- **The "Ghost Border" Fallback:** If accessibility requires a border, use `outline_variant` at **20% opacity**. This keeps the "borderless" aesthetic while providing a subtle guide for the eye.
- **Glassmorphism:** Use for "Action Bars" or fixed headers. Combine a 1px "Ghost Border" at the top and a backdrop-blur to make the UI feel integrated and premium.

---

## 5. Components

### Buttons
- **Primary:** Gradient from `primary` to `primary_container`. White text. Roundedness: `sm` (0.125rem) for a sharp, architectural look.
- **Secondary:** `surface_container_highest` background with `on_surface` text. No border.
- **Tertiary (Text):** `on_surface` text with a 2px underline using `tertiary_fixed_dim`.

### Cards & Lists
**Forbid the use of divider lines.** 
- Separate list items using `spacing-4` (1.4rem) of vertical whitespace. 
- For cards, use background color shifts (e.g., `surface_container_low`) and a `md` (0.375rem) corner radius.

### Input Fields
- **Default State:** `surface_container_high` background. No border.
- **Focus State:** 2px solid `primary`. 
- **Label:** `label-md` (Inter) positioned 0.5rem above the field.

### Signature Component: The "Operational Metric" Card
- **Background:** `primary_container`.
- **Value:** `display-sm` (Noto Serif) in `tertiary_fixed`.
- **Label:** `label-sm` (Inter) in `on_primary_container` at 60% opacity.
- **Style:** No border, sharp corners (`none`), and generous internal padding (`spacing-8`).

---

## 6. Layout Rules (Do's and Don'ts)

### Do:
- **Use "Asymmetric White Space":** Align a text block to the left and leave the right 40% of the container empty to create an editorial layout.
- **Use Tonal Layering:** Place a `surface_container_highest` element inside a `surface` section to define a zone.
- **Lead with Serif:** Use Noto Serif for all value-proposition headings to maintain authority.

### Don't:
- **Don't use 1px Borders:** Never use `#cccccc` or `#74777f` at 100% opacity to draw boxes around content.
- **Don't use Standard Shadows:** Avoid the "floating card" look common in material design; keep elements grounded to the surface.
- **Don't Crowd the Content:** If a section feels "busy," increase the vertical spacing to `spacing-20` (7rem).
- **Don't use Pure Black:** Use `primary` (#000a1e) for deep tones to keep the palette sophisticated and "ink-like" rather than "digital."
