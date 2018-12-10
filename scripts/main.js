let mainScreen = document.getElementById("intro");
let textIntro = document.getElementById("text-intro");

setTimeout(() => {
  mainScreen.style.transition = "opacity 2s";
  mainScreen.style.opacity = 1;
}, 2000);

let typed = new Typed("#text-intro", {
  strings: [
    "Are you looking out the windows while telling yourself that you need some time off?",
    "Don't worry",
    "We got you"
  ],
  typeSpeed: 40,
  loop: false,
  startDelay: 3000,
  fadeOut: true,
  fadeOutDelay: 1000,
  showCursor: false
});

setTimeout(() => {
  mainScreen.style.transition = "opacity 2s";
  mainScreen.style.opacity = 0;
}, 15000);
