/* -----------------------------
   Part 2: Functions & Scope
------------------------------ */

// Global variable
let multiplier = 10;

// Function with parameter + return value
function calculateValue(num) {
  // Local scope variable
  let result = num * multiplier;
  return result;
}

// Function to update the DOM with calculation
function showCalculation() {
  let value = calculateValue(5); // Pass parameter
  document.getElementById("calcResult").textContent = "Result: " + value;
}

/* -----------------------------
   Part 3: CSS + JS Integration
------------------------------ */

// Animate box by toggling a class
function animateBox() {
  let box = document.getElementById("animatedBox");
  box.classList.toggle("move"); // Trigger CSS transition
}

// Bonus: Start pulsing animation
function startPulse() {
  let btn = document.getElementById("hoverBtn");
  btn.classList.toggle("pulsing");
}

/* -----------------------------
   Event Listeners
------------------------------ */
document.getElementById("calcBtn").addEventListener("click", showCalculation);
document.getElementById("animateBtn").addEventListener("click", animateBox);
document.getElementById("hoverBtn").addEventListener("click", startPulse);
