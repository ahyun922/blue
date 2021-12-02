let theta = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
  fill(15, 200 ,400);
}

function draw() {
  background(20, 100, 94);
  rotateX(theta);
   rotateY(millis() / 1000);
  rotateZ(theta/5);
  
  push();
    // rotateY(theta * 5);
    translate(-100, 50, 0);
    sphere(80, 16);
  pop();
  
  push();
    // rotateY(theta * 2);  
    translate(100, -50, 0);
    sphere(50);
  pop();

  
  
  sphere(50);
  theta+=0.01;
  
 
  
}