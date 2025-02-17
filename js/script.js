// Get references to the dark mode toggle and body element
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const navbar = document.querySelector('.navbar');

// Function to toggle dark mode
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    navbar.classList.toggle('dark-mode');

    // Save the theme preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Check the user's saved theme preference from localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    navbar.classList.add('dark-mode');
    darkModeToggle.checked = true; // Set toggle to checked if dark mode is on
}

// Add event listener for toggle switch
darkModeToggle.addEventListener('change', toggleDarkMode);

document.getElementById('darkModeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
  });
  document.addEventListener("DOMContentLoaded", function() {
    const roles = ["A Software Developer", "Violinist", "Student"];
    const roleDisplay = document.getElementById("rolesDisplay");
    let index = 0;
    
    function typeRole() {
        roleDisplay.textContent = ""; // Clear previous text
        let role = roles[index];
        let charIndex = 0;
        roleDisplay.style.borderRight = ".15em solid #212529"; // Cursor effect

        function typeChar() {
            if (charIndex < role.length) {
                roleDisplay.textContent += role[charIndex];
                charIndex++;
                setTimeout(typeChar, 50); // Faster typing speed
            } else {
                setTimeout(() => {
                    index = (index + 1) % roles.length;
                    typeRole();
                }, 1000); // Shorter pause before switching roles
            }
        }
        typeChar();
    }
    setTimeout(typeRole, 2500); // Start after name animation completes
});


document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect
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
  
    // Dark Mode Toggle
    const toggleButton = document.getElementById("toggleThemeBtn");
    const body = document.body;
    const navbar = document.querySelector('.navbar');
  
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      navbar.classList.toggle('dark-mode');
      // Save preference
      localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
    });
  
    // Load previous dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark-mode');
      navbar.classList.add('dark-mode');
    }
  });
  
