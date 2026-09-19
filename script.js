const btn1 = document.getElementById('action-btn-1');
const btn2 = document.getElementById('action-btn-2');
const btn3 = document.getElementById('action-btn-3');

if (btn1) {
  btn1.addEventListener('click', function() {
    btn1.textContent = "Faith Confirmed!";
    btn1.style.backgroundColor = "#10b981";
  });
}

if (btn2) {
  btn2.addEventListener('click', function() {
    btn2.textContent = "Strength Stored!";
    btn2.style.backgroundColor = "#10b981";
  });
}

if (btn3) {
  btn3.addEventListener('click', function() {
    btn3.textContent = "Mission Active!";
    btn3.style.backgroundColor = "#10b981";
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  // Only execute if the form actually exists on this specific page
  if (contactForm !== null) {
    const nameInput = document.getElementById('name-input');
    const successMessage = document.getElementById('success-message');

    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const userName = nameInput.value;

      successMessage.textContent = `Thank you, ${userName}! Your message has been received. Blessings!`;
      successMessage.style.display = 'block';

      contactForm.reset();
    });
  }
});