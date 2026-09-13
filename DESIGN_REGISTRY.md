# Design Registry & Style Architecture &bull; DecodeLearnUp

## 1. Brand Identity & Aesthetic
- **Brand Name:** DecodeLearnUp
- **Category / Niche:** Computer Science Education &bull; Algorithmic Thinking &bull; Cryptography &bull; Education
- **Design Philosophy:** Dark tech matrix midnight, neon cyan accents, terminal emerald highlights, and high-readability engineering typography.

## 2. Color Palette & Design Tokens
- `--color-bg`: `#0B111E` (Dark Terminal Midnight)
- `--color-surface`: `#111A2E` (Deep Compute Chamber)
- `--color-surface-subtle`: `#17233B` (Compiler Workspace Surface)
- `--color-border`: `#233554` (Memory Bus Seam)
- `--color-text`: `#F1F5F9` (Terminal White)
- `--color-text-muted`: `#94A3B8` (Cool Slate Muted)
- `--color-primary`: `#38BDF8` (Sky Interface Blue)
- `--color-primary-dark`: `#0284C7` (Deep Kernel Navy)
- `--color-accent`: `#06B6D4` (Neon Cyan Decode)
- `--color-accent-hover`: `#0891B2` (Quantum Cyan Pulse)
- `--color-emerald`: `#10B981` (Algorithmic Success Green)

## 3. Typography Hierarchy
- **Primary Display / Sans:** `'Plus Jakarta Sans', sans-serif` &mdash; Authoritative modern academic branding, headers, and navigation.
- **Monospace Telemetry:** `'JetBrains Mono', monospace` &mdash; Algorithmic Big-O notation, memory addresses, code snippets, and telephone numbers.

## 4. Navigation & Layout
- Exactly 1 `<header class="site-header">` per page with sticky backdrop-filter blur.
- Exactly 1 `<div class="mobile-drawer" id="mobile-drawer">` per page synchronized in `assets/js/main.js`.
- Fully responsive across desktop, tablet, and mobile breakpoints.
