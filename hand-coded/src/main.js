import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

function initTextReveal() {
  const el = document.querySelector('[data-reveal]');
  if (!el) return;

  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words.map((w) => `<span class="word">${w}</span>`).join(' ');

  const wordEls = el.querySelectorAll('.word');

  ScrollTrigger.create({
    trigger: el.closest('.about'),
    start: 'top 60%',
    end: 'bottom 40%',
    scrub: 0.5,
    onUpdate: (self) => {
      const active = Math.floor(self.progress * wordEls.length);
      wordEls.forEach((w, i) => w.classList.toggle('active', i <= active));
    },
  });
}

function initServicesList() {
  const items = document.querySelectorAll('.services-list li');
  if (!items.length) return;

  ScrollTrigger.create({
    trigger: '.services',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
    onUpdate: (self) => {
      const idx = Math.floor(self.progress * items.length);
      items.forEach((li, i) => li.classList.toggle('active', i === idx));
    },
  });
}

function initProcess() {
  const section = document.querySelector('.process');
  const highlight = document.querySelector('.process-highlight');
  const steps = document.querySelectorAll('.process-step');
  if (!section || !highlight || !steps.length) return;

  ScrollTrigger.create({
    trigger: section,
    start: 'top 30%',
    end: 'bottom 70%',
    scrub: 0.3,
    onUpdate: (self) => {
      const stepIdx = Math.min(
        steps.length - 1,
        Math.floor(self.progress * steps.length)
      );

      highlight.style.opacity = '1';
      highlight.style.top = `${steps[stepIdx].offsetTop + steps[stepIdx].offsetHeight / 2 - 90}px`;
      highlight.style.transform = 'none';

      steps.forEach((s, i) => s.classList.toggle('active', i === stepIdx));
    },
    onLeave: () => { highlight.style.opacity = '0'; },
    onLeaveBack: () => { highlight.style.opacity = '0'; },
  });
}

function initStarfield() {
  const canvas = document.getElementById('starfield');
  const compare = document.querySelector('.compare');
  if (!canvas || !compare) return;

  const ctx = canvas.getContext('2d');
  let stars = [];
  let warp = 0;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = Array.from({ length: 400 }, () => ({
      x: (Math.random() - 0.5) * canvas.width,
      y: (Math.random() - 0.5) * canvas.height,
      z: Math.random() * canvas.width,
    }));
  }

  function draw() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const speed = 2 + warp * 18;

    for (const star of stars) {
      star.z -= speed;
      if (star.z <= 0) {
        star.x = (Math.random() - 0.5) * canvas.width;
        star.y = (Math.random() - 0.5) * canvas.height;
        star.z = canvas.width;
      }

      const sx = (star.x / star.z) * canvas.width + cx;
      const sy = (star.y / star.z) * canvas.height + cy;
      const r = Math.max(0.5, (1 - star.z / canvas.width) * 2.5);

      ctx.beginPath();
      ctx.fillStyle = `rgba(244,241,238,${1 - star.z / canvas.width})`;
      if (warp > 0.3) {
        const px = ((star.x / (star.z + speed * 4)) * canvas.width) + cx;
        const py = ((star.y / (star.z + speed * 4)) * canvas.height) + cy;
        ctx.moveTo(sx, sy);
        ctx.lineTo(px, py);
        ctx.strokeStyle = ctx.fillStyle;
        ctx.lineWidth = r;
        ctx.stroke();
      } else {
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  function loop() {
    draw();
    requestAnimationFrame(loop);
  }

  resize();
  window.addEventListener('resize', resize);
  loop();

  ScrollTrigger.create({
    trigger: compare,
    start: 'top bottom',
    end: 'bottom top',
    onEnter: () => compare.classList.add('in-view'),
    onLeave: () => compare.classList.remove('in-view'),
    onEnterBack: () => compare.classList.add('in-view'),
    onLeaveBack: () => compare.classList.remove('in-view'),
  });

  ScrollTrigger.create({
    trigger: compare,
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => {
      warp = self.progress;
      compare.classList.toggle('show-after', self.progress > 0.5);

      const cards = document.querySelectorAll('.compare-card');
      cards.forEach((card, i) => {
        const threshold = (i + 1) / (cards.length + 1);
        card.classList.toggle('visible', self.progress > threshold - 0.1);
      });
    },
  });
}

function initPoolList() {
  const items = document.querySelectorAll('.pool-list li');
  items.forEach((li) => {
    li.addEventListener('mouseenter', () => {
      items.forEach((el) => el.classList.remove('active'));
      li.classList.add('active');
    });
  });
}

function initSectionAnimations() {
  gsap.utils.toArray('.section:not(.hero)').forEach((section) => {
    const target = section.querySelector('h2, .about-inner, .services-copy, .clients-copy, .sprint-inner, .story-panel, .faq-grid');
    if (!target) return;

    gsap.from(target, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });
  });
}

initTextReveal();
initServicesList();
initProcess();
initStarfield();
initPoolList();
initSectionAnimations();
