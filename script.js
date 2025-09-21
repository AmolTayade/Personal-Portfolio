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
// const sr = ScrollReveal({
    //   origin:'top',
    //   distance :'80px',
    //   duration: 2000,
    //   reset: true   // smoother UX
    // });
    
    // sr.reveal('h2',{})
    // sr.reveal('#home p',{})
    // sr.reveal('#home .download-btn', { delay: 100, reset: true });
    // sr.reveal('#home .logo',{interval:100})
    // sr.reveal('#home .profile',{delay:400})
    // sr.reveal('dotlottie-wc',{delay:200})
    
    // const paragraphs = document.querySelectorAll('.about-text p');
    // paragraphs.forEach((el, index) => {
    //   ScrollReveal().reveal(el,{ delay: 200 * (index + 1) });
    // });
    
    // const skills = document.querySelectorAll('.skill-card');
    // skills.forEach((el,index)=>{
    //   ScrollReveal().reveal(el,{ delay: 200 * (index + 1) });
    // });
    
    // const projects = document.querySelectorAll('.project-card');
    // sr.reveal('#skills h2',{delay:200*(projects.length)})
    // projects.forEach((el, index) => {
    //   ScrollReveal().reveal(el,{ delay: 200 * (index + 1) });
    // });
    
    // sr.reveal('#contact h2',{delay:200})
    // sr.reveal('.inp1',{delay:200})
    // sr.reveal('.inp2',{delay:400})
    // sr.reveal('.inp3',{delay:600})
    // sr.reveal('button',{delay:800})
    
    // const menuToggle = document.querySelector(".menu-toggle");
    // const navLinks = document.querySelector("nav ul");
    
    // menuToggle.addEventListener("click", () => {
    //   navLinks.classList.toggle("active");
    // });