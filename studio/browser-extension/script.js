let allText = document.querySelectorAll("*");

//creating "for of" loop to target allText//
for(let text of allText) {
//add new style and name classlist "font-change"//
text.classList.add("font-change");
}