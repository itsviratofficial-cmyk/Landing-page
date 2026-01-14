document.addEventListener('DOMContentLoaded',function(){
  // Year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = String(y);

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if(navToggle && nav){
    navToggle.addEventListener('click',function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.style.display = expanded ? '' : 'block';
    });

    // Close nav on link click (mobile)
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      if(window.innerWidth < 700){
        nav.style.display = '';
        navToggle.setAttribute('aria-expanded','false');
      }
    }));
  }

  // Smooth scroll for on-page links
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
});
