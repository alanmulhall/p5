function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);
  noFill();
  for (var i = 50; i < 600; i += 10) {
    ellipse(width/2, height/2, i, i);
  }
  save('circle.jpg');
}