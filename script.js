const particleField = document.querySelector('.particle-field');

if (particleField) {
  for (let index = 0; index < 8; index += 1) {
    const particle = document.createElement('span');
    particle.className = 'particle';
    particle.style.left = `${6 + ((index * 13) % 88)}%`;
    particle.style.top = `${12 + ((index * 17) % 76)}%`;
    particle.style.setProperty('--duration', `${5 + (index % 5)}s`);
    particle.style.setProperty('--delay', `${index * 0.16}s`);
    particleField.appendChild(particle);
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const form = document.querySelector('#leadForm');
const success = document.querySelector('#formSuccess');

if (form && success) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    success.classList.add('show');
    form.reset();
  });
}
