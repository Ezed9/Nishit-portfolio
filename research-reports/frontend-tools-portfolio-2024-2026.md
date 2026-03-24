# World-Class Portfolio Website: Frontend Tools & Technologies (2024-2026)

## Executive Summary

This comprehensive research report covers the essential tools, libraries, and technologies for building "one of the best portfolio websites ever" in 2024-2026. The modern portfolio landscape has evolved dramatically, with **AI-powered design tools** (v0.dev, Galileo AI), **copy-paste component libraries** (shadcn/ui + Aceternity UI), **advanced animation systems** (Motion/Framer Motion, GSAP), and **3D WebGL tools** (React Three Fiber, Spline) forming the foundation of award-winning portfolios. MCP servers are emerging as powerful tools for AI-assisted development. The recommended stack combines **Next.js 14+ + shadcn/ui + Aceternity UI/Magic UI + Framer Motion + Lenis + React Three Fiber** for maximum visual impact and developer experience.

---

## Table of Contents

1. [MCP Servers for Frontend Development](#1-mcp-servers-for-frontend-development)
2. [AI-Powered Design Tools](#2-ai-powered-design-tools)
3. [Component Libraries](#3-component-libraries)
4. [Advanced Animation Tools](#4-advanced-animation-tools)
5. [WebGL & 3D Tools](#5-webgl--3d-tools)
6. [Scroll Effects & Smooth Scrolling](#6-scroll-effects--smooth-scrolling)
7. [Design Systems](#7-design-systems)
8. [Performance Optimization](#8-performance-optimization)
9. [Visual Effects & Creative Coding](#9-visual-effects--creative-coding)
10. [Inspiration Sources](#10-inspiration-sources)
11. [Recommended Technology Stack](#11-recommended-technology-stack)
12. [Confidence Assessment](#confidence-assessment)
13. [Footnotes](#footnotes)

---

## 1. MCP Servers for Frontend Development

MCP (Model Context Protocol) servers enable AI models to securely interact with local and remote resources, making them powerful tools for AI-assisted frontend development[^1].

### 1.1 Design & UI-Focused MCP Servers

| MCP Server | Purpose | Why Useful for Portfolios |
|------------|---------|---------------------------|
| **[21st.dev Magic](https://github.com/21st-dev/magic-mcp)** | Create crafted UI components inspired by top design engineers | Generate stunning, unique component designs |
| **[Figma MCP](https://github.com/punkpeye/awesome-mcp-servers)** | Figma integration for design collaboration | Extract design tokens, export assets |
| **[Browser Automation](https://github.com/punkpeye/awesome-mcp-servers)** | Puppeteer/Playwright integration | Test responsive designs, capture screenshots |

### 1.2 Code Generation MCP Servers

| MCP Server | Purpose | Installation |
|------------|---------|--------------|
| **[Filesystem MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem)** | Secure file operations for code generation | `npm install @modelcontextprotocol/server-filesystem` |
| **[Git MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/git)** | Repository management and version control | `npm install @modelcontextprotocol/server-git` |
| **[Memory MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/memory)** | Knowledge graph for persistent context | `npm install @modelcontextprotocol/server-memory` |
| **[Fetch MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch)** | Web content fetching for documentation | `npm install @modelcontextprotocol/server-fetch` |

### 1.3 Aggregator MCP Servers

For portfolio development, aggregator servers provide access to multiple tools:

```typescript
// Example: Using 1mcp/agent for unified MCP access
// Aggregates multiple MCP servers into one interface
{
  "mcpServers": {
    "unified-agent": {
      "command": "npx",
      "args": ["@1mcp/agent"]
    }
  }
}
```

**Notable Aggregators:**
- **[1mcp/agent](https://github.com/1mcp-app/agent)** - Unified MCP server aggregating multiple servers[^2]
- **[anyquery](https://github.com/julien040/anyquery)** - Query 40+ apps with SQL
- **[Agenium](https://github.com/Aganium/agenium)** - Agent discovery and trust for AI tools

### 1.4 Setting Up MCP for Portfolio Development

```json
// claude_desktop_config.json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/portfolio"]
    },
    "git": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-git", "--repository", "/path/to/portfolio"]
    },
    "21st-magic": {
      "command": "npx",
      "args": ["-y", "@21st-dev/magic-mcp"]
    }
  }
}
```

---

## 2. AI-Powered Design Tools

AI design tools have revolutionized how portfolios are built, enabling rapid prototyping and production-ready output[^3].

### 2.1 v0.dev by Vercel

> **"Prompt. Build. Publish."**[^4]

| Attribute | Details |
|-----------|---------|
| **Website** | [v0.dev](https://v0.dev) |
| **Pricing** | Free tier + Pro plans |
| **Output** | React + Tailwind + shadcn/ui components |

**Key Features:**
- Generate working applications from prompts in minutes
- Sync with GitHub repositories directly
- One-click deployment to Vercel
- Visual design mode for fine-tuning
- Built-in design system creation (colors, typography, styles)
- iOS app for mobile design
- Agentic AI that plans, creates tasks, and connects databases

**Why It's Essential for Portfolios:**
```
User Prompt: "Create a hero section with animated gradient background, 
floating 3D elements, and a typing animation for my name"

v0 Output: Production-ready React component with Tailwind CSS
```

**Strengths:**
- Generates shadcn/ui-compatible components
- Understands modern design patterns
- Produces accessible, responsive code
- Rapid iteration on designs

### 2.2 Galileo AI

| Attribute | Details |
|-----------|---------|
| **Website** | [galileo.ai](https://galileo.ai) |
| **Pricing** | Waitlist / Enterprise |
| **Output** | Figma designs / Code exports |

**Key Features:**
- Generate editable UI designs from text descriptions
- High-fidelity mockups in seconds
- Export to Figma for refinement
- Understands complex UI patterns

### 2.3 Framer AI

| Attribute | Details |
|-----------|---------|
| **Website** | [framer.com](https://framer.com) |
| **Pricing** | Free tier + paid plans |
| **Output** | Live, published websites |

**Key Features:**
- AI-powered website generation
- Built-in animations and interactions
- No-code/low-code approach
- Direct publishing

### 2.4 Other AI Design Tools

| Tool | Best For | Link |
|------|----------|------|
| **Uizard** | Rapid wireframing & mockups | [uizard.io](https://uizard.io) |
| **Locofy** | Design-to-code (Figma → React) | [locofy.ai](https://locofy.ai) |
| **Builder.io** | Visual development + AI | [builder.io](https://builder.io) |
| **Midjourney** | Hero images, backgrounds | [midjourney.com](https://midjourney.com) |
| **DALL-E 3** | Custom illustrations | OpenAI |
| **Ideogram** | Text in images, logos | [ideogram.ai](https://ideogram.ai) |

### 2.5 AI Tool Comparison Matrix

| Tool | Code Output | Live Preview | Integration | Best Use Case |
|------|-------------|--------------|-------------|---------------|
| v0.dev | React/Tailwind | ✅ | GitHub, Vercel | Components & pages |
| Galileo AI | Figma | ✅ | Figma | High-fidelity mockups |
| Framer AI | Proprietary | ✅ | Direct publish | Full websites |
| Locofy | React/Vue/etc | ✅ | Figma | Design handoff |

---

## 3. Component Libraries

The component library ecosystem has evolved into three tiers: **headless primitives**, **styled foundations**, and **animation-focused** libraries[^5].

### 3.1 Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    COMPONENT LIBRARY ECOSYSTEM                   │
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
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 shadcn/ui (⭐ Highly Recommended)

> **"This is not a component library. It's how you build your component library."**[^6]

| Attribute | Details |
|-----------|---------|
| **Website** | [ui.shadcn.com](https://ui.shadcn.com) |
| **GitHub** | [shadcn-ui/ui](https://github.com/shadcn-ui/ui) - ⭐ 110k+ stars |
| **Styling** | Tailwind CSS + CSS Variables |
| **License** | MIT |

**Why It's #1 for Portfolios:**

1. **Open Code Philosophy** - Components copied into your project, fully customizable
2. **AI-Ready** - Code structure optimized for LLMs to read and modify
3. **Beautiful Defaults** - Clean, minimal design out-of-the-box
4. **Composable** - Mix and match with animation libraries

**Installation:**
```bash
npx shadcn@latest init
npx shadcn@latest add button card dialog
```

**Key Components for Portfolios:**
- `Card` - Project showcases
- `Dialog` / `Sheet` - Project details, contact forms
- `Tabs` - Skill categories, project filters
- `Tooltip` - Interactive info displays
- `Carousel` - Image galleries
- `Navigation Menu` - Site navigation

### 3.3 Aceternity UI (⭐ Essential for Stunning Portfolios)

> **"Ship landing pages at lightning speed. Trusted by 120,000+ founders, developers and creators."**[^7]

| Attribute | Details |
|-----------|---------|
| **Website** | [ui.aceternity.com](https://ui.aceternity.com) |
| **Pricing** | Free components + All-Access Pass |
| **Styling** | Tailwind CSS + Framer Motion |

**Why It's Perfect for Portfolios:**

Aceternity UI specializes in **visually stunning, animated components** specifically designed for landing pages and portfolios:

- **3D Card Effects** - Interactive parallax cards
- **Hero Sections** - Animated gradients, mesh backgrounds
- **Spotlight Effects** - Follow cursor, reveal animations
- **Background Effects** - Aurora, beams, grid patterns
- **Text Animations** - Typewriter, morphing, wave effects
- **Bento Grids** - Modern layout with animations

**Example Components:**
```tsx
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";

// 3D hover card effect
<SpotlightCard>
  <h3>My Project</h3>
</SpotlightCard>

// Animated text reveal
<TextGenerateEffect words="Frontend Developer & Designer" />
```

**Featured YouTubers Using Aceternity:**
- **Fireship** - Building landing pages
- **JavaScript Mastery** - Portfolio tutorials
- **Web Prodigies** - Full SaaS builds

### 3.4 Magic UI (⭐ Free & Open Source)

> **"150+ free and open-source animated components built with React, Typescript, Tailwind CSS, and Motion."**[^8]

| Attribute | Details |
|-----------|---------|
| **Website** | [magicui.design](https://magicui.design) |
| **Pricing** | FREE (open-source) |
| **Components** | 150+ animated components |
| **Companion** | Perfect shadcn/ui companion |

**Key Components:**
- **Animated Counters** - Number animations
- **Marquee** - Infinite scroll text/logos
- **Dock** - macOS-style dock
- **Bento Grid** - Animated grid layouts
- **Globe** - Interactive 3D globe
- **Particles** - Background particle effects
- **Shimmer** - Loading shimmer effects
- **Dotted Map** - Interactive location maps

### 3.5 Component Library Comparison

| Library | GitHub Stars | Bundle Size | Animation | Best For |
|---------|-------------|-------------|-----------|----------|
| **shadcn/ui** | 110k+ | Your code | Basic | Foundation |
| **Aceternity UI** | 8k+ | Varies | Advanced | Visual impact |
| **Magic UI** | 15k+ | Varies | Advanced | Free animations |
| **Radix UI** | 16k+ | ~5-15kb/component | None | Accessibility |
| **Chakra UI** | 37k+ | ~50kb | Basic | Rapid development |
| **Mantine** | 27k+ | ~40kb | Basic | Full-featured |
| **NextUI/HeroUI** | 22k+ | ~30kb | Built-in | Beautiful defaults |

### 3.6 Recommended Combinations

| Portfolio Type | Primary | Animation | Result |
|----------------|---------|-----------|--------|
| **Creative/Agency** | shadcn/ui | Aceternity UI | Maximum visual impact |
| **Developer** | shadcn/ui | Magic UI | Clean + animated |
| **Data/Analytics** | shadcn/ui + Tremor | Magic UI | Professional + dynamic |
| **Minimalist** | Radix UI | Framer Motion | Custom + subtle |

---

## 4. Advanced Animation Tools

Modern portfolios demand sophisticated animations. The ecosystem has converged around a few key players[^9].

### 4.1 Animation Library Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    ANIMATION ECOSYSTEM 2024-2026                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  DECLARATIVE (React-first)        IMPERATIVE (Framework-agnostic)│
│  ┌─────────────────────┐          ┌─────────────────────┐       │
│  │  Motion/Framer      │          │  GSAP               │       │
│  │  Motion             │          │  + ScrollTrigger    │       │
│  │  30M+ monthly npm   │          │  11M+ sites         │       │
│  │  downloads          │          │  Awwwards standard  │       │
│  └─────────────────────┘          └─────────────────────┘       │
│           │                                │                     │
│           ▼                                ▼                     │
│  ┌─────────────────────┐          ┌─────────────────────┐       │
│  │  React Spring       │          │  anime.js           │       │
│  │  Physics-based      │          │  Lightweight        │       │
│  └─────────────────────┘          └─────────────────────┘       │
│                                                                  │
│  VISUAL EDITORS                   SPECIALIZED                    │
│  ┌─────────────────────┐          ┌─────────────────────┐       │
│  │  Theatre.js         │          │  Rive               │       │
│  │  Timeline editor    │          │  Interactive design │       │
│  │  Cinematic control  │          │  engine             │       │
│  └─────────────────────┘          └─────────────────────┘       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 Motion (Framer Motion) - ⭐ Primary Recommendation

> **"A production-grade animation library for the web. 30 million monthly downloads."**[^10]

| Attribute | Details |
|-----------|---------|
| **Website** | [motion.dev](https://motion.dev) |
| **npm** | `motion` or `framer-motion` |
| **Downloads** | 30M+ monthly (fastest-growing) |
| **Size** | ~16kb gzipped |

**Why Motion is #1 for React Portfolios:**

1. **Declarative API** - Animations as props
2. **Layout Animations** - Industry-leading automatic layout transitions
3. **Gestures** - whileHover, whileTap, whileDrag, whileFocus, whileInView
4. **Exit Animations** - AnimatePresence for mount/unmount
5. **Scroll Animations** - Hardware-accelerated scroll triggers
6. **Spring Physics** - Natural, bouncy animations
7. **LLM-Optimized** - Great for AI-assisted development

**Essential Patterns for Portfolios:**

```tsx
import { motion, AnimatePresence } from "framer-motion";

// 1. Scroll-triggered reveal
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
  <ProjectCard />
</motion.div>

// 2. Hover micro-interaction
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  View Project
</motion.button>

// 3. Staggered children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

<motion.ul variants={container} initial="hidden" animate="show">
  {projects.map(project => (
    <motion.li key={project.id} variants={item}>
      {project.name}
    </motion.li>
  ))}
</motion.ul>

// 4. Page transitions
<AnimatePresence mode="wait">
  <motion.main
    key={router.asPath}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.main>
</AnimatePresence>
```

### 4.3 GSAP (GreenSock Animation Platform)

> **"Used on over 11 million sites, including award-winning ones."**[^11]

| Attribute | Details |
|-----------|---------|
| **Website** | [gsap.com](https://gsap.com) |
| **npm** | `gsap` |
| **Plugins** | ScrollTrigger, ScrollSmoother, SplitText, MorphSVG |
| **Size** | ~23kb gzipped (core) |

**When to Use GSAP:**
- Complex scroll-driven storytelling
- SVG morphing and path animations
- Timeline sequences with precise orchestration
- Award-winning creative portfolios
- Framework-agnostic projects

**Essential GSAP for Portfolios:**

```javascript
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 1. Pin section while scrolling
gsap.to('.hero-content', {
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: '+=500',
    pin: true,
    scrub: 1,
  },
  y: -100,
  opacity: 0,
});

// 2. Staggered reveal on scroll
gsap.from('.project-card', {
  scrollTrigger: {
    trigger: '.projects-grid',
    start: 'top 80%',
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: 'power2.out',
});

// 3. Text split animation
gsap.from('.hero-title span', {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: 'power4.out',
  stagger: 0.1,
});
```

### 4.4 Theatre.js - Visual Animation Editor

> **"Powerful motion design in the browser. Create any animation, from cinematic scenes to delightful UI."**[^12]

| Attribute | Details |
|-----------|---------|
| **Website** | [theatrejs.com](https://www.theatrejs.com) |
| **npm** | `@theatre/core`, `@theatre/studio` |
| **Best For** | Complex 3D animations, cinematic sequences |

**Key Features:**
- Visual sequence editor (dope sheet)
- Graph editor for fine-tuning
- Easing presets
- Works with Three.js, DOM, and any JS values
- Export animation data as JSON

```tsx
import { getProject, types } from "@theatre/core";
import studio from "@theatre/studio";

// Initialize Theatre.js
studio.initialize();
const project = getProject("Portfolio");
const sheet = project.sheet("Hero Animation");

// Create animated object
const heroObj = sheet.object("Hero", {
  position: types.compound({
    x: types.number(0, { range: [-100, 100] }),
    y: types.number(0, { range: [-100, 100] }),
  }),
  opacity: types.number(1, { range: [0, 1] }),
});
```

### 4.5 Rive - Interactive Design Engine

> **"Products built with Rive reach over 2 billion users worldwide."**[^13]

| Attribute | Details |
|-----------|---------|
| **Website** | [rive.app](https://rive.app) |
| **Used By** | Spotify, Duolingo, Disney, ESPN, Google |
| **Benefit** | 4x faster production, 90% smaller files |

**Why Consider Rive:**
- Design and animate in one tool
- State machine for interactivity
- Native runtime for iOS, Android, Web
- Tiny file sizes vs Lottie
- Real-time rendering

**Installation:**
```bash
npm install @rive-app/react-canvas
```

```tsx
import { useRive } from "@rive-app/react-canvas";

function AnimatedLogo() {
  const { RiveComponent } = useRive({
    src: "/animations/logo.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });
  
  return <RiveComponent />;
}
```

### 4.6 Animation Library Decision Matrix

| Use Case | Recommended Library |
|----------|---------------------|
| React portfolio, general animations | **Motion (Framer Motion)** |
| Complex scroll sequences | **GSAP + ScrollTrigger** |
| Physics-based micro-interactions | **React Spring** |
| Cinematic 3D animations | **Theatre.js** |
| Interactive icons/illustrations | **Rive** |
| Award-winning creative site | **GSAP** |
| Quick implementation | **Motion** |

---

## 5. WebGL & 3D Tools

3D elements are now expected in premium portfolios. The ecosystem centers around Three.js[^14].

### 5.1 Three.js Ecosystem Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    THREE.JS ECOSYSTEM                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                    REACT THREE FIBER                       │  │
│  │              Declarative Three.js for React                │  │
│  └───────────────────────────────────────────────────────────┘  │
│                              │                                   │
│           ┌──────────────────┼──────────────────┐               │
│           ▼                  ▼                  ▼               │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐         │
│  │    Drei     │    │   Post-     │    │   Physics   │         │
│  │  (Helpers)  │    │ processing  │    │  (Rapier)   │         │
│  └─────────────┘    └─────────────┘    └─────────────┘         │
│                                                                  │
│  VISUAL TOOLS                                                    │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐         │
│  │   Spline    │    │   gltfjsx   │    │    leva     │         │
│  │  (No-code)  │    │ (GLTF→JSX)  │    │   (GUI)     │         │
│  └─────────────┘    └─────────────┘    └─────────────┘         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 5.2 React Three Fiber (R3F) - ⭐ Essential

> **"A React renderer for Three.js. Build your scene declaratively."**[^15]

| Attribute | Details |
|-----------|---------|
| **Website** | [docs.pmnd.rs/react-three-fiber](https://docs.pmnd.rs/react-three-fiber) |
| **npm** | `@react-three/fiber` |
| **Pairs With** | React 18 (r8) / React 19 (r9) |

**Why R3F for Portfolios:**
- Declarative Three.js with React
- No performance overhead
- Full Three.js feature parity
- Works with React ecosystem (state, hooks)

**Basic Setup:**
```bash
npm install three @types/three @react-three/fiber
```

```tsx
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

function SpinningBox() {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={hovered ? 1.2 : 1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} />
      <SpinningBox position={[-1, 0, 0]} />
    </Canvas>
  );
}
```

### 5.3 Drei - Essential R3F Helpers

> **"A growing collection of useful helpers for React Three Fiber."**[^16]

| Attribute | Details |
|-----------|---------|
| **npm** | `@react-three/drei` |
| **Components** | 100+ helpers and abstractions |

**Essential Drei Components for Portfolios:**

```tsx
import {
  OrbitControls,
  PresentationControls,
  Float,
  Text,
  Text3D,
  Html,
  Environment,
  ContactShadows,
  Sparkles,
  Stars,
  Cloud,
  MeshReflectorMaterial,
  MeshTransmissionMaterial,
  ScrollControls,
  Scroll,
  useScroll,
  useGLTF,
  useTexture,
} from "@react-three/drei";

// Floating element
<Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
  <MyModel />
</Float>

// 3D Text
<Text3D font="/fonts/inter-bold.json" size={0.75}>
  Hello World
  <meshStandardMaterial color="#ffffff" />
</Text3D>

// HTML in 3D space
<Html transform position={[0, 1, 0]}>
  <div className="label">Interactive Label</div>
</Html>

// Environment lighting
<Environment preset="city" />

// Realistic reflective floor
<mesh rotation={[-Math.PI / 2, 0, 0]}>
  <planeGeometry args={[50, 50]} />
  <MeshReflectorMaterial
    blur={[300, 100]}
    resolution={2048}
    mixBlur={1}
    mixStrength={50}
    roughness={1}
    depthScale={1.2}
    minDepthThreshold={0.4}
    maxDepthThreshold={1.4}
    color="#151515"
    metalness={0.5}
  />
</mesh>
```

### 5.4 React Three Postprocessing

```bash
npm install @react-three/postprocessing
```

```tsx
import { EffectComposer, Bloom, Noise, Vignette, DepthOfField } from "@react-three/postprocessing";

<Canvas>
  <Scene />
  <EffectComposer>
    <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} />
    <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} />
    <Noise opacity={0.02} />
    <Vignette eskil={false} offset={0.1} darkness={1.1} />
  </EffectComposer>
</Canvas>
```

### 5.5 Spline - No-Code 3D Design

> **"The all-in-one platform for 3D and design."**[^17]

| Attribute | Details |
|-----------|---------|
| **Website** | [spline.design](https://spline.design) |
| **Pricing** | Free tier + Pro plans |
| **Export** | Web embed, React, iOS, Android |

**Why Spline is Game-Changing:**
- Visual 3D editor (no code required)
- Real-time collaboration
- Built-in interactivity and animations
- Physics and particles
- One-line React integration

```tsx
import Spline from "@splinetool/react-spline";

function Hero3D() {
  return (
    <Spline scene="https://prod.spline.design/xxxxx/scene.splinecode" />
  );
}
```

### 5.6 Notable 3D Portfolio Examples

These portfolios showcase what's possible with Three.js[^18]:

| Portfolio | Technique | Link |
|-----------|-----------|------|
| **Bruno Simon** | 3D car driving through rooms | [bruno-simon.com](https://bruno-simon.com) |
| **Henry Heffernan** | Interactive 3D character | [henryheffernan.com](https://henryheffernan.com) |
| **David HCKH** | Abstract 3D environments | [david-hckh.com](https://david-hckh.com) |
| **Jesse Zhou** | Stylized 3D scenes | [jesse-zhou.com](https://jesse-zhou.com) |
| **Lusion** | WebGL experiments | [lusion.co](https://lusion.co) |

---

## 6. Scroll Effects & Smooth Scrolling

Scroll-driven storytelling is the dominant trend in modern portfolios[^19].

### 6.1 Lenis - ⭐ Modern Smooth Scrolling

> **"Web scrolling as it should be. Under 4kb, preserves native APIs."**[^20]

| Attribute | Details |
|-----------|---------|
| **Website** | [lenis.darkroom.engineering](https://lenis.darkroom.engineering) |
| **npm** | `lenis` |
| **Size** | Under 4kb gzipped |
| **Used By** | Microsoft, Shopify, Metamask, Rockstar Games |

**Why Lenis Replaced Locomotive Scroll:**

| Issue with Old Solutions | Lenis Solution |
|-------------------------|----------------|
| CSS transforms break native APIs | Runs in main thread |
| Large bundle (12-24kb) | Under 4kb |
| No native scrollbar | Preserves native scrollbar |
| Breaks page search | Page search works |
| Breaks CSS sticky | `position: sticky` works |
| Breaks Intersection Observer | Full API support |

**Implementation:**

```tsx
// React implementation with useEffect
import Lenis from "lenis";
import { useEffect } from "react";

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
}
```

**Lenis + GSAP Integration:**

```javascript
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
```

### 6.2 GSAP ScrollTrigger

**Advanced Scroll Patterns:**

```javascript
// 1. Horizontal scroll section
gsap.to(".horizontal-section", {
  x: () => -(document.querySelector(".horizontal-section").scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-wrapper",
    start: "top top",
    end: () => "+=" + document.querySelector(".horizontal-section").scrollWidth,
    pin: true,
    scrub: 1,
  },
});

// 2. Parallax effect
gsap.to(".parallax-bg", {
  y: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

// 3. Text reveal on scroll
gsap.from(".reveal-text", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".reveal-text",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});
```

### 6.3 Motion useScroll

```tsx
import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxHero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div style={{ y, opacity }}>
      <h1>Welcome</h1>
    </motion.div>
  );
}
```

### 6.4 Scroll Effect Comparison

| Tool | Best For | Bundle Size |
|------|----------|-------------|
| **Lenis** | Smooth scrolling foundation | ~4kb |
| **GSAP ScrollTrigger** | Complex scroll animations | ~10kb |
| **Motion useScroll** | React scroll values | Included |
| **Locomotive Scroll** | Legacy projects | ~12kb |
| **ScrollMagic** | Legacy projects | ~15kb |

---

## 7. Design Systems

Creating a consistent visual system is crucial for professional portfolios.

### 7.1 Design Token Tools

| Tool | Purpose | Link |
|------|---------|------|
| **Style Dictionary** | Build system for design tokens | [amzn.github.io/style-dictionary](https://amzn.github.io/style-dictionary) |
| **Tokens Studio** | Figma plugin for design tokens | [tokens.studio](https://tokens.studio) |
| **Theo** | Design token transformer | [@salesforce-ux/theo](https://github.com/salesforce-ux/theo) |

### 7.2 Tailwind CSS Custom Theme

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
        accent: '#ff6b6b',
      },
      fontFamily: {
        display: ['CalSans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
};
```

### 7.3 CSS Variables System

```css
:root {
  /* Colors */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  
  /* Typography */
  --font-sans: 'Inter', sans-serif;
  --font-display: 'CalSans', sans-serif;
  
  /* Spacing */
  --section-padding: clamp(4rem, 10vw, 8rem);
  
  /* Animations */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-medium: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}
```

---

## 8. Performance Optimization

Performance is critical for portfolios—slow sites lose visitors and hurt rankings.

### 8.1 Image Optimization

| Tool | Purpose | Link |
|------|---------|------|
| **Next.js Image** | Automatic optimization | Built-in |
| **Sharp** | High-performance image processing | [sharp.pixelplumbing.com](https://sharp.pixelplumbing.com) |
| **Cloudinary** | CDN + transformations | [cloudinary.com](https://cloudinary.com) |
| **Imgix** | Real-time image processing | [imgix.com](https://imgix.com) |
| **Squoosh** | Manual optimization | [squoosh.app](https://squoosh.app) |

**Next.js Image Best Practices:**

```tsx
import Image from "next/image";

// Optimized hero image
<Image
  src="/hero.jpg"
  alt="Portfolio hero"
  width={1920}
  height={1080}
  priority // Load immediately
  placeholder="blur"
  blurDataURL={blurPlaceholder}
/>

// Lazy-loaded project images
<Image
  src={project.image}
  alt={project.title}
  width={800}
  height={600}
  loading="lazy"
/>
```

### 8.2 Bundle Analysis & Code Splitting

```bash
# Install bundle analyzer
npm install @next/bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // config
});

# Run analysis
ANALYZE=true npm run build
```

**Dynamic Imports for Heavy Components:**

```tsx
import dynamic from "next/dynamic";

// Lazy load 3D scene
const Scene3D = dynamic(() => import("@/components/Scene3D"), {
  ssr: false,
  loading: () => <div className="h-screen bg-black" />,
});

// Lazy load animation library
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);
```

### 8.3 Animation Performance Guidelines

**The "Compositor Only" Rule:**

| ✅ Animate (GPU-accelerated) | ❌ Avoid Animating (Layout triggers) |
|------------------------------|-------------------------------------|
| `transform` (translate, scale, rotate) | `width`, `height` |
| `opacity` | `top`, `left`, `right`, `bottom` |
| `filter` (with caution) | `margin`, `padding` |
| | `background-color` |
| | `box-shadow` |

```tsx
// Good: GPU-accelerated
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  style={{ willChange: "transform, opacity" }}
/>

// Bad: Causes layout recalculation
<motion.div
  initial={{ width: 0 }}
  animate={{ width: "100%" }}
/>
```

### 8.4 Core Web Vitals Targets

| Metric | Target | How to Achieve |
|--------|--------|----------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | Optimize hero images, preload fonts |
| **FID** (First Input Delay) | < 100ms | Minimize JS, defer non-critical |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Reserve space for images, fonts |
| **INP** (Interaction to Next Paint) | < 200ms | Optimize event handlers |

---

## 9. Visual Effects & Creative Coding

For truly unique portfolios, creative coding tools enable custom visual experiences.

### 9.1 Shader Programming

**The Book of Shaders** - Essential Learning Resource[^21]

| Resource | Link |
|----------|------|
| The Book of Shaders | [thebookofshaders.com](https://thebookofshaders.com) |
| Shadertoy | [shadertoy.com](https://shadertoy.com) |
| GLSL Sandbox | [glslsandbox.com](http://glslsandbox.com) |

**Basic GLSL Shader in React Three Fiber:**

```tsx
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";

const GradientMaterial = shaderMaterial(
  { uTime: 0, uColor1: new THREE.Color("#ff0000"), uColor2: new THREE.Color("#0000ff") },
  // Vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    varying vec2 vUv;
    
    void main() {
      vec3 color = mix(uColor1, uColor2, vUv.y + sin(uTime) * 0.5);
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

extend({ GradientMaterial });

function GradientPlane() {
  const materialRef = useRef();
  useFrame(({ clock }) => {
    materialRef.current.uTime = clock.elapsedTime;
  });
  
  return (
    <mesh>
      <planeGeometry args={[10, 10]} />
      <gradientMaterial ref={materialRef} />
    </mesh>
  );
}
```

### 9.2 p5.js - Creative Coding

| Attribute | Details |
|-----------|---------|
| **Website** | [p5js.org](https://p5js.org) |
| **npm** | `p5` or `react-p5` |
| **Best For** | Generative art, interactive visuals |

```tsx
import Sketch from "react-p5";

function ParticleBackground() {
  const particles = [];

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: p5.random(p5.width),
        y: p5.random(p5.height),
        size: p5.random(2, 5),
        speedX: p5.random(-1, 1),
        speedY: p5.random(-1, 1),
      });
    }
  };

  const draw = (p5) => {
    p5.background(0, 20);
    particles.forEach((particle) => {
      p5.fill(255, 150);
      p5.noStroke();
      p5.ellipse(particle.x, particle.y, particle.size);
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      // Wrap around
      if (particle.x < 0) particle.x = p5.width;
      if (particle.x > p5.width) particle.x = 0;
      if (particle.y < 0) particle.y = p5.height;
      if (particle.y > p5.height) particle.y = 0;
    });
  };

  return <Sketch setup={setup} draw={draw} />;
}
```

### 9.3 tsParticles - Ready-Made Particle Effects

```bash
npm install @tsparticles/react @tsparticles/slim
```

```tsx
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticleHero() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <Particles
      options={{
        particles: {
          number: { value: 80 },
          color: { value: "#ffffff" },
          links: {
            enable: true,
            color: "#ffffff",
            opacity: 0.4,
          },
          move: { enable: true, speed: 1 },
        },
      }}
    />
  );
}
```

### 9.4 Shader Park - JavaScript Shaders

| Attribute | Details |
|-----------|---------|
| **Website** | [shaderpark.com](https://shaderpark.com) |
| **Approach** | Write shaders in JavaScript |

```javascript
// Shader Park example
import { sculpture } from "shader-park-core";

const myShader = `
  let s = sphere(0.5);
  s = displace(s, sin(time + getSpace().x * 10) * 0.1);
  color(vec3(0.2, 0.4, 1.0));
  return s;
`;
```

---

## 10. Inspiration Sources

### 10.1 Portfolio Galleries

| Source | Focus | Link |
|--------|-------|------|
| **Awwwards** | Award-winning portfolios | [awwwards.com/websites/portfolio](https://www.awwwards.com/websites/portfolio/) |
| **Dribbble** | Design inspiration | [dribbble.com](https://dribbble.com) |
| **Behance** | Creative portfolios | [behance.net](https://behance.net) |
| **One Page Love** | Single-page sites | [onepagelove.com](https://onepagelove.com) |
| **Land-book** | Landing page designs | [land-book.com](https://land-book.com) |
| **Three.js Showcase** | 3D portfolios | [threejs.org](https://threejs.org) (homepage) |

### 10.2 Notable Developer Portfolios

| Portfolio | Standout Feature | Tech Stack |
|-----------|-----------------|------------|
| **Brittany Chiang** | Clean, minimal, influential | Next.js |
| **Bruno Simon** | 3D car experience | Three.js |
| **Lynn Fisher** | Yearly redesigns | Custom |
| **Josh Comeau** | Interactive tutorials | Next.js, MDX |
| **Lee Robinson** | Minimal, content-focused | Next.js |
| **Cassie Evans** | SVG animations | GSAP |

### 10.3 Creative Agency Sites

| Agency | Known For | Link |
|--------|-----------|------|
| **Lusion** | WebGL experiments | [lusion.co](https://lusion.co) |
| **Active Theory** | Immersive experiences | [activetheory.net](https://activetheory.net) |
| **Locomotive** | Scroll animations | [locomotive.ca](https://locomotive.ca) |
| **Resn** | Creative technology | [resn.co.nz](https://resn.co.nz) |
| **Darkroom** | Lenis creators | [darkroom.engineering](https://darkroom.engineering) |

---

## 11. Recommended Technology Stack

### 11.1 The "Best Portfolio Ever" Stack

```
┌─────────────────────────────────────────────────────────────────┐
│                    RECOMMENDED STACK 2024-2026                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  FRAMEWORK           │ Next.js 14+ (App Router)                 │
│                      │ or Astro (for static sites)              │
│                                                                  │
│  STYLING             │ Tailwind CSS + CSS Variables             │
│                                                                  │
│  UI COMPONENTS       │ shadcn/ui (foundation)                   │
│                      │ + Aceternity UI / Magic UI (effects)     │
│                                                                  │
│  ANIMATION           │ Motion (Framer Motion) - primary         │
│                      │ + GSAP ScrollTrigger - scroll effects    │
│                      │ + Lenis - smooth scrolling               │
│                                                                  │
│  3D                  │ React Three Fiber + Drei                 │
│                      │ OR Spline (no-code)                      │
│                                                                  │
│  DEPLOYMENT          │ Vercel (optimal for Next.js)             │
│                                                                  │
│  AI TOOLS            │ v0.dev (prototyping)                     │
│                      │ MCP Servers (development)                │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 11.2 Installation Commands

```bash
# 1. Create Next.js project
npx create-next-app@latest my-portfolio --typescript --tailwind --eslint --app

# 2. Install shadcn/ui
npx shadcn@latest init
npx shadcn@latest add button card dialog sheet tabs

# 3. Install Animation Libraries
npm install framer-motion gsap lenis

# 4. Install 3D Stack
npm install three @types/three @react-three/fiber @react-three/drei @react-three/postprocessing

# 5. Optional: Magic UI components
# Copy from magicui.design

# 6. Optional: Aceternity UI components
# Copy from ui.aceternity.com
```

### 11.3 Project Structure

```
my-portfolio/
├── app/
│   ├── (routes)/
│   │   ├── page.tsx           # Home
│   │   ├── projects/
│   │   │   └── [slug]/page.tsx
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── sections/              # Page sections
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── 3d/                    # Three.js components
│   │   ├── Scene.tsx
│   │   └── HeroModel.tsx
│   └── effects/               # Animation components
│       ├── TextReveal.tsx
│       └── ParallaxSection.tsx
├── lib/
│   ├── utils.ts
│   └── animations.ts
├── hooks/
│   ├── useLenis.ts
│   └── useScrollProgress.ts
└── public/
    ├── models/
    ├── fonts/
    └── images/
```

### 11.4 Key Configuration Files

**next.config.js:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
```

**tailwind.config.ts:**
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-calsans)"],
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

---

## Confidence Assessment

### High Confidence
- **Library comparisons** (npm downloads, GitHub stars) - Verified from official sources
- **Tool capabilities** - Confirmed through official documentation
- **Performance best practices** - Industry-standard guidelines
- **Lenis as modern smooth scroll standard** - Replacing Locomotive Scroll
- **Motion/Framer Motion dominance** - 30M+ monthly downloads

### Medium Confidence
- **Specific download numbers** - Fluctuate over time
- **Pricing details** - May change
- **Trend longevity** - Design trends evolve

### Assumptions Made
- **"Best" recommendations** - Subjective based on industry trends
- **Stack recommendations** - Assumes React/Next.js preference
- **Performance claims** - Assume proper implementation

---

## Footnotes

[^1]: Model Context Protocol official documentation - [modelcontextprotocol.io](https://modelcontextprotocol.io)

[^2]: Awesome MCP Servers repository - [github.com/punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)

[^3]: v0.dev homepage - "Generate working applications in minutes with AI"

[^4]: v0.dev - [v0.dev](https://v0.dev)

[^5]: shadcn/ui GitHub repository - 110k+ stars, industry-standard component approach

[^6]: shadcn/ui official documentation - [ui.shadcn.com](https://ui.shadcn.com)

[^7]: Aceternity UI homepage - "Trusted by 120,000+ founders, developers and creators"

[^8]: Magic UI homepage - "150+ free and open-source animated components"

[^9]: Animation library npm download statistics and industry usage

[^10]: Motion/Framer Motion - [motion.dev](https://motion.dev) - "30 million monthly downloads"

[^11]: GSAP official website - [gsap.com](https://gsap.com) - "Used on over 11 million sites"

[^12]: Theatre.js - [theatrejs.com](https://www.theatrejs.com)

[^13]: Rive - [rive.app](https://rive.app) - "Products built with Rive reach over 2 billion users"

[^14]: Three.js official website - [threejs.org](https://threejs.org)

[^15]: React Three Fiber documentation - [docs.pmnd.rs/react-three-fiber](https://docs.pmnd.rs/react-three-fiber)

[^16]: Drei GitHub repository - [github.com/pmndrs/drei](https://github.com/pmndrs/drei)

[^17]: Spline - [spline.design](https://spline.design)

[^18]: Three.js homepage showcase featuring portfolio examples

[^19]: Lenis homepage - [lenis.darkroom.engineering](https://lenis.darkroom.engineering)

[^20]: Lenis documentation - "Under 4kb, preserves native APIs"

[^21]: The Book of Shaders - [thebookofshaders.com](https://thebookofshaders.com)

---

## Quick Reference Cheat Sheet

### Must-Have Tools
| Category | Tool | Why |
|----------|------|-----|
| **Framework** | Next.js 14+ | Best DX, Vercel integration |
| **Components** | shadcn/ui | Full ownership, AI-ready |
| **Animation Effects** | Aceternity UI / Magic UI | Stunning visuals |
| **Animation Library** | Motion (Framer Motion) | React-first, 30M downloads |
| **Scroll Effects** | GSAP ScrollTrigger + Lenis | Industry standard |
| **3D** | React Three Fiber + Drei | Declarative Three.js |
| **AI Prototyping** | v0.dev | Rapid component generation |

### Portfolio Feature Checklist
- [ ] Smooth scrolling (Lenis)
- [ ] Scroll-triggered animations
- [ ] Hero section with 3D or animated elements
- [ ] Micro-interactions on all interactive elements
- [ ] Page transitions
- [ ] Dark mode support
- [ ] Responsive design
- [ ] Performance optimized (90+ Lighthouse)
- [ ] Accessible (WCAG 2.1 AA)

---

*Report generated for building world-class portfolio websites in 2024-2026*
