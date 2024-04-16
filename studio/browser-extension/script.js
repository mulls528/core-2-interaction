// let allText = document.querySelectorAll("*");

// //creating "for of" loop to target allText//
// for(let text of allText) {
// //add new style and name classlist "font-change"//
// text.classList.add("font-change");
// }//

let allImages = document.querySelectorAll("*");

for(let thing of allImages) {
    thing.src = "https://www.secondcity.com/wp-content/uploads/2014/09/SC_Alumni_Murray_Bill_600x600_001.jpg";
    thing.srcset = "https://www.secondcity.com/wp-content/uploads/2014/09/SC_Alumni_Murray_Bill_600x600_001.jpg";
}