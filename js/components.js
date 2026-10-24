/* =====================================================
   NutriGuard — Shared Components JS
   Header, Footer injection + shared utilities
   ===================================================== */

const NAV_HTML = `
<header class="site-header" id="site-header">
  <nav class="nav-container" aria-label="Main navigation">
    <a href="index.html" class="nav-logo" aria-label="NutriGuard Home">
      <div class="logo-icon" aria-hidden="true">🥦</div>
      <div class="logo-text">NutriGuard<span>Smart Food & Nutrition</span></div>
    </a>
    <div class="nav-links" id="desktop-nav">
      <a href="nutrition-checker.html">Nutrition Checker</a>
      <a href="label-decoder.html">Label Decoder</a>
      <a href="food-safety.html">Food Safety</a>
      <a href="compare.html">Compare</a>
      <a href="nutrient-hub.html">Nutrients</a>
      <a href="meal-ideas.html">Meal Ideas</a>
      <a href="quiz.html">Quiz</a>
      <a href="search.html">Search</a>
    </div>
    <div class="nav-actions">
      <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark/light mode">
        <span id="theme-icon">🌙</span>
      </button>
      <button class="hamburger" id="hamburger" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open navigation menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
</header>
<nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation" aria-hidden="true">
  <a href="index.html"><span class="menu-icon">🏠</span>Home</a>
  <a href="nutrition-checker.html"><span class="menu-icon">🔬</span>Nutrition Checker</a>
  <a href="label-decoder.html"><span class="menu-icon">🏷️</span>Label Decoder</a>
  <a href="food-safety.html"><span class="menu-icon">🛡️</span>Food Safety</a>
  <a href="packaging-risk.html"><span class="menu-icon">📋</span>Risk Checklist</a>
  <a href="compare.html"><span class="menu-icon">⚖️</span>Product Comparison</a>
  <a href="nutrient-hub.html"><span class="menu-icon">💊</span>Nutrient Hub</a>
  <a href="meal-ideas.html"><span class="menu-icon">🍲</span>Meal Ideas</a>
  <a href="quiz.html"><span class="menu-icon">🧠</span>Food Safety Quiz</a>
  <a href="search.html"><span class="menu-icon">🔍</span>Product Search</a>
  <a href="about.html"><span class="menu-icon">ℹ️</span>About</a>
  <a href="contact.html"><span class="menu-icon">✉️</span>Contact</a>
</nav>
`;

const FOOTER_HTML = `
<footer class="site-footer" aria-label="Site footer">
  <div class="container">
    <div class="footer-disclaimer">
      <strong>⚠️ Disclaimer:</strong> NutriGuard provides educational information only. Nutrition values shown are from labelled or curated demo data. 
      Always verify food safety concerns with certified laboratories and official agencies. We do not claim to detect adulteration or confirm product authenticity.
    </div>
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="logo-text-footer">🥦 NutriGuard</div>
        <p>Helping you make informed, healthy food choices with reliable nutrition information, food safety awareness, and practical guidance.</p>
      </div>
      <div class="footer-col">
        <h4>Tools</h4>
        <ul>
          <li><a href="nutrition-checker.html">Nutrition Checker</a></li>
          <li><a href="label-decoder.html">Label Decoder</a></li>
          <li><a href="food-safety.html">Food Safety Hub</a></li>
          <li><a href="packaging-risk.html">Risk Checklist</a></li>
          <li><a href="compare.html">Product Compare</a></li>
          <li><a href="search.html">Product Search</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Learn</h4>
        <ul>
          <li><a href="nutrient-hub.html">Nutrient Hub</a></li>
          <li><a href="meal-ideas.html">Budget Meals</a></li>
          <li><a href="quiz.html">Food Safety Quiz</a></li>
          <li><a href="about.html">About NutriGuard</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Info & Resources</h4>
        <ul>
          <li><a href="contact.html">Contact / Feedback</a></li>
          <li><a href="privacy.html">Privacy Policy</a></li>
          <li><a href="disclaimer.html">Disclaimer</a></li>
          <li><a href="https://www.fssai.gov.in/" target="_blank" rel="noopener noreferrer">FSSAI (Official ↗)</a></li>
          <li><a href="https://www.mohfw.gov.in/" target="_blank" rel="noopener noreferrer">MoHFW India (↗)</a></li>
          <li><a href="https://www.who.int/health-topics/food-safety" target="_blank" rel="noopener noreferrer">WHO Food Safety (↗)</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 NutriGuard. Educational use only. Not a substitute for professional advice.</span>
      <span>Data sources: ICMR-NIN, FSSAI, USDA FoodData Central (demo/labelled data)</span>
    </div>
  </div>
</footer>
<div id="live-region" aria-live="polite" aria-atomic="true"></div>
`;

const SCROLL_PROGRESS_HTML = `<div id="scroll-progress" role="progressbar" aria-hidden="true" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></div>`;
const BACK_TO_TOP_HTML = `<button id="back-to-top" aria-label="Scroll back to top" title="Back to top">↑</button>`;

/**
 * Inject shared header and footer into the page
 */
function injectComponents() {
  // Scroll progress + back-to-top
  document.body.insertAdjacentHTML('afterbegin', SCROLL_PROGRESS_HTML);
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
  document.body.insertAdjacentHTML('beforeend', BACK_TO_TOP_HTML);

  // Mark active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

/**
 * Theme management (light/dark with OS preference + localStorage)
 */
function initTheme() {
  const stored = localStorage.getItem('nutriguard-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  applyTheme(theme, false);
}

function applyTheme(theme, animate = true) {
  if (!animate) {
    document.body.classList.add('no-transition');
  }
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('nutriguard-theme', theme);
  const icon = document.getElementById('theme-icon');
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  if (!animate) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.classList.remove('no-transition');
      });
    });
  }
}

function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark', true);
  });
}

/**
 * Mobile hamburger menu
 */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  function openMenu() {
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Focus first item
    const firstLink = mobileMenu.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    hamburger.focus();
  }

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      if (hamburger.getAttribute('aria-expanded') === 'true') closeMenu();
    }
  });

  // Close on nav link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => closeMenu());
  });
}

/**
 * Scroll progress bar + Back to Top
 */
function initScrollUI() {
  const progress = document.getElementById('scroll-progress');
  const backToTop = document.getElementById('back-to-top');

  function onScroll() {
    const scrolled = window.scrollY;
    const total = document.body.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (scrolled / total) * 100 : 0;
    if (progress) {
      progress.style.width = pct + '%';
      progress.setAttribute('aria-valuenow', Math.round(pct));
    }
    if (backToTop) {
      backToTop.classList.toggle('visible', scrolled > 300);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/**
 * Live region announcer for screen readers
 */
function announce(message) {
  const region = document.getElementById('live-region');
  if (region) {
    region.textContent = '';
    requestAnimationFrame(() => { region.textContent = message; });
  }
}
window.announce = announce;

/**
 * Tabs component
 */
function initTabs(container) {
  const tabs = container || document;
  tabs.querySelectorAll('[data-tab-list]').forEach(tabList => {
    const buttons = tabList.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        buttons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        const panels = document.querySelectorAll('.tab-panel');
        panels.forEach(p => { p.classList.remove('active'); p.setAttribute('aria-hidden', 'true'); });
        const activePanel = document.getElementById(target);
        if (activePanel) { activePanel.classList.add('active'); activePanel.setAttribute('aria-hidden', 'false'); }
      });

      // Keyboard arrow navigation
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
          const next = btn.nextElementSibling;
          if (next && next.classList.contains('tab-btn')) next.click();
        }
        if (e.key === 'ArrowLeft') {
          const prev = btn.previousElementSibling;
          if (prev && prev.classList.contains('tab-btn')) prev.click();
        }
      });
    });
  });
}
window.initTabs = initTabs;

/**
 * Boot
 */
document.addEventListener('DOMContentLoaded', () => {
  injectComponents();
  initTheme();
  initThemeToggle();
  initMobileMenu();
  initScrollUI();
  initTabs();
});
