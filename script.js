// typing effect
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

// scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// form validation
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill all fields!");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}

// time
function showTime() {
  document.getElementById("time").innerHTML = new Date();
}

//
const modeBtn = document.getElementById("modeBtn");

modeBtn.onclick = function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    modeBtn.textContent = "☀️";
    modeBtn.title = "Switch to Light Mode";
  } else {
    modeBtn.textContent = "🌙";
    modeBtn.title = "Switch to Dark Mode";
  }
};