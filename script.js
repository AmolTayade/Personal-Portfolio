// Desktop LD toggle
const toggle = document.querySelector(".LD-toggle");
const img = document.querySelector(".profile .profile-border img");
const darkimg = "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Black&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Wink&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light";
const lightimg = "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Black&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light";

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  img.src = document.body.classList.contains("dark") ? darkimg : lightimg;
}

toggle.addEventListener("click", toggleDarkMode);

// FAB Menu toggle
function toggleFAB() {
  const fab = document.querySelector('.FAB');
  const menu = document.getElementById('fabMenu');
  fab.classList.toggle('open');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// FAB LD toggle integration
const fabToggle = document.querySelector(".LD-toggle-fab");
if(fabToggle){
  fabToggle.addEventListener("click", () => {
    toggleDarkMode(); // reuse the same function
  });
}

// Fade-in-up IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in-up");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });
  elements.forEach(el => observer.observe(el));
});
    
    // menuToggle.addEventListener("click", () => {
    //   navLinks.classList.toggle("active");

    // });
