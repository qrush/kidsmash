// Global variables
var radius = 50.0;
var X, Y;
var nX, nY;
var delay = 4;

var sX, sY, squareX, squareY;
var yellowFill = 0, redFill = 121;
var move = true;

var shapes = [];

function makeRect(x, y, h, w, f1, f2, f3) {
  return {
    draw: function() {
      fill(f1, f2, f3);
      rect(x, y, h, w);
    },
  };
}

// Setup the Processing Canvas
function setup(){
  size( 500, 500 );
  strokeWeight( 10 );
  frameRate( 15 );
  X = width / 2;
  Y = width / 2;
  nX = X;
  nY = Y;  
}

function mousePressed() {
  shapes.push(makeRect(mouseX, mouseY, 40, 40, randInt(255), randInt(255), randInt(255)));
}

function randInt(max) {
  return Math.floor(Math.random()*max);
}

// Main draw loop
function draw(){
  
  radius = radius + sin( frameCount / 4 );
  
  // Track circle to new destination
  X+=(nX-X)/delay;
  Y+=(nY-Y)/delay;
  
  // Fill canvas grey
  background( 100 );
  
  // Set fill-color to blue
  fill( 0, 121, 184 );
  
  // Set stroke-color white
  stroke(255); 

  // Draw circle
  ellipse( X, Y, radius, radius );

  fill(redFill, 0, yellowFill);

  squareX+=(sX-squareX)/delay;
  squareY+=(sY-squareY)/delay;
 
  // Draw rectangle
  rect(squareX, squareY, 30.0, 30.0);

  for(var shape in shapes) {
    shapes[shape].draw();
  }

}

// Set circle's next destination
function mouseMoved(){
  if(move) {
    nX = mouseX;
    nY = mouseY;  
  }
}

function keyPressed() {
  if(key == CODED) {
    if(keyCode == UP) {
      temp = redFill;
      redFill = yellowFill;
      yellowFill = temp;
    }
  } else {
    if(key == 't') {
      temp = redFill;
      redFill = yellowFill;
      yellowFill = temp;
    } else if(key == 's') {
      move = !move;
    }
  }
}
