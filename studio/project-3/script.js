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
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}