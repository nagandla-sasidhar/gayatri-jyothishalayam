// Mobile navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  // Close menu on link click
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  // Toggle dropdown on mobile
  navMenu.querySelectorAll('.nav-item').forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown');
    if (dropdown && link) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          item.classList.toggle('open');
        }
      });
    }
  });
}

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Booking form → WhatsApp redirect
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.fullName.value.trim();
  const phone = form.phone.value.trim();
  const service = form.service.options[form.service.selectedIndex].text;
  const consultType = form.consultType.options[form.consultType.selectedIndex].text;
  const city = form.city.value.trim();
  const date = form.preferredDate.value;
  const message = form.message.value.trim();

  const text = `Namaste Sri Sivaprasad garu 🙏

New Consultation Request:
👤 Name: ${name}
📞 Phone: ${phone}
🏙 City: ${city || 'Not specified'}
📋 Service: ${service}
💻 Consultation Type: ${consultType}
📅 Preferred Date: ${date || 'Flexible'}
📝 Details: ${message || 'None provided'}

Kindly confirm the appointment. Thank you.`;

  const whatsappURL = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(text)}`;
  window.open(whatsappURL, '_blank');
}

// Set min date on date input to today
const dateInput = document.getElementById('preferredDate');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.min = today;
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
