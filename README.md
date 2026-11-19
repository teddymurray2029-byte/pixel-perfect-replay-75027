# Forma — UI/UX Knowledge Base & Component Playground

A self-contained, interactive React 19 + TypeScript + Tailwind CSS 4 encyclopedia. The existing TanStack Start / Vite application shell provides routing and rendering; no database, authentication, third-party API, or secret is needed. All demo data is static and all interactions happen in React state. Web fonts are the only optional external visual resource; system fallbacks keep the app usable offline.

## Run locally

```sh
bun install
bun run dev
```

Use `bun run build` for production and `bun run test` for tests. Node/npm equivalents work as well. The repository can be connected or pushed to GitHub as-is; never include dependencies, generated output, or private credentials.

## Structure

- `src/routes/index.tsx`: single-page catalog, sticky navigation, filters, command palette, theme, and category views.
- `src/lib/playground-data.ts`: typed category metadata, code examples, and pure catalog filtering.
- `src/components/playground/demos.tsx`: isolated interactive demonstrations, semantic status primitive, and inline SVG artwork.
- `src/components/ui/`: reusable shadcn/Radix primitives with composable props and keyboard behaviors.
- `src/styles.css`: OKLCH semantic tokens, light/dark values, typography, layout, motion, and reduced-motion support.
- `src/routes/__root.tsx`: document shell, font loading, metadata, error handling.
- `src/test/`: catalog rules and route regression coverage.

## Library coverage

1. Typography: display, headings, body, captions, monospace, and hierarchy.
2. Color: primary ramps, semantic status, surface roles, and contrast principles.
3. Layout: responsive grids, sizing, and a 4-point spacing scale.
4. Buttons: primary, secondary, ghost, destructive, disabled, busy, explicit hover/focus/active specimens, icon actions, and toggle state.
5. Forms: labeled email input, validation, textarea, select, checkbox, radio, switch, file, date, slider, disabled, error, and success specimens.
6. Cards: project item, avatars, status, bordered and tinted surfaces.
7. Navigation: sidebar, breadcrumbs, keyboard tabs, pagination, and stepper.
8. Overlays: modal dialog, drawer, dropdown, popover, tooltip, and context menu.
9. Feedback: success, warning, error, toast, and recoverable empty/error states.
10. Data: sortable table, avatars, statuses, stats, progress, tags, and skeleton.
11. Media: original geometric SVG artwork, stable aspect ratio, consistent icon family, and named icon actions.
12. Commands: searchable keyboard command palette and inline action search.
13. Advanced: keyboard-operable kanban movement, timeline, and sortable data table.
14. Pricing: billing cadence switch, plan selection, and feature comparison.
15. Motion: pointer lift, toggle feedback, controllable pulse, and reduced-motion adaptations.
16. Responsive: mobile/tablet/desktop layout simulator and actual mobile navigation.
17. Dark mode: document-level token theme and an isolated theme specimen.
18. Accessibility: skip link, named controls, focus management, pressed state, live region, and keyboard interaction.

Overview example counts are catalog coverage targets, not a claim that each is a separately mounted component. Category views consolidate variants into dense demonstrations. Code tabs show concise instructional snippets, not a serialized copy of all running demo source. The source is the complete reference.

## UX principles

### Semantic roles and visual hierarchy
Tokens describe intent rather than current color. Primary actions are visually distinct from secondary and destructive actions. A compact neutral canvas supports the green accent, with blue, amber, and red reserved for semantic meaning. Spacing, typography, borders, and icon rhythm keep dense information scannable.

### Every state deserves design
Busy actions prevent repeated submissions. Disabled controls remain identifiable. Errors describe the issue, successes acknowledge completion, and empty states offer a way forward. Stable preview dimensions and aspect ratios reduce layout shifts.

### Accessibility by composition
Use associated visible labels, native input types, fieldsets and legends, semantic tables, accessible names for icon buttons, and text in addition to color. Radix primitives implement keyboard navigation, focus trapping, Escape dismissal, and focus return. The global skip link reaches the main content. Category changes focus the new heading without inventing a URL. Portal content inherits the document theme. Motion respects `prefers-reduced-motion`.

### Mobile-first and resilient
The library collapses into a single column and a dismissible mobile navigation. Full examples use one column before expanding. Tables scroll within their own boundary. Labels wrap; controls remain usable at narrow widths. Use the viewport simulator to compare column behavior, then test the actual page at real viewport sizes.

### Honest demonstration boundaries
No action creates accounts, charges cards, uploads files, or writes to a server. File input demonstrates browser selection only. Examples reset when their category unmounts. Theme and filters are session-local React state, not persistent settings. Pricing is illustrative. Clipboard access may depend on browser permissions and fails with explicit feedback.

## Extending the collection

Add a typed catalog entry, implement its demonstration in `demos.tsx`, and provide specific notes and a code snippet. Define new colors centrally before using semantic classes. Keep state inside each demo, document decisions next to the implementation, and preserve accessible names, keyboard paths, and mobile behavior. A category is a single-page view, not a separate route. No backend should be introduced for demonstrations.