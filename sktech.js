function setup() {
    createCanvas(900, 800);
    background("blue");
  }
  
  function draw() {
    
    stroke("black");
  
    fill("green");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  