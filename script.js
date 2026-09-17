
const button = document.getElementById('action-btn');
const textElement = document.getElementById('declaration-text');

button.addEventListener('click', function() {
textElement.textContent = "Stand firm in faith! Victory is assured.";
button.textContent = "Amen & Amen!";
button.style.backgroundColor = "#10b981"; 
});

const btn1 = document.getElementById('action-btn-1');
const btn2 = document.getElementById('action-btn-2');
const btn3 = document.getElementById('action-btn-3');

btn1.addEventListener('click', function() {
  btn1.textContent = "Faith Confirmed!";
  btn1.style.backgroundColor = "#10b981";
});

btn2.addEventListener('click', function() {
  btn2.textContent = "Strength Stored!";
  btn2.style.backgroundColor = "#10b981";
});

btn3.addEventListener('click', function() {
  btn3.textContent = "Mission Active!";
  btn3.style.backgroundColor = "#10b981";
});