---
name: Technical Precision
colors:
  surface: '#f6faff'
  surface-dim: '#d2dbe4'
  surface-bright: '#f6faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#ecf5fe'
  surface-container: '#e6eff8'
  surface-container-high: '#e0e9f2'
  surface-container-highest: '#dbe4ed'
  on-surface: '#141d23'
  on-surface-variant: '#3c4a42'
  inverse-surface: '#293138'
  inverse-on-surface: '#e9f2fb'
  outline: '#6c7a72'
  outline-variant: '#bbcac0'
  surface-tint: '#006c4d'
  primary: '#006c4d'
  on-primary: '#ffffff'
  primary-container: '#12b886'
  on-primary-container: '#00412d'
  inverse-primary: '#50dea9'
  secondary: '#595f65'
  on-secondary: '#ffffff'
  secondary-container: '#dde3eb'
  on-secondary-container: '#5f656c'
  tertiary: '#5c5f60'
  on-tertiary: '#ffffff'
  tertiary-container: '#a0a2a3'
  on-tertiary-container: '#36393a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#70fbc4'
  primary-fixed-dim: '#50dea9'
  on-primary-fixed: '#002115'
  on-primary-fixed-variant: '#005139'
  secondary-fixed: '#dde3eb'
  secondary-fixed-dim: '#c1c7ce'
  on-secondary-fixed: '#161c22'
  on-secondary-fixed-variant: '#41474e'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f6faff'
  on-background: '#141d23'
  surface-variant: '#dbe4ed'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is engineered for a Senior Frontend Developer, emphasizing **Minimalism** with a **Corporate Modern** edge. The brand personality is professional, meticulous, and technically proficient. It aims to evoke a sense of reliability and high-level craftsmanship through structured layouts and generous white space.

The aesthetic draws from the clean, card-based interfaces of the reference images, utilizing subtle shadows and refined borders to create depth without clutter. It balances the coldness of a technical portfolio with the accessibility of modern SaaS products, ensuring the work remains the focal point.

## Colors

The palette is anchored by professional **Deep Slates and Charcoals** (`#343A40`) to establish a sophisticated foundation. The primary accent is a **Vibrant Teal** (`#12B886`), directly inspired by the shopping app reference, used sparingly for critical calls-to-action and active states to guide user attention.

Neutral tones range from off-white surfaces to soft grey borders, ensuring high contrast for legibility while maintaining a light, airy feel. Secondary interactive elements use the deep slate for a grounded, high-end appearance.

## Typography

The system utilizes a dual-sans-serif pairing to distinguish between UI and Content. **Plus Jakarta Sans** provides a confident, high-end feel for headings, featuring slightly rounded terminals that prevent the technical aesthetic from feeling too sterile.

**Inter** is the workhorse for body copy and UI elements, chosen for its exceptional readability and neutral profile. To lean into the developer persona, **JetBrains Mono** is used for small labels, tags, and technical metadata, signaling an attention to detail and a "code-first" mindset.

## Layout & Spacing

This design system uses a **Fixed Grid** layout for desktop (12 columns) to maintain a premium, editorial feel with controlled line lengths. On mobile, it transitions to a fluid 4-column layout. 

Spacing is governed by a strict 8px scale, favoring "generous whitespace" to allow project imagery to breathe. Section gaps are intentionally large (120px+) to create a clear rhythmic separation between different portfolio pieces. Elements should be grouped using consistent stack units (8, 16, 32px) to reinforce the system's underlying logic.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Low-Contrast Outlines**. Surfaces are primarily white or very light grey, with depth created through thin 1px borders (`#E9ECEF`).

Shadows are used sparingly and should be "Ambient" in nature—extremely diffused with low opacity (e.g., `0px 4px 20px rgba(0,0,0,0.05)`). This mimics the clean card style in the reference images. Higher elevation levels are indicated by a slight increase in shadow spread rather than color shifts, maintaining the minimalist philosophy.

## Shapes

The design system adopts a **Rounded** shape language. Standard UI elements like buttons and input fields use a 0.5rem (8px) radius. Larger containers, such as project cards or "Sign In" style wrappers, use a 1rem (16px) radius to create a softer, more modern framing for content. 

This level of roundedness balances the "technical" feel of the typography with a friendly, accessible interface, echoing the container styles seen in the HobbyLog and Shopping App examples.

## Components

### Buttons
- **Primary:** Solid teal (`#12B886`) with white text. 12px vertical / 24px horizontal padding.
- **Secondary:** Solid dark slate (`#343A40`) for a grounded technical look.
- **Ghost:** Transparent background with a 1px border.

### Cards
Cards are the primary content vessel. They feature a white background, a 1px soft border, and a subtle ambient shadow. Project cards should include a generous internal padding (min 32px) to emphasize the high-end minimalist style.

### Tags & Chips
Used for tech stacks. These use the `label-sm` mono font. Styling should be a light grey background with slightly darker grey text to keep them secondary to the main content.

### Inputs
Following the shopping app reference, inputs feature a soft border that transitions to the teal accent on focus. Placeholders should be a light neutral (`#ADB5BD`).

### Navigation
A minimal top-fixed bar with a blur effect (`backdrop-filter: blur(8px)`) and a subtle bottom border to define the edge without adding visual weight.