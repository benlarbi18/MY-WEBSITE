// 1. Grab the button and the paragraph from our HTML
      const button = document.getElementById('action-btn');
      const textElement = document.getElementById('declaration-text');

      // 2. Listen for a "click" event on the button
      button.addEventListener('click', function() {
        // 3. Change the paragraph text dynamically when clicked!
        textElement.textContent = "Stand firm in faith! Victory is assured.";
        button.textContent = "Amen & Amen!";
        button.style.backgroundColor = "#10b981"; // Turns the button a success green color!
      });