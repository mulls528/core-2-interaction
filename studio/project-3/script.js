document.addEventListener('DOMContentLoaded', function() {
    // Array of 4 different colors
    var colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33E9'];

    // Function to get a random color from the array
    function getRandomColor() {
        var randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    // Update the SVG cursor color with a random color from the array
    function updateCursorColor() {
        var randomColor = getRandomColor();
        var cursorUrl = url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg id='Layer_1' height='32px' width='32px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1125 1125'%3E%3Cpath d='m194.49,452.63C280.05,384.29,723.81,12.79,723.81,12.79c0,0,172.47,556.67,206.7,656.44l-530.4,443.51L194.49,452.63Z'/%3E%3C/svg%3E");;
        document.body.style.cursor = 'url("' + cursorUrl + '"), auto';
    }

    // Call the updateCursorColor function on page load
    updateCursorColor();
});function slideRight() {
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