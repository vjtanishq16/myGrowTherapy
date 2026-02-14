# Grow My Therapy — Internship Assignment (Stage 2)

**Front-End Developer Internship — Practical Assignment (Skill Evaluation)**

A pixel-perfect clone of the [Lilac Squarespace Template](https://lilac-template.squarespace.com/) rebuilt in **Next.js + Tailwind CSS**, then fully redesigned for an imaginary client — **Dr. Maya Reynolds, PsyD**, a licensed clinical psychologist in Santa Monica, CA.

> **Live Site:** _[Add Vercel/Netlify link here]_
> **Video Walkthrough:** _[Add Loom link here]_

---

## Assignment Overview

| Part | Task | Branch |
|------|------|--------|
| **Part 1** | Clone the Lilac template homepage (UI accuracy) | `clone` |
| **Part 2** | Redesign with Dr. Maya Reynolds' profile (copy, colors, images) | `client` |
| **Part 3** | Add a new custom "Our Office" section | `newSection` |
| **Part 4** | Record a Loom video walkthrough | — |

All parts are merged into `main`.

---

## Branch Structure

```
main              ← Final merged version (all parts combined)
├── clone         ← Part 1: Pixel-perfect Lilac template clone
├── client        ← Part 2: Full redesign for Dr. Maya Reynolds
└── newSection    ← Part 3: Custom "Your Healing Space" office section
```

- **`clone`** — Faithful recreation of the original Lilac template: layout, spacing, typography, responsiveness, arched images, accordion sections, and color palette.
- **`client`** — Complete rebrand: new coastal color palette, all copy rewritten from [Dr. Maya Reynolds' profile](https://docs.google.com/document/d/1-IJVKEjuqV9CTd9QH16UNHJ7SQfdiweS4oAIZ8vmgHU/edit?usp=sharing), replaced images (Unsplash + Google Drive office/headshot photos), SEO-optimized for Santa Monica therapy keywords.
- **`newSection`** — Added a new "Your Healing Space" section with office photos from the profile, location details, and session format info.
- **`main`** — All branches merged. Production-ready.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4 (`@theme inline`)
- **Fonts:** Playfair Display (serif) + Nunito Sans (sans) via Google Fonts
- **Deployment:** Vercel / Netlify

---

## About Dr. Maya Reynolds, PsyD

*Fictional therapist profile used as the single source of truth for all website copy.*

- **Location:** 123th Street 45 W, Santa Monica, CA 90401
- **Specialties:** Anxiety & Panic, Trauma & EMDR, Burnout & Perfectionism
- **Modalities:** CBT, EMDR, Mindfulness-Based Stress Reduction, Body-Oriented Therapy
- **Clients:** High-achieving adults, entrepreneurs, creatives, professionals
- **Sessions:** In-person (Santa Monica) + Telehealth (California-wide)
- **Profile:** [Google Doc](https://docs.google.com/document/d/1-IJVKEjuqV9CTd9QH16UNHJ7SQfdiweS4oAIZ8vmgHU/edit?usp=sharing)
- **Office Images:** [Google Drive Folder](https://drive.google.com/drive/folders/1fbAMSdqGF_ltNc0JiltkpIr_C26kRvLs?usp=drive_link)

---

## What Was Done

### Part 1 — Clone (`clone` branch)
- Recreated the full [Lilac template](https://lilac-template.squarespace.com/) homepage (password: `lilac`)
- Matched layout, section order, grid systems, arched image clip-paths, accordion interactions
- Responsive across desktop, tablet, and mobile
- Reusable Tailwind CSS theme variables for colors and fonts

### Part 2 — Redesign (`client` branch)
- **Color Palette:** Replaced lilac theme with a calm coastal palette (cream, muted blue-green, olive, warm neutrals)
- **Typography:** Playfair Display (headings) + Nunito Sans (body)
- **Copy:** Every headline, paragraph, service description, FAQ, credential, and CTA rewritten from the profile
- **SEO:** H1 includes "Anxiety & Trauma Therapist in Santa Monica, CA"; keywords naturally integrated throughout
- **Images:** Dr. Maya's headshot from Google Drive; Unsplash photos chosen to match coastal therapy theme
- **Sections rewritten:**
  - Hero — "Find calm in the chaos"
  - About — "Reclaim your peace of mind"
  - Services — Anxiety & Panic, Trauma & EMDR, Burnout & Perfectionism
  - Alone — "You don't have to keep pushing through alone"
  - Bio — "Hi, I'm Dr. Maya" with arched headshot
  - FAQ — 3 questions about sessions, telehealth, and specialties
  - Credentials — Education (PsyD), Licensure (CA), Specializations (CBT/EMDR/MBSR)
  - CTA — "Begin your healing journey"
  - Footer — Santa Monica address, email, phone, hours

### Part 3 — New Section (`newSection` branch)
- Created **"Your Healing Space"** — a custom office section not in the original template
- 2 real office images from the profile's Google Drive folder
- Asymmetric gallery layout (large landscape + tall portrait)
- Detail strip: Location (Santa Monica), Sessions (In-person & Telehealth), Environment (Private & Confidential)
- Warm, inviting copy about the therapy office experience

### Part 4 — Video Walkthrough
- _[Add Loom link here]_
- Desktop + mobile walkthrough
- Client-facing demo explaining design choices, copy decisions, and how profile information was used

---

## Running Locally

```bash
git clone https://github.com/vjtanishq16/myGrowTherapy.git
cd myGrowTherapy
npm install
npm run dev
```



---

## Project Structure

```
app/
├── globals.css          # Tailwind theme, color palette, button styles
├── layout.tsx           # SEO metadata, Google Fonts, HTML wrapper
├── page.tsx             # Homepage — renders all sections
└── components/
    ├── Navbar.tsx        # Fixed nav with scroll effect + mobile menu
    ├── Hero.tsx          # Hero with arched image + CTA
    ├── About.tsx         # Full-bleed two-column about section
    ├── Specialties.tsx   # 3 service cards with circular images
    ├── Alone.tsx         # Symptom checklist + empathy section
    ├── HiImLilac.tsx     # Dr. Maya bio with arched headshot
    ├── Faq.tsx           # Accordion FAQ with arched side image
    ├── OurOffice.tsx     # ✨ NEW — Office gallery + details
    ├── Credentials.tsx   # Education, licensure, specializations
    ├── GetStarted.tsx    # Olive CTA banner
    └── Footer.tsx        # Contact info, hours, navigation, policies
```

---

*Built for the Grow My Therapy Front-End Developer Internship — Stage 2 Assignment*

