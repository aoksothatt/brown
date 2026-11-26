/**
 * BROWN COFFEE & ROASTERY — MAIN JAVASCRIPT
 * Inspired by BROWN Coffee Cambodia (Est. 2009)
 * Pure Vanilla JavaScript — High Performance, Accessible & Responsive
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. PRODUCT & STORE & STORY DATA
     ========================================================================== */
  const PRODUCTS_DATA = {
    p1: {
      id: 'p1',
      name: 'Palm Sugar Iced Latte',
      khmerName: 'ឡាតេទឹកត្នោតទឹកកក',
      category: 'signature',
      categoryName: 'Cambodian Signature',
      priceUSD: 3.45,
      priceKHR: '14,000៛',
      image: 'assets/images/products/prod-palm-sugar.jpg',
      badge: 'BROWN ICON',
      desc: 'Our iconic Cambodian creation. Organic artisanal Kampong Speu palm sugar syrup slow-steeped with our signature Mondulkiri espresso roast and fresh velvet chilled milk.',
      tastingNotes: 'Kampong Speu toffee, wild palm nectar, roasted hazelnut',
      origin: 'Mondulkiri Highlands (850m) & Kampong Speu GI Palm Sugar',
      roastLevel: 'Medium-Dark House Roast',
      calories: '210 kcal',
      dairyOptions: ['Fresh Whole Milk', 'Oat Milk (+ $0.50)', 'Soy Milk (+ $0.40)'],
      sizes: [
        { label: 'Small (8oz)', priceDiff: -0.40 },
        { label: 'Regular (12oz)', priceDiff: 0 },
        { label: 'Large (16oz)', priceDiff: 0.50 }
      ]
    },
    p2: {
      id: 'p2',
      name: 'BROWN 18-Hour Cold Brew',
      khmerName: 'ខូលដ៍ប្រ៊ូ ១៨ម៉ោង',
      category: 'iced',
      categoryName: 'Cold Brew Reserve',
      priceUSD: 3.85,
      priceKHR: '15,500៛',
      image: 'assets/images/products/prod-cold-brew.jpg',
      badge: 'SLOW STEEPED',
      desc: 'Cold-extracted for 18 hours in small batches using triple-filtered chilled water and coarse-ground Mondulkiri washed beans. Ultra-smooth, low acidity, naturally sweet finish.',
      tastingNotes: 'Dark cocoa nibs, black cherry, cane molasses',
      origin: '100% Mondulkiri Arabica Single Lot',
      roastLevel: 'Medium Roast',
      calories: '5 kcal',
      dairyOptions: ['Black / Clean', 'Splash of Oat Milk (+ $0.40)', 'Sweet Cream Float (+ $0.60)'],
      sizes: [
        { label: 'Standard Bottle (330ml)', priceDiff: 0 },
        { label: 'Large Bottle (500ml)', priceDiff: 1.20 }
      ]
    },
    p3: {
      id: 'p3',
      name: 'Velvet Spanish Latte',
      khmerName: 'ស្ប៉ានីសឡាតេ',
      category: 'signature',
      categoryName: 'Signature Sweet',
      priceUSD: 3.65,
      priceKHR: '14,800៛',
      image: 'assets/images/products/prod-spanish-latte.jpg',
      badge: 'CREAMY FAVORITE',
      desc: 'A crowd favorite since 2011. Double shot of intense house espresso poured over lightly sweetened condensed milk and silky microfoam. Rich, balanced, and comforting.',
      tastingNotes: 'Dulce de leche, toasted macadamia, creamy espresso',
      origin: 'Signature Roastery House Blend',
      roastLevel: 'Dark Roast',
      calories: '240 kcal',
      dairyOptions: ['Condensed & Fresh Milk', 'Oat Condensed Milk (+ $0.60)'],
      sizes: [
        { label: 'Regular (12oz)', priceDiff: 0 },
        { label: 'Large (16oz)', priceDiff: 0.50 }
      ]
    },
    p4: {
      id: 'p4',
      name: 'Mondulkiri Honey Pour-Over',
      khmerName: 'កាហ្វេតម្រងម៉ុងឌុលគីរី',
      category: 'signature',
      categoryName: 'Single Origin',
      priceUSD: 4.20,
      priceKHR: '17,000៛',
      image: 'assets/images/products/prod-pourover.jpg',
      badge: 'POUR-OVER BAR',
      desc: 'Sourced from our partner family farms in Dak Dam, Mondulkiri. Hand-brewed with an Origami ceramic cone at 92°C to bring out exquisite floral jasmine and crisp citrus notes.',
      tastingNotes: 'Jasmine blossoms, Meyer lemon, wild floral honey',
      origin: 'Dak Dam Highland, Mondulkiri (850m)',
      roastLevel: 'Light-Medium Filter Roast',
      calories: '2 kcal',
      dairyOptions: ['Served Pure & Black (No Milk)'],
      sizes: [
        { label: 'Carafe (300ml)', priceDiff: 0 }
      ]
    },
    p5: {
      id: 'p5',
      name: 'Kyoto Matcha Espresso Fusion',
      khmerName: 'ម៉ាតឆាអេស្ព្រេសសូ',
      category: 'tea',
      categoryName: 'Artisan Fusion',
      priceUSD: 3.95,
      priceKHR: '16,000៛',
      image: 'assets/images/products/prod-matcha-espresso.jpg',
      badge: 'CEREMONIAL',
      desc: 'First-harvest ceremonial grade Uji matcha whisked with pure bamboo chasen, layered over iced fresh milk and crowned with a slow float of single-origin espresso.',
      tastingNotes: 'Rich vegetal umami, bittersweet chocolate, creamy body',
      origin: 'Uji, Kyoto (Japan) & Phnom Penh Roast',
      roastLevel: 'Espresso + Ceremonial Matcha',
      calories: '185 kcal',
      dairyOptions: ['Fresh Milk', 'Oat Milk (+ $0.50)', 'Almond Milk (+ $0.50)'],
      sizes: [
        { label: 'Regular (12oz)', priceDiff: 0 },
        { label: 'Large (16oz)', priceDiff: 0.50 }
      ]
    },
    p6: {
      id: 'p6',
      name: 'Salted Cloud Caramel Latte',
      khmerName: 'ខារ៉ាមែលពពកអំបិលកំពត',
      category: 'iced',
      categoryName: 'Cold Foam Creation',
      priceUSD: 3.75,
      priceKHR: '15,200៛',
      image: 'assets/images/products/prod-cloud-latte.jpg',
      badge: 'SEASONAL',
      desc: 'Chilled house espresso latte crowned with our signature velvety sea-salt whipped cloud foam and garnished with a pinch of Kampot artisanal Fleur de Sel.',
      tastingNotes: 'Sweet buttery caramel, savoury Kampot sea salt, velvet foam',
      origin: 'House Espresso Blend + Kampot Sea Salt',
      roastLevel: 'Medium-Dark Roast',
      calories: '225 kcal',
      dairyOptions: ['Fresh Milk', 'Oat Milk (+ $0.50)'],
      sizes: [
        { label: 'Regular (12oz)', priceDiff: 0 },
        { label: 'Large (16oz)', priceDiff: 0.50 }
      ]
    },
    p7: {
      id: 'p7',
      name: 'Normandy Pure Butter Croissant',
      khmerName: 'នំប៉័ងក្រូសង់ប៊័រ',
      category: 'bakery',
      categoryName: 'French Bakery',
      priceUSD: 2.60,
      priceKHR: '10,500៛',
      image: 'assets/images/products/prod-croissant.jpg',
      badge: 'BAKED AT 5 AM',
      desc: '72-layer hand-laminated pastry baked fresh every morning using French AOP Isigny Sainte-Mère cultured butter. Crackling golden crust with an airy, honeycomb interior.',
      tastingNotes: 'Warm toasted butter, subtle sourdough tang, flaky crumb',
      origin: 'Artisan Pastry Studio, Phnom Penh',
      roastLevel: 'Baked Daily',
      calories: '280 kcal',
      dairyOptions: ['Contains Dairy & Gluten'],
      sizes: [
        { label: 'Single Warm Pastry', priceDiff: 0 },
        { label: 'Pastry Box of 4 (-10%)', priceDiff: 6.75 }
      ]
    },
    p8: {
      id: 'p8',
      name: 'Belgian Dark Pain au Chocolat',
      khmerName: 'នំប៉័ងសូកូឡាបែលហ្ស៊ិក',
      category: 'bakery',
      categoryName: 'Artisan Chocolat',
      priceUSD: 2.95,
      priceKHR: '12,000៛',
      image: 'assets/images/products/prod-chocolat.jpg',
      badge: 'BELGIAN COCOA',
      desc: 'Flaky laminated butter dough embracing two rich batons of 70% dark Belgian chocolate. Warmly toasted upon order so the chocolate melts gently inside.',
      tastingNotes: 'Bittersweet dark cocoa, caramelized butter, golden crust',
      origin: 'Artisan Pastry Studio, Phnom Penh',
      roastLevel: 'Baked Daily',
      calories: '310 kcal',
      dairyOptions: ['Contains Dairy & Gluten'],
      sizes: [
        { label: 'Single Warm Pastry', priceDiff: 0 },
        { label: 'Pastry Box of 4 (-10%)', priceDiff: 7.65 }
      ]
    },
    p9: {
      id: 'p9',
      name: 'Sparkling Yuzu Cascara Fizz',
      khmerName: 'តែផ្កាកាហ្វេកាល់ស្ការ៉ា',
      category: 'tea',
      categoryName: 'Refresher & Botanical',
      priceUSD: 3.50,
      priceKHR: '14,200៛',
      image: 'assets/images/products/prod-yuzu-tea.jpg',
      badge: 'SUSTAINABLE BOTANICAL',
      desc: 'Brewed sun-dried organic coffee cherry husk (cascara) from Mondulkiri, infused with cold-pressed Japanese yuzu citrus and sparkling mineral water. Light, tart, and uplifting.',
      tastingNotes: 'Wild hibiscus, dried rosehips, crisp tart yuzu citrus',
      origin: 'Mondulkiri Organic Coffee Cherries',
      roastLevel: 'Botanical Cold Infusion',
      calories: '75 kcal',
      dairyOptions: ['Dairy-Free / Vegan'],
      sizes: [
        { label: 'Regular (16oz)', priceDiff: 0 }
      ]
    },
    p10: {
      id: 'p10',
      name: 'Kyoto Slow-Drip Reserve',
      khmerName: 'កាហ្វេតំណក់គ្យូតូ',
      category: 'iced',
      categoryName: 'Japanese Drip Tower',
      priceUSD: 4.10,
      priceKHR: '16,500៛',
      image: 'assets/images/products/prod-kyoto-drip.jpg',
      badge: 'SLOW DRIP',
      desc: 'Crafted over 10 hours drop by drop through our antique glass Japanese drip towers. Creates an exceptionally heavy, liqueur-like body with zero harsh bitterness.',
      tastingNotes: 'Cedar wood, black currant, dark chocolate liqueur',
      origin: 'Mondulkiri Natural Reserve Micro-Lot',
      roastLevel: 'Dark Roastery Roast',
      calories: '4 kcal',
      dairyOptions: ['Served over Hand-Carved Clear Ice Sphere'],
      sizes: [
        { label: 'Glass with Ice Sphere', priceDiff: 0 }
      ]
    }
  };

  const STORES_DATA = {
    s1: {
      id: 's1',
      name: 'BKK1 Flagship Roastery',
      khmerName: 'ប្រោន បឹងកេងកង ១',
      tag: 'FLAGSHIP ROASTERY',
      city: 'phnom-penh',
      address: 'Corner Street 57 & Street 294, Boeung Keng Kang 1, Phnom Penh',
      hours: 'Mon – Sun: 6:30 AM – 9:30 PM',
      phone: '+855 (0) 23 215 215',
      image: 'assets/images/stores/store-bkk1.jpg',
      description: 'Our iconic flagship boutique featuring a visible 12kg Probat roaster lab, high-ceiling raw concrete architecture, a tranquil bamboo courtyard garden, and dedicated meeting studios.',
      amenities: ['12kg Specialty Roaster Lab', 'Pour-Over Sensory Bar', 'Outdoor Garden Courtyard', 'Fiber Wi-Fi & Workspaces', 'Private Meeting Studio']
    },
    s2: {
      id: 's2',
      name: 'Riverside Heritage Boutique',
      khmerName: 'ប្រោន មាត់ទន្លេ',
      tag: 'COLONIAL HERITAGE',
      city: 'phnom-penh',
      address: 'No. 1 Sisowath Quay, Wat Phnom Commune, Daun Penh, Phnom Penh',
      hours: 'Mon – Sun: 6:30 AM – 10:00 PM',
      phone: '+855 (0) 23 215 216',
      image: 'assets/images/stores/store-riverside.jpg',
      description: 'Housed within a restored French colonial conservation building overlooking the majestic Tonle Sap and Mekong river convergence. Perfect for sunset iced lattes on the balcony.',
      amenities: ['Second-Story River Balcony', 'Cold Brew Nitro Tap', 'Artisan Bakery Display', 'Sunset Cocktail Coffees']
    },
    s3: {
      id: 's3',
      name: 'Toul Kork Treehouse Roastery',
      khmerName: 'ប្រោន ទួលគោក',
      tag: 'DRIVE-THRU & ROASTERY',
      city: 'phnom-penh',
      address: 'Street 315 (near TK Avenue), Toul Kork, Phnom Penh',
      hours: 'Mon – Sun: 6:00 AM – 9:00 PM',
      phone: '+855 (0) 23 215 217',
      image: 'assets/images/stores/store-toulkork.jpg',
      description: 'Surrounded by mature rainforest trees with an open glass atrium and Phnom Penh’s most convenient specialty coffee drive-thru lane for your morning commute.',
      amenities: ['Express Drive-Thru Lane', 'Glass Atrium Seating', 'Family & Kids Zone', 'Spacious Free Parking']
    },
    s4: {
      id: 's4',
      name: 'Wat Bo Heritage Boutique',
      khmerName: 'ប្រោន វត្តបូ សៀមរាប',
      tag: 'SIEM REAP HERITAGE',
      city: 'siem-reap',
      address: 'Wat Bo Village, Salakamreuk Commune, Siem Reap (Near Wat Bo Temple)',
      hours: 'Mon – Sun: 6:30 AM – 9:30 PM',
      phone: '+855 (0) 63 969 969',
      image: 'assets/images/stores/store-siemreap.jpg',
      description: 'A serene sanctuary in Siem Reap’s creative Wat Bo quarter. Featuring hand-chiseled Angkor sandstone walls, indigenous lotus ponds, and rotary bicycle racks for temple explorers.',
      amenities: ['Angkor Sandstone Courtyard', 'Local Ceramic Art Gallery', 'Pour-Over Tasting Counter', 'Bicycle Racks & Maintenance Pump']
    }
  };

  const NEWS_DATA = {
    n1: {
      id: 'n1',
      title: "The 2026 Mondulkiri Harvest: Unveiling This Year's Anaerobic Fermentation Lots",
      category: 'ORIGIN REPORT',
      date: 'November 2026',
      image: 'assets/images/news/news-1.jpg',
      author: 'Sovannarith Chhay — Head of Green Coffee Sourcing',
      content: `
        <p class="lead-p">Three weeks ago, our green buying expedition returned from the red clay highlands of Dak Dam, Mondulkiri. At an altitude of 850 meters above sea level, coffee cherries thrive under the natural shade canopy of indigenous hardwood trees.</p>
        <p>This harvest season marks our 12th year of direct trade partnerships with 45 indigenous Bunong farming families. Together, we introduced controlled anaerobic 72-hour fermentation tanks to enhance the natural tropical fruit and floral aromas of our Bourbon and Catimor varieties.</p>
        <p>The results from the cupping table exceeded every expectation: cupping scores averaged 86.5 with remarkable tasting notes of wild passionfruit, dried tamarind, raw cane sugar, and sweet jasmine blossoms. These micro-lots are now resting in hermetic GrainPro bags and will be roasted in Phnom Penh starting next week.</p>
        <div class="modal-quote">"Direct trade isn't charity; it is recognizing that Cambodia's terroir produces world-class specialty coffee when farmers receive fair, premium prices."</div>
      `
    },
    n2: {
      id: 'n2',
      title: "Roaster's Tasting Lab: Weekly Public Cuppings at BKK1 Flagship",
      category: 'ROASTERY EVENTS',
      date: 'November 2026',
      image: 'assets/images/news/news-2.jpg',
      author: 'Vireak Meas — Master Roaster',
      content: `
        <p class="lead-p">Ever wondered how professional coffee judges evaluate acidity, body, sweetness, and aftertaste? Starting this Saturday, our BKK1 Flagship Roastery is opening its doors for weekly public sensory cuppings.</p>
        <p>Every Saturday from 9:30 AM to 11:00 AM, up to 10 guests will join our lead roasting team around the Brazilian cupping table. You will break crusts, slurp freshly ground lots with silver spoons, and learn to distinguish processing methods—from washed to natural honey and anaerobic maceration.</p>
        <p>Admission is complimentary for BROWN Club Black Reserve members and $5 for the general public (includes a complimentary 100g taster bag of your favorite roast of the day).</p>
      `
    },
    n3: {
      id: 'n3',
      title: "The Eco-Cup Movement: Over 120,000 Single-Use Cups Saved",
      category: 'SUSTAINABILITY',
      date: 'Ongoing Initiative',
      image: 'assets/images/news/news-3.jpg',
      author: 'BROWN Green Committee',
      content: `
        <p class="lead-p">In January 2023, we set an ambitious goal: to reduce single-use plastic and paper waste across all our 25+ boutiques in Phnom Penh and Siem Reap.</p>
        <p>Today, we are humbled to announce that our guests have collectively saved more than 120,000 single-use takeaway cups by bringing their own tumblers and reusable mugs. Every guest who brings their own cup receives an instant 10% discount on any handcrafted drink, plus 2x loyalty Beans on their digital BROWN Card.</p>
        <p>Furthermore, all our in-store cold drinks are served in 100% plant-based compostable PLA cups, and all straws are made from rice flour and cassava. Together, we keep Cambodia beautiful.</p>
      `
    }
  };

  /* ==========================================================================
     2. GLOBAL STATE (Cart, Modal State)
     ========================================================================== */
  let cart = [];
  const KHR_EXCHANGE_RATE = 4050; // 1 USD = 4,050 KHR

  // Load cart from localStorage if present
  try {
    const savedCart = localStorage.getItem('brown_cart');
    if (savedCart) {
      cart = JSON.parse(savedCart);
    }
  } catch (e) {
    cart = [];
  }

  /* ==========================================================================
     3. TOAST NOTIFICATION SYSTEM
     ========================================================================== */
  function showToast(message, type = 'info', duration = 3500) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = '☕';
    if (type === 'success') icon = '✓';
    if (type === 'error') icon = '✕';

    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <div class="toast-text">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-out');
      toast.addEventListener('animationend', () => toast.remove());
    }, duration);
  }

  /* ==========================================================================
     4. ANNOUNCEMENT BAR DISMISS
     ========================================================================== */
  const announcementBar = document.getElementById('announcementBar');
  const closeAnnouncement = document.getElementById('closeAnnouncement');

  if (closeAnnouncement && announcementBar) {
    if (sessionStorage.getItem('brown_announcement_closed')) {
      announcementBar.classList.add('hidden');
    }

    closeAnnouncement.addEventListener('click', () => {
      announcementBar.classList.add('hidden');
      sessionStorage.setItem('brown_announcement_closed', 'true');
    });
  }

  /* ==========================================================================
     5. STICKY HEADER & SCROLL BEHAVIOR & BACK-TO-TOP
     ========================================================================== */
  const siteHeader = document.getElementById('siteHeader');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const progressCircle = document.querySelector('.progress-ring__circle');
  const circumference = 2 * Math.PI * 20; // r=20

  if (progressCircle) {
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = `${circumference}`;
  }

  function handleScroll() {
    const scrollY = window.scrollY;

    // Header sticky styling
    if (siteHeader) {
      if (scrollY > 50) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Back to top visibility & circular progress
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0 && progressCircle) {
        const scrollPercent = scrollY / totalHeight;
        const offset = circumference - scrollPercent * circumference;
        progressCircle.style.strokeDashoffset = offset;
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Active Navigation Links using IntersectionObserver */
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('main > section[id]');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href').replace('#', '');
            if (href === currentId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(sec => sectionObserver.observe(sec));
  }

  /* ==========================================================================
     6. MOBILE DRAWER NAVIGATION
     ========================================================================== */
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    mobileMenuToggle.classList.add('active');
    mobileMenuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileMenuToggle.classList.remove('active');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileMenuToggle && mobileDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileMenu);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMobileMenu);

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  /* ==========================================================================
     7. HERO SLIDER CAROUSEL
     ========================================================================== */
  const heroSlider = document.getElementById('heroSlider');
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroPrevBtn = document.getElementById('heroPrevBtn');
  const heroNextBtn = document.getElementById('heroNextBtn');
  const heroPagination = document.getElementById('heroPagination');
  const heroCurrentNum = document.getElementById('heroCurrentNum');

  let currentSlide = 0;
  const totalSlides = heroSlides.length;
  let heroAutoPlayTimer = null;
  const AUTOPLAY_INTERVAL = 6000;

  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    heroSlides.forEach((slide, idx) => {
      if (idx === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Update pagination dots
    if (heroPagination) {
      const dots = heroPagination.querySelectorAll('.page-indicator');
      dots.forEach((dot, idx) => {
        if (idx === index) {
          dot.classList.add('active');
          dot.setAttribute('aria-selected', 'true');
        } else {
          dot.classList.remove('active');
          dot.setAttribute('aria-selected', 'false');
        }
      });
    }

    // Update counter
    if (heroCurrentNum) {
      heroCurrentNum.textContent = String(index + 1).padStart(2, '0');
    }

    currentSlide = index;
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    heroAutoPlayTimer = setInterval(nextSlide, AUTOPLAY_INTERVAL);
  }

  function stopAutoplay() {
    if (heroAutoPlayTimer) {
      clearInterval(heroAutoPlayTimer);
      heroAutoPlayTimer = null;
    }
  }

  if (heroSlides.length > 0) {
    if (heroNextBtn) {
      heroNextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoplay();
      });
    }

    if (heroPrevBtn) {
      heroPrevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoplay();
      });
    }

    if (heroPagination) {
      const dots = heroPagination.querySelectorAll('.page-indicator');
      dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
          const targetIndex = parseInt(e.target.getAttribute('data-index'), 10);
          goToSlide(targetIndex);
          startAutoplay();
        });
      });
    }

    // Pause on hover
    if (heroSlider) {
      heroSlider.addEventListener('mouseenter', stopAutoplay);
      heroSlider.addEventListener('mouseleave', startAutoplay);

      // Touch swipe support
      let touchStartX = 0;
      let touchEndX = 0;

      heroSlider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      heroSlider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
          nextSlide();
          startAutoplay();
        } else if (touchEndX - touchStartX > 50) {
          prevSlide();
          startAutoplay();
        }
      }, { passive: true });
    }

    startAutoplay();
  }

  /* ==========================================================================
     8. PRODUCT FILTER TABS
     ========================================================================== */
  const productFilterTabs = document.getElementById('productFilterTabs');
  const productCards = document.querySelectorAll('.product-card');

  if (productFilterTabs && productCards.length > 0) {
    const tabs = productFilterTabs.querySelectorAll('.filter-tab');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        const filter = tab.getAttribute('data-filter');

        productCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            card.style.opacity = '0';
            setTimeout(() => {
              card.style.transition = 'opacity 0.35s ease';
              card.style.opacity = '1';
            }, 10);
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ==========================================================================
     9. INTERACTIVE 3D BROWN CARD & TIER SWITCHER
     ========================================================================== */
  const card3dScene = document.getElementById('card3dScene');
  const membershipCardVisual = document.getElementById('membershipCardVisual');
  const cardFoilSheen = document.querySelector('.card-foil-sheen');
  const cardTierBadge = document.getElementById('cardTierBadge');
  const tierButtons = document.querySelectorAll('.tier-btn');

  if (card3dScene && membershipCardVisual) {
    card3dScene.addEventListener('mousemove', (e) => {
      const rect = card3dScene.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 16;

      membershipCardVisual.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      if (cardFoilSheen) {
        const sheenX = ((x / rect.width) * 100) - 50;
        const sheenY = ((y / rect.height) * 100) - 50;
        cardFoilSheen.style.transform = `translate(${sheenX}px, ${sheenY}px) rotate(25deg)`;
      }
    });

    card3dScene.addEventListener('mouseleave', () => {
      membershipCardVisual.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }

  // Tier Switcher
  tierButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tierButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tier = btn.getAttribute('data-tier');
      if (membershipCardVisual) {
        membershipCardVisual.classList.remove('tier-silver', 'tier-gold', 'tier-black');
        membershipCardVisual.classList.add(`tier-${tier}`);
      }

      if (cardTierBadge) {
        if (tier === 'silver') cardTierBadge.textContent = 'SILVER MEMBER';
        if (tier === 'gold') cardTierBadge.textContent = 'GOLD ROASTER';
        if (tier === 'black') cardTierBadge.textContent = 'BLACK RESERVE';
      }

      showToast(`Previewing BROWN Card: ${tier.toUpperCase()} Tier privileges`, 'info', 2500);
    });
  });

  /* ==========================================================================
     10. QUICK VIEW PRODUCT MODAL
     ========================================================================== */
  const quickViewModal = document.getElementById('quickViewModal');
  const quickViewModalContent = document.getElementById('quickViewModalContent');
  const closeQuickViewBtn = document.getElementById('closeQuickViewBtn');

  function openQuickView(productId) {
    const item = PRODUCTS_DATA[productId];
    if (!item || !quickViewModalContent) return;

    quickViewModalContent.innerHTML = `
      <div class="quickview-media">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="quickview-details">
        <span class="quickview-cat">${item.categoryName}</span>
        <h3 class="quickview-title">${item.name}</h3>
        <div class="quickview-price-row">
          <span class="usd-price" id="modalPriceVal">$${item.priceUSD.toFixed(2)}</span>
          <small style="font-size:0.875rem; color:var(--color-text-muted); font-weight:normal;"> / ${item.priceKHR}</small>
        </div>
        <p class="quickview-desc">${item.desc}</p>
        
        <div class="quickview-options">
          <label class="option-group-label">Size Selection:</label>
          <div class="size-selector">
            ${item.sizes.map((s, idx) => `
              <button class="option-btn size-opt-btn ${idx === 0 ? 'selected' : ''}" data-diff="${s.priceDiff}" data-size="${s.label}">
                ${s.label}
              </button>
            `).join('')}
          </div>

          <label class="option-group-label">Brew / Milk Customisation:</label>
          <div class="temp-selector">
            ${item.dairyOptions.map((opt, idx) => `
              <button class="option-btn milk-opt-btn ${idx === 0 ? 'selected' : ''}" data-opt="${opt}">
                ${opt}
              </button>
            `).join('')}
          </div>

          <div style="font-size:0.8125rem; color:var(--color-text-secondary); margin-bottom:16px;">
            <strong>Tasting Notes:</strong> ${item.tastingNotes}<br>
            <strong>Origin:</strong> ${item.origin}
          </div>
        </div>

        <div class="qty-controls">
          <button class="qty-btn" id="modalQtyMinus">-</button>
          <span class="qty-val" id="modalQtyVal">1</span>
          <button class="qty-btn" id="modalQtyPlus">+</button>
          
          <button class="btn btn-primary" id="modalAddBagBtn" style="margin-left:auto;">
            Add to Bag • <span id="modalBtnTotal">$${item.priceUSD.toFixed(2)}</span>
          </button>
        </div>
      </div>
    `;

    // Modal Interactive Options logic
    let currentQty = 1;
    let basePrice = item.priceUSD;
    let sizeDiff = 0;
    let selectedSize = item.sizes[0] ? item.sizes[0].label : 'Regular';
    let selectedMilk = item.dairyOptions[0] || 'Standard';

    const modalPriceVal = quickViewModalContent.querySelector('#modalPriceVal');
    const modalBtnTotal = quickViewModalContent.querySelector('#modalBtnTotal');
    const modalQtyVal = quickViewModalContent.querySelector('#modalQtyVal');
    const modalQtyMinus = quickViewModalContent.querySelector('#modalQtyMinus');
    const modalQtyPlus = quickViewModalContent.querySelector('#modalQtyPlus');
    const modalAddBagBtn = quickViewModalContent.querySelector('#modalAddBagBtn');

    function updateModalPricing() {
      const unitPrice = basePrice + sizeDiff;
      const total = unitPrice * currentQty;
      if (modalPriceVal) modalPriceVal.textContent = `$${unitPrice.toFixed(2)}`;
      if (modalBtnTotal) modalBtnTotal.textContent = `$${total.toFixed(2)}`;
      if (modalQtyVal) modalQtyVal.textContent = currentQty;
    }

    quickViewModalContent.querySelectorAll('.size-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        quickViewModalContent.querySelectorAll('.size-opt-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        sizeDiff = parseFloat(btn.getAttribute('data-diff')) || 0;
        selectedSize = btn.getAttribute('data-size');
        updateModalPricing();
      });
    });

    quickViewModalContent.querySelectorAll('.milk-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        quickViewModalContent.querySelectorAll('.milk-opt-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedMilk = btn.getAttribute('data-opt');
      });
    });

    if (modalQtyMinus) {
      modalQtyMinus.addEventListener('click', () => {
        if (currentQty > 1) {
          currentQty--;
          updateModalPricing();
        }
      });
    }

    if (modalQtyPlus) {
      modalQtyPlus.addEventListener('click', () => {
        currentQty++;
        updateModalPricing();
      });
    }

    if (modalAddBagBtn) {
      modalAddBagBtn.addEventListener('click', () => {
        addToCart({
          id: item.id + '-' + Date.now(),
          title: item.name,
          category: item.categoryName,
          price: basePrice + sizeDiff,
          image: item.image,
          quantity: currentQty,
          size: selectedSize,
          custom: selectedMilk
        });
        closeModal(quickViewModal);
      });
    }

    openModal(quickViewModal);
  }

  // Bind Quick View Triggers
  document.addEventListener('click', (e) => {
    const qvBtn = e.target.closest('.quick-view-btn');
    if (qvBtn) {
      const pid = qvBtn.getAttribute('data-id');
      openQuickView(pid);
    }
  });

  if (closeQuickViewBtn) {
    closeQuickViewBtn.addEventListener('click', () => closeModal(quickViewModal));
  }

  /* ==========================================================================
     11. STORE LOCATIONS FILTER & MODAL
     ========================================================================== */
  const locationFilterTabs = document.getElementById('locationFilterTabs');
  const storeCards = document.querySelectorAll('.store-card');
  const storeModal = document.getElementById('storeModal');
  const storeModalContent = document.getElementById('storeModalContent');
  const closeStoreModalBtn = document.getElementById('closeStoreModalBtn');

  if (locationFilterTabs && storeCards.length > 0) {
    const tabs = locationFilterTabs.querySelectorAll('.filter-tab');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const city = tab.getAttribute('data-city');

        storeCards.forEach(card => {
          const storeCity = card.getAttribute('data-city');
          if (city === 'all' || storeCity === city) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  function openStoreDetails(storeId) {
    const store = STORES_DATA[storeId];
    if (!store || !storeModalContent) return;

    storeModalContent.innerHTML = `
      <div style="aspect-ratio:16/9; border-radius:var(--radius-md); overflow:hidden; margin-bottom:20px;">
        <img src="${store.image}" alt="${store.name}" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <span class="sub-heading">${store.tag}</span>
      <h3 style="font-family:var(--font-serif); font-size:1.85rem; color:var(--color-roast); margin-bottom:4px;">${store.name}</h3>
      <div style="font-size:0.9375rem; color:var(--color-copper); font-weight:600; margin-bottom:14px;">${store.khmerName}</div>
      <p style="color:var(--color-text-secondary); line-height:1.6; margin-bottom:20px;">${store.description}</p>
      
      <div style="background-color:var(--color-sand); border-radius:var(--radius-md); padding:18px; margin-bottom:24px;">
        <p style="margin-bottom:8px;"><strong>📍 Address:</strong> ${store.address}</p>
        <p style="margin-bottom:8px;"><strong>⏰ Operating Hours:</strong> ${store.hours}</p>
        <p style="margin-bottom:0;"><strong>📞 Telephone:</strong> <a href="tel:${store.phone}" style="color:var(--color-amber);">${store.phone}</a></p>
      </div>

      <!-- Architectural Map Preview Graphic -->
      <div style="border:1px solid var(--color-latte-border); border-radius:var(--radius-md); padding:16px; margin-bottom:24px; background:#FAF9F5;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <strong style="font-size:0.875rem; color:var(--color-roast);">Simulated Map Navigation</strong>
          <span style="font-size:0.75rem; color:#2E7D32; font-weight:700;">● LIVE TRAFFIC: LIGHT</span>
        </div>
        <div style="height:140px; background:#E5DFD5; border-radius:var(--radius-sm); display:flex; align-items:center; justify-content:center; color:var(--color-text-secondary); position:relative; overflow:hidden;">
          <svg viewBox="0 0 400 140" style="position:absolute; inset:0; width:100%; height:100%; opacity:0.35;">
            <line x1="0" y1="40" x2="400" y2="40" stroke="#776E65" stroke-width="6"/>
            <line x1="0" y1="90" x2="400" y2="90" stroke="#776E65" stroke-width="4"/>
            <line x1="120" y1="0" x2="120" y2="140" stroke="#776E65" stroke-width="8"/>
            <line x1="280" y1="0" x2="280" y2="140" stroke="#776E65" stroke-width="5"/>
            <circle cx="120" cy="40" r="12" fill="#B87333"/>
          </svg>
          <div style="position:relative; z-index:2; text-align:center; font-weight:600; font-size:0.875rem;">
            📍 BROWN ${store.name}
          </div>
        </div>
      </div>

      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="alert('Opening Google Maps navigation to ${store.address}');">
          Open in Maps & Directions
        </button>
        <a href="tel:${store.phone}" class="btn btn-outline-dark">Call Boutique</a>
      </div>
    `;

    openModal(storeModal);
  }

  document.addEventListener('click', (e) => {
    const storeBtn = e.target.closest('.view-store-btn');
    if (storeBtn) {
      const sid = storeBtn.getAttribute('data-store-id');
      openStoreDetails(sid);
    }
  });

  if (closeStoreModalBtn) {
    closeStoreModalBtn.addEventListener('click', () => closeModal(storeModal));
  }

  /* ==========================================================================
     12. NEWS & STORIES READER MODAL
     ========================================================================== */
  const storyModal = document.getElementById('storyModal');
  const storyModalContent = document.getElementById('storyModalContent');
  const closeStoryModalBtn = document.getElementById('closeStoryModalBtn');
  const readHeritageFullBtn = document.getElementById('readHeritageFullBtn');

  function openStoryModal(newsId) {
    const article = NEWS_DATA[newsId];
    if (!article || !storyModalContent) return;

    storyModalContent.innerHTML = `
      <div style="aspect-ratio:16/9; border-radius:var(--radius-md); overflow:hidden; margin-bottom:20px;">
        <img src="${article.image}" alt="${article.title}" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <span class="sub-heading">${article.category} • ${article.date}</span>
      <h2 style="font-family:var(--font-serif); font-size:2rem; color:var(--color-roast); margin-bottom:8px; line-height:1.25;">${article.title}</h2>
      <div style="font-size:0.8125rem; color:var(--color-text-muted); margin-bottom:24px;">Written by ${article.author}</div>
      <div style="font-size:1rem; color:var(--color-text-secondary); line-height:1.7;">
        ${article.content}
      </div>
      <div style="margin-top:30px; padding-top:20px; border-top:1px solid var(--color-latte-border); display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.8125rem; color:var(--color-text-muted);">Share this story:</span>
        <div style="display:flex; gap:10px;">
          <button class="btn btn-sm btn-outline-dark" onclick="navigator.clipboard.writeText(window.location.href); alert('Story link copied to clipboard!');">Copy Link</button>
        </div>
      </div>
    `;

    openModal(storyModal);
  }

  document.addEventListener('click', (e) => {
    const storyBtn = e.target.closest('.read-story-btn');
    if (storyBtn) {
      const nid = storyBtn.getAttribute('data-news-id');
      openStoryModal(nid);
    }
  });

  if (closeStoryModalBtn) {
    closeStoryModalBtn.addEventListener('click', () => closeModal(storyModal));
  }

  if (readHeritageFullBtn) {
    readHeritageFullBtn.addEventListener('click', () => {
      openStoryModal('n1');
    });
  }

  /* ==========================================================================
     13. SHOPPING BAG & CART SYSTEM
     ========================================================================== */
  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartBadgeCount = document.getElementById('cartBadgeCount');
  const cartCountSub = document.getElementById('cartCountSub');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartSubtotalVal = document.getElementById('cartSubtotalVal');
  const cartSubtotalKHR = document.getElementById('cartSubtotalKHR');
  const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');
  const clearCartBtn = document.getElementById('clearCartBtn');

  function saveCart() {
    try {
      localStorage.setItem('brown_cart', JSON.stringify(cart));
    } catch (e) {}
  }

  function updateCartUI() {
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const subtotalKHRVal = Math.round(subtotal * KHR_EXCHANGE_RATE);

    // Update badges
    if (cartBadgeCount) {
      cartBadgeCount.textContent = totalCount;
      cartBadgeCount.classList.add('bounce');
      setTimeout(() => cartBadgeCount.classList.remove('bounce'), 300);
    }

    if (cartCountSub) cartCountSub.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
    if (cartSubtotalVal) cartSubtotalVal.textContent = `$${subtotal.toFixed(2)}`;
    if (cartSubtotalKHR) cartSubtotalKHR.textContent = `${subtotalKHRVal.toLocaleString()}៛`;
    if (cartCheckoutBtn) cartCheckoutBtn.textContent = `Proceed to Mobile Pickup ($${subtotal.toFixed(2)})`;

    // Render Items
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="empty-cart-state">
          <div class="empty-cart-icon">☕</div>
          <h4>Your bag is currently empty</h4>
          <p style="font-size:0.875rem; margin-bottom:20px;">Explore our signature drinks, fresh pastries, or roasted beans to begin.</p>
          <a href="#menu" class="btn btn-sm btn-primary" onclick="document.getElementById('closeCartBtn').click();">Browse Menu</a>
        </div>
      `;
      return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item-card" data-cart-id="${item.id}">
        <img src="${item.image}" alt="${item.title}" class="cart-item-thumb">
        <div class="cart-item-body">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-meta">${item.size || ''} ${item.custom ? '• ' + item.custom : ''}</div>
          <div class="cart-item-bottom">
            <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
            <div class="cart-qty-pill">
              <button class="cart-qty-btn cart-minus-btn" data-id="${item.id}">-</button>
              <span style="font-size:0.8125rem; font-weight:700;">${item.quantity}</span>
              <button class="cart-qty-btn cart-plus-btn" data-id="${item.id}">+</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  function addToCart(product) {
    // Check if duplicate item exists with same title & customization
    const existingIndex = cart.findIndex(i => i.title === product.title && i.size === product.size && i.custom === product.custom);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += product.quantity;
    } else {
      cart.push(product);
    }

    saveCart();
    updateCartUI();
    showToast(`Added "${product.title}" to bag`, 'success');
  }

  function openCart() {
    if (cartDrawer) {
      cartDrawer.classList.add('open');
      cartDrawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCart() {
    if (cartDrawer) {
      cartDrawer.classList.remove('open');
      cartDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (openCartBtn) openCartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);

  // Cart item plus/minus buttons
  if (cartItemsContainer) {
    cartItemsContainer.addEventListener('click', (e) => {
      const minusBtn = e.target.closest('.cart-minus-btn');
      const plusBtn = e.target.closest('.cart-plus-btn');

      if (minusBtn) {
        const id = minusBtn.getAttribute('data-id');
        const item = cart.find(i => i.id === id);
        if (item) {
          if (item.quantity > 1) {
            item.quantity--;
          } else {
            cart = cart.filter(i => i.id !== id);
          }
          saveCart();
          updateCartUI();
        }
      }

      if (plusBtn) {
        const id = plusBtn.getAttribute('data-id');
        const item = cart.find(i => i.id === id);
        if (item) {
          item.quantity++;
          saveCart();
          updateCartUI();
        }
      }
    });
  }

  // Clear Bag
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      if (cart.length > 0) {
        cart = [];
        saveCart();
        updateCartUI();
        showToast('Your coffee bag has been cleared', 'info');
      }
    });
  }

  // Checkout Simulation
  if (cartCheckoutBtn) {
    cartCheckoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Your bag is empty. Please select drinks or beans first!', 'error');
        return;
      }
      showToast('Pickup order sent! Ready in 15 mins at BKK1 Flagship Roastery.', 'success', 5000);
      cart = [];
      saveCart();
      updateCartUI();
      closeCart();
    });
  }

  // Bind Quick Add on Product Card Icons & Merch
  document.addEventListener('click', (e) => {
    // Product grid add icon
    const addIcon = e.target.closest('.add-to-bag-icon');
    if (addIcon) {
      const pid = addIcon.getAttribute('data-id');
      const item = PRODUCTS_DATA[pid];
      if (item) {
        addToCart({
          id: item.id + '-' + Date.now(),
          title: item.name,
          category: item.categoryName,
          price: item.priceUSD,
          image: item.image,
          quantity: 1,
          size: item.sizes[0] ? item.sizes[0].label : 'Regular',
          custom: 'Standard Brew'
        });
      }
    }

    // Merchandise Add Button
    const merchBtn = e.target.closest('.merch-add-btn');
    if (merchBtn) {
      const name = merchBtn.getAttribute('data-name');
      const price = parseFloat(merchBtn.getAttribute('data-price')) || 0;
      const card = merchBtn.closest('.merch-card');
      const img = card ? card.querySelector('.merch-img').getAttribute('src') : 'assets/images/merch/merch-mug.jpg';

      addToCart({
        id: 'merch-' + Date.now(),
        title: name,
        category: 'Merchandise',
        price: price,
        image: img,
        quantity: 1,
        size: 'Standard',
        custom: 'Original Packaging'
      });
    }
  });

  // Initial cart UI render
  updateCartUI();

  /* ==========================================================================
     14. INSTANT SEARCH OVERLAY
     ========================================================================== */
  const searchModal = document.getElementById('searchModal');
  const openSearchBtn = document.getElementById('openSearchBtn');
  const closeSearchModal = document.getElementById('closeSearchModal');
  const siteSearchInput = document.getElementById('siteSearchInput');
  const searchResultsBox = document.getElementById('searchResultsBox');

  function openSearch() {
    openModal(searchModal);
    setTimeout(() => {
      if (siteSearchInput) siteSearchInput.focus();
    }, 100);
  }

  if (openSearchBtn) openSearchBtn.addEventListener('click', openSearch);
  if (closeSearchModal) closeSearchModal.addEventListener('click', () => closeModal(searchModal));

  // Keyboard shortcut '/' to open search, 'Escape' to close
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  if (siteSearchInput && searchResultsBox) {
    siteSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();

      if (query.length < 2) {
        searchResultsBox.innerHTML = `
          <div class="search-placeholder-msg">Type at least 2 characters to search across our full catalog...</div>
        `;
        return;
      }

      // Filter products & stores
      const matchedProducts = Object.values(PRODUCTS_DATA).filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.desc.toLowerCase().includes(query) ||
        p.tastingNotes.toLowerCase().includes(query) ||
        p.categoryName.toLowerCase().includes(query)
      );

      const matchedStores = Object.values(STORES_DATA).filter(s =>
        s.name.toLowerCase().includes(query) ||
        s.address.toLowerCase().includes(query)
      );

      if (matchedProducts.length === 0 && matchedStores.length === 0) {
        searchResultsBox.innerHTML = `
          <div class="search-placeholder-msg">No results found for "${e.target.value}". Try searching "Palm Sugar", "Cold Brew", or "BKK1".</div>
        `;
        return;
      }

      let html = '';
      if (matchedProducts.length > 0) {
        html += `<div style="font-size:0.75rem; font-weight:700; color:var(--color-copper); padding:8px 12px; letter-spacing:0.1em;">MENU ITEMS</div>`;
        matchedProducts.forEach(p => {
          html += `
            <div class="search-result-item" data-action="quickview" data-id="${p.id}">
              <img src="${p.image}" alt="${p.name}" class="search-item-thumb">
              <div class="search-item-info">
                <strong>${p.name}</strong>
                <span>${p.categoryName} • ${p.tastingNotes}</span>
              </div>
              <div class="search-item-price">$${p.priceUSD.toFixed(2)}</div>
            </div>
          `;
        });
      }

      if (matchedStores.length > 0) {
        html += `<div style="font-size:0.75rem; font-weight:700; color:var(--color-copper); padding:16px 12px 8px; letter-spacing:0.1em;">STORE LOCATIONS</div>`;
        matchedStores.forEach(s => {
          html += `
            <div class="search-result-item" data-action="store" data-id="${s.id}">
              <img src="${s.image}" alt="${s.name}" class="search-item-thumb">
              <div class="search-item-info">
                <strong>${s.name}</strong>
                <span>${s.address}</span>
              </div>
              <div class="search-item-price" style="color:var(--color-text-muted); font-size:0.8125rem;">View</div>
            </div>
          `;
        });
      }

      searchResultsBox.innerHTML = html;
    });

    // Tag buttons click in search
    document.querySelectorAll('.search-quick-tags .tag-btn').forEach(tag => {
      tag.addEventListener('click', (e) => {
        const q = e.target.getAttribute('data-query');
        siteSearchInput.value = q;
        siteSearchInput.dispatchEvent(new Event('input'));
      });
    });

    // Click search item
    searchResultsBox.addEventListener('click', (e) => {
      const item = e.target.closest('.search-result-item');
      if (item) {
        const action = item.getAttribute('data-action');
        const id = item.getAttribute('data-id');
        closeModal(searchModal);

        if (action === 'quickview') {
          openQuickView(id);
        } else if (action === 'store') {
          openStoreDetails(id);
        }
      }
    });
  }

  /* ==========================================================================
     15. BROWN CARD / ACCOUNT MODAL & AUTHENTICATION SUITE
     ========================================================================== */
  const accountModal = document.getElementById('accountModal');
  const accountBtn = document.getElementById('accountBtn');
  const openCardSignupBtn = document.getElementById('openCardSignupBtn');
  const closeAccountModalBtn = document.getElementById('closeAccountModalBtn');
  const cardSignupForm = document.getElementById('cardSignupForm');
  const modalLoginForm = document.getElementById('modalLoginForm');
  const modalTabSignIn = document.getElementById('modalTabSignIn');
  const modalTabRegister = document.getElementById('modalTabRegister');
  const modalTogglePass = document.getElementById('modalTogglePass');
  const modalLoginPass = document.getElementById('modalLoginPass');
  const modalLoggedInView = document.getElementById('modalLoggedInView');
  const modalLoggedUserName = document.getElementById('modalLoggedUserName');
  const modalLogoutBtn = document.getElementById('modalLogoutBtn');
  const modalAbaLoginBtn = document.getElementById('modalAbaLoginBtn');
  const modalGoogleLoginBtn = document.getElementById('modalGoogleLoginBtn');
  const modalAppleLoginBtn = document.getElementById('modalAppleLoginBtn');
  const cardVisualName = document.getElementById('cardVisualName');
  const cardTailNum = document.getElementById('cardTailNum');

  if (accountBtn) accountBtn.addEventListener('click', () => openModal(accountModal));
  if (openCardSignupBtn) {
    openCardSignupBtn.addEventListener('click', () => {
      openModal(accountModal);
      if (modalTabRegister) modalTabRegister.click();
    });
  }
  if (closeAccountModalBtn) closeAccountModalBtn.addEventListener('click', () => closeModal(accountModal));

  // Modal Auth Tabs
  if (modalTabSignIn && modalTabRegister) {
    modalTabSignIn.addEventListener('click', () => {
      modalTabSignIn.classList.add('active');
      modalTabRegister.classList.remove('active');
      if (modalLoginForm) modalLoginForm.style.display = 'block';
      if (cardSignupForm) cardSignupForm.style.display = 'none';
      if (modalLoggedInView) modalLoggedInView.style.display = 'none';
    });

    modalTabRegister.addEventListener('click', () => {
      modalTabRegister.classList.add('active');
      modalTabSignIn.classList.remove('active');
      if (modalLoginForm) modalLoginForm.style.display = 'none';
      if (cardSignupForm) cardSignupForm.style.display = 'block';
      if (modalLoggedInView) modalLoggedInView.style.display = 'none';
    });
  }

  // Password toggle
  if (modalTogglePass && modalLoginPass) {
    modalTogglePass.addEventListener('click', () => {
      if (modalLoginPass.type === 'password') {
        modalLoginPass.type = 'text';
        modalTogglePass.textContent = 'Hide';
      } else {
        modalLoginPass.type = 'password';
        modalTogglePass.textContent = 'Show';
      }
    });
  }

  function handleUserAuthSuccess(userName) {
    const finalName = userName ? userName.toUpperCase() : 'BROWN MEMBER';
    if (cardVisualName) cardVisualName.textContent = finalName;
    if (cardTailNum) cardTailNum.textContent = String(Math.floor(1000 + Math.random() * 9000));

    // Show logged-in view
    const tabNav = document.querySelector('.modal-auth-tabs');
    if (tabNav) tabNav.style.display = 'none';
    if (modalLoginForm) modalLoginForm.style.display = 'none';
    if (cardSignupForm) cardSignupForm.style.display = 'none';
    if (modalLoggedInView) modalLoggedInView.style.display = 'block';
    if (modalLoggedUserName) modalLoggedUserName.textContent = finalName;

    // Update header account button label
    const authLabel = document.querySelector('.auth-btn-label');
    if (authLabel) {
      authLabel.textContent = finalName.split(' ')[0];
    }

    try {
      localStorage.setItem('brown_user', JSON.stringify({ name: finalName, tier: 'BLACK RESERVE' }));
    } catch(e){}

    showToast(`Welcome, ${finalName}! Signed in to BROWN Club.`, 'success', 4500);
  }

  if (modalLoginForm) {
    modalLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phoneVal = document.getElementById('modalLoginPhone').value || 'Sovannarith Chhay';
      handleUserAuthSuccess(phoneVal.includes('@') ? phoneVal.split('@')[0] : 'Sovannarith Chhay');
    });
  }

  if (cardSignupForm) {
    cardSignupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('memberNameInput');
      const nameVal = nameInput ? nameInput.value.trim() : 'Sovannarith Chhay';
      handleUserAuthSuccess(nameVal);
    });
  }

  if (modalAbaLoginBtn) {
    modalAbaLoginBtn.addEventListener('click', () => {
      handleUserAuthSuccess('ABA Verified Member');
    });
  }

  if (modalGoogleLoginBtn) {
    modalGoogleLoginBtn.addEventListener('click', () => {
      handleUserAuthSuccess('Google Guest');
    });
  }

  if (modalAppleLoginBtn) {
    modalAppleLoginBtn.addEventListener('click', () => {
      handleUserAuthSuccess('Apple Guest');
    });
  }

  if (modalLogoutBtn) {
    modalLogoutBtn.addEventListener('click', () => {
      try { localStorage.removeItem('brown_user'); } catch(e){}
      const tabNav = document.querySelector('.modal-auth-tabs');
      if (tabNav) tabNav.style.display = 'flex';
      if (modalLoggedInView) modalLoggedInView.style.display = 'none';
      if (modalLoginForm) modalLoginForm.style.display = 'block';
      const authLabel = document.querySelector('.auth-btn-label');
      if (authLabel) authLabel.textContent = 'Sign In';
      showToast('Signed out of BROWN Club.', 'info');
    });
  }

  // Check saved session
  try {
    const saved = localStorage.getItem('brown_user');
    if (saved) {
      const u = JSON.parse(saved);
      if (u && u.name) {
        const authLabel = document.querySelector('.auth-btn-label');
        if (authLabel) authLabel.textContent = u.name.split(' ')[0];
        if (cardVisualName) cardVisualName.textContent = u.name;
      }
    }
  } catch(e){}

  /* ==========================================================================
     16. MOBILE APP SMS LINK DISPATCH
     ========================================================================== */
  const smsLinkForm = document.getElementById('smsLinkForm');
  const smsPhoneInput = document.getElementById('smsPhoneInput');

  if (smsLinkForm && smsPhoneInput) {
    smsLinkForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = smsPhoneInput.value.trim();
      if (val.length < 8) {
        showToast('Please enter a valid Cambodian phone number', 'error');
        return;
      }
      showToast(`Download link sent via SMS to +855 ${val}!`, 'success', 4000);
      smsPhoneInput.value = '';
    });
  }

  /* ==========================================================================
     17. NEWSLETTER FORM VALIDATION
     ========================================================================== */
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterFeedback = document.getElementById('newsletterFeedback');

  if (newsletterForm && newsletterEmail) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        if (newsletterFeedback) {
          newsletterFeedback.className = 'form-feedback error';
          newsletterFeedback.textContent = 'Please enter a valid email address.';
        }
        return;
      }

      if (newsletterFeedback) {
        newsletterFeedback.className = 'form-feedback success';
        newsletterFeedback.textContent = '✓ Thank you! You are now subscribed to the Roaster\'s Dispatch.';
      }

      showToast(`Subscribed "${email}" to Roaster's Dispatch!`, 'success');
      newsletterEmail.value = '';
    });
  }

  /* ==========================================================================
     18. CAREERS & LEGAL & FOOTER MODALS
     ========================================================================== */
  const openCareersModalBtn = document.getElementById('openCareersModalBtn');
  const openPrivacyModal = document.getElementById('openPrivacyModal');
  const openTermsModal = document.getElementById('openTermsModal');
  const openCookieModal = document.getElementById('openCookieModal');
  const openContactTrigger = document.getElementById('openContactTrigger');
  const openFeedbackTrigger = document.getElementById('openFeedbackTrigger');

  if (openCareersModalBtn) {
    openCareersModalBtn.addEventListener('click', () => {
      if (storyModalContent) {
        storyModalContent.innerHTML = `
          <span class="sub-heading">JOIN OUR TEAM</span>
          <h2 style="font-family:var(--font-serif); font-size:2rem; color:var(--color-roast); margin-bottom:12px;">Careers at BROWN Coffee</h2>
          <p style="color:var(--color-text-secondary); line-height:1.6; margin-bottom:24px;">
            Join our 1,000+ member family across Cambodia. We offer industry-leading SCA barista training, clear career progression, health benefits, and a culture of warmth.
          </p>
          <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:24px;">
            <div style="border:1px solid var(--color-latte-border); border-radius:var(--radius-sm); padding:14px; display:flex; justify-content:space-between; align-items:center;">
              <div><strong>Senior Specialty Barista</strong><br><small style="color:var(--color-text-muted);">BKK1 Flagship • Full Time</small></div>
              <button class="btn btn-sm btn-primary" onclick="alert('Application submitted! Our HR team will reach out within 48 hours.');">Apply</button>
            </div>
            <div style="border:1px solid var(--color-latte-border); border-radius:var(--radius-sm); padding:14px; display:flex; justify-content:space-between; align-items:center;">
              <div><strong>Artisan Pastry Baker</strong><br><small style="color:var(--color-text-muted);">Toul Kork Central Kitchen • 5:00 AM Shift</small></div>
              <button class="btn btn-sm btn-primary" onclick="alert('Application submitted! Our HR team will reach out within 48 hours.');">Apply</button>
            </div>
            <div style="border:1px solid var(--color-latte-border); border-radius:var(--radius-sm); padding:14px; display:flex; justify-content:space-between; align-items:center;">
              <div><strong>Boutique Store Manager</strong><br><small style="color:var(--color-text-muted);">Siem Reap Wat Bo • Full Time</small></div>
              <button class="btn btn-sm btn-primary" onclick="alert('Application submitted! Our HR team will reach out within 48 hours.');">Apply</button>
            </div>
          </div>
          <p style="font-size:0.8125rem; color:var(--color-text-muted);">Send resumes to: <a href="mailto:careers@browncoffee.com.kh" style="color:var(--color-amber);">careers@browncoffee.com.kh</a></p>
        `;
        openModal(storyModal);
      }
    });
  }

  function showLegalNotice(title, text) {
    if (storyModalContent) {
      storyModalContent.innerHTML = `
        <span class="sub-heading">LEGAL & POLICIES</span>
        <h2 style="font-family:var(--font-serif); font-size:1.85rem; color:var(--color-roast); margin-bottom:14px;">${title}</h2>
        <div style="color:var(--color-text-secondary); line-height:1.7; font-size:0.9375rem;">
          ${text}
        </div>
      `;
      openModal(storyModal);
    }
  }

  if (openPrivacyModal) {
    openPrivacyModal.addEventListener('click', (e) => {
      e.preventDefault();
      showLegalNotice('Privacy Policy', 'We value your personal privacy. When you register for the BROWN Card or order on our app, we collect essential order and contact details only to fulfill your coffee experience and loyalty perks. We never sell your data to third parties.');
    });
  }

  if (openTermsModal) {
    openTermsModal.addEventListener('click', (e) => {
      e.preventDefault();
      showLegalNotice('Terms of Service', 'Welcome to BROWN Coffee & Roastery. By visiting our stores, using our website or mobile app, you agree to our standard terms of service. Stored card balances do not expire and can be redeemed across all official locations in Cambodia.');
    });
  }

  if (openCookieModal) {
    openCookieModal.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Cookie preferences saved: Essential and analytical cookies enabled.', 'info');
    });
  }

  if (openContactTrigger) {
    openContactTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Press kit & media assets requested. Contact: press@browncoffee.com.kh', 'info');
    });
  }

  if (openFeedbackTrigger) {
    openFeedbackTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Customer Feedback: Please call +855 23 215 215 or email care@browncoffee.com.kh', 'info');
    });
  }

  /* ==========================================================================
     19. MODAL HELPER FUNCTIONS
     ========================================================================== */
  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('open');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('open');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function closeAllModals() {
    document.querySelectorAll('.modal-backdrop.open').forEach(m => closeModal(m));
    closeCart();
    closeMobileMenu();
  }

  // Dismiss modal when clicking backdrop
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  console.log('BROWN Coffee & Roastery loaded successfully.');
});
