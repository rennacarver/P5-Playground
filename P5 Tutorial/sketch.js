function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  fill('aquamarine')
  stroke('orange')
  strokeWeight(5)
  circle (100, 100, 100)
  textSize(50)
  text("💮", 94, 105)
  text("🐞", mouseX, mouseY)
}
