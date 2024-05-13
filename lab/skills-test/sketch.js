function add(num1, num2) {
    return num1 + num2
}

window.makeItGreen = function() {
    var circle = document.getElementById('circle');
    circle.style.backgroundColor = 'green';
  }

  console.log(makeItGreen)

  function setup() {
    createCanvas(600, 600);
  }

  let object = {
  bgCol: '#e8e8e8',
  col1: '#fdf2a3',
  col2: '#ccb402',
  col3: '#fdd037',
  col4: '#fce21b',
  };

  function draw() {
    background(object.bgCol);

    strokeWeight(5);
//case
    fill(object.col3);
    rect(120, 40, 360, 520);
    fill(object.col1);
    rect(130, 50, 340, 500, 20);
//screws
    fill(object.col2);
    circle(150, 70, 20);
    circle(450, 70, 20);
    circle(150, 530, 20);
    circle(450, 530, 20);
//bottom line
fill(object.col3);
rect(170, 520, 260, 20, 20);

//bottom circle
fill(object.col3);
circle(300, 370, 270);
fill(object.col4);
circle(300, 370, 250);
noFill();
circle(300, 370, 80);
fill('black');
circle(300, 370, 60);

//top circle
fill(object.col3);
circle(300, 150, 150);
fill(object.col4);
circle(300, 150, 130);
circle(300, 150, 60);
fill('black');
circle(300, 150, 40);

console.log(object);
  }


  
