// Johan Steven Ospina Arroyave
// Bouncing Ball exercise
// Every time the ball bounces on a wall, it changes to a random color

//Setup of variables
let x;
let y;
let speedX;
let speedY;
let r;
let g;
let b;

function setup(){
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
  //Randomize speedX and SpeedY
  //Positive means the ellipse moves forward,
  //and negative it moves backwards
  speedX = random(-5., 5.);
  speedY = random(-5., 5.);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw(){
  background(204, 229, 255);

  //For a new frame accumulate a new value to x and y
  //based on the random speedX and speedY
  x += speedX;
  y += speedY;

if ((x > width-25) || (x < 0+25)) {
  speedX = (speedX *-1);
  r = random(255);
  g = random(255);
  b = random(255);
}


if ((y > height-25) || (y < 0+25)) {
  speedY = (speedY * -1);
  r = random(255);
  g = random(255);
  b = random(255);
}

  fill(r, g, b);
  ellipse(x, y, 50, 50);





}
