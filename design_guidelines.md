# JSPL Group of Companies - Under Construction Website Design Guidelines

## Design Approach

**Selected Approach:** Design System (Material Design) with Corporate Refinement

**Justification:** This is a professional corporate website requiring credibility and trust-building for a multi-sector business group. Material Design provides the structured foundation needed for corporate professionalism while allowing for creative implementation of the "under construction" theme without compromising sophistication.

**Key Design Principles:**
1. Professional credibility balanced with forward-looking modernity
2. Clear visual hierarchy emphasizing three distinct business verticals
3. Trust-building through structured information presentation
4. Purposeful "under construction" elements that signal growth, not incompleteness

---

## Core Design Elements

### A. Typography

**Font Stack:**
- Primary: Inter (via Google Fonts CDN) - Clean, professional, excellent readability
- Secondary: Poppins (via Google Fonts CDN) - For headings and emphasis

**Typography Scale:**
- Hero Headlines: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl lg:text-5xl, font-semibold
- Subsection Headers: text-2xl md:text-3xl, font-semibold
- Body Large: text-lg md:text-xl, font-normal
- Body Regular: text-base, font-normal
- Captions/Labels: text-sm, font-medium
- Small Print: text-xs, font-normal

**Line Heights:**
- Headlines: leading-tight
- Body text: leading-relaxed
- Captions: leading-normal

### B. Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Micro spacing (elements): 4, 6
- Component internal: 8, 12
- Section padding: 16, 20, 24
- Major section breaks: 32

**Container Strategy:**
- Full-width sections with inner max-w-7xl container
- Content sections: max-w-6xl
- Text-heavy content: max-w-4xl
- Form elements: max-w-2xl

**Grid Systems:**
- Desktop: grid-cols-3 for business verticals, grid-cols-2 for leadership
- Tablet: grid-cols-2 for verticals, grid-cols-1 for leadership
- Mobile: grid-cols-1 throughout

---

## Page Structure & Sections

### 1. Hero Section (80vh minimum)
**Layout:** Full-width background with centered content overlay

**Components:**
- Large JSPL logo/wordmark
- Animated construction crane icon or progress bar element
- Main headline: "Building India's Future - Coming Soon"
- Subheadline: "JSPL Group of Companies: Powering People, Hospitality & Technology"
- Countdown timer or progress indicator
- Primary CTA: "Stay Updated" button with blur background
- Secondary element: Scroll indicator icon

**Image Requirements:**
- Hero image: Professional construction/infrastructure scene or modern Indian business district skyline, subtle overlay to ensure text readability
- Image should convey progress, modernity, and scale

### 2. Company Overview Section
**Layout:** Two-column asymmetric layout (40/60 split on desktop)

**Left Column:**
- "Who We Are" heading
- Company tagline and brief description
- Quick stats cards:
  - "3 Business Verticals"
  - "5+ States Covered"
  - "50+ Corporate Clients"

**Right Column:**
- Vision statement card with icon
- Mission statement card with icon
- Trust badge elements: "Trusted by Adani, Reliance, Tata"

### 3. Business Verticals Showcase
**Layout:** Three-column card grid (stacks to single column on mobile)

**Card Structure (for each vertical):**
- Icon (Font Awesome: briefcase for Staffing, utensils for Hospitality, laptop-code for Tech)
- Vertical name as heading
- 2-3 sentence description
- "Learn More" link with arrow
- Subtle hover elevation effect

**Verticals:**
1. Jet Staffing Private Limited - Manpower Solutions
2. JSPL Hospitality Private Limited - Hospitality & Tourism  
3. JSPL Tech Private Limited - Technology Solutions

### 4. Leadership Section
**Layout:** Two-column grid with photo placeholders

**Each Profile Card:**
- Professional headshot placeholder (400x400px circular or rounded square)
- Name in large text
- Title: "Co-Founder & Director"
- 2-paragraph bio summary
- LinkedIn icon link

**Profiles:**
- Mr. Ajay Kumar Upadhyay
- Mr. Rajeev Upadhyay

### 5. Key Achievements Timeline
**Layout:** Horizontal timeline or milestone cards (4 items)

**Achievement Cards:**
1. Kumbh Mela Logistics Success
2. Premier Partnerships (Adani, Reliance, Tata logos)
3. Pan-India Presence Expansion
4. Operational Excellence Recognition

**Card Elements:**
- Icon representing achievement
- Headline
- Brief description
- Subtle connecting line between cards (desktop only)

### 6. Contact & Newsletter Section
**Layout:** Split section - Form (left) and Info (right)

**Form Side (60%):**
- Section header: "Get in Touch"
- Input fields (with labels):
  - Full Name (required)
  - Email (required)
  - Phone Number
  - Company Name
  - Message (textarea, required)
- Submit button: "Send Inquiry"
- Privacy notice in small text

**Info Side (40%):**
- Office address (with map pin icon)
- Email address (with envelope icon)
- Phone number (with phone icon)
- Business hours
- Social media icon links (LinkedIn, Twitter placeholder)
- "We'll notify you when we launch" message with email subscribe mini-form

### 7. Footer
**Layout:** Three-column grid with bottom copyright bar

**Columns:**
1. JSPL branding, tagline, brief description
2. Quick Links: About, Services, Contact, Careers (Coming Soon)
3. Newsletter signup: "Be the first to know" with email input

**Bottom Bar:**
- Copyright text
- "Under Construction" badge
- Legal links: Privacy Policy, Terms of Service

---

## Component Library

### Navigation Bar
**Structure:** Fixed top, full-width
- JSPL logo (left)
- Desktop: Horizontal menu (centered) - About, Business Verticals, Leadership, Contact
- Mobile: Hamburger menu icon (right)
- "Launch Updates" CTA button (right, desktop only)

### Buttons
**Primary Button:**
- Rounded (rounded-lg)
- Padding: px-8 py-4
- Text: text-base font-semibold
- With subtle shadow
- Blur background when on images (backdrop-blur-md bg-white/30)

**Secondary Button:**
- Outlined style
- Same sizing as primary
- Transparent background with border

### Cards
**Standard Card:**
- Rounded corners (rounded-xl)
- Padding: p-8
- Subtle shadow (shadow-lg)
- Hover: slight elevation increase (hover:shadow-xl transition-shadow duration-300)

**Vertical Business Card:**
- Icon at top (text-5xl)
- Title (text-2xl font-semibold)
- Description (text-base)
- Link with arrow icon
- Border on hover

### Form Inputs
**Text Inputs:**
- Rounded (rounded-lg)
- Padding: px-4 py-3
- Border: 2px solid
- Label above input (text-sm font-medium)
- Placeholder text with reduced opacity
- Focus: border highlight, subtle shadow

**Textarea:**
- Same styling as text inputs
- Minimum height: rows 4
- Resize vertical only

### Icons
**Library:** Font Awesome (CDN)

**Icon Usage:**
- Section headers: inline with text
- Business verticals: large feature icons (fa-3x)
- Contact info: inline icons (fa-lg)
- Social media: icon-only buttons
- Form validation: success/error indicators

### Progress/Construction Elements
**Construction Theme Elements:**
- Animated dotted progress bar (CSS animation)
- Construction cone icon
- Hard hat icon
- Crane/building icon
- "Coming Soon" badges
- Countdown timer component (days, hours, minutes)

---

## Animations

**Minimal, Purposeful Animations Only:**

1. **Hero Section:** Subtle fade-in on load (1s duration)
2. **Scroll Reveal:** Section headers fade up slightly as they enter viewport
3. **Card Hover:** Gentle elevation change (shadow transition)
4. **Button Hover:** Slight scale (scale-105) or background shift
5. **Construction Elements:** Subtle pulsing animation on "Under Construction" badge

**No:** Parallax effects, elaborate scroll animations, rotating elements, or auto-playing carousels

---

## Accessibility Requirements

- All form inputs have associated labels
- ARIA labels for icon-only buttons
- Keyboard navigation fully supported
- Focus states clearly visible on all interactive elements
- Sufficient contrast ratios throughout
- Alt text for all images and icons
- Semantic HTML structure (header, nav, main, section, footer)

---

## Images Section

**Hero Image:**
- Large full-width background image
- Subject: Modern Indian infrastructure (construction site, metro, smart city) or professional business environment
- Treatment: Slight darkening overlay (opacity-40) to ensure text readability
- Dimensions: Minimum 1920x1080px
- Position: center center, cover

**Leadership Photos:**
- Professional headshots in business attire
- Circular or rounded square treatment (rounded-full or rounded-2xl)
- Dimensions: 400x400px
- Placeholder: Professional silhouette or initials in circle

**Client Logos (Achievement Section):**
- Adani, Reliance, Tata company logos
- Grayscale treatment for consistency
- Dimensions: Variable, max-height 80px
- Arranged horizontally or in grid

**Business Vertical Icons:**
- Use Font Awesome icons, not images
- briefcase, utensils, laptop-code