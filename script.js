
    const button = document.getElementById('action-btn');
    const textElement = document.getElementById('declaration-text');

    button.addEventListener('click', function() {
    textElement.textContent = "Stand firm in faith! Victory is assured.";
    button.textContent = "Amen & Amen!";
    button.style.backgroundColor = "#10b981"; 
    });