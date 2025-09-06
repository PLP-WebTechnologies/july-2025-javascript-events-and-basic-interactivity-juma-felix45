// ==============================
// Dark/Light Mode Toggle
// ==============================
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ==============================
// Counter
// ==============================
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

// ==============================
// FAQ Accordion
// ==============================
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ==============================
// Mobile Menu Toggle
// ==============================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuToggle.classList.toggle("active");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("show");
  menuToggle.classList.remove("active");
  overlay.classList.remove("show");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.classList.remove("active");
    overlay.classList.remove("show");
  });
});

// ==============================
// Form Validation
// ==============================
const form = document.getElementById("studentForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;
  formMessage.style.color = "red";

  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    formMessage.textContent = "Name must be at least 3 characters long.";
    valid = false;
  }

  const idNumber = document.getElementById("idNumber").value.trim();
  if (!/^[0-9]{6,}$/.test(idNumber)) {
    formMessage.textContent = "ID number must be at least 6 digits.";
    valid = false;
  }

  const email = document.getElementById("email").value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formMessage.textContent = "Enter a valid email.";
    valid = false;
  }

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (password.length < 6) {
    formMessage.textContent = "Password must be at least 6 characters.";
    valid = false;
  }
  if (password !== confirmPassword) {
    formMessage.textContent = "Passwords do not match.";
    valid = false;
  }

  const phone = document.getElementById("phone").value.trim();
  if (!/^\d{10,}$/.test(phone)) {
    formMessage.textContent = "Phone number must be at least 10 digits.";
    valid = false;
  }

  const age = document.getElementById("age").value;
  if (age < 18) {
    formMessage.textContent = "You must be at least 18 years old.";
    valid = false;
  }

  const country = document.getElementById("country").value.trim();
  if (country === "") {
    formMessage.textContent = "Please enter your country.";
    valid = false;
  }

  if (valid) {
    formMessage.style.color = "green";
    formMessage.textContent = "Registration successful!";
    form.reset();
  }
});
