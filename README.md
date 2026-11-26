# BROWN Coffee & Roastery — Premium Coffee Shop Website

A modern, responsive coffee shop website inspired by **BROWN Coffee Cambodia** (est. 2009 in Phnom Penh), built entirely with semantic **HTML5**, **CSS3**, and **Vanilla JavaScript**.

---

## ☕ Live Project Preview & Aesthetics

The website captures the warm architectural aesthetic and specialty coffee heritage pioneered by BROWN Coffee:
- **Official Brand Logo**: The iconic `BROWN COFFEE AND BAKERY` logo featuring the coffee cup ring stain as the letter "O", seamlessly applied to the header, mobile drawer, footer, 3D card, and authentication screens.
- **Dedicated Authentication Experience**: 100% matched login design with Cambodian phone prefix (`🇰🇭 +855`), password visibility toggles, ABA Mobile (`ABA PAY`) instant login, Google, Apple auth, and active loyalty profile simulation.
- **Warm Neutral Color Palette**: Espresso (`#161210`), Roastery Brown (`#211A15`), Terracotta/Amber Bronze (`#B87333`, `#C98236`), Cream (`#FAF9F5`), and Sand (`#F7F5F0`).
- **Refined Typography**: Editorial headings in `Playfair Display` paired with modern UI text in `Plus Jakarta Sans`.
- **Architectural & Coffee Culture Imagery**: High-resolution photography of slow-drip cold brews, artisanal palm sugar lattes, certified SCA baristas, highland Mondulkiri plantations, and raw concrete architectural cafes.

---

## 🌟 Structure & Features Completed

### A. Navigation Header
- **Original Brand Identity**: Bespoke SVG monogram combining geometric coffee bean curves and architectural arches.
- **Navigation Links**: Home, Menu, BROWN Card, Locations, Merchandise, News & Promos, Our Story, Careers.
- **Top Announcement Bar**: Dismissible promotional bar with session persistence.
- **Interactive Action Bar**:
  - Instant Search trigger with keyboard shortcut (`/` to open, `Esc` to close).
  - BROWN Club loyalty account trigger.
  - Coffee Bag / Cart trigger with dynamic count badge and bounce animation.
  - "Order Ahead" call to action.
- **Sticky & Frosted Glass Effect**: Seamless transition on scroll with blur backdrop.
- **Mobile Drawer Navigation**: Slide-out panel with smooth backdrop blur, touch-friendly links, and quick contacts.

### B. Hero Section (Promotional Slider)
- **Full-Width Photography Slider**: 4 editorial slides showcasing:
  1. *Artisanal Palm Sugar Iced Latte* (The Cambodian Classic)
  2. *Mondulkiri Plateau Honey Process* (Direct Trade Highlands)
  3. *Normandy Butter Pastries & Brunch* (Baked Fresh Daily at 5 AM)
  4. *Architectural Sanctuaries* (Modern Cambodian Architecture)
- **Controls & Motion**: Previous / Next navigation buttons, interactive progress bar indicators, slide counter (`01 / 04`), automatic slideshow with pause-on-hover, and mobile touch swipe support.

### C. Featured Products (Signature Menu Showcase)
- **Interactive Category Filter**: *All Highlights*, *Signatures & Espresso*, *Iced & Cold Brew*, *Matcha & Teas*, *Bakery & Bakes*.
- **10 Curated Products**: With Cambodian Riel (`៛`) and USD (`$`) pricing, tasting notes, and quick action buttons.
- **Quick-View Modal**: Detailed view with tasting notes, roast profile, origin information, size selection (Small / Regular / Large), milk customisation (Fresh Milk, Oat Milk, Soy Milk), quantity counter, and dynamic price calculation.

### D. Promotions & News
- **Editorial Magazine Layout**:
  - *The 2026 Mondulkiri Harvest* (Anaerobic fermentation micro-lots with Bunong farmers)
  - *Roaster's Tasting Lab* (Weekly public sensory cuppings at BKK1)
  - *The Eco-Cup Movement* (Over 120,000 single-use cups saved with BYO tumbler rewards)
- **Story Reader Modal**: Full articles with formatted typography, citations, and instant copy link.

### E. BROWN Card & Loyalty Club
- **Interactive 3D Perspective Card**: Reacts dynamically to mouse movement with 3D tilt angles and realistic metallic gold foil light reflection.
- **Tier Switcher**: Live preview between *Silver*, *Gold Roaster*, and *Black Reserve* tiers.
- **Membership Privileges Breakdown**: Earn 1 Bean per $1, Cashless KHQR tap, free birthday handcrafted drinks, and Double Bean Tuesdays.
- **Digital Card Activation Modal**: Custom name and phone input that activates and updates the card visual on the page.

### F. Mobile Application Section
- **Device Frame Mockup**: High-fidelity smartphone screen simulating real app interface: member name, bean balance, digital barcode, quick actions, and instant re-order.
- **Feature Highlights**: Order ahead & skip the line, milk & sweetness customisation, and national KHQR / ABA integration.
- **Store Badges**: App Store and Google Play visual buttons.
- **SMS Download Link**: Working Cambodian phone number input with instant toast feedback.

### G. Store Locations Showcase
- **City Filters**: Filter between *All Boutiques (25+)*, *Phnom Penh*, and *Siem Reap*.
- **Store Cards**: High-res architectural photography, real addresses, hours (6:30 AM – 9:30 PM), status badge (*OPEN NOW*), phone buttons, and amenities tags.
- **Interactive Map & Store Details Modal**: Simulated architectural map preview, address details, and directions prompt.

### H. Merchandise & Specialty Beans
- **Atelier Products**:
  - Matte Ceramic Roaster Mug (350ml)
  - Double-Walled Thermal Tumbler (500ml)
  - Origami Ceramic Dripper & Borosilicate Server Set
  - Mondulkiri Honey Washed Single Origin (250g Whole Bean)
- **Quick Add to Bag**: Adds directly to the cart drawer with instant toast confirmation.

### I. Our Story / Heritage
- **The Cambodian Specialty Coffee Journey**: Story of Cambodian university graduates and architects who founded BROWN in 2009.
- **Timeline Milestones**: 2009 (First store on St. 214) → 2014 (Mondulkiri Direct Trade) → 2018 (BROWN Barista Academy) → 2026 (25+ Boutiques).
- **Architectural 4-Image Mosaic**: Roasting lab, latte art craft, highland farm, and boutique interior.

### J. Footer & Extras
- **Full Commercial Footer**: Brand logo, mission, quick links, store contacts, operating hours, and Khmer script tagline (`ប្រោន កាហ្វេ`).
- **Social Media Links**: Facebook, Instagram, Telegram, LinkedIn.
- **Payment Badges**: ABA PAY, KHQR, Bakong, Visa, Mastercard.
- **Interactive Shopping Bag Drawer**: Slide-out cart with item increments, subtotal calculation, Cambodian Riel conversion, and checkout simulation.
- **Toast Alert System**: Floating alerts for cart actions, newsletter subscriptions, and card activations.
- **Back to Top Button**: Floating circular SVG progress ring indicating page scroll percentage.

---

## 📁 Project Structure

```
Brown/
│
├── index.html                   # Semantic HTML5 single-page structure
├── login.html                   # Dedicated BROWN Coffee & Bakery login page
│
├── css/
│   └── style.css                # CSS3 stylesheet with design tokens & responsive queries
│
├── js/
│   └── main.js                  # Vanilla JavaScript application & state
│
├── assets/
│   ├── images/
│   │   ├── hero/                # 4 high-res hero slides
│   │   ├── products/            # 10 signature menu items
│   │   ├── news/                # 3 editorial campaign photos
│   │   ├── stores/              # 4 architectural boutique locations
│   │   ├── merch/               # 4 merchandise & bean items
│   │   └── story/               # 4 heritage & roasting images
│   ├── icons/
│   └── fonts/
│
└── README.md                    # Project documentation & run guide
```

---

## 🚀 How to Run the Website Locally

### Option 1: Direct File Open (Zero Dependencies)
Simply double-click `index.html` or open it with any web browser (Google Chrome, Microsoft Edge, Safari, Firefox).

### Option 2: Using Python's Local Server (Recommended)
Open a terminal in the project directory and run:

```bash
# Python 3
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

---

## 📱 Responsive Testing Breakdown

Tested across standard responsive screen widths:
- **1440px+**: Spacious editorial grid, 4-column merchandise, full 3D card tilt.
- **1024px** (Tablets Landscape): 2-column news, balanced typography.
- **768px** (Tablets Portrait): Responsive mobile header, stacked sections, touch-friendly sliders.
- **390px / 375px** (Mobile Phones): Clean vertical cards, slide-out drawer navigation, sticky bottom-friendly buttons, zero horizontal overflow.

---

## ♿ Accessibility & Standards
- Semantic HTML5 landmark tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`).
- Fully keyboard-accessible navigation and modals with `Escape` dismiss.
- Search shortcut `/` accessible across the entire page.
- ARIA roles and labels on all buttons and modal dialogs.
- `prefers-reduced-motion` media query respected for users with motion sensitivity.
