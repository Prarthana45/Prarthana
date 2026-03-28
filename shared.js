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
          <a href="https://www.facebook.com/profile.php?id=61550774201235" target="_blank" rel="noopener" class="social-btn" title="Prarthana Industries on Facebook">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/prarthana-industries-57b027b7" target="_blank" rel="noopener" class="social-btn" title="Prarthana Industries on LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://www.youtube.com/@prarthanaindustries" target="_blank" rel="noopener" class="social-btn" title="Prarthana Industries on YouTube">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
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
          <li>45, Khodiyar Estate, Jamfalwadi Road, C.T.M., Amraiwadi, Ahmedabad – 380026, Gujarat, India</li>
          <li><a href="mailto:darshan@prarthanaindustries.com">darshan@prarthanaindustries.com</a></li>
          <li style="display:flex;flex-direction:column;gap:10px;margin-top:4px;">
            <a href="https://wa.me/918758578105" style="display:inline-flex;align-items:center;gap:8px;background:#25D366;color:#fff;padding:9px 16px;border-radius:7px;font-size:13px;font-weight:600;text-decoration:none;transition:background 0.2s;" onmouseover="this.style.background='#1ebe5d'" onmouseout="this.style.background='#25D366'">💬 WhatsApp Us</a>
            <a href="arattai://chat?phone=8758578105" style="display:inline-flex;align-items:center;gap:8px;background:#0084FF;color:#fff;padding:9px 16px;border-radius:7px;font-size:13px;font-weight:600;text-decoration:none;transition:background 0.2s;" onmouseover="this.style.background='#006ddb'" onmouseout="this.style.background='#0084FF'">💬 Arattai Us</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>
        <div class="footer-copy">© 2026 <span>Prarthana Industries</span>. All rights reserved. · Ahmedabad, India</div>
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
