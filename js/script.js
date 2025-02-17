document.addEventListener("DOMContentLoaded", function () {
  const goToTopBtn = document.getElementById("goToTop");

  // Scroll event for "Go To Top" button
  window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
          goToTopBtn.style.display = "block";
      } else {
          goToTopBtn.style.display = "none";
      }
  });

  // Dark Mode Toggle
  const toggleButton = document.getElementById("darkModeToggle");
  const body = document.body;
  const navbar = document.querySelector(".navbar");

  // Check local storage for dark mode preference
  if (localStorage.getItem("darkMode") === "enabled") {
      body.classList.add("dark-mode");
      navbar.classList.add("dark-mode");
      toggleButton.checked = true; // Ensure toggle reflects dark mode state
  }

  // Toggle dark mode when the switch is clicked
  toggleButton.addEventListener("change", () => {
      body.classList.toggle("dark-mode");
      navbar.classList.toggle("dark-mode");

      // Save preference in localStorage
      if (body.classList.contains("dark-mode")) {
          localStorage.setItem("darkMode", "enabled");
      } else {
          localStorage.setItem("darkMode", "disabled");
      }
  });

  // Contact Form Submission
  const contactForm = document.getElementById("contactForm");
  const popupModal = document.getElementById("popupModal");
  const popupMessage = document.getElementById("popupMessage");

  contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent actual form submission

      const message = document.getElementById("message").value;
      popupMessage.innerHTML = `Your message: "<strong>${message}`;

      popupModal.style.display = "flex"; // Show popup
      contactForm.reset(); // Reset the form
  });

  // Function to close the popup
  function closePopup() {
      popupModal.style.display = "none"; // Hide the popup
  }

  // Add event listener to the close button
  const closePopupButton = document.getElementById("closePopupButton");
  closePopupButton.addEventListener("click", closePopup);

  // Go To Top Button Scroll
  goToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Typing Effect for roles
  const roles = ["A Software Developer", "A Student", "A Violinist"];
  let roleIndex = 0;
  let i = 0;
  const dynamicText = document.querySelector(".dynamic-txt");

  function typeEffect() {
      let text = roles[roleIndex];
      i = 0;
      dynamicText.innerHTML = "";
      dynamicText.style.borderRight = "3px solid #212529";

      function type() {
          if (i < text.length) {
              dynamicText.innerHTML += text.charAt(i);
              i++;
              setTimeout(type, 100);
          } else {
              dynamicText.style.borderRight = "none";
              setTimeout(erase, 1500);
          }
      }

      function erase() {
          if (i > 0) {
              dynamicText.innerHTML = text.substring(0, i - 1);
              i--;
              setTimeout(erase, 50);
          } else {
              dynamicText.style.borderRight = "3px solid #212529";
              roleIndex = (roleIndex + 1) % roles.length;
              setTimeout(typeEffect, 500);
          }
      }

      type();
  }

  typeEffect();
});
