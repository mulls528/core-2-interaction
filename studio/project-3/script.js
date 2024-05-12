
const cursorImages = [
  'blue-diamond.png',
  'green-diamond.png',
  'yellow-diamond.png',
  'orange-diamond.png'
];

function getRandomCursor() {
  const randomIndex = Math.floor(Math.random() * cursorImages.length);
  return `url(${cursorImages[randomIndex]}), auto`;
}

function setRandomCursor() {
  const randomCursor = getRandomCursor();
  document.documentElement.style.cursor = randomCursor;
}

document.addEventListener('DOMContentLoaded', setRandomCursor);

function applyCustomCursorToLinks() {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.style.cursor = 'inherit'; // Reset cursor to inherit
    link.addEventListener('mouseenter', () => {
      link.style.cursor = getRandomCursor();
    });
    link.addEventListener('mouseleave', () => {
      link.style.cursor = 'inherit';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setRandomCursor();
  applyCustomCursorToLinks(); // Apply custom cursor to links
});


var theThing = document.querySelector("#thing");
var animationDuration = 2000; 
var delayBetweenAnimations = 60000; 
var speedX = 5; 
var speedY = 3; 

function moveThing() {
  var startTime = Date.now();

  function animate() {
    var elapsed = Date.now() - startTime;

    
    var posX = (elapsed / animationDuration) * window.innerWidth;
    var posY = (elapsed / animationDuration) * window.innerHeight;

    theThing.style.left = posX + "px";
    theThing.style.top = posY + "px";

    
    if (elapsed >= animationDuration) {
      cancelAnimationFrame(animationFrame);
      setTimeout(function() {
        moveThing();
      }, delayBetweenAnimations);
    } else {
      var animationFrame = requestAnimationFrame(animate);
    }
  }

  animate();
}

moveThing();


function slideRight() {
    const OMEDY = document.getElementById('OMEDY');
    OMEDY.style.transition = 'transform 0.5s';
    OMEDY.style.transform = 'translateX(0rem)';
}

function slideLeft() {
    const OMEDY = document.getElementById('OMEDY');
    OMEDY.style.transition = 'transform 0.5s';
    OMEDY.style.transform = 'translateX(-8rem)';
}
document.querySelectorAll('a[href^="#"]'). forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"  
        })
    })
})

window.onscroll = function() {myFunction()};


var navbar = document.getElementById("menu");


var sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

