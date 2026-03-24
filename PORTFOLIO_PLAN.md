# Ultimate Portfolio Website Plan - Nishit's AI/ML Portfolio

## Vision: "The AI Workshop"
Build one of the most unique developer portfolios on the internet — featuring **4 AI agent characters** with distinct personalities that actively "run" the portfolio. Each agent represents a real AI/ML skill, creating a living demonstration of your expertise.

**Core Concept**: Your portfolio isn't just a static site — it's an AI operations center where agents collaborate to present your work.

---

## The 4 Agents

| Agent | Represents | Role in Portfolio | Visual Style | Accent Color |
|-------|------------|-------------------|--------------|--------------|
| **FORGE** | Model Training | Hero intro, "built with" badges, foundations | Industrial, sparks, furnace glow | 🟠 Orange (#ff6b35) |
| **SYNTH** | Content Generation | Project descriptions, creative content | Flowing, artistic, creative | 🟣 Purple (#a855f7) |
| **CURATOR** | Knowledge/RAG | Search, organization, project filtering | Precise, organized, librarian | 🔵 Blue (#3b82f6) |
| **LINK** | Integration/APIs | Live GitHub stats, connected services | Networked, dynamic, connected | 🟢 Green (#22c55e) |

**The Harmony**: FORGE builds → SYNTH creates → CURATOR organizes → LINK connects to the world

---

## Visual Design

### Style
- **3D Characters**: Low-poly stylized (Monument Valley aesthetic)
- **Background**: Dark with glowing agent accents
- **Environment**: AI Workshop / Operations Center feel

### Color Palette
```css
:root {
  /* Base */
  --bg-primary: #0a0a0f;        /* Deep space black */
  --bg-secondary: #111118;      /* Card backgrounds */
  --bg-tertiary: #1a1a24;       /* Elevated surfaces */
  
  /* Agent Colors */
  --forge-orange: #ff6b35;      /* FORGE - warmth, creation */
  --synth-purple: #a855f7;      /* SYNTH - creativity */
  --curator-blue: #3b82f6;      /* CURATOR - knowledge */
  --link-green: #22c55e;        /* LINK - connection */
  
  /* Text */
  --text-primary: #f4f4f5;      /* Main text */
  --text-secondary: #a1a1aa;    /* Subdued */
  --text-muted: #52525b;        /* Metadata */
  
  /* Glows */
  --glow-forge: 0 0 20px rgba(255, 107, 53, 0.5);
  --glow-synth: 0 0 20px rgba(168, 85, 247, 0.5);
  --glow-curator: 0 0 20px rgba(59, 130, 246, 0.5);
  --glow-link: 0 0 20px rgba(34, 197, 94, 0.5);
}
```

### Typography
| Use | Font | Why |
|-----|------|-----|
| Headings | **Space Grotesk** | Futuristic, geometric |
| Body | **Inter** | Clean, readable |
| Code/Agent speech | **JetBrains Mono** | Monospace, techy |

---

## Tech Stack

| Layer | Technology | Why |
|-------|------------|-----|
| Framework | **Next.js 14+** (App Router) | RSC, SEO, industry standard |
| Styling | **Tailwind CSS** | Zero-runtime, dark mode, design system |
| 3D Engine | **React Three Fiber + Drei** | Declarative Three.js for agents |
| 3D Physics | **@react-three/rapier** | Agent interactions (optional) |
| Animations | **Framer Motion** | UI micro-interactions, page transitions |
| Scroll Effects | **GSAP + ScrollTrigger** | Complex scroll-driven agent behaviors |
| Smooth Scroll | **Lenis** | Butter-smooth scrolling |
| 3D Post-processing | **@react-three/postprocessing** | Bloom/glow effects on agents |
| Email | **Resend** | Contact form |
| Content | **MDX** | Project writeups |
| Deployment | **Vercel** | Optimal Next.js hosting |

---

## Hero Experience: "The Awakening"

**Duration**: 5-8 seconds (no skip — this IS the experience)

### Sequence:
```
0.0s - Black screen, subtle particle noise
0.5s - Particles begin coalescing in center
1.5s - FORGE emerges first (sparks flying)
2.0s - FORGE: "I'm FORGE. I build foundations."
2.5s - SYNTH materializes (flowing particles)
3.0s - SYNTH: "I'm SYNTH. I create."
3.5s - CURATOR assembles (organized grid)
4.0s - CURATOR: "I'm CURATOR. I organize."
4.5s - LINK connects in (network lines)
5.0s - LINK: "I'm LINK. I connect."
5.5s - All agents take positions
6.0s - Your name/title fades in large
6.5s - "Scroll to explore" indicator
7.0s - Site fully interactive
```

### Technical Implementation:
- Three.js scene with 4 agent meshes
- GSAP timeline for orchestrated sequence
- Framer Motion for text reveals
- Bloom post-processing for glow effects
- Preload all assets during splash

---

## Site Architecture

### Sections
```
┌─────────────────────────────────────────────────────────────┐
│                    HERO: "The Awakening"                    │
│     All 4 agents introduce themselves and take positions     │
│                    Your name + title + CTA                   │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    ABOUT (FORGE's Domain)                   │
│   "FORGE built this section. Here's who I am..."            │
│   Your background, skills, personality                       │
│   Agent floats nearby, occasionally sparks                   │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  PROJECTS (SYNTH + CURATOR)                 │
│   SYNTH: "I wrote these descriptions"                        │
│   CURATOR: "I organized them for you"                        │
│   Filterable project grid with hover effects                 │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  EXPERIENCE (LINK's Domain)                  │
│   "LINK pulled this data from your history"                  │
│   Timeline with live GitHub stats                            │
│   Agent shows connections to each role                       │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    CONTACT (All Agents)                     │
│   All 4 agents visible, ready to help                        │
│   "Send a message, LINK will deliver it"                     │
│   Contact form + social links                                │
└─────────────────────────────────────────────────────────────┘
```

---

## Agent Behaviors

### Ambient Animations (Always Running)
| Agent | Idle Behavior |
|-------|---------------|
| FORGE | Gentle floating, occasional spark particles |
| SYNTH | Flowing motion, color shifts |
| CURATOR | Subtle scanning motion, organized movements |
| LINK | Network pulses, connection line animations |

### Section Interactions
| Trigger | Agent Response |
|---------|----------------|
| Scroll to section | Owning agent "wakes up", glows brighter |
| Hover on project | SYNTH highlights, shows "I wrote this" |
| Filter projects | CURATOR animates, reorganizes grid |
| GitHub stats load | LINK shows data flowing animation |
| Submit contact | All agents celebrate animation |

### Easter Eggs (Optional)
- Click an agent → They say something in character
- Idle for 30s → Agents chat with each other
- Konami code → Secret agent animation

---

## Agent Tasks — Real Work & Functionality

> **Core Principle**: The agents are NOT just mascots — they are **functional AI agents performing real tasks** on the site. Each has specific jobs, shows its work visibly, and collaborates with other agents when needed.

### FORGE 🟠 — The Builder

**Core Job:** Processes raw data → structured output

| Task | What It Actually Does | Visible to User |
|------|----------------------|-----------------|
| **Build Project Cards** | Takes raw project data (JSON/MDX) and "forges" it into formatted cards with tags, tech badges, difficulty rating | Sparks animation while cards render in |
| **Generate Skill Graphs** | Processes skill data into visual charts/bars | Furnace glow as bars fill up |
| **Compile Resume** | Assembles a downloadable resume from site data on demand | "FORGE is compiling..." loading state |
| **Process Form Data** | Validates + structures contact form submissions | Sparks when form is submitted |

**Shows Working:** A mini terminal/log panel shows FORGE's "build steps":
```
> Forging project card...
> parsing metadata...
> attaching tech stack...
> done ✓
```

---

### SYNTH 🟣 — The Creator

**Core Job:** Generates human-readable text & creative content

| Task | What It Actually Does | Visible to User |
|------|----------------------|-----------------|
| **Write Project Descriptions** | Takes bullet points → generates flowing prose (typing animation) | Text appears letter-by-letter as if SYNTH is writing it live |
| **Craft Intro Text** | Dynamically generates "About" section tagline variants | Cycles through different creative intros |
| **Summarize on Demand** | User clicks "TL;DR" → SYNTH summarizes any project into 1-2 lines | Purple glow while "thinking" |
| **Generate Greeting** | Time/context-aware greeting ("Good evening! Nishit's currently...") | Greeting changes based on time of day |

**Shows Working:** A "notepad" UI where text streams in character-by-character with a purple cursor, like SYNTH is literally writing it.

---

### CURATOR 🔵 — The Organizer

**Core Job:** Search, filter, organize, recommend

| Task | What It Actually Does | Visible to User |
|------|----------------------|-----------------|
| **Smart Project Filter** | User selects tags/categories → CURATOR "reorganizes" the grid with sorting animation | Blue scan-line sweeps across the grid, cards rearrange |
| **Search** | User types a query → CURATOR searches across all projects, skills, experience | "CURATOR is scanning..." with a radar-pulse animation |
| **Recommend "Related"** | After viewing a project, CURATOR suggests related ones | "CURATOR found 3 related projects" |
| **Organize by Context** | Detects visitor type (recruiter vs dev) and reorders content priority | Subtle, automatic |

**Shows Working:** A sidebar "index" that CURATOR visually sorts/shuffles — cards flipping and reorganizing like a librarian filing system.

---

### LINK 🟢 — The Connector

**Core Job:** Fetches live external data, handles communication

| Task | What It Actually Does | Visible to User |
|------|----------------------|-----------------|
| **Fetch GitHub Stats** | Pulls real repos, stars, contributions, commit graph via GitHub API | Green data-stream animation flowing in |
| **Live Status** | Shows current availability, latest commit, "last seen" | Pulsing green dot + live data |
| **Deliver Contact Form** | Sends the email/message via API | "LINK is delivering your message..." with network animation |
| **Pull Social Data** | Fetches latest blog post, tweet, LinkedIn activity | Connection lines animating to external icons |

**Shows Working:** A network graph visualization where LINK's connections pulse as data flows between nodes (GitHub, Email, LinkedIn, etc.)

---

## Agent Collaboration Flows

> **The magic moments** — when agents visibly hand off work to each other in multi-step pipelines.

### Flow 1: "Project Showcase" (User clicks a project)
```
User clicks on a project
  → CURATOR: "Found it. Let me pull the details."     [blue scan]
  → FORGE: "I'll compile the tech stack."              [orange sparks]
  → SYNTH: "I'll write you a summary."                 [purple typing]
  → LINK: "Pulling live repo stats from GitHub..."     [green data stream]

  All 4 results assemble into the project detail view
```

### Flow 2: "Contact Form" (User submits a message)
```
User fills out the contact form
  → FORGE: "Validating your message..."                [orange pulse]
  → SYNTH: "Drafting a confirmation response..."       [purple cursor]
  → LINK: "Delivering to Nishit now..."                [green network]
  → CURATOR: "Filed under inquiries. You're #42."      [blue filing]

  Confirmation: "All agents confirm: Message delivered ✓"
```

### Flow 3: "Smart Search" (User types a query)
```
User types "machine learning" in search
  → CURATOR: "Scanning portfolio for matches..."       [blue radar]
  → CURATOR → FORGE: "Found 5 results. FORGE, compile them."
  → FORGE: "Building result cards..."                  [orange sparks]
  → SYNTH: "Adding context to each result..."          [purple text]
  → LINK: "Attaching live GitHub data..."              [green lines]

  Results appear with full context
```

### Flow 4: "First Visit" (New visitor arrives)
```
New visitor arrives
  → FORGE: "Building the workspace..."                 [layout assembles]
  → SYNTH: "Good evening! Welcome to Nishit's lab."    [greeting types out]
  → CURATOR: "I've organized everything for you."      [nav highlights]
  → LINK: "All systems connected. Status: Online."     [green pulse]
```

### Flow 5: "Resume Download" (User requests resume)
```
User clicks "Download Resume"
  → CURATOR: "Gathering all sections..."               [blue collect]
  → FORGE: "Compiling into PDF..."                     [orange build]
  → SYNTH: "Adding the finishing touches..."            [purple polish]
  → LINK: "Here's your download."                      [green deliver]
```

---

## Agent Activity Feed

A persistent, visible "work log" showing real-time agent actions — reinforces the AI ops center feel:

```
┌─ AGENT ACTIVITY ─────────────────────────┐
│ 🟢 LINK    fetched 47 GitHub repos       │
│ 🟠 FORGE   compiled project: "AgentKit"  │
│ 🟣 SYNTH   wrote summary for AgentKit    │
│ 🔵 CURATOR organized into "AI/ML" shelf  │
│ 🟢 LINK    status: all APIs connected    │
└──────────────────────────────────────────┘
```

**Placement Options:**
- Floating mini-panel in bottom-right corner (collapsible)
- Full-width ticker bar at the top/bottom of the site
- Expand into full "Agent Dashboard" view on click

---

## 3D Asset Requirements

### For Each Agent (Custom/Commissioned):
- Low-poly 3D model (~500-2000 triangles)
- Rigged for simple animations (float, bounce, rotate)
- Distinct silhouette (recognizable at small sizes)
- Glow-friendly materials (emissive surfaces)
- Multiple poses: idle, active, celebrating

### Recommended Creation Path:
1. **Concept art** first (2D sketches of each agent)
2. **Blender** for 3D modeling (free, powerful)
3. **Export as GLTF/GLB** for web
4. **Test in Three.js** before finalizing

### Alternative: Fiverr/Commission
- Budget: $50-200 per agent for low-poly character
- Provide: Concept art, color specs, pose requirements
- Timeline: 1-2 weeks per agent

---

## Implementation Phases

### Phase 1: Foundation (4-6 hours)
1. Initialize Next.js 14+ with TypeScript
2. Configure Tailwind with agent color system
3. Set up Lenis smooth scrolling
4. Create base layout and providers
5. Implement dark theme
6. Set up React Three Fiber canvas

### Phase 2: 3D Agent System (8-12 hours)
1. Create placeholder agent geometries (cubes → real models later)
2. Build agent component with:
   - Floating idle animation
   - Glow materials with emissive colors
   - Click interactions
3. Add post-processing (bloom for glows)
4. Create agent context (track which agent is "active")

### Phase 3: Hero "Awakening" Sequence (6-8 hours)
1. Build GSAP timeline for orchestrated intro
2. Particle system for agent materialization
3. Text reveal animations for agent introductions
4. Camera movements during sequence
5. Transition to interactive state

### Phase 4: Sections with Agent Integration (8-10 hours)
1. **About** - FORGE floating nearby, spark effects
2. **Projects** - SYNTH/CURATOR grid with filter animations
3. **Experience** - LINK with connection visualizations
4. **Contact** - All agents present, form integration

### Phase 5: Polish & Performance (4-6 hours)
1. Loading states and preloading
2. Mobile responsiveness (simplified 3D on mobile)
3. Performance optimization (LOD, frustum culling)
4. Accessibility (reduced motion support)
5. SEO and meta tags
6. Deploy to Vercel

### Phase 6: Custom 3D Models (Timeline: Parallel)
1. Create/commission agent concept art
2. Model or receive 3D assets
3. Integrate into scene
4. Add final animations and polish

---

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with providers
│   │   ├── page.tsx             # Home page
│   │   └── api/
│   │       └── contact/route.ts # Contact form API
│   │
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   │
│   │   ├── agents/              # 3D Agent components
│   │   │   ├── Agent.tsx        # Base agent component
│   │   │   ├── Forge.tsx        # FORGE specific
│   │   │   ├── Synth.tsx        # SYNTH specific
│   │   │   ├── Curator.tsx      # CURATOR specific
│   │   │   ├── Link.tsx         # LINK specific
│   │   │   └── AgentContext.tsx # Agent state management
│   │   │
│   │   ├── three/               # Three.js components
│   │   │   ├── Scene.tsx        # Main 3D scene
│   │   │   ├── Effects.tsx      # Post-processing
│   │   │   ├── Particles.tsx    # Particle systems
│   │   │   └── Camera.tsx       # Camera controls
│   │   │
│   │   ├── sections/            # Page sections
│   │   │   ├── Hero.tsx         # "The Awakening"
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   └── Contact.tsx
│   │   │
│   │   └── animations/          # Animation utilities
│   │       ├── awakening.ts     # Hero sequence timeline
│   │       └── scroll-triggers.ts
│   │
│   ├── lib/
│   │   ├── agents.ts            # Agent definitions & dialogue
│   │   ├── utils.ts             # Helpers
│   │   └── constants.ts         # Site config
│   │
│   └── styles/
│       └── globals.css
│
├── public/
│   ├── models/                  # 3D agent models (.glb)
│   │   ├── forge.glb
│   │   ├── synth.glb
│   │   ├── curator.glb
│   │   └── link.glb
│   ├── images/
│   └── fonts/
│
└── content/
    └── projects/                # MDX project files
```

---

## Performance Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| Lighthouse | 85+ | Lazy load 3D, optimize models |
| LCP | <3s | Preload critical 3D assets |
| FID | <100ms | Offload 3D to worker if needed |
| FPS (3D) | 60fps | LOD, instancing, frustum culling |
| Model size | <500KB each | Draco compression, low-poly |

### Mobile Strategy
- Simplified 3D (lower quality, fewer particles)
- Reduce agent animations
- Consider 2D fallback for very low-end devices
- Test on real devices

---

## Accessibility

- [ ] `prefers-reduced-motion` - Skip intro, reduce animations
- [ ] Keyboard navigation for all interactive elements
- [ ] Screen reader descriptions for agents
- [ ] High contrast text on dark backgrounds
- [ ] Focus states visible over 3D canvas

---

## Success Criteria

1. **First Impression**: "Wow, this is different" within 3 seconds
2. **Memorability**: Visitors remember "the portfolio with the AI agents"
3. **Technical Demo**: The portfolio itself demonstrates AI/ML thinking
4. **Performance**: Smooth 60fps, fast load despite 3D
5. **Professional**: Still clearly communicates your skills and experience
6. **Personality**: Agents give the site character and warmth

---

## Timeline Estimate

| Phase | Time | Dependencies |
|-------|------|--------------|
| Phase 1: Foundation | 4-6 hours | None |
| Phase 2: 3D Agent System | 8-12 hours | Phase 1 |
| Phase 3: Hero Awakening | 6-8 hours | Phase 2 |
| Phase 4: Sections | 8-10 hours | Phase 2 |
| Phase 5: Polish | 4-6 hours | Phase 3, 4 |
| Phase 6: Custom Models | 1-2 weeks | Can run parallel |
| **Total Dev Time** | **~30-42 hours** | |

**Note**: Phase 6 (custom models) can run in parallel with development. Start with placeholder shapes, integrate real models when ready.

---

## Open Questions to Resolve During Build

1. Should agents have voice? (Web Speech API for text-to-speech)
2. Sound effects for agent actions? (Subtle audio cues)
3. Should CURATOR power a real search feature?
4. Should LINK pull real GitHub API data?
5. Agent "chat" feature where visitors can interact?

---

*Plan created: March 2026*
*Last updated: Research synthesis complete*

---

## Appendix: Inspiration Website Deep Analysis (Code Inspection)

### 1. Brittany Chiang (brittanychiang.com) 🏆

**Tech Stack Detected:**
- **Framework**: Next.js (Pages Router)
- **Styling**: Tailwind CSS
- **Fonts**: Custom WOFF2 fonts (Inter-like, preloaded)

**Key CSS Techniques:**
```css
/* Spotlight cursor effect - radial gradient following mouse */
background: radial-gradient(
  600px circle at {mouseX}px {mouseY}px,
  rgba(29, 78, 216, 0.15),
  transparent 80%
);

/* Color scheme */
--bg: slate-900 (#0f172a)
--accent: teal-300/teal-400 (#5eead4)
--text: slate-400, slate-200

/* Navigation indicator animation */
.nav-indicator {
  transition-all group-hover:w-16 group-hover:bg-slate-200
}
```

**Layout Pattern:**
- Sticky left sidebar (48% width on lg screens)
- Scrolling content on right (52% width)
- Single-page scroll with anchor links
- Skip-to-content accessibility link

**Animations:**
- CSS transitions only (no heavy JS animation library)
- Hover state transitions on nav and links
- Smooth scroll via `scroll-smooth` class

**Takeaways:**
- ✅ Clean, minimal approach - no animation library needed
- ✅ Excellent accessibility (skip-to-content, aria-labels)
- ✅ Smart spotlight effect with pure CSS/JS
- ✅ Tailwind for rapid, consistent styling

---

### 2. Lee Robinson (leerob.io) 🏆

**Tech Stack Detected:**
- **Framework**: Next.js 14+ (App Router with Turbopack)
- **Styling**: Custom CSS (minimal, content-first)
- **Fonts**: Stix Two Text (serif)
- **Integrations**: Spotify API (now playing)

**Key CSS Patterns:**
```css
/* Extremely minimal styling */
.text-copy { /* Simple paragraph styling */ }

/* Link underline hover effect */
.transition-colors underline decoration-neutral-500 
  decoration-1 underline-offset-[2.5px] 
  hover:decoration-neutral-400

/* Theme switching */
color-scheme: light dark;
```

**Unique Features:**
- JSON-LD structured data for SEO
- Real-time Spotify "Now Playing" integration
- Content-driven (writing is the product)
- Dedicated pages for major work (/vercel, /cursor)

**Takeaways:**
- ✅ Extreme minimalism works for established devs
- ✅ Content > design flash
- ✅ Spotify integration adds personality
- ✅ Structured data for SEO

---

### 3. Bruno Simon (bruno-simon.com) 🏆

**Tech Stack Detected:**
- **Framework**: Vanilla JS (Vite bundler)
- **3D Engine**: Three.js + WebGPU renderer
- **Physics**: Rapier physics engine
- **Fonts**: Amatic SC, Nunito, Pally (custom)
- **Assets**: GLB models, KTX textures (compressed)

**Key Technical Implementation:**
```html
<!-- Preloading 3D assets -->
<link rel="preload" href="./respawns/respawnsReferences-compressed.glb" as="fetch" crossorigin>
<link rel="preload" href="./behindTheScene/stars.ktx" as="fetch" crossorigin>

<!-- WebGL Canvas -->
<canvas class="js-canvas"></canvas>

<!-- Touch controls for mobile -->
<div class="js-touch-buttons touch-buttons">
  <button data-name="interact">Interact</button>
  <button data-name="unstuck">Unstuck</button>
</div>
```

**Unique Features:**
- Fully 3D interactive world
- Gamification (achievements, circuit racing)
- Community "whispers" system
- WebGPU support with WebGL fallback
- Audio with custom music
- Gamepad + keyboard + touch support

**Takeaways:**
- ✅ 3D portfolios are memorable but complex
- ✅ Preload assets for smooth experience
- ✅ Multiple input methods (accessibility)
- ✅ Progressive enhancement (quality toggle)

---

### 4. Josh Comeau (joshwcomeau.com) 🏆

**Tech Stack Detected:**
- **Framework**: Next.js (App Router)
- **Styling**: CSS Custom Properties + CSS Modules
- **Theme**: Custom light/dark with cookie persistence
- **Code**: Sandpack (embedded code playgrounds)

**Key CSS Patterns:**
```css
/* Extensive CSS custom properties for theming */
:root {
  --color-text: hsl(222deg 22% 5%);
  --color-background: hsl(0deg 0% 100%);
  --color-primary: hsl(240deg 95% 62%);
  --color-secondary: hsl(333deg 100% 45%);
  --syntax-bg: hsl(213deg 80% 95%);
  /* ...100+ more variables */
}

/* Color swap animation */
transition: --color-background 350ms cubic-bezier(0.41, 0.1, 0.13, 1);

/* Sandpack embedded editor styling */
.sp-c-fVPbOs { /* Custom Sandpack theme */ }
```

**Unique Features:**
- Interactive code playgrounds in every article
- Custom dark/light theme with smooth transitions
- HSL color system for easy theming
- Cookie-based theme persistence
- Extensive syntax highlighting customization

**Takeaways:**
- ✅ CSS custom properties enable powerful theming
- ✅ Interactive demos make tutorials memorable
- ✅ Theme persistence via cookies (not localStorage)
- ✅ HSL colors for consistent palette

---

### 5. Cassidy Williams (cassidoo.co)

**Tech Stack Detected:**
- **Framework**: Astro 5.16
- **Styling**: Plain CSS (minimal)
- **Analytics**: Fathom (privacy-focused)
- **Content**: Markdown/MDX with Astro collections

**Key Patterns:**
```css
/* Simple link styling */
a:hover {
  font-weight: bolder;
  text-decoration: underline;
  text-decoration-thickness: .3ex;
  text-underline-offset: .3ex;
}

/* Dynamic color cycling (via JS) */
let colors = ["#24d05a", "#eb4888", "#10a2f5", ...];
```

**Unique Features:**
- "Read a random post" with custom element
- Dynamic accent color cycling
- Newsletter-first approach
- Open source (MIT licensed)
- Schema.org JSON-LD structured data

**Takeaways:**
- ✅ Astro for content-heavy sites
- ✅ Simple is often better
- ✅ Personality through color and copy
- ✅ Privacy-focused analytics

---

### 6. Tania Rascia (taniarascia.com)

**Tech Stack Detected:**
- **Framework**: Gatsby 5
- **Styling**: CSS Custom Properties (extensive theming)
- **Fonts**: Outfit (headings), Google Sans Code (mono)
- **Theme**: Light/dark with system preference detection

**Key CSS Patterns:**
```css
/* Sophisticated theme system */
:root {
  --gray-0 through --gray-12  /* 13 gray shades */
  --beige-0 through --beige-4 /* Warm accents */
  --color-primary: var(--theme-pink);
}

/* Theme switching with prefers-color-scheme */
@media (prefers-color-scheme: dark) {
  :root:where(:not(.is-light)) {
    --color-background: var(--gray-9);
  }
}

/* Box shadows for depth */
--box-shadow-elevated-light: rgba(124,114,76,.4) 0px 5px 15px 0px;
```

**Unique Features:**
- "Digital garden" concept
- Extensive color palette (13 grays + beige accents)
- Sidebar navigation for posts
- Deep Dives section for premium content

**Takeaways:**
- ✅ Comprehensive color system
- ✅ System preference + manual override
- ✅ Warm colors (beige) for approachability
- ✅ Clear content hierarchy

---

## Summary: Key Patterns Across Top Portfolios

| Feature | Brittany | Lee | Bruno | Josh | Cassidy | Tania |
|---------|----------|-----|-------|------|---------|-------|
| Framework | Next.js | Next.js | Vanilla | Next.js | Astro | Gatsby |
| CSS Approach | Tailwind | Custom | Custom | CSS Props | Plain | CSS Props |
| Animations | CSS only | None | Three.js | Subtle | None | None |
| Theme | Dark only | Dark+Light | N/A | Dark+Light | Light | Dark+Light |
| Skip-to-content | ✅ | ❌ | N/A | ✅ | ❌ | ✅ |
| JSON-LD SEO | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ |

### Top Techniques to Implement:

1. **Spotlight cursor effect** (Brittany) - CSS radial gradient following mouse
2. **CSS Custom Properties theming** (Josh/Tania) - 100+ variables for flexibility
3. **Smooth theme transitions** (Josh) - Animate color variables
4. **Skip-to-content** (Brittany) - Accessibility essential
5. **Structured data** (Lee/Cassidy) - SEO boost
6. **Asset preloading** (Bruno) - For 3D/heavy content
7. **System color scheme detection** (Tania) - Respect user preferences

### What Makes Portfolios "World-Class":

1. **Intentional minimalism** - Every element serves a purpose
2. **Performance first** - Fast load, smooth animations
3. **Accessibility** - Skip links, focus states, aria labels
4. **Personal brand** - Consistent colors, typography, voice
5. **Content quality** - The work speaks for itself
6. **Technical excellence** - Clean code, modern practices
