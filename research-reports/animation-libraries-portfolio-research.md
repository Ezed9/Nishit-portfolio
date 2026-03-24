# Animation Libraries & Modern Portfolio Trends Research Report (2024-2026)

## Executive Summary

This comprehensive research analyzes the best animation libraries and techniques for creating impressive, modern portfolio websites in 2024-2026. **Framer Motion** emerges as the top recommendation for React portfolios due to its 30+ million monthly npm downloads, intuitive declarative API, and excellent developer experience[^1]. **GSAP** remains the industry standard for complex scroll-driven animations and timeline-based sequences, trusted by award-winning sites on Awwwards[^2]. **Lenis** has become the modern standard for smooth scrolling, replacing older solutions at under 4kb[^3]. For 3D elements, **React Three Fiber** provides an excellent React-friendly wrapper around Three.js[^4].

**Recommended Stack for a Modern Portfolio:**
```
Framer Motion + Lenis + (optional) React Three Fiber
```

---

## Part 1: Animation Library Deep Comparison

### Overview Matrix

| Library | Weekly Downloads | Best For | Bundle Size | Learning Curve |
|---------|------------------|----------|-------------|----------------|
| **Framer Motion** | ~2.2M+ | React portfolios, gestures, layout | ~16kb gzipped | Low |
| **GSAP** | ~400k | Complex timelines, scroll, SVG | ~23kb gzipped | Medium |
| **React Spring** | ~750k | Physics-based, natural movement | ~22kb gzipped | Medium |
| **Lenis** | ~100k | Smooth scrolling | ~4kb gzipped | Low |
| **Three.js/R3F** | ~1M | 3D graphics, WebGL | ~150kb+ | High |

---

### 1. Framer Motion (🏆 Top Recommendation for React)

**What It Is:** A production-ready animation library for React, Vue, and vanilla JavaScript with a declarative, component-based API.

**Why It's #1 for Developer Portfolios:**

Framer Motion has become the most popular animation library with over **30 million monthly downloads**, making it the fastest-growing animation library globally[^1]. It's particularly suited for portfolios because:

1. **Declarative React-first API** - Animations are defined as props, making code highly readable
2. **Layout animations** - Industry-leading automatic layout transitions with the `layout` prop
3. **Gesture support** - Built-in `whileHover`, `whileTap`, `whileDrag`, `whileFocus`, and `whileInView`
4. **Exit animations** - `AnimatePresence` handles mount/unmount animations elegantly
5. **Scroll animations** - Hardware-accelerated scroll-triggered animations with `useScroll` hook

**Key Features:**

```jsx
// Simple hover/tap micro-interaction
<motion.button
  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
  whileTap={{ scale: 0.95 }}
>
  View Project
</motion.button>

// Scroll-triggered reveal animation
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
  <ProjectCard />
</motion.div>

// Staggered children animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

<motion.ul variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.li key={item.id} variants={itemVariants}>
      {item.name}
    </motion.li>
  ))}
</motion.ul>
```

**Performance Tips from Official Docs:**[^5]
- Add `willChange: "transform"` when animating transforms
- Use `layout` prop sparingly—only on elements that need layout animation
- Prefer `transform` and `opacity` over layout-affecting properties
- Use `AnimatePresence` with `mode="wait"` for sequential page transitions

**When to Use:**
- ✅ React/Next.js portfolios
- ✅ Micro-interactions (hover states, button animations)
- ✅ Page transitions
- ✅ Scroll-triggered reveals
- ✅ Gesture-based interactions
- ✅ Layout animations (grid reordering, list shuffling)

---

### 2. GSAP (GreenSock Animation Platform)

**What It Is:** The industry-standard JavaScript animation library, framework-agnostic, with powerful plugins for scroll, SVG, and more.

**Why GSAP Matters:**

GSAP is used on over **11 million websites**, including a majority of Awwwards winners[^2]. It's the go-to choice for creative agencies and award-winning portfolios.

**Key Strengths:**

1. **ScrollTrigger Plugin** - The most powerful scroll animation system available[^6]
2. **Timeline Sequences** - Precise control over complex animation choreography
3. **Cross-browser Consistency** - Solves browser inconsistencies automatically
4. **Performance** - Highly optimized with debounced scroll events
5. **SVG Animation** - Superior SVG morphing, drawing, and path animation

**ScrollTrigger Example:**

```javascript
gsap.registerPlugin(ScrollTrigger);

// Pin section while scrolling with scrubbed animation
gsap.to('.hero-content', {
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: '+=500',
    pin: true,
    scrub: 1, // Smooth 1-second catchup to scroll position
  },
  y: -100,
  opacity: 0,
});

// Staggered reveal animation on scroll
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

// Complex timeline with scroll scrubbing
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.container',
    pin: true,
    start: 'top top',
    end: '+=1000',
    scrub: 1,
    snap: {
      snapTo: 'labels',
      duration: { min: 0.2, max: 3 },
      ease: 'power1.inOut',
    },
  },
});

tl.addLabel('start')
  .from('.box p', { scale: 0.3, rotation: 45, autoAlpha: 0 })
  .addLabel('color')
  .from('.box', { backgroundColor: '#28a92b' })
  .addLabel('spin')
  .to('.box', { rotation: 360 })
  .addLabel('end');
```

**GSAP Best Practices:**[^7]
- Use relative values (`+=`, `-=`) for responsive animations
- Leverage timelines for sequenced animations instead of multiple tweens
- Set smart defaults on parent timelines
- Use `stagger` for animating multiple elements efficiently
- Enable visual markers during development: `markers: true`

**When to Use:**
- ✅ Complex scroll-driven storytelling
- ✅ Timeline sequences with precise orchestration
- ✅ SVG animations (path drawing, morphing)
- ✅ Award-winning creative portfolios
- ✅ Framework-agnostic projects
- ✅ When you need scrubbed animations tied to scroll position

---

### 3. React Spring

**What It Is:** A spring-physics-based animation library for React that creates natural, organic movement.

**Why React Spring:**

React Spring uses real spring physics for animations, creating more natural, organic movement that CSS timing functions cannot replicate[^8]. 

**Key Strengths:**

1. **Natural-feeling micro-interactions** - Springs create realistic "bounce" effects
2. **Complex value interpolation** - Animate any value with interpolation
3. **Multiple render targets** - Works with web, React Native, Three.js, Konva, and Zdog
4. **Imperative API** - Run animations without React re-renders for maximum performance
5. **Physics-based** - Configurable tension/friction for realistic motion

**The Famous "Boop" Effect:**[^9]

```jsx
import { animated, useSpring } from '@react-spring/web';
import { useState, useEffect } from 'react';

const Boop = ({ rotation = 20, scale = 1.1, timing = 150, children }) => {
  const [isBooped, setIsBooped] = useState(false);
  
  const style = useSpring({
    transform: isBooped
      ? `rotate(${rotation}deg) scale(${scale})`
      : 'rotate(0deg) scale(1)',
    config: { tension: 300, friction: 10 },
  });

  useEffect(() => {
    if (isBooped) {
      const timeout = setTimeout(() => setIsBooped(false), timing);
      return () => clearTimeout(timeout);
    }
  }, [isBooped, timing]);

  return (
    <animated.span onMouseEnter={() => setIsBooped(true)} style={style}>
      {children}
    </animated.span>
  );
};

// Usage
<Boop rotation={15} scale={1.2}>
  <span>👋</span>
</Boop>
```

**When to Use:**
- ✅ Playful, bouncy micro-interactions
- ✅ When animations need to feel "alive"
- ✅ Complex interpolated animations
- ✅ Cross-platform (web + React Native)
- ✅ Three.js integration via `@react-spring/three`

---

### 4. Lenis (🏆 Smooth Scrolling Standard)

**What It Is:** A lightweight smooth scroll library that has become the modern standard, replacing Locomotive Scroll.

**Why Lenis Over Alternatives:**[^3]

Lenis was built to address limitations of older smooth scroll solutions:

| Issue | Old Solutions | Lenis |
|-------|---------------|-------|
| Performance | CSS transforms (costly) | Native scroll with smooth interpolation |
| Accessibility | No page search, custom scrollbar | Native scrollbar, page search works |
| Bundle Size | 12-24kb gzipped | **< 4kb gzipped** |
| Native APIs | Breaks Intersection Observer, sticky | **Preserves all native APIs** |

**Notable Sites Using Lenis:**
- Grand Theft Auto VI (rockstargames.com/VI)
- Microsoft Design
- Shopify Supply
- MetaMask
- Getty - Sculpting Harmony

**Basic Setup:**

```javascript
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Initialize with auto RAF
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for scroll events
lenis.on('scroll', (e) => {
  console.log(e.scroll, e.progress);
});
```

**Integration with GSAP ScrollTrigger:**

```javascript
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

// Sync Lenis with ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
```

**React Integration:**

```jsx
import { ReactLenis } from 'lenis/react';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
      <main>
        {/* Your content */}
      </main>
    </ReactLenis>
  );
}
```

---

### 5. Three.js / React Three Fiber (3D)

**What It Is:** Three.js is the premier WebGL library; React Three Fiber (R3F) is its React renderer.

**Why Add 3D to Your Portfolio:**

Three.js powers some of the most impressive portfolio showcases on the web[^4]. Notable portfolios:
- Bruno Simon (3D car driving through rooms)
- Jesse Zhou
- Henry Heffernan
- David HCKH

**React Three Fiber Benefits:**[^10]

1. **No performance overhead** - Components render outside React
2. **Declarative** - Three.js objects as JSX components
3. **Auto-updates** - New Three.js features available instantly
4. **Rich ecosystem** - @react-three/drei, @react-three/postprocessing, etc.

**Simple R3F Example:**

```jsx
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

function Box(props) {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
  });
  
  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}
```

**Key R3F Ecosystem Packages:**
- `@react-three/drei` - Useful helpers (OrbitControls, Text, Environment, etc.)
- `@react-three/postprocessing` - Post-processing effects
- `@react-three/rapier` - 3D physics
- `framer-motion-3d` - Framer Motion for R3F

---

### 6. react-scroll-parallax

**What It Is:** React hooks and components for creating parallax scroll effects.[^11]

**Key Features:**
- Easy-to-use `<Parallax>` component and `useParallax` hook
- Optimized to reduce scroll jank
- SSR/SSG compatible
- Works with custom scroll containers

**Example:**

```jsx
import { Parallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

// Wrap your app
function App() {
  return (
    <ParallaxProvider>
      <Content />
    </ParallaxProvider>
  );
}

// Simple parallax element
function ParallaxImage() {
  return (
    <Parallax speed={-10}>
      <img src="/hero-bg.jpg" alt="Background" />
    </Parallax>
  );
}

// Parallax banner with layers
function HeroBanner() {
  return (
    <ParallaxBanner
      layers={[
        { image: '/bg-far.jpg', speed: -20 },
        { image: '/bg-mid.png', speed: -10 },
        { image: '/bg-front.png', speed: -5 },
      ]}
      style={{ height: '100vh' }}
    />
  );
}
```

---

## Part 2: Modern Portfolio Design Trends (2024-2026)

### Trend 1: Scroll-Driven Storytelling

The dominant trend is using scroll as a narrative device:

- **Scrubbed animations** - Animation progress tied directly to scroll position
- **Pinned sections** - Content fixed in place while animations play out
- **Parallax layers** - Multi-depth effects with different scroll speeds
- **Horizontal scroll sections** - Breaking vertical monotony

**Tools:** GSAP ScrollTrigger, Framer Motion's `useScroll`, Lenis

```jsx
// Framer Motion scroll-linked animation
import { motion, useScroll, useTransform } from 'framer-motion';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  
  return (
    <motion.div style={{ scale, opacity }}>
      Scroll to transform me
    </motion.div>
  );
}
```

---

### Trend 2: Micro-Interactions

Small, delightful animations on user interaction create a polished feel:

- **Button hover states** - Scale, color shift, subtle rotation
- **Link underlines** - Animated reveal/hide from left or center
- **Card hovers** - Elevation changes, border highlights, image zoom
- **Form inputs** - Floating labels, validation feedback
- **Icon animations** - On-hover transformations

**Best Practice:** Use spring physics for micro-interactions to feel natural

```jsx
// Animated link underline with Framer Motion
const AnimatedLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="relative"
    whileHover="hover"
  >
    {children}
    <motion.span
      className="absolute bottom-0 left-0 h-[2px] bg-current"
      variants={{
        initial: { width: 0 },
        hover: { width: '100%' },
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    />
  </motion.a>
);
```

---

### Trend 3: 3D Hero Sections

Common 3D implementations:
- **Interactive scenes** - Respond to mouse position/scroll
- **Product showcases** - Rotating 3D models
- **Abstract backgrounds** - Particle systems, shader effects
- **Floating elements** - 3D cards with depth

---

### Trend 4: Page Transitions

Seamless transitions between pages create a "native app" feel:

```jsx
// Next.js + Framer Motion page transitions
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={router.asPath}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Component {...pageProps} />
      </motion.main>
    </AnimatePresence>
  );
}
```

---

### Trend 5: Text Animations

- **Split text reveals** - Characters/words animating in sequence
- **Morphing typography** - Text transformations
- **Gradient text** - Animated color gradients

```jsx
// Staggered text reveal
const text = "Hello World";
const words = text.split(" ");

<motion.h1
  initial="hidden"
  animate="visible"
  variants={{
    visible: { transition: { staggerChildren: 0.1 } },
  }}
>
  {words.map((word, i) => (
    <motion.span
      key={i}
      className="inline-block mr-2"
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
    >
      {word}
    </motion.span>
  ))}
</motion.h1>
```

---

### Trend 6: Custom Cursors

Magnetic cursors and custom cursor effects:

```jsx
// Simple custom cursor with Framer Motion
import { motion, useMotionValue, useSpring } from 'framer-motion';

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);
  
  return (
    <motion.div
      className="fixed w-8 h-8 rounded-full bg-blue-500 pointer-events-none z-50 mix-blend-difference"
      style={{ x: cursorXSpring, y: cursorYSpring }}
    />
  );
}
```

---

## Part 3: Performance Best Practices for 60fps

### The "Compositor Only" Rule

For butter-smooth 60fps animations, only animate properties handled by the GPU compositor[^12]:

| ✅ Animate These (GPU) | ❌ Avoid Animating (CPU) |
|------------------------|--------------------------|
| `transform` (translate, scale, rotate) | `width`, `height` |
| `opacity` | `top`, `left`, `right`, `bottom` |
| `filter` (with caution) | `margin`, `padding` |
| | `background-color` (triggers paint) |
| | `box-shadow` (expensive) |
| | `border-radius` |

### Layer Promotion

```css
/* Hint at upcoming animations */
.animated-element {
  will-change: transform;
}

/* Remove after animation if not needed */
.animated-element.done {
  will-change: auto;
}
```

**Warning:** Don't overuse `will-change`—it consumes GPU memory.

### Framer Motion Performance

```jsx
<motion.div
  style={{ willChange: 'transform' }} // Promote to GPU layer
  animate={{ x: 100 }}
  transition={{ type: 'spring', stiffness: 300 }}
/>
```

### GSAP Performance

```javascript
// GSAP automatically optimizes, but you can help:
gsap.defaults({
  ease: 'power2.out',
  force3D: true, // Force GPU acceleration
});

// Use transforms instead of layout properties
gsap.to('.box', {
  x: 100,      // ✅ Good
  y: 50,       // ✅ Good
  // left: 100 // ❌ Avoid
});
```

### Measuring Performance

1. **Chrome DevTools Performance panel** - Record runtime performance
2. **Rendering tab** - Enable FPS meter, Paint flashing
3. **Look for:** Layout thrashing, excessive paints, dropped frames
4. **Target:** Consistent 60fps, < 16ms frame time

---

## Part 4: Recommended Stacks by Use Case

### Modern React/Next.js Portfolio (Most Common)

```
Primary Animation: Framer Motion
Smooth Scrolling: Lenis
Complex Scroll: GSAP ScrollTrigger (if needed)
3D Elements: React Three Fiber (optional)
```

**Why:**
- Framer Motion handles 90% of portfolio animation needs
- Lenis provides butter-smooth scrolling at < 4kb
- Add GSAP only for advanced timeline/scroll features
- R3F for impressive 3D hero sections

### Award-Winning Creative Portfolio

```
Primary Animation: GSAP + ScrollTrigger
Smooth Scrolling: GSAP ScrollSmoother or Lenis
3D Elements: Three.js / WebGL
```

**Why:** GSAP's timeline control and ScrollTrigger are unmatched for complex, precisely choreographed animations.

### Minimalist Portfolio with Subtle Polish

```
Primary Animation: Framer Motion
Micro-interactions: React Spring (for physics-based feel)
```

**Why:** Framer Motion's simplicity + React Spring's physics for that extra "alive" feeling.

---

## Part 5: Implementation Examples

### Complete Portfolio Animation Setup

```jsx
// app/providers.tsx
'use client';

import { ReactLenis } from 'lenis/react';
import { AnimatePresence } from 'framer-motion';

export function Providers({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
    </ReactLenis>
  );
}

// components/FadeInSection.tsx
import { motion } from 'framer-motion';

export function FadeInSection({ children, delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}

// components/AnimatedButton.tsx
import { motion } from 'framer-motion';

export function AnimatedButton({ children, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
```

---

## Confidence Assessment

**High Confidence:**
- Library feature sets and APIs (verified from official documentation)
- Performance best practices (compositor-only properties)
- Lenis as modern smooth scroll standard
- Framer Motion's popularity and download numbers
- GSAP's industry reputation

**Medium Confidence:**
- Exact npm download numbers (fluctuate over time)
- Trend longevity (design trends evolve)
- Specific portfolio examples (sites change/go offline)

**Lower Confidence:**
- "Best" recommendations are subjective and depend on specific project needs
- Performance comparisons assume proper implementation

---

## Footnotes

[^1]: Framer Motion official website (https://www.framer.com/motion/) - States "30 million+ monthly downloads, fastest-growing animation library"

[^2]: GSAP official website (https://gsap.com/) - "A wildly robust JavaScript animation library built for professionals"

[^3]: Lenis by Darkroom Engineering (https://lenis.darkroom.engineering/) - Under 4kb, preserves native APIs, replaces Locomotive Scroll

[^4]: Three.js official website (https://threejs.org/) - Showcases featuring impressive portfolios including Bruno Simon, Jesse Zhou, etc.

[^5]: Framer Motion official documentation - Performance section recommending willChange and compositor properties

[^6]: GSAP ScrollTrigger documentation (https://greensock.com/docs/v3/Plugins/ScrollTrigger) - Pin, scrub, snap, and scroll-driven animation features

[^7]: CSS-Tricks - "Tips for Writing Animation Code Efficiently"

[^8]: React Spring official website (https://www.react-spring.dev/) - Physics-based animation library with imperative API

[^9]: Josh Comeau's "Boop" tutorial (https://www.joshwcomeau.com/react/boop/) - Spring physics for micro-interactions

[^10]: React Three Fiber documentation (https://docs.pmnd.rs/react-three-fiber/) - No overhead, declarative Three.js in React

[^11]: react-scroll-parallax GitHub (https://github.com/jscottsmith/react-scroll-parallax) - React hooks and components for parallax effects

[^12]: web.dev Animation Performance Guide - Compositor-only properties for 60fps animations

---

## Quick Reference: Decision Matrix

| Scenario | Primary Library | Secondary | Notes |
|----------|-----------------|-----------|-------|
| React/Next.js portfolio | Framer Motion | Lenis | Most common setup |
| Complex scroll animations | GSAP + ScrollTrigger | Lenis | For pinning, scrubbing, timelines |
| Natural micro-interactions | React Spring | Framer Motion | Physics-based "boop" effects |
| 3D elements | React Three Fiber | Framer Motion | Hero sections, showcases |
| Maximum performance | Framer Motion | CSS animations | Keep it simple |
| Award-winning creative | GSAP | Three.js | Full creative control |
| Simple parallax | react-scroll-parallax | - | Easy setup, good performance |

---

## Final Recommendation

**For a Modern Developer Portfolio (2024-2026):**

Start with **Framer Motion + Lenis** for 90% of use cases. This combination gives you:
- Smooth scrolling with native API preservation
- Declarative animations that integrate perfectly with React
- Excellent performance out of the box
- Gesture support (hover, tap, drag)
- Page transitions with AnimatePresence

Add **GSAP ScrollTrigger** only if you need:
- Complex scroll-driven sequences with pinning
- Precise timeline control
- Scrubbed animations tied to scroll position

Consider **React Three Fiber** for:
- Standout 3D hero sections
- Interactive 3D elements
- When you want to really impress

**Remember:** Subtle, well-executed animations always beat flashy but janky ones. Prioritize performance and purposeful animation over complexity.

---

*Research completed: January 2025*
