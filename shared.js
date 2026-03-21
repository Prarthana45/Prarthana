/* ════════════════════════════════════════════
   SHARED: nav, footer, animations, routing
   ════════════════════════════════════════════ */

const LOGO_SRC = 'logo.png';

function renderNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home', key: 'home' },
    { href: 'products.html', label: 'Products', key: 'products' },
    { href: 'about.html', label: 'About', key: 'about' },
    { href: 'contact.html', label: 'Contact', key: 'contact' },
    // sitemap is not shown in nav but registered so active class resolves
  ];
  return `
  <nav class="navbar" id="main-nav">
    <a href="index.html" class="nav-brand">
      <img src="${LOGO_SRC}" alt="Prarthana Industries - Manufacturer and Exporter of Transmission Products, Ahmedabad India" class="nav-logo-img" width="44" height="44">
      <div class="nav-brand-text">
        <div class="nav-brand-name">Prarthana Industries</div>
        <div class="nav-brand-sub">Since 1996 · Ahmedabad</div>
      </div>
    </a>
    <ul class="nav-links">
      ${pages.map(p => `<li><a href="${p.href}" class="${p.key === activePage ? 'active' : ''}${p.key === 'contact' ? ' nav-cta' : ''}">${p.label}</a></li>`).join('')}
    </ul>
    <button class="nav-hamburger" id="ham-btn" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-nav-overlay" id="mobile-nav">
    <button class="mobile-nav-close" id="mobile-close">✕</button>
    <ul class="mobile-nav-links">
      ${pages.map(p => `<li><a href="${p.href}">${p.label}</a></li>`).join('')}
    </ul>
  </div>`;
}

function renderFooter() {
  return `
  <footer class="footer">
    <div class="footer-grid">
      <div>
        <img src="${LOGO_SRC}" alt="Prarthana Industries Logo - Gear Rack and Transmission Products Manufacturer Ahmedabad" class="footer-logo-img" width="48" height="48">
        <div class="footer-brand-name">Prarthana Industries</div>
        <div class="footer-brand-sub">Since 1996 · Ahmedabad</div>
        <p class="footer-brand-desc">Manufacturer and Exporter of Transmission Products and Machinery Parts. Serving customers across India and abroad since 1996.</p>
        <div class="footer-socials">
          <a href="https://www.facebook.com/prarthanaindustries" target="_blank" rel="noopener" class="social-btn" title="Prarthana Industries on Facebook">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.instagram.com/prarthanaindustries" target="_blank" rel="noopener" class="social-btn" title="Prarthana Industries on Instagram">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="#" class="social-btn" title="Prarthana Industries on LinkedIn">in</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Products</div>
        <ul class="footer-links">
          <li><a href="products.html#rack-pinion">Rack &amp; Pinion</a></li>
          <li><a href="products.html#gear-rack">Gear Rack</a></li>
          <li><a href="products.html#timing-pulley">Timing Pulley</a></li>
          <li><a href="products.html#v-belt-pulley">V Belt Pulley</a></li>
          <li><a href="products.html#bevel-gear">Bevel Gear</a></li>
          <li><a href="products.html#taper-lock">Taper Lock</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Company</div>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="contact.html">Get a Quote</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Contact</div>
        <ul class="footer-links">
          <li>45, Khodiyar Estate, Jamfalwadi Road, Amraiwadi, Ahmedabad – 380026, Gujarat, India</li>
          <li><a href="tel:+91XXXXXXXXXX">+91 XXXX XXXXXX</a></li>
          <li><a href="mailto:darshan@prarthanaindustries.com">darshan@prarthanaindustries.com</a></li>
          <li><a href="https://wa.me/91XXXXXXXXXX">WhatsApp Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>
        <div class="footer-copy">© 2025 <span>Prarthana Industries</span>. All rights reserved. · Ahmedabad, India</div>
        <div class="footer-copy" style="margin-top:6px;">Developed by <span>Jenish Pancholi</span></div>
      </div>
      <div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap;">
        <a href="sitemap.html" style="font-size:12px;color:rgba(255,255,255,0.35);text-decoration:none;letter-spacing:0.3px;transition:color 0.2s;" onmouseover="this.style.color='#FF671F'" onmouseout="this.style.color='rgba(255,255,255,0.35)'">Site Map</a>
        <a href="sitemap.xml" style="font-size:12px;color:rgba(255,255,255,0.35);text-decoration:none;letter-spacing:0.3px;transition:color 0.2s;" onmouseover="this.style.color='#FF671F'" onmouseout="this.style.color='rgba(255,255,255,0.35)'">XML Sitemap</a>
      </div>
      <div class="footer-badges">
        <span class="footer-badge">Manufacturer 🇮🇳</span>
        <span class="footer-badge">Exporter</span>
      </div>
    </div>
  </footer>`;
}

function initShared(activePage) {
  // Inject nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = renderNav(activePage);

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.innerHTML = renderFooter();

  // Hamburger
  const hamBtn = document.getElementById('ham-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileClose = document.getElementById('mobile-close');
  if (hamBtn) hamBtn.addEventListener('click', () => mobileNav.classList.toggle('open'));
  if (mobileClose) mobileClose.addEventListener('click', () => mobileNav.classList.remove('open'));

  // Sticky nav shadow
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Reveal on scroll
  initReveal();
}

function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}
