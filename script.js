// =====================
// ✨ TYPING EFFECT
// =====================

let text = "Hi, I'm Siti Nuratiqah Abu Bakar";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;

    setTimeout(typingEffect, 60);
  }
}

typingEffect();


// =====================
// ✨ SMOOTH SCROLL
// =====================

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}


// =====================
// ✨ FORM VALIDATION
// =====================

function validateForm() {

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {

    alert("Please fill all fields!");
    return false;
  }

  alert("Message sent successfully!");

  // reset form after submit
  document.querySelector("form").reset();

  return false;
}


// =====================
// ✨ SHOW CURRENT TIME
// =====================

function showTime() {

  const now = new Date();

  document.getElementById("time").innerHTML =
    now.toLocaleString("en-MY", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });
}


// =====================
// 🌙 DARK MODE
// =====================

const modeBtn = document.getElementById("modeBtn");

// check saved mode
if (localStorage.getItem("theme") === "dark") {

  document.body.classList.add("dark");

  modeBtn.textContent = "☀️";
  modeBtn.title = "Switch to Light Mode";
}

// button click
modeBtn.onclick = function () {

  document.body.classList.toggle("dark");

  // save mode
  if (document.body.classList.contains("dark")) {

    localStorage.setItem("theme", "dark");

    modeBtn.textContent = "☀️";
    modeBtn.title = "Switch to Light Mode";

  } else {

    localStorage.setItem("theme", "light");

    modeBtn.textContent = "🌙";
    modeBtn.title = "Switch to Dark Mode";
  }
};


// =====================
// ✨ ACTIVE NAVBAR
// =====================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.onscroll = () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {

      link.classList.add("active");
    }
  });
};