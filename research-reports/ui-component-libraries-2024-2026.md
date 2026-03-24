# UI Component Libraries for Portfolio Websites (2024-2026)

## Executive Summary

This comprehensive research report analyzes the best UI component libraries for building stunning portfolio websites in 2024-2026. The landscape has evolved significantly with **shadcn/ui** emerging as the dominant paradigm—a "copy-paste" approach that gives developers full ownership of component code. Libraries are now categorized into three tiers: **headless/unstyled** (Radix UI, Ark UI), **styled foundations** (shadcn/ui, Park UI, NextUI/HeroUI), and **animation-focused** (Aceternity UI, Magic UI). For portfolio websites requiring visual impact, the combination of **shadcn/ui + Aceternity UI or Magic UI** provides the best balance of maintainability, customization, and stunning visual effects.

---

## Table of Contents

1. [Market Overview](#market-overview)
2. [Detailed Library Analysis](#detailed-library-analysis)
   - [shadcn/ui](#1-shadcnui)
   - [Radix UI](#2-radix-ui)
   - [Ark UI](#3-ark-ui)
   - [Park UI](#4-park-ui)
   - [Aceternity UI](#5-aceternity-ui)
   - [Magic UI](#6-magic-ui)
   - [Tremor](#7-tremor)
   - [NextUI / HeroUI](#8-nextui--heroui)
   - [Chakra UI](#9-chakra-ui)
   - [Mantine](#10-mantine)
3. [Emerging Libraries for Creative Portfolios](#emerging-libraries-for-creative-portfolios)
4. [Comparison Matrix](#comparison-matrix)
5. [Recommended Combinations](#recommended-combinations)
6. [Decision Framework](#decision-framework)
7. [Confidence Assessment](#confidence-assessment)
8. [Footnotes](#footnotes)

---

## Market Overview

The UI component library ecosystem in 2024-2026 has consolidated around a few key paradigms[^1]:

```
┌─────────────────────────────────────────────────────────────────┐
│                    UI COMPONENT ECOSYSTEM                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐         │
│  │  HEADLESS   │───▶│   STYLED    │───▶│  ANIMATED   │         │
│  │  PRIMITIVES │    │ FOUNDATIONS │    │  EFFECTS    │         │
│  └─────────────┘    └─────────────┘    └─────────────┘         │
│        │                  │                  │                  │
│        ▼                  ▼                  ▼                  │
│   • Radix UI         • shadcn/ui        • Aceternity UI        │
│   • Ark UI           • Park UI          • Magic UI             │
│   • React Aria       • NextUI/HeroUI    • Hover.dev            │
│                      • Chakra UI        • Animata              │
│                      • Mantine                                  │
│                      • Tremor                                   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Key Trends for 2024-2026

1. **Copy-Paste Paradigm**: shadcn/ui's approach of owning the code rather than importing from npm has become the industry standard[^2]
2. **Tailwind CSS Dominance**: Most modern libraries now default to Tailwind CSS for styling
3. **AI-Ready Components**: Libraries increasingly designed with LLM readability in mind[^3]
4. **Motion/Framer Motion Integration**: Animation is now a first-class citizen
5. **Accessibility by Default**: WAI-ARIA compliance is table stakes

---

## Detailed Library Analysis

### 1. shadcn/ui

> **"This is not a component library. It's how you build your component library."**[^4]

| Attribute | Details |
|-----------|---------|
| **Website** | [ui.shadcn.com](https://ui.shadcn.com) |
| **GitHub** | [shadcn-ui/ui](https://github.com/shadcn-ui/ui) - ⭐ 110k+ stars |
| **License** | MIT |
| **Framework** | React (primary), with community ports |

#### Key Features & Philosophy

shadcn/ui revolutionized the component library space with its unique approach[^5]:

- **Open Code**: Components are copied into your project, giving you full ownership
- **Composition**: Common, composable interface across all components
- **Distribution**: CLI tool and flat-file schema for easy component management
- **Beautiful Defaults**: Clean, minimal design out-of-the-box
- **AI-Ready**: Code structure optimized for LLMs to read and modify

#### Styling Approach

- **Primary**: Tailwind CSS with CSS variables
- **Theme System**: CSS custom properties for theming
- **Dark Mode**: Built-in support via CSS variables

```typescript
// Example: Adding a component
npx shadcn@latest add accordion

// Components are added to your project, fully editable
// /components/ui/accordion.tsx
```

#### Animation Capabilities

- Basic transitions via Tailwind's transition utilities
- **Radix primitives** provide animation-ready states
- Designed to integrate with **Framer Motion** for advanced animations

#### Accessibility

- Built on **Radix UI primitives** - full WAI-ARIA compliance[^6]
- Keyboard navigation
- Screen reader support
- Focus management

#### Bundle Size & Performance

- **No runtime dependency** - code is yours
- Tree-shakeable by nature (only add what you use)
- Minimal overhead since it's your code

#### Best Use Cases for Portfolios

✅ Full control over every component  
✅ Clean, professional aesthetic  
✅ Easy to customize to match brand  
✅ Combine with animation libraries (Aceternity, Magic UI)  
✅ Great for developers who want ownership

---

### 2. Radix UI

> **"An open-source UI component library for building high-quality, accessible design systems and web apps."**[^7]

| Attribute | Details |
|-----------|---------|
| **Website** | [radix-ui.com](https://www.radix-ui.com) |
| **GitHub** | [radix-ui/primitives](https://github.com/radix-ui/primitives) |
| **License** | MIT |
| **Framework** | React only |

#### Key Features & Philosophy

- **Unstyled**: Ships without any styles—bring your own CSS
- **Accessible**: WAI-ARIA compliant with full keyboard navigation
- **Uncontrolled by Default**: Components work out-of-box, can be controlled if needed
- **Composable**: Open component architecture with granular access to parts
- **`asChild` Prop**: Full control over rendered elements[^8]

#### Styling Approach

- **None by default** - completely unstyled
- Works with any styling solution:
  - Tailwind CSS
  - CSS Modules
  - Styled Components
  - Emotion
  - Vanilla CSS

#### Animation Capabilities

- **State-based animations**: Components expose states for CSS animations
- Data attributes for styling states: `data-state="open"`, `data-state="closed"`
- Works seamlessly with Framer Motion, GSAP, or CSS animations

#### Accessibility

- **Industry-leading accessibility**
- Implements WAI-ARIA design patterns
- Focus management handled automatically
- Screen reader announcements
- Keyboard navigation for all components

#### Bundle Size & Performance

- Individual package imports (tree-shakeable)
- Recommended: Install `radix-ui` and import needed primitives
- Typical component: ~5-15KB gzipped

#### Best Use Cases for Portfolios

✅ Foundation for custom design systems  
✅ When you need complete styling freedom  
✅ Projects requiring strict accessibility compliance  
⚠️ Requires more styling work than pre-styled alternatives

---

### 3. Ark UI

> **"A headless library with 45+ accessible components. Bring your own styles."**[^9]

| Attribute | Details |
|-----------|---------|
| **Website** | [ark-ui.com](https://ark-ui.com) |
| **GitHub** | [chakra-ui/ark](https://github.com/chakra-ui/ark) |
| **License** | MIT |
| **Frameworks** | React, Solid, Vue, Svelte |

#### Key Features & Philosophy

- **Truly Headless**: Zero default styles
- **Framework Agnostic**: Same API across React, Solid, Vue, and Svelte[^10]
- **State Machine Powered**: Built on Zag.js for predictable behavior
- **Accessible by Default**: WAI-ARIA patterns baked in
- **45+ Components**: Comprehensive coverage of UI patterns

#### Styling Approach

- Bring your own: Tailwind, Panda CSS, CSS-in-JS, vanilla CSS
- No styling opinions whatsoever

```jsx
// Same API across frameworks
<Slider.Root min={-50} max={50} value={value} onValueChange={(e) => setValue(e.value)}>
  <Slider.Label>Label</Slider.Label>
  <Slider.Control>
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumb index={0} />
  </Slider.Control>
</Slider.Root>
```

#### Animation Capabilities

- State machine driven—predictable animation states
- Data attributes for CSS/JS animation hooks
- Works with any animation library

#### Accessibility

- WCAG compliant
- Keyboard navigation out-of-box
- Screen reader support
- Focus management

#### Best Use Cases for Portfolios

✅ Multi-framework projects (Vue, Svelte, Solid portfolios)  
✅ When you need Radix-like quality outside React  
✅ Teams that use multiple frontend frameworks  
⚠️ Smaller community than Radix UI

---

### 4. Park UI

> **"Beautifully designed components built on Ark UI"**

| Attribute | Details |
|-----------|---------|
| **Website** | [park-ui.com](https://park-ui.com) |
| **Built On** | Ark UI + Panda CSS / Tailwind CSS |
| **License** | MIT |
| **Frameworks** | React, Solid, Vue, Svelte |

#### Key Features & Philosophy

- **Pre-styled Ark UI**: Beautiful defaults for Ark UI components
- **Multi-framework**: Same design across React, Solid, Vue, Svelte
- **Themeable**: Easy customization through design tokens
- **Copy-paste**: Similar model to shadcn/ui

#### Styling Approach

- **Panda CSS** (primary) or **Tailwind CSS**
- Design tokens for consistent theming
- Dark mode support

#### Animation Capabilities

- CSS transitions built-in
- Ark UI's state machine provides animation hooks
- Can integrate with motion libraries

#### Best Use Cases for Portfolios

✅ Ark UI users who want pre-made styles  
✅ Multi-framework consistency (Vue/Svelte portfolios)  
✅ Panda CSS users  
⚠️ Smaller community than shadcn/ui

---

### 5. Aceternity UI

> **"Ship landing pages at lightning speed."**[^11]

| Attribute | Details |
|-----------|---------|
| **Website** | [ui.aceternity.com](https://ui.aceternity.com) |
| **Trusted By** | 120,000+ founders, developers, and creators |
| **Pricing** | Free components + Paid All-Access Pass |
| **Framework** | React + Next.js |

#### Key Features & Philosophy

- **Fancy Animated Components**: Microinteractions and stunning visual effects
- **Copy-Paste**: shadcn-compatible components
- **Landing Page Focus**: Designed for marketing pages and portfolios
- **Premium Templates**: SaaS, agency, and portfolio templates available

#### Available Components (Selection)[^12]

| Component | Description |
|-----------|-------------|
| **3D Card Effect** | Perspective hover effect with element elevation |
| **3D Globe** | Interactive globe with tooltips and avatar tips |
| **Parallax Hero Images** | Mouse-driven parallax for hero sections |
| **Macbook Scroll** | Image emerges from screen on scroll (fey.com style) |
| **Background Beams** | Exploding beams with collision effects |
| **Text Hover Effect** | Animated gradient outline (x.ai style) |
| **Encrypted Text** | Gibberish-to-text reveal animation |
| **Apple Cards Carousel** | Apple.com style carousel |
| **Canvas Text** | Colorful curved lines clipped to text |
| **ASCII Art** | Convert images to animated ASCII |

#### Styling Approach

- **Tailwind CSS** v4
- **Motion (Framer Motion)** for animations
- shadcn-compatible

```bash
# Installation example
npx shadcn@latest add @aceternity/3d-card
```

#### Animation Capabilities

⭐ **EXCEPTIONAL** - This is Aceternity's main value proposition:
- Complex 3D CSS transforms
- Framer Motion powered animations
- GSAP-style timeline effects
- Scroll-triggered animations
- Mouse-tracking parallax
- WebGL/Canvas effects (Globe, shaders)

#### Best Use Cases for Portfolios

✅ **HIGHLY RECOMMENDED** for portfolios  
✅ Hero sections that wow visitors  
✅ Creative/design portfolios  
✅ Startup landing pages  
✅ Standing out from template-based portfolios  
⚠️ Some components are paid (All-Access Pass)

---

### 6. Magic UI

> **"UI library for Design Engineers. 150+ free and open-source animated components."**[^13]

| Attribute | Details |
|-----------|---------|
| **Website** | [magicui.design](https://magicui.design) |
| **Components** | 150+ animated components |
| **License** | Free and open-source |
| **Framework** | React + TypeScript + Tailwind + Motion |

#### Key Features & Philosophy

From the creator's philosophy[^14]:
> "Good design contributes significant value to software. It's one of the main methods of establishing trust between you and an internet stranger."

- **Landing Page Focus**: Components designed for marketing and portfolios
- **shadcn Companion**: Designed to work alongside shadcn/ui
- **Design Engineer Focus**: For developers who care about design details
- **Trust Building**: Help websites look professional and trustworthy

#### Sample Components

| Component | Description |
|-----------|-------------|
| **Marquee** | Infinite scrolling content with pause on hover |
| **Animated Beam** | SVG beam animations connecting elements |
| **Globe** | 3D interactive globe |
| **Particles** | Background particle effects |
| **Sparkles** | Sparkle effects on text/elements |
| **Blur Fade** | Smooth blur-to-focus transitions |
| **Typing Animation** | Typewriter text effects |
| **Number Ticker** | Animated counting numbers |
| **Dock** | macOS-style dock with magnification |
| **Bento Grid** | Apple-style feature grids |
| **Shine Border** | Animated gradient borders |

```jsx
// Example: Marquee component
import { Marquee } from "@/registry/magicui/marquee"

<Marquee pauseOnHover className="[--duration:20s]">
  {reviews.map((review) => (
    <ReviewCard key={review.username} {...review} />
  ))}
</Marquee>
```

#### Styling Approach

- **Tailwind CSS** with CSS variables
- **Motion (Framer Motion)** for animations
- shadcn-compatible structure

#### Animation Capabilities

⭐ **EXCELLENT** - Rich animation library:
- Scroll-triggered animations
- Mouse tracking effects
- SVG path animations
- Particle systems
- Spring physics
- Stagger animations

#### Best Use Cases for Portfolios

✅ **HIGHLY RECOMMENDED** for portfolios  
✅ Free alternative to Aceternity UI  
✅ Landing page hero sections  
✅ Testimonial carousels  
✅ Feature showcases with bento grids  
✅ Trust-building social proof sections

---

### 7. Tremor

> **"Copy & Paste React components to build charts and dashboards"**[^15]

| Attribute | Details |
|-----------|---------|
| **Website** | [tremor.so](https://www.tremor.so) |
| **GitHub** | [tremorlabs/tremor](https://github.com/tremorlabs/tremor) |
| **License** | Apache 2.0 |
| **Framework** | React + Next.js |

#### Key Features & Philosophy

- **Dashboard Focus**: 35+ components for analytics dashboards
- **Data Visualization**: Charts, KPIs, metrics, progress indicators
- **Tailwind + Radix**: Built on modern foundations
- **Production-ready Templates**: Blocks and full templates available

#### Notable Supporters

Endorsed by industry leaders:
- Guillermo Rauch (CEO, Vercel)
- Peer Richelsen (Co-Founder, Cal.com)
- Engineers from Stripe, Mentimeter, Tinybird[^16]

#### Styling Approach

- **Tailwind CSS v4**
- CSS variables for theming
- Radix UI primitives for accessibility

#### Component Categories

- **Charts**: Bar, Line, Area, Donut, Pie
- **KPIs**: Metric cards, progress bars
- **Tables**: Data tables with sorting/filtering
- **Inputs**: Search, select, date pickers
- **Layout**: Cards, grids, dividers

#### Best Use Cases for Portfolios

✅ Developer portfolios showcasing data projects  
✅ Analytics dashboards  
✅ Case studies with metrics  
⚠️ Not ideal for creative/design portfolios  
⚠️ Dashboard-focused, not landing page components

---

### 8. NextUI / HeroUI

> **"Building the future of UI for web & mobile."** (YC S24)[^17]

| Attribute | Details |
|-----------|---------|
| **Website** | [heroui.com](https://heroui.com) (formerly nextui.org) |
| **GitHub** | [heroui-inc/heroui](https://github.com/heroui-inc/heroui) - ⭐ 28.6k stars |
| **License** | MIT |
| **Framework** | React |

**Note**: NextUI has been rebranded to **HeroUI** and received Y Combinator S24 backing.

#### Key Features & Philosophy

- **Beautiful by Default**: Polished, modern design out-of-box
- **React Aria Foundation**: Built on Adobe's accessible primitives
- **Tailwind CSS**: Fully styled with Tailwind
- **Framer Motion**: Built-in animations
- **Theme System**: Easy customization with CSS variables

#### Styling Approach

- **Tailwind CSS** with Tailwind Variants
- CSS variables for theming
- Multiple color themes included

#### Animation Capabilities

- **Framer Motion** integrated
- Smooth transitions between states
- Page transitions support
- Skeleton loading states

#### Accessibility

- Built on **React Aria** (Adobe's accessible primitives)
- Full keyboard navigation
- Screen reader support
- Focus management

#### Best Use Cases for Portfolios

✅ Beautiful defaults without heavy customization  
✅ React developers who want polished components  
✅ SaaS-style portfolios  
⚠️ Less flexibility than shadcn/ui for deep customization

---

### 9. Chakra UI

> **"Build Accessible React Apps with Speed ⚡️"**[^18]

| Attribute | Details |
|-----------|---------|
| **Website** | [chakra-ui.com](https://chakra-ui.com) |
| **GitHub** | [chakra-ui/chakra-ui](https://github.com/chakra-ui/chakra-ui) |
| **License** | MIT |
| **Framework** | React (with Next.js RSC support in v3) |

#### Version History

- **v1**: Original release
- **v2**: Current stable (React 18+ required)
- **v3**: Latest with RSC support[^19]

#### Key Features & Philosophy

- **Accessible**: WAI-ARIA compliant components
- **Themeable**: Comprehensive theme system
- **Composable**: Style props for rapid development
- **Developer Experience**: Simple, modular API

#### Styling Approach

- **Emotion CSS-in-JS** (runtime)
- Style props: `<Box p={4} bg="blue.500">`
- Theme tokens for consistency
- Dark mode support

```jsx
// Style props example
<Button colorScheme="blue" size="lg" variant="solid">
  Click me
</Button>
```

#### Animation Capabilities

- **Framer Motion** integration
- Built-in transitions
- Animation presets

#### Bundle Size Considerations

- Larger bundle due to CSS-in-JS runtime
- Can use `baseTheme` for smaller bundles[^20]
- Tree-shakeable but still larger than Tailwind alternatives

#### Best Use Cases for Portfolios

✅ Rapid prototyping  
✅ Developers familiar with style props  
✅ Projects needing comprehensive theming  
⚠️ Larger bundle than Tailwind alternatives  
⚠️ CSS-in-JS runtime overhead

---

### 10. Mantine

> **"Full-featured React components library"**

| Attribute | Details |
|-----------|---------|
| **Website** | [mantine.dev](https://mantine.dev) |
| **GitHub** | [mantinedev/mantine](https://github.com/mantinedev/mantine) |
| **License** | MIT |
| **Framework** | React |

#### Key Features & Philosophy

- **Comprehensive**: 100+ components and 50+ hooks
- **Full Stack**: Core, forms, dates, charts, notifications, code highlighting, rich text editor, and more
- **CSS Variables**: PostCSS-based styling
- **Modular**: Install only what you need

#### Package Ecosystem[^21]

| Package | Purpose |
|---------|---------|
| `@mantine/core` | Core components library |
| `@mantine/hooks` | 50+ React hooks |
| `@mantine/form` | Form management |
| `@mantine/dates` | Date pickers, calendars |
| `@mantine/charts` | Recharts-based charts |
| `@mantine/notifications` | Toast notifications |
| `@mantine/code-highlight` | Syntax highlighting |
| `@mantine/tiptap` | Rich text editor |
| `@mantine/dropzone` | File upload with drag-and-drop |
| `@mantine/carousel` | Embla-based carousel |
| `@mantine/spotlight` | Command palette |

#### Styling Approach

- **PostCSS** with `postcss-preset-mantine`
- CSS variables for theming
- CSS Modules compatible
- Can integrate with Tailwind CSS

```bash
# PostCSS configuration required
npm install postcss postcss-preset-mantine postcss-simple-vars
```

#### Animation Capabilities

- CSS transitions for component states
- `@mantine/notifications` has built-in animations
- Can integrate with external animation libraries

#### Best Use Cases for Portfolios

✅ Feature-rich applications beyond just portfolio  
✅ When you need forms, dates, notifications, etc.  
✅ Full-stack applications with portfolio section  
⚠️ Learning curve with PostCSS setup  
⚠️ Larger footprint if you only need a few components

---

## Emerging Libraries for Creative Portfolios

### Hover.dev

| Attribute | Details |
|-----------|---------|
| **Website** | [hover.dev](https://www.hover.dev) |
| **Focus** | Animation-first components |

- Built with React, Tailwind CSS, Framer Motion
- Copy-paste model
- Animation tutorials and examples
- Focus on interactive effects[^22]

### Animata

| Attribute | Details |
|-----------|---------|
| **Website** | [animata.design](https://animata.design) |
| **Focus** | Animated components and widgets |

- Text animations (typing, mirror, bold copy)
- Card effects (shiny, skew, GitHub-style)
- Widget components (fitness trackers, delivery status)
- Great for dashboard-style portfolios[^23]

### Float UI

| Attribute | Details |
|-----------|---------|
| **Website** | [floatui.com](https://floatui.com) |
| **Focus** | Tailwind CSS templates and components |

- Beautiful, responsive components
- Multi-framework support
- Professional website templates
- Free and open-source[^24]

### Cult UI

| Attribute | Details |
|-----------|---------|
| **Website** | [cult-ui.com](https://cult-ui.com) |
| **Focus** | AI/Agent patterns and templates |

- 100+ AI patterns for agents
- Full-stack templates with auth, payments
- Interactive previews
- shadcn compatible[^25]

---

## Comparison Matrix

### Core Features Comparison

| Library | Styling | Animations | Accessibility | Bundle Size | Framework Support |
|---------|---------|------------|---------------|-------------|-------------------|
| **shadcn/ui** | Tailwind CSS | Basic (Tailwind) | ⭐⭐⭐⭐⭐ (Radix) | Minimal | React |
| **Radix UI** | Unstyled | State-based | ⭐⭐⭐⭐⭐ | ~5-15KB/component | React |
| **Ark UI** | Unstyled | State-based | ⭐⭐⭐⭐⭐ | ~5-10KB/component | React, Vue, Solid, Svelte |
| **Park UI** | Tailwind/Panda | Basic | ⭐⭐⭐⭐⭐ (Ark) | Medium | React, Vue, Solid, Svelte |
| **Aceternity UI** | Tailwind | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | Varies | React |
| **Magic UI** | Tailwind | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | Varies | React |
| **Tremor** | Tailwind | Basic | ⭐⭐⭐⭐ | Medium | React |
| **NextUI/HeroUI** | Tailwind | ⭐⭐⭐⭐ (Framer) | ⭐⭐⭐⭐⭐ (React Aria) | Medium-Large | React |
| **Chakra UI** | CSS-in-JS | ⭐⭐⭐⭐ (Framer) | ⭐⭐⭐⭐⭐ | Large | React |
| **Mantine** | PostCSS | Basic | ⭐⭐⭐⭐ | Medium-Large | React |

### Portfolio Suitability Matrix

| Library | Hero Sections | Project Cards | Testimonials | Animations | Data Viz | Overall Score |
|---------|---------------|---------------|--------------|------------|----------|---------------|
| **shadcn/ui** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Aceternity UI** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Magic UI** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **NextUI/HeroUI** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Tremor** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Chakra UI** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Mantine** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

---

## Recommended Combinations

### 🏆 Best for Stunning Creative Portfolios

```
shadcn/ui + Aceternity UI + Framer Motion
```

**Why this works:**
- shadcn/ui provides accessible, customizable base components
- Aceternity UI adds wow-factor animations and effects
- Framer Motion fills gaps for custom animations
- All use Tailwind CSS—no style conflicts

### 🆓 Best Free & Open-Source Combination

```
shadcn/ui + Magic UI + Motion
```

**Why this works:**
- Both fully free and open-source
- Magic UI designed as shadcn companion
- 150+ animated components
- Professional-grade animations without cost

### 🌐 Best for Multi-Framework (Vue/Svelte)

```
Ark UI + Park UI + Custom Animations
```

**Why this works:**
- Same API across React, Vue, Solid, Svelte
- Park UI provides pre-styled components
- Consistent design regardless of framework

### 📊 Best for Developer/Data Portfolios

```
shadcn/ui + Tremor + Magic UI
```

**Why this works:**
- shadcn/ui for general UI
- Tremor for data visualization and dashboards
- Magic UI for landing page animations

---

## Decision Framework

### Choose shadcn/ui if:
- ✅ You want full control over component code
- ✅ You're building a React/Next.js portfolio
- ✅ You want to combine with animation libraries
- ✅ You prefer Tailwind CSS

### Choose Aceternity UI if:
- ✅ Visual impact is your priority
- ✅ You need 3D effects, parallax, and complex animations
- ✅ You're building a creative/design portfolio
- ✅ You're okay with some paid components

### Choose Magic UI if:
- ✅ You want free animated components
- ✅ You're already using shadcn/ui
- ✅ You need landing page components
- ✅ You want to build trust through design

### Choose Radix/Ark UI if:
- ✅ You need a headless foundation
- ✅ You have a specific design system
- ✅ You need framework flexibility (Ark)
- ✅ Accessibility is critical

### Choose Chakra/Mantine if:
- ✅ You want comprehensive, batteries-included library
- ✅ You need forms, dates, notifications, etc.
- ✅ You prefer style props over Tailwind
- ✅ Bundle size is less of a concern

### Choose Tremor if:
- ✅ Your portfolio showcases data/analytics work
- ✅ You need charts and dashboards
- ✅ You're building a developer portfolio with metrics

---

## Confidence Assessment

### High Confidence ✅

- **shadcn/ui dominance**: Clear industry leader with 110k+ GitHub stars
- **Radix UI quality**: Battle-tested accessibility
- **Tailwind CSS trend**: Most libraries converging on Tailwind
- **Animation importance**: Aceternity and Magic UI filling real needs

### Medium Confidence ⚠️

- **Park UI adoption**: Newer library, smaller community
- **Ark UI growth**: Good tech but competing with established Radix
- **HeroUI trajectory**: Post-rebrand growth unclear

### Assumptions Made 📝

1. Portfolio will be built with React/Next.js (most common choice)
2. Modern browser support only (no IE11)
3. TypeScript usage (all libraries have excellent TS support)
4. Vercel/Netlify deployment (standard for portfolios)

---

## Footnotes

[^1]: Based on analysis of official documentation and GitHub repositories for all libraries, March 2026
[^2]: shadcn/ui documentation, "This is not a component library. It is how you build your component library." - https://ui.shadcn.com/docs
[^3]: shadcn/ui documentation on AI-Ready design principles - https://ui.shadcn.com/docs
[^4]: shadcn/ui homepage tagline - https://ui.shadcn.com/docs
[^5]: shadcn/ui Core Principles: Open Code, Composition, Distribution, Beautiful Defaults, AI-Ready - https://ui.shadcn.com/docs
[^6]: shadcn/ui Accordion component references Radix UI for API - https://ui.shadcn.com/docs/components/accordion
[^7]: Radix UI Primitives Introduction - https://www.radix-ui.com/primitives/docs/overview/introduction
[^8]: Radix UI asChild prop documentation - https://www.radix-ui.com/primitives/docs/overview/introduction
[^9]: Ark UI homepage - https://ark-ui.com/
[^10]: Ark UI GitHub README - Framework support across React, Solid, Vue, Svelte - https://github.com/chakra-ui/ark
[^11]: Aceternity UI homepage - https://ui.aceternity.com/
[^12]: Aceternity UI Components page - https://ui.aceternity.com/components
[^13]: Magic UI homepage - https://magicui.design/
[^14]: Magic UI Philosophy documentation - https://magicui.design/docs
[^15]: Tremor homepage - https://www.tremor.so/
[^16]: Tremor testimonials section - https://www.tremor.so/
[^17]: HeroUI (formerly NextUI) homepage showing YC S24 badge - https://nextui.org/
[^18]: Chakra UI GitHub README - https://github.com/chakra-ui/chakra-ui
[^19]: Chakra UI documentation version links - v1, v2, v3 - https://github.com/chakra-ui/chakra-ui
[^20]: Chakra UI Getting Started - Bundle Size Optimization section - https://v2.chakra-ui.com/getting-started
[^21]: Mantine Getting Started - Package list - https://mantine.dev/getting-started/
[^22]: Hover.dev homepage - https://www.hover.dev/
[^23]: Animata homepage with component examples - https://animata.design/
[^24]: Float UI homepage - https://floatui.com/
[^25]: Cult UI homepage - https://cult-ui.com/

---

## Quick Links

| Library | Documentation | GitHub | npm |
|---------|--------------|--------|-----|
| shadcn/ui | [Docs](https://ui.shadcn.com/docs) | [shadcn-ui/ui](https://github.com/shadcn-ui/ui) | CLI-based |
| Radix UI | [Docs](https://www.radix-ui.com/primitives/docs) | [radix-ui/primitives](https://github.com/radix-ui/primitives) | `radix-ui` |
| Ark UI | [Docs](https://ark-ui.com/docs) | [chakra-ui/ark](https://github.com/chakra-ui/ark) | `@ark-ui/react` |
| Park UI | [Docs](https://park-ui.com/docs) | GitHub | CLI-based |
| Aceternity UI | [Docs](https://ui.aceternity.com/components) | - | CLI-based |
| Magic UI | [Docs](https://magicui.design/docs) | GitHub | CLI-based |
| Tremor | [Docs](https://tremor.so/docs) | [tremorlabs/tremor](https://github.com/tremorlabs/tremor) | `@tremor/react` |
| HeroUI | [Docs](https://heroui.com/docs) | [heroui-inc/heroui](https://github.com/heroui-inc/heroui) | `@heroui/react` |
| Chakra UI | [Docs](https://chakra-ui.com) | [chakra-ui/chakra-ui](https://github.com/chakra-ui/chakra-ui) | `@chakra-ui/react` |
| Mantine | [Docs](https://mantine.dev) | [mantinedev/mantine](https://github.com/mantinedev/mantine) | `@mantine/core` |

---

*Report generated: March 2026*
*Research conducted by analyzing official documentation, GitHub repositories, and community resources*
