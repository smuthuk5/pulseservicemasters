// Basic interactivity for demo
document.addEventListener('DOMContentLoaded', function(){
  const warrantyBtns = document.querySelectorAll('.warranty-toggle');
  warrantyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.dataset.target);
      if (target) target.classList.toggle('hidden');
    });
  });

  // contact form stub
  const form = document.getElementById('contactForm');
  if(form) form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks! Message sent (demo).');
  });
});
