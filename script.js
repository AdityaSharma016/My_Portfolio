// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const errorBox = document.getElementById("error-message");
  const successBox = document.getElementById("success-message");

  errorBox.textContent = "";
  successBox.textContent = "";

  if (name.length < 2) {
    errorBox.textContent = "Name must be at least 2 characters.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorBox.textContent = "Please enter a valid email address.";
    return;
  }

  if (message.length < 10) {
    errorBox.textContent = "Message must be at least 10 characters.";
    return;
  }

  // Simulate send
  successBox.textContent = "Message sent successfully!";
  this.reset();
});

// Scroll Reveal Animation
const sections = document.querySelectorAll("section");
const options = {
  threshold: 0.2,
};

const revealOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, options);

sections.forEach(section => {
  section.classList.add("hidden");
  revealOnScroll.observe(section);
});

// Mobile Nav Toggle (if you're adding mobile)
const toggleBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (toggleBtn && navMenu) {
  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed-output", {
    strings: [
      "UI/UX Designer",
      "Web Developer",
      "Creative Thinker",
      "Graphic Artist",
      "Problem Solver"
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: '|',
  });
});


// Filter buttons logic
const filterButtons = document.querySelectorAll(".filter-btn");
const achievementCards = document.querySelectorAll(".achievement-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Set active class
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    achievementCards.forEach((card) => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Achievement Popup Logic
function showAchievementDetail(id) {
  const certificates = {
    cert1: 'aws.pdf',
    cert2: 'cpp.pdf',
    cert3: 'c.pdf',
    cert4: 'java.pdf'
  };

  const achievementDetails = {
    cert1: "<h3>AWS Certified</h3><p>This is my AWS certificate.</p>",
    cert2: "<h3>C++ Certified</h3><p>This is my C++ certificate.</p>",
    cert3: "<h3>C Certified</h3><p>This is my C language certificate.</p>",
    cert4: "<h3>Java Certified</h3><p>This is my Java certificate.</p>"
  };

  // Show popup content
  const popup = document.getElementById("achievement-popup");
  const details = document.getElementById("popup-details");
  details.innerHTML = achievementDetails[id] || "<p>Details coming soon!</p>";
  popup.style.display = "flex";

  // Open PDF in new tab
  const certUrl = certificates[id];
  if (certUrl) {
    window.open(certUrl, '_blank');
  } else {
    alert('Certificate not found!');
  }
}

function closePopup() {
  document.getElementById("achievement-popup").style.display = "none";
}

