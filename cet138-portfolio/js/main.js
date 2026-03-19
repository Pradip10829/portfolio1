// Shared UI behavior for all pages
(function () {
  const body = document.body;
  const currentPage = body.dataset.page;

  // Set active navigation item based on page key
  document.querySelectorAll('[data-nav]').forEach((link) => {
    if (link.dataset.nav === currentPage) {
      link.classList.add('active');
    }
  });

  // Update footer year automatically
  document.querySelectorAll('.year').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Simple reveal animation for content blocks
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealItems.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('visible'));
  }

  // JavaScript page mini demos
  const countBtn = document.getElementById('jsDemoBtn');
  const countOutput = document.getElementById('jsDemoCount');
  if (countBtn && countOutput) {
    let clicks = 0;
    countBtn.addEventListener('click', function () {
      clicks += 1;
      countOutput.textContent = `Button clicked ${clicks} time(s).`;
    });
  }

  const liveInput = document.getElementById('liveInput');
  const liveOutput = document.getElementById('liveOutput');
  if (liveInput && liveOutput) {
    liveInput.addEventListener('input', function () {
      const value = liveInput.value.trim();
      liveOutput.textContent = value || 'Type something to see live DOM updates.';
    });
  }

  // Projects page mini interaction
  const projectBtn = document.getElementById('projectActionBtn');
  const projectMsg = document.getElementById('projectActionMsg');
  if (projectBtn && projectMsg) {
    projectBtn.addEventListener('click', function () {
      projectMsg.textContent = 'This confirms JavaScript can update page content on user action.';
    });
  }
})();
