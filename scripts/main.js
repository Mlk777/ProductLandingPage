let ul = document.getElementById("menu-list");

//Detect each section and check for element in it, if pageoffsettop < 150 reduce opacity till 0. Do the reverse when scrolling down
window.addEventListener("scroll", function(e) {
  if (window.pageYOffset > 10) {
    //ul.style.background = "rgba(0,0,0,0.84)";
    ul.style.display = "none";
  } else {
    ul.style.display = "flex";
    ul.style.background = "none";
  }
});

//Smooth scroll to sections
let links = document.getElementsByClassName("nav-link");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(event) {
    event.preventDefault();
    let sectionHash = this.hash.replace(/^#/, "");
    let section = document.getElementById(sectionHash);
    section.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  });
}

// let mainScreen = document.getElementById("intro");
// let textIntro = document.getElementById("text-intro");

// setTimeout(() => {
//   mainScreen.style.transition = "opacity 2s";
//   mainScreen.style.opacity = 1;
// }, 2000);

// let typed = new Typed("#text-intro", {
//   strings: [
//     "Are you looking out the windows while telling yourself that you need some time off?",
//     "Don't worry",
//     "We got you"
//   ],
//   typeSpeed: 40,
//   loop: false,
//   startDelay: 3000,
//   fadeOut: true,
//   fadeOutDelay: 1000,
//   showCursor: false
// });

// setTimeout(() => {
//   mainScreen.style.transition = "opacity 2s";
//   mainScreen.style.opacity = 0;
// }, 15000);
