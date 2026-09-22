---
name: Academic Royal
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#43474e'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#455f88'
  primary: '#002045'
  on-primary: '#ffffff'
  primary-container: '#1a365d'
  on-primary-container: '#86a0cd'
  inverse-primary: '#adc7f7'
  secondary: '#8f4e00'
  on-secondary: '#ffffff'
  secondary-container: '#fc901a'
  on-secondary-container: '#623300'
  tertiary: '#002617'
  on-tertiary: '#ffffff'
  tertiary-container: '#003e28'
  on-tertiary-container: '#00b47d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#adc7f7'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#ffdcc2'
  secondary-fixed-dim: '#ffb77b'
  on-secondary-fixed: '#2e1500'
  on-secondary-fixed-variant: '#6d3a00'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system delivers an authoritative yet welcoming educational portal experience tailored for students, faculty, and parents of Basava Shree School. Balancing institutional prestige with contemporary digital fluency, the aesthetic bridges classical academic rigor and modern mobile ergonomics.

The visual style blends **Corporate Modern** with subtle **Tactile Depth**:
- **Dignified Credibility:** Deep collegiate navies project institutional longevity, security, and administrative precision.
- **Enlightened Clarity:** Clean slate whitespaces reduce cognitive strain during complex grade and attendance assessments.
- **Encouraging Feedback:** Warm scholastic ambers, emeralds, and corals deliver instantaneous, emotionally reassuring status communication without generating alarm fatigue.
- **Ergonomic Elevation:** Soft, dual-layer shadows and generous touch targets offer natural tactile feedback suitable for high-density daily mobile utility.

## Colors

The color palette is rooted in collegiate legacy while tuned for mobile legibility and accessibility (WCAG 2.1 AA compliant).

### Core Roles
- **Primary (`#1A365D`) & Primary Dark (`#0F274A`):** Core brand anchors applied to app bars, navigation roots, key action buttons, and dominant headers.
- **Secondary / Scholastic Gold (`#F3890F`):** Applied to honors badges, fee alerts, pending assignments, and active selection states.
- **Tertiary / Success Emerald (`#10B981`):** Attendance figures at or above 75%, cleared fees, positive performance deltas, and completed submissions.
- **Critical Coral (`#EF4444`):** Attendance figures below 75%, overdue fees, disciplinary or administrative flags, and destructive actions.

### Neutral & Surface Roles
- **Canvas Base:** `#F8FAFC` (Slate 50) for outer canvas; creates soft separation from pure white elevated containers.
- **Surface Elevation:** `#FFFFFF` (Pure White) for structural cards, sheet modals, and input fields.
- **Surface Variant:** `#F1F5F9` (Slate 100) for nested rows, card headers, segmented track controls, and badge backgrounds.
- **Text Primary:** `#0F172A` (Slate 900) for optimal contrast on light surfaces.
- **Text Secondary:** `#475569` (Slate 600) for metadata, labels, and supporting copy.
- **Border / Divider:** `#E2E8F0` (Slate 200) for structural division.

## Typography

**Plus Jakarta Sans** serves as the universal typeface across display, editorial, numerical, and interface components. Its rounded geometry, wide apertures, and clean structural stems provide high legibility at micro sizes on compact mobile devices while feeling modern, warm, and distinctly scholarly.

- **Numerals:** Stat cards, timetable modules, and attendance meters use `tabular-nums` for precise column alignment.
- **Hierarchy:** Strict weight distinction reserves `700 (Bold)` for metrics, primary labels, and module headers; `600 (Semi-bold)` for interactive controls and status chips; and `400 (Regular)` for notifications, messages, and descriptive text.
- **Tracking:** Micro-labels (`label-sm`, `10px`) require a tracking offset of `+0.04em` to preserve character separation on high-density mobile screens.

## Layout & Spacing

The layout is built upon an **8-point spatial grid** adapted for high-density mobile devices:
- **Mobile Canvas Grid:** 4-column fluid layout with an edge margin of `1rem` (16px) and an internal column gutter of `1rem` (16px).
- **Tablet / Responsive Expand:** At viewport widths ≥ 600px, transitions to an 8-column layout with `1.5rem` (24px) gutters and margins.
- **Vertical Rhythm:**
  - `space-xs` (4px): Nested icon-to-text distances, badge internal vertical padding.
  - `space-sm` (8px): Stacked related text rows, chip item gaps, segmented tab padding.
  - `space-md` (16px): Standard component internal padding, card gaps in collection lists.
  - `space-lg` (24px): Structural section distancing (e.g., between attendance summaries and timetable blocks).
  - `space-xl` (32px): Separation between distinct portal modules or top-level canvas zones.
- **Safe Area Conformance:** Top padding must dynamically account for native device notches; bottom padding must reserve 34px minimal clear space above home indicator rails.

## Elevation & Depth

Elevation employs deep ambient shadows tinted with institutional navy (`#0F274A`) rather than pure gray/black. This creates a cohesive, natural atmosphere that complements the crisp `#F8FAFC` slate canvas.

- **Level 0 (Flat / Canvas):** Used for background canvas and inert grouped regions. Zero elevation.
- **Level 1 (Card / Rest):** Primary card state, table rows, and list items. 
  - Shadow: `0px 2px 8px -2px rgba(15, 39, 74, 0.06), 0px 1px 4px -1px rgba(15, 39, 74, 0.04)`.
  - Border: 1px continuous border in `#E2E8F0` to maintain definition under extreme ambient light conditions.
- **Level 2 (Floating Action / Active Card):** Segmented thumb controls, active cards, dropdown sheets.
  - Shadow: `0px 8px 16px -4px rgba(15, 39, 74, 0.08), 0px 4px 8px -2px rgba(15, 39, 74, 0.04)`.
- **Level 3 (Modals / Sticky Navigation / Drawers):** Bottom action sheets, alert modals, fixed bottom navigation bars.
  - Shadow: `0px 20px 24px -4px rgba(15, 39, 74, 0.12), 0px 8px 8px -4px rgba(15, 39, 74, 0.04)`.
  - Backdrop: Soft frosted slate overlay (`rgba(15, 23, 42, 0.4)` with 8px blur).

## Shapes

The design system adopts a balanced, rounded structural form language:
- **Base Components (`0.5rem` / 8px):** Input text fields, dropdown trigger buttons, segmented pill items, notification action tags.
- **Large Components (`1rem` / 16px - `rounded-lg`):** Primary buttons, metric cards, dialog boxes, and floating bottom navigation tabs.
- **Hero Containers (`1.5rem` / 24px - `rounded-2xl`):** Core academic dashboard overview cards, profile summaries, timetable modules, and bottom sheet containers.
- **Pills / Badges (`9999px`):** Status chips, numerical attendance badges, and avatar frames.

## Components

### Buttons
- **Primary:** Background in `#1A365D`, text in `#FFFFFF`, corner radius `1rem`. Active state presses down to `#0F274A`. Min-height 48px to ensure mobile touch accessibility.
- **Secondary / Subtle:** Background `#F1F5F9`, text `#1A365D`, border 1px solid `#E2E8F0`.
- **Accent / Scholastic:** Background `#F3890F`, text `#FFFFFF` for primary billing or grade submission actions.

### Cards & Metrics
- **Structural Spec:** Background `#FFFFFF`, border-radius `1.5rem`, border 1px solid `#E2E8F0`, padding `1rem` to `1.25rem`.
- **Attendance Card Indicator:** Prominent circular or linear radial track. If percentage ≥ 75%, track fills with `#10B981`; below 75%, fills with `#EF4444`. Includes bold quantitative text with `label-sm` status subtitle.

### Status Chips & Badges
- **Shape & Spacing:** Fully rounded pill (`9999px`), padding `4px 10px`, typography `label-sm`.
- **High Attendance / Good Standing:** Background `rgba(16, 185, 129, 0.12)`, text `#047857`, border 1px solid `rgba(16, 185, 129, 0.2)`.
- **Critical Alert (< 75% Attendance / Overdue Fee):** Background `rgba(239, 68, 68, 0.1)`, text `#B91C1C`, border 1px solid `rgba(239, 68, 68, 0.2)`.
- **Pending / In Review:** Background `rgba(243, 137, 15, 0.1)`, text `#B45309`, border 1px solid `rgba(243, 137, 15, 0.2)`.

### Segmented Controls
- **Track:** Background `#F1F5F9`, border-radius `0.75rem`, 4px internal padding.
- **Active Segment:** Elevated white `#FFFFFF` chip with Level 1 shadow, corner radius `0.5rem`, text `#1A365D` (`label-md`).
- **Inactive Segment:** Transparent background, text `#475569`.

### Input Fields
- **Container:** Minimum height 48px, background `#FFFFFF`, border 1px solid `#E2E8F0`, corner radius `0.75rem`, padding `0 16px`.
- **Focus State:** 2px ring `#1A365D` with subtle navy glow (`rgba(26, 54, 93, 0.15)`).

### Lists & Timetable Rows
- **List Container:** Separated list elements with 8px vertical gaps or boxed within an elevated card with 1px `#F1F5F9` internal dividing borders.
- **Leading Iconography:** 40x40px badge container with `0.75rem` radius, light tint matching the subject or event status.