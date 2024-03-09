var index2 = 0;
var index = 0;
var removal = 36;
var homeText = document.querySelector(".text");
var dev = "a Web Developer...";
var removal = 33;
var headText = "Hello Everyone ! , I am Aditya Raj... ";

function writeTextSpecial() {
  if (index === headText.length - 1) {
    function writeDevText() {
      homeText.textContent =
        "Hello Everyone, I am " + dev.substring(0, index2) + "|";
      index2++;
      if (index2 < dev.length) {
        setTimeout(writeDevText, 100);
      }
    }

    function backspace() {
      homeText.textContent = homeText.textContent.substring(0, removal) + "|";
      removal--;
      if (removal >= 24) {
        setTimeout(backspace, 150);
      } else if (removal === 23) {
        setTimeout(writeDevText, 100);
      }
    }
    setTimeout(backspace, 100);
  }
  if (index < headText.length) {
    homeText.textContent = headText.substring(0, index) + "|";
    index++;
    setTimeout(writeTextSpecial, 100);
  }
}
writeTextSpecial();

const skill = {
  c: " <h3>C programming language</h3>",
  html: "<h3>HTML<h3>",
  css: "<h3>CSS:</h3><h4>Flexbox,Grid Bootstrap.</h4>",
  javascript: "<h3>Javascript:</h3> <h4>DOM manipulation</h4>",
  nodejs: "<h3>Node.js:</h3> <h4>NPM, Express.js, Axios.</h4> ",
  python: "<h3>Python:</h3> <h4>Turtle module, OOPS</h4>",
  postgresql: "<h3>PostgreSQL:</h3> <h4>CRUD, pg</h4>",
};

window.addEventListener("scroll", () => {
  var skillPart = document.querySelector(".skill-below");
  var scrollPosition = window.innerHeight + window.scrollY;
  var contactMe = document.querySelector(".contact-bar");

  if (window.scrollY > window.innerHeight / 50) {
    console.log("nav small");
    document.querySelector(".nav").style.scale = "0.9";
  } else {
    document.querySelector(".nav").style.scale = "1";
  }


  if(window.innerWidth > 663){

  if (scrollPosition > skillPart.offsetTop) {
      document.querySelector(".star-1").classList.add("star-1-scroll");
      document.querySelector(".star-2").classList.add("star-2-scroll");
      document.querySelector(".star-3").classList.add("star-3-scroll");

      document.querySelector(".rocket").classList.add("rocket-animation");
      document.querySelector(".skill-text").classList.add("skill-text-animation");
      document.querySelectorAll(".skill-list img").forEach((skill) => {
        skill.classList.remove("rotate");
        document.querySelector(".content").classList.add("content-animation");
      });
    } else {
      document.querySelector(".rocket").classList.remove("rocket-animation");
      document
        .querySelector(".skill-text")
        .classList.remove("skill-text-animation");
      document.querySelectorAll(".skill-list img").forEach((skill) => {
        skill.classList.add("rotate");
        document.querySelector(".content").classList.remove("content-animation");
      });
    }
}

else {
  if (window.scrollY < skillPart.offsetTop) {
    document.querySelector(".star-1").classList.add("star-1-scroll");
    document.querySelector(".star-2").classList.add("star-2-scroll");
    document.querySelector(".star-3").classList.add("star-3-scroll");

    document.querySelector(".rocket").classList.add("rocket-animation");
    document.querySelector(".skill-text").classList.add("skill-text-animation");
    document.querySelectorAll(".skill-list img").forEach((skill) => {
      skill.classList.remove("rotate");
      document.querySelector(".content").classList.add("content-animation");
    });
  } else {
    document.querySelector(".rocket").classList.remove("rocket-animation");
    document
      .querySelector(".skill-text")
      .classList.remove("skill-text-animation");
    document.querySelectorAll(".skill-list img").forEach((skill) => {
      skill.classList.add("rotate");
      document.querySelector(".content").classList.remove("content-animation");
    });
  }
}

  if (scrollPosition > contactMe.offsetTop) {
    document.querySelector(".contact-bar").classList.add("contact-bar-show");
    document.querySelector(".contactMe").classList.add("scaleUp");
    document.querySelector(".star-1").classList.remove("star-1-scroll");
    document.querySelector(".star-2").classList.remove("star-2-scroll");
    document.querySelector(".star-3").classList.remove("star-3-scroll");
  } else {
    document.querySelector(".contactMe").classList.remove("scaleUp");
    document.querySelector(".star-1").classList.add("star-1-scroll");
    document.querySelector(".star-2").classList.add("star-2-scroll");
    document.querySelector(".star-3").classList.add("star-3-scroll");
    document.querySelector(".contact-bar").classList.remove("contact-bar-show");
  }
 var aboutSection = document.querySelector(".intro");

  if (window.innerWidth < 1282){
      if (scrollPosition > 1440){

        document.querySelector(".aboutMe").classList.add("aboutMe-animation");
      }
      else {
            document.querySelector(".aboutMe").classList.remove("aboutMe-animation");

      }
      if(scrollPosition > 2500){
        console.log("now");
        document.querySelector(".rocket2").classList.add("rocket2-animation");
      }
      else {
        document.querySelector(".rocket2").classList.remove("rocket2-animation");
      }
  }
  else {
    if (scrollPosition > aboutSection.offsetTop) {
      document.querySelector(".rocket2").classList.add("rocket2-animation");
      document.querySelector(".aboutMe").classList.add("aboutMe-animation");
    } else {
      document.querySelector(".aboutMe").classList.remove("aboutMe-animation");
      document.querySelector(".rocket2").classList.remove("rocket2-animation");
    }
  }
  


});

var skillIconArr = document.querySelectorAll(".skill");
skillIconArr.forEach((icon) => {
  icon.addEventListener("mouseover", (event) => {
    document.querySelector(".content").innerHTML = skill[icon.alt];
    document
      .querySelectorAll("." + event.target.classList[1])[0]
      .classList.toggle("skill-box-hover");
  });
});

skillIconArr.forEach((icon) => {
  icon.addEventListener("mouseout", (event) => {
    console.log(event.target.classList);
    document
      .querySelectorAll("." + event.target.classList[1])[0]
      .classList.toggle("skill-box-hover");
  });
});

window.onload = () => {
  document.querySelector(".i-am").classList.add("textMoveUp");
  document.querySelector(".aditya").classList.add("textMoveUp");
};

document.querySelectorAll(".logo").forEach((logo) => {
  logo.addEventListener("click", () => {
    logo.classList.add("logo-clicked");
    setTimeout(() => {
      logo.classList.remove("logo-clicked", 100);
    });
  });

  logo.addEventListener("mouseover", () => {
    logo.classList.add("logo-hover");
  });

  logo.addEventListener("mouseout", () => {
    logo.classList.remove("logo-hover");
  });
});





  document.querySelector(".intro1").addEventListener("mouseover", ()=> {
    document.querySelectorAll(".intro1 span").forEach(span => {
      span.style.color = "#fb4bef";
    })
  })
  document.querySelector(".intro2").addEventListener("mouseover", ()=> {
    document.querySelectorAll(".intro2 span").forEach(span => {
      span.style.color = "#fb4bef";
    })
  })

  document.querySelector(".intro1").addEventListener("mouseout", ()=> {
    document.querySelectorAll(".intro1 span").forEach(span => {
      span.style.color = "black";
    })
  })
  document.querySelector(".intro2").addEventListener("mouseout", ()=> {
    document.querySelectorAll(".intro2 span").forEach(span => {
      span.style.color = "black";
    })
  })

 




function liveTime(){
  var date = new Date();
  var copyright =
  "©" +
  " aditya A.K.A midsane" +
  " @ " +
  date.toLocaleTimeString() +
  " / " +
  date.getFullYear();

  document.querySelector("footer p").textContent = copyright;
  setTimeout(liveTime, 1000);
}

liveTime();
