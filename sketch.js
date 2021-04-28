hr = hour();
mn = minute();
sc = scenonds();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  scAngle = map(sc, 0,60,0,360);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
}