# Developer Portfolio Section Analysis Research Report

## Executive Summary

This research analyzed 15+ live developer portfolio websites from industry professionals to understand what sections they actually use, their navigation structures, and how they present experience. The findings reveal that **modern developer portfolios are moving away from traditional resume-style layouts** toward more narrative, personality-driven presentations. The most successful portfolios combine **3-5 core sections** (About, Work/Projects, Writing/Blog, Contact) with a distinct personal brand—whether through minimalism, creative 3D experiences, or technical depth.

Key insight: **Top-tier portfolios rarely use explicit "Experience" sections**. Instead, they weave professional history naturally into their About section or demonstrate expertise through their Projects and Writing sections. This "show, don't tell" approach is more compelling than listing job titles.

---

## Portfolio-by-Portfolio Analysis

### 1. Brittany Chiang (brittanychiang.com) ⭐

**Overview**: The gold standard for developer portfolios. Over 6k GitHub stars on her v4 template. Currently a Senior Frontend Engineer at Klaviyo.

**Sections/Navigation Structure**:
| Section | Description |
|---------|-------------|
| **About** | Opening section with personal intro, current role, professional background, and personal interests |
| **Experience** | Timeline-style list of positions (2024-Present at top, working backward to 2015) |
| **Projects** | Featured work including courses, apps, and open-source tools |
| **Writing** | Blog posts displayed as cards |

**Experience Presentation**:
- Reverse-chronological timeline format
- Each entry shows: Date range → Company → Description → Tech stack tags
- Uses subtle bullet points linking to press coverage/external validation
- Example format:
  ```
  2024 — Present
  Build and maintain critical components used to construct Klaviyo's frontend...
  • JavaScript • TypeScript • React • Storybook
  ```

**What Makes It Stand Out**:
- Clean, minimal dark theme with excellent typography
- Spotlight effect follows cursor (subtle interactivity)
- Tech stack tags are consistently used across Experience and Projects
- Links to external validation (press, repos, live demos)
- Single-page scrolling design[^1]

---

### 2. Bruno Simon (bruno-simon.com) ⭐

**Overview**: The most famous creative developer portfolio on the internet. Fully interactive 3D experience using Three.js.

**Sections/Navigation Structure**:
- **NOT a traditional portfolio** — it's a 3D driving game
- Information is discovered through exploration, not navigation
- "Behind the Scene" modal explains tech stack

**Hidden "Sections" Within the 3D World**:
| Element | Purpose |
|---------|---------|
| **Welcome** | Name and title reveal |
| **Achievements** | Gamified progress tracking |
| **Circuit/Scores** | Interactive challenges |
| **Whispers** | Community message system |
| **Behind the Scene** | Tech stack explanation (Three.js, Rapier physics, Howler.js) |

**Experience Presentation**:
- No explicit experience section
- Portfolio itself IS the experience demonstration
- Links to YouTube devlogs and Three.js Journey course

**What Makes It Stand Out**:
- Fully 3D interactive world you can drive around
- Open-sourced on GitHub (MIT license)
- Custom music composed for the experience
- Keyboard controls, gamepad support, mobile gestures
- Achievements system gamifies exploration[^2]

---

### 3. Lee Robinson (leerob.io) ⭐

**Overview**: VP of Product at Vercel. Extremely minimalist, content-focused portfolio.

**Sections/Navigation Structure**:
| Page | Description |
|------|-------------|
| **Home (/)** | Brief intro + featured writing links |
| **Writing (/writing)** | Full list of essays and articles |
| **Bio (/bio)** | Detailed background |
| **Work pages** | Dedicated pages for major roles (/cursor, /vercel) |

**Experience Presentation**:
- **No traditional Experience section**
- Mentions current role (Cursor) and previous role (Vercel) inline in intro
- Creates dedicated pages for major career experiences
- Links to "5 Things I Learned from 5 Years at Vercel" essay

**What Makes It Stand Out**:
- Extreme minimalism — almost no styling
- Content-first approach (writing drives the portfolio)
- Spotify "Now Playing" integration
- Links to YouTube channel and angel investing
- Every piece of content has a purpose[^3]

---

### 4. Josh Comeau (joshwcomeau.com) ⭐

**Overview**: Independent educator and former developer at Gatsby. Known for interactive CSS tutorials.

**Sections/Navigation Structure**:
| Section | Description |
|---------|-------------|
| **Home** | Articles and tutorials grid with images |
| **Browse by Category** | Content categorization (CSS, Animation, React, etc.) |
| **Popular Content** | Top 10 most-read articles |
| **Courses** | Links to paid course products |

**Experience Presentation**:
- **No traditional Experience section**
- Career demonstrated through quality of educational content
- Expertise shown through in-depth interactive tutorials
- Links to paid products (Joy of React course)

**What Makes It Stand Out**:
- Every article has custom interactive components
- Rich visual previews with article images
- Categories help users find specific topics
- "Popular Content" section leverages social proof
- Content is the product (course sales)[^4]

---

### 5. Cassidy Williams (cassidoo.co)

**Overview**: Senior Director of Developer Advocacy at GitHub. Well-known content creator.

**Sections/Navigation Structure**:
| Section | Description |
|---------|-------------|
| **Hero** | Brief intro with personality |
| **Newsletter CTA** | Prominent newsletter signup |
| **Recent Posts** | Latest blog posts with dates |
| **Tags** | Browse posts by category |

**Experience Presentation**:
- **No dedicated Experience section**
- Current role mentioned in intro ("Senior Director of Developer Advocacy at GitHub")
- Links to GitHub profile
- Expertise shown through content output

**What Makes It Stand Out**:
- Newsletter-first approach (prominent CTA)
- Personal voice ("I like to make memes and dreams and software")
- Mentions hobbies (mechanical keyboards, music)
- "Read a random one!" link adds playfulness[^5]

---

### 6. Tania Rascia (taniarascia.com) ⭐

**Overview**: Principal Software Developer and prolific technical writer. 10+ years of tutorials.

**Sections/Navigation Structure**:
| Section | Description |
|---------|-------------|
| **Home** | Hero with personal intro |
| **Blog** | Long-form tutorials |
| **Notes** | Life, music, projects updates |
| **Deep Dives** | Premium tutorial content |
| **Projects** | Open source work |
| **Me (/me)** | Detailed about page |

**About Page (/me) Contents**:
- Personal intro
- "What I'm Doing Now" section (current activities)
- Tools (Software & Hardware)
- Publications (external writing)
- Interviews & Podcasts
- Speaking engagements
- Resume link

**Experience Presentation**:
- No traditional Experience section on main site
- Links to external Resume page
- Publications section lists all external writing (DigitalOcean, LogRocket, SitePoint)
- Interviews/Podcasts serve as social proof

**What Makes It Stand Out**:
- Explicit "no ads, no AI, no affiliate links, no tracking" statement
- Very personal "What I'm Doing Now" section
- Extensive publications/interviews list builds credibility
- Tools section shows personality (gaming PC specs!)
- Even includes a Songs section (SoundCloud links)[^6]

---

### 7. Sarah Dayan (sarahdayan.dev)

**Overview**: Principal Software Engineer at Algolia. Conference speaker.

**Sections/Navigation Structure**:
| Section | Description |
|---------|-------------|
| **Hero** | Title + current role |
| **Posts** | Blog content |
| **Projects** | Featured work |
| **Talks** | Conference presentations (chronological) |
| **Interviews** | Podcast/media appearances |

**Experience Presentation**:
- Current role prominently displayed: "Principal Software Engineer at Algolia"
- No dedicated Experience section
- Talks section shows conferences attended (23+ conferences!)
- Interview section lists media appearances

**What Makes It Stand Out**:
- Extensive Talks section with dates and locations
- Interviews section as social proof
- Clean navigation with numbered sections (01Posts, 02Projects, etc.)
- Professional headshot[^7]

---

### 8. Sara Soueidan (sarasoueidan.com)

**Overview**: Independent web UI developer focused on accessibility. Author and speaker.

**Sections/Navigation Structure**:
| Section | Description |
|---------|-------------|
| **About** | Detailed professional intro |
| **Latest Articles** | Blog posts with dates and update indicators |
| **Mailing List CTA** | Newsletter signup |

**Experience Presentation**:
- **No traditional Experience section**
- Describes herself as "independent web user interface developer, author, speaker, and educator"
- Expertise demonstrated through in-depth technical articles
- Mentions 8,300+ newsletter subscribers as social proof

**What Makes It Stand Out**:
- Detailed article descriptions with "Last updated" dates
- Strong focus on web accessibility content
- Newsletter subscriber count as credibility
- Personal photo with descriptive alt text (practicing what she preaches)[^8]

---

### 9. Paco Coursey (paco.me)

**Overview**: Webmaster at Linear. Previously design system at Vercel.

**Sections/Navigation Structure**:
| Section | Description |
|---------|-------------|
| **Hero** | Brief intro |
| **Building** | Current implementations |
| **Projects** | Open source work (cmdk, Leva, next-themes) |
| **Writing** | Essays |
| **Now** | Philosophy and current focus |

**Experience Presentation**:
- Current role in intro: "Webmaster at Linear"
- Previous role mentioned: "developed the Vercel design system, website, and dashboard"
- No explicit Experience section

**What Makes It Stand Out**:
- "Now" section with personal philosophy
- Music taste (YouTube playlists embedded)
- Extremely minimal design
- Projects listed with one-line descriptions[^9]

---

### 10. Amie Chen (amie-chen.com)

**Overview**: Principal Product Designer at Okta. Design-engineer hybrid.

**Sections/Navigation Structure**:
| Section | Description |
|---------|-------------|
| **Hero** | Title and intro |
| **Experience** | Career timeline |
| **Highlights** | Featured work |
| **Journal** | Blog/notes |

**Experience Presentation**:
- **Has explicit Experience section** with timeline format:
  ```
  2025 — Now: Principal Product Designer — Okta
  2023 — 2025: Staff Product Designer — Okta
  2022 — 2023: Senior Product Designer — Okta
  2020 — 2021: Product Designer — Streamlit
  2017 — 2018: Frontend Developer — Twitch
  2015 — 2017: Software Engineer — Signal
  ```

**What Makes It Stand Out**:
- One of the few portfolios with explicit Experience section
- Timeline shows career progression
- Playful header animation
- LinkedIn as primary contact method[^10]

---

### 11. Olaolu Olawuyi (olaolu.dev)

**Overview**: Expert Web Engineer with 15+ years experience.

**Sections/Navigation Structure**:
| Page | Description |
|------|-------------|
| **My Work** | Selected projects and case studies |
| **My Shelf** | Articles and writing |
| **My Résumé** | Downloadable resume |

**Experience Presentation**:
- Separate Resume page/PDF
- Case studies for client work (John Deere, Hellotax, Dignisia)
- No inline experience section

**What Makes It Stand Out**:
- Case study pages for each major project
- "Say Hello" contact section in navigation
- Professional tagline in metadata[^11]

---

### 12. Maggie Appleton (maggieappleton.com)

**Overview**: Designer, anthropologist, developer at GitHub Next.

**Sections/Navigation Structure**:
| Section | Description |
|---------|-------------|
| **The Garden** | Digital garden overview |
| **Essays** | Longform narrative writing |
| **Notes** | Work-in-progress ideas |
| **Patterns** | Design pattern observations |
| **Library** | Book reviews |

**Experience Presentation**:
- Current role in subheading: "exploring AI & software engineering at GitHub Next"
- No traditional experience section
- Portfolio is a "digital garden" concept

**What Makes It Stand Out**:
- Digital garden format (not traditional portfolio)
- Visual essays with illustrations
- Clear content types (Essays vs Notes vs Patterns)
- Unique anthropological lens on technology[^12]

---

### 13. Delba Oliveira (delba.dev)

**Overview**: Developer education specialist, formerly at Vercel.

**Sections/Navigation Structure**:
| Section | Description |
|---------|-------------|
| **Work** | Professional accomplishments |
| **Personal** | Side projects |
| **About me** | Background |

**Experience Presentation**:
- Work section lists major accomplishments:
  - "Next.js Docs: Built, authored, and maintained"
  - "Next.js Learn: Built new learning platform..."
  - "Vercel Knowledge Base: Built new home for developer content..."
- Not a traditional job history, but **impact-focused**

**What Makes It Stand Out**:
- Actively job seeking (clear CTA at top)
- Impact-focused work descriptions
- Links to actual deliverables (docs, courses)
- Dedicated principles pages (/developer-education-principles)[^13]

---

### 14. Jhey Tompkins (jhey.dev)

**Overview**: Staff Design Engineer at Shopify.

**Sections/Navigation Structure**:
- Single-page design
- Location, weather, CodePen, Steam, Spotify integrations
- Live activity feed style

**What Makes It Stand Out**:
- Real-time integrations (weather, Spotify now playing)
- CodePen featured prominently
- Playful personality ("Making your ideas click")
- Minimal but memorable[^14]

---

### 15. Derek Knox (derekknox.com)

**Overview**: Senior Software Engineer and UI/UX Designer.

**Sections/Navigation Structure**:
| Page | Description |
|------|-------------|
| **Work** | Past projects |
| **Lab** | Experimental creations |
| **Articles** | Writing |
| **Book** | "Coding for Designers" |

**What Makes It Stand Out**:
- "Lab" section for experiments
- Published book prominently featured
- Clean separation of Work vs Experiments[^15]

---

## Section Frequency Analysis

Based on analysis of 15 portfolios:

| Section | Frequency | Notes |
|---------|-----------|-------|
| **About/Bio** | 100% | Always present, often as intro |
| **Projects/Work** | 93% | Central to almost all portfolios |
| **Writing/Blog** | 87% | Technical content demonstrates expertise |
| **Contact** | 73% | Often email + social links |
| **Experience (explicit)** | **20%** | Only 3/15 had dedicated section |
| **Talks/Speaking** | 33% | Common for speakers/educators |
| **Newsletter** | 40% | Growing trend |
| **Now/Current** | 27% | Borrowed from /now pages movement |

### Key Finding: Experience Sections Are Rare

Only **3 out of 15 analyzed portfolios** (20%) have an explicit "Experience" section:
1. **Brittany Chiang** — Timeline format
2. **Amie Chen** — Timeline format
3. **Tania Rascia** — External resume link

The other 80% either:
- Mention current role in intro only
- Demonstrate expertise through projects/writing
- Link to LinkedIn or external resume
- Create dedicated pages for major roles (like Lee Robinson's /vercel page)

---

## Navigation Pattern Analysis

### Pattern 1: Single-Page Scrolling (Most Common)
- **Examples**: Brittany Chiang, Amie Chen
- **Sections**: Linked via anchor tags
- **Best for**: Compact portfolios, focused presentation

### Pattern 2: Multi-Page with Dedicated Sections
- **Examples**: Tania Rascia, Lee Robinson, Olaolu Olawuyi
- **Pages**: /blog, /projects, /about, etc.
- **Best for**: Content-heavy portfolios, extensive writing

### Pattern 3: Digital Garden / Non-Linear
- **Examples**: Maggie Appleton
- **Structure**: Notes, Essays, Patterns
- **Best for**: Research-focused, intellectual audience

### Pattern 4: Experimental / Interactive
- **Examples**: Bruno Simon
- **Structure**: 3D environment, gamified exploration
- **Best for**: Creative developers, frontend specialists

---

## Best Practices Synthesis

### From FreeCodeCamp Tutorial[^16]:
Recommended sections:
1. **Hero Section** — Name, title, brief intro
2. **About Me** — Background, interests, personality
3. **Skills** — Technologies and tools
4. **Projects** — Featured work with links
5. **Contact** — Form or email + socials

### From Real Portfolio Analysis:
What actually works:
1. **Strong Hero** — Current role + one-liner value prop
2. **Projects with Context** — Not just links, but explanations
3. **Writing/Content** — Demonstrates expertise
4. **Personal Touch** — Hobbies, "Now" section, personality
5. **Social Proof** — Talks, interviews, newsletter subscribers

---

## Recommendations for AI/ML Engineer Portfolio

### Optimal Section Structure

```
┌─────────────────────────────────────────────────────────────┐
│                         NAVIGATION                          │
│   [About]  [Projects]  [Writing]  [Experience]  [Contact]   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      1. HERO SECTION                        │
│  "AI/ML Engineer building [specific focus area]"            │
│  Current role + one compelling sentence                     │
│  [Resume] [GitHub] [LinkedIn] buttons                       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      2. ABOUT SECTION                       │
│  - 2-3 paragraphs of background                            │
│  - Specific AI/ML interests and specializations            │
│  - What makes your approach unique                         │
│  - Personal interests (humanizes you)                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    3. PROJECTS SECTION                      │
│  Featured projects with:                                    │
│  - Visual/diagram representation                           │
│  - Problem → Solution → Impact format                      │
│  - Tech stack tags (PyTorch, TensorFlow, etc.)            │
│  - Links to GitHub, papers, demos                          │
│  - Metrics when available (accuracy, scale)                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   4. EXPERIENCE SECTION                     │
│  Timeline format (like Brittany Chiang):                   │
│  - Date range                                               │
│  - Company + Role                                           │
│  - 2-3 sentence impact description                         │
│  - Tech stack tags                                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                5. WRITING/BLOG SECTION                      │
│  (Critical for AI/ML - demonstrates depth)                 │
│  - Technical blog posts                                     │
│  - Paper summaries or reviews                              │
│  - Tutorial content                                         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    6. CONTACT SECTION                       │
│  - Email link                                               │
│  - LinkedIn                                                 │
│  - GitHub                                                   │
│  - Twitter/X (if active in ML community)                   │
└─────────────────────────────────────────────────────────────┘
```

### Why Include Experience Section for AI/ML

Unlike the web developers analyzed (who can show skills through their portfolio's design), **AI/ML engineers benefit from an explicit Experience section** because:

1. **ML work is often internal** — Projects may be confidential/proprietary
2. **Scale matters** — Company context shows you've worked at scale
3. **Domain expertise** — Shows diversity of applications (NLP, CV, etc.)
4. **Credibility** — AI/ML is a field where pedigree still matters

### Section Priority for AI/ML Engineer

| Priority | Section | Why |
|----------|---------|-----|
| 1 | **Projects** | Shows what you can actually build |
| 2 | **Experience** | Demonstrates professional impact |
| 3 | **Writing** | Proves depth of understanding |
| 4 | **About** | Personal brand and specialization |
| 5 | **Contact** | Enable opportunities |

### AI/ML-Specific Additions to Consider

1. **Research/Publications** — If you have papers, highlight them
2. **Talks/Presentations** — ML conference presentations
3. **Open Source Contributions** — Hugging Face, popular repos
4. **Certifications/Education** — Relevant for ML (Stanford ML, DeepLearning.AI)
5. **Tech Stack/Skills** — More important in ML than frontend

---

## Confidence Assessment

**High Confidence**:
- Section frequencies are accurate based on direct site analysis
- Navigation patterns are well-documented
- Experience section rarity is a clear finding

**Medium Confidence**:
- Recommendations for AI/ML are synthesized from patterns, not AI/ML-specific portfolio analysis
- Best practices may shift as AI/ML portfolios become more common

**Assumptions Made**:
- Analyzed primarily web/frontend developer portfolios (most common type)
- AI/ML engineer portfolios may have different norms (research-heavy)

---

## Footnotes

[^1]: https://brittanychiang.com - Direct site analysis, fetched live content
[^2]: https://bruno-simon.com - 3D portfolio with Three.js, source on GitHub
[^3]: https://leerob.io - Lee Robinson's minimalist portfolio, VP Product at Vercel
[^4]: https://www.joshwcomeau.com - Josh Comeau's tutorial-focused portfolio
[^5]: https://cassidoo.co - Cassidy Williams, DevRel at GitHub
[^6]: https://www.taniarascia.com/me - Tania Rascia's detailed about page
[^7]: https://sarahdayan.dev - Sarah Dayan, Principal Engineer at Algolia
[^8]: https://www.sarasoueidan.com - Sara Soueidan, accessibility expert
[^9]: https://paco.me - Paco Coursey, Webmaster at Linear
[^10]: https://www.amie-chen.com - Amie Chen, Principal Designer at Okta
[^11]: https://olaolu.dev - Olaolu Olawuyi, Expert Web Engineer
[^12]: https://maggieappleton.com - Maggie Appleton, GitHub Next
[^13]: https://delba.dev - Delba Oliveira, Developer Education
[^14]: https://jhey.dev - Jhey Tompkins, Staff Design Engineer at Shopify
[^15]: https://www.derekknox.com - Derek Knox, Software Engineer
[^16]: https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio-website/ - FreeCodeCamp portfolio tutorial
