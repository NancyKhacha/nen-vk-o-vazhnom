// Эффекты по прокрутке (читают в основном с телефона, поэтому без наведения мыши).
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Появление блоков, обложки и коллажа
  var items = document.querySelectorAll('.reveal, .reveal-collage, .hero-media');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Прокрутка: полоса прочитанного, лента кадров, параллакс фото и декора коллажа
  var bar = document.querySelector('.progress');
  var strip = document.querySelector('[data-strip]');
  var track = strip && strip.querySelector('.strip-track');
  var photos = document.querySelectorAll('[data-parallax]');
  var collages = document.querySelectorAll('[data-collage]');
  var ticking = false;

  function progress(el, vh) {
    var r = el.getBoundingClientRect();
    return { r: r, t: (vh - r.top) / (vh + r.height) }; // 0 — показался снизу, 1 — ушел вверх
  }

  function update() {
    ticking = false;
    var vh = window.innerHeight;
    var max = document.documentElement.scrollHeight - vh;
    if (bar) bar.style.setProperty('--p', max > 0 ? Math.min(1, window.scrollY / max) : 0);
    if (reduce) return;

    if (strip && track) {
      var s = progress(strip, vh);
      var t = Math.min(1, Math.max(0, s.t));
      var extra = track.scrollWidth - strip.clientWidth;
      track.style.setProperty('--sx', (-extra * t).toFixed(1) + 'px');
    }
    photos.forEach(function (p) {
      var q = progress(p, vh);
      if (q.r.bottom < 0 || q.r.top > vh) return;
      p.style.setProperty('--py', (-12 * q.t).toFixed(2) + '%');
    });
    collages.forEach(function (el) {
      var c = progress(el, vh);
      if (c.r.bottom > 0 && c.r.top < vh) el.style.setProperty('--cp', (c.t * 2 - 1).toFixed(3));
    });
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
