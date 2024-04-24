function setup() {
  createCanvas(windowWidth, windowHeight);
}

  function draw() {
    background(255);
    fill(255, 200, 200);
    //legs
    rect(150, 260, 25, 100);
    rect(220, 260, 25, 100); 

    fill(0);
    rect(150, 350, 25, 25);
    rect(220, 350, 25, 25);

    //body
    fill(255, 200, 200);
    ellipse(200, 200, 300, 250);
    //left ear
    fill(255, 200, 200);
    ellipse(165, 145, 25, 50);
    //right ear
    fill(255, 200, 200);
    ellipse(235, 145, 25, 50);

    //face
    fill(255, 200, 200);
    circle(200, 200, 150);

    //eyes
    fill(255);
    circle(180, 170, 25);
    circle(220, 170, 25);
    fill(0);
    circle(180, 170, 10);
    circle(220, 170, 10);

    //nose
    fill(255, 200, 200);
    ellipse(200, 210, 50, 25);
    fill(0);
    circle(190, 210, 10);
    circle(210, 210, 10);

    //mouth-look up "arc" on p5 references page
    noFill();
    arc(200, 225, 50, 50, PI/4, PI);
  }