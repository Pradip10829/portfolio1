// Contact form validation logic
(function () {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (!form || !feedback) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errors = [];

    if (name.length < 2) errors.push('Please enter your full name.');
    if (!emailPattern.test(email)) errors.push('Please enter a valid email address.');
    if (message.length < 15) errors.push('Message should be at least 15 characters.');

    if (errors.length) {
      feedback.className = 'alert-soft error';
      feedback.textContent = errors.join(' ');
      return;
    }

    feedback.className = 'alert-soft success';
    feedback.textContent = 'Thank you for your message. This demo form has passed validation successfully.';
    form.reset();
  });
})();
