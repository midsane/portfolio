const homeText = document.querySelector(".text");
const devText = "a Web Developer...";
const headText = "Hello Everyone ! , I am Aditya Raj... ";
let index = 0, devIndex = 0, removalIndex = 33;

function typeWriterEffect() {
  if (index < headText.length) {
    homeText.textContent = headText.substring(0, index++) + "|";
    setTimeout(typeWriterEffect, 100);
  } else {
    function backspaceEffect() {
      homeText.textContent = homeText.textContent.substring(0, removalIndex--) + "|";
      if (removalIndex >= 24) {
        setTimeout(backspaceEffect, 150);
      } else {
        setTimeout(typeDevText, 100);
      }
    }
    function typeDevText() {
      homeText.textContent = `Hello Everyone, I am ${devText.substring(0, devIndex++)}|`;
      if (devIndex <= devText.length) {
        setTimeout(typeDevText, 100);
      }
    }
    backspaceEffect();
  }
}
typeWriterEffect();

const skillData = {
  html: "<p>HTML<h3>",
  css: "<p>CSS:</p><p>Flexbox,Grid Bootstrap.</p>",
  javascript: "<p>Javascript:</p> <p>DOM manipulation</p>",
  nodejs: "<p>Node.js:</p> <p>NPM, Express.js, Axios.</p>",
  python: "<p>Python:</p> <p>Turtle module, OOPS</p>",
  postgresql: "<p>PostgreSQL:</p> <p>CRUD, pg</p>",
  react: "<p>React JS:</p> <p>useState, useRef, Context API, useEffect and more</p>"
};

window.addEventListener("scroll", () => {
  const skillPart = document.querySelector(".skill-below");
  const contactMe = document.querySelector(".contact-bar");
  const myProject = document.querySelector(".my-project");
  const nav = document.querySelector(".nav");
  const scrollPosition = window.innerHeight + window.scrollY;

  nav.style.scale = window.scrollY > window.innerHeight / 50 ? "0.9" : "1";

  if (window.innerWidth > 663) {
    const toggleSkillAnimations = (add) => {
      [".star-1", ".star-2", ".star-3"].forEach(cls => document.querySelector(cls).classList.toggle(`${cls.substring(1)}-scroll`, add));
      document.querySelector(".rocket").classList.toggle("rocket-animation", add);
      document.querySelector(".skill-text").classList.toggle("skill-text-animation", add);
      document.querySelectorAll(".skill-list img").forEach(skill => skill.classList.toggle("rotate", !add));
      document.querySelector(".content").classList.toggle("content-animation", add);
    };
    toggleSkillAnimations(scrollPosition > skillPart.offsetTop);
  } else {
    document.querySelectorAll(".star-1, .star-2, .star-3").forEach(el => el.classList.add("star-1-scroll"));
  }

  document.querySelector(".contact-bar").classList.toggle("contact-bar-show", scrollPosition > contactMe.offsetTop);
  document.querySelector(".contactMe").classList.toggle("scaleUp", scrollPosition > contactMe.offsetTop);

  myProject.classList.toggle("my-project-show", scrollPosition > myProject.offsetTop);
  document.querySelector(".myProject").classList.toggle("scaleUp", scrollPosition > myProject.offsetTop);

  const aboutSection = document.querySelector(".intro");
  const rocket2Animation = window.innerWidth < 1282 ? scrollPosition > 2500 : scrollPosition > aboutSection.offsetTop;
  document.querySelector(".rocket2").classList.toggle("rocket2-animation", rocket2Animation);
  document.querySelector(".aboutMe").classList.toggle("aboutMe-animation", scrollPosition > (window.innerWidth < 1282 ? 1440 : aboutSection.offsetTop));
});

const skillIcons = document.querySelectorAll(".skill");
skillIcons.forEach(icon => {
  icon.addEventListener("mouseover", () => {
    document.querySelector(".content").innerHTML = skillData[icon.alt];
    document.querySelector(`.${icon.classList[1]}`).classList.add("skill-box-hover");
  });
  icon.addEventListener("mouseout", () => {
    document.querySelector(`.${icon.classList[1]}`).classList.remove("skill-box-hover");
  });
});

window.onload = () => {
  document.querySelector(".i-am").classList.add("textMoveUp");
  document.querySelector(".aditya").classList.add("textMoveUp");
};

document.querySelectorAll(".logo").forEach(logo => {
  logo.addEventListener("click", () => {
    logo.classList.add("logo-clicked");
    setTimeout(() => logo.classList.remove("logo-clicked"), 100);
  });
  logo.addEventListener("mouseover", () => logo.classList.add("logo-hover"));
  logo.addEventListener("mouseout", () => logo.classList.remove("logo-hover"));
});

document.querySelector(".arrow-up").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const hm1 = document.querySelector(".hamburger-menu");
const navOverlay = document.querySelector(".nav-mobile-overlay");
const closeMenu = () => {
  setTimeout(() => {
    navOverlay.style.display = "none";
    hm1.style.display = "flex";
  }, 600);
  navOverlay.classList.add("fade-out");
};

hm1.addEventListener("click", () => {
  hm1.style.display = "none";
  navOverlay.style.display = "flex";
  navOverlay.classList.add("fade-in");
  navOverlay.classList.remove("fade-out");
});

document.querySelector(".hamburger-menu2").addEventListener("click", closeMenu);
document.querySelectorAll(".nav-mobile-menu .logo").forEach(menu => menu.addEventListener("click", closeMenu));

document.querySelector(".intro1").addEventListener("mouseover", () => {
  document.querySelectorAll(".intro1 span").forEach(span => span.style.color = "#fb4bef");
});

document.querySelector(".intro1").addEventListener("mouseout", () => {
  document.querySelectorAll(".intro1 span").forEach(span => span.style.color = "black");
});

document.querySelector(".intro2").addEventListener("mouseover", () => {
  document.querySelectorAll(".intro2 span").forEach(span => span.style.color = "#fb4bef");
});

document.querySelector(".intro2").addEventListener("mouseout", () => {
  document.querySelectorAll(".intro2 span").forEach(span => span.style.color = "black");
});

function updateLiveTime() {
  const now = new Date();
  document.querySelector("footer p").textContent = `© Aditya A.K.A midsane @ ${now.toLocaleTimeString()} / ${now.getFullYear()}`;
  setTimeout(updateLiveTime, 1000);
}
updateLiveTime();
