
let repelDist;
let canvas;
let makeBig = false;
let homePageOn = true;

let buttonW, buttonH, buttonX, buttonY; 
let d;

let headerOne;

let pageTwoImage;
let rectAlpha = 1; //SYD: I made this a global variable so I can change it in the pageTwo function, this is for your fade in transition

function preload(){
  pageTwoImage = loadImage('Images/bar.jpg');

}

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  colorMode(HSB);
  imageMode(CENTER);

  headerOne = select('#headerOne');
  headerOne.style('display', 'block');

  noStroke();

  buttonW = width*0.4;
  buttonH = height*0.1;
  buttonX = width/2;
  buttonY = height/1.7;
 
}

function draw() {
  fill(13,30, 88);
  rect(width/2, height/2, width, height);

  // fill(100, 4, 20);
  // rect(-484, 112, 910, 60);
  if(homePageOn){
    homePage();
  } else {
    headerOne.style('display', 'none');
    pageTwo();
  }
}


function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
    mouseX = -width / 2;
    mouseY = -height / 2;



}

function homePage(){
  //HOME PAGE -----------------------------
  background(50);
  rectMode(CENTER);
  let rectW = width*0.9;
  let rectH = height*0.9; 
  noStroke();
  rect(width/2, height/2, rectW, rectH);
  

  //START BUTTON -----------------------------
  noStroke();
  fill(189, 18, 44);
  rect(buttonX, buttonY, buttonW, buttonH, height*0.04);

  textAlign(CENTER, CENTER);
  textSize(height*0.05)
  stroke(0);
  fill(0, 0, 100);
  text("START", width/2, height/1.7);

  d = dist(mouseX, mouseY, buttonX, buttonY);

  

}


function mousePressed(){
  if(d < buttonW/2 && d < buttonH/2){
    homePageOn = false;
    
  }


}

function pageTwo(){
  //Background
  background(50);
  rectMode(CENTER);
  let rectW = width*0.9;
  let rectH = height*0.9; 
  noStroke();
  rect(width/2, height/2, rectW*0.5, rectH*0.5);
  

  //Image---
  image(pageTwoImage, width/2, height/2, width*0.9, height*0.91);
  
    //rectangle
    noStroke();
    fill(13,30, 88, 0.60);
    rect(width/2.0, height/1.10, width*0.50, height*0.10);

    //Bar text
    textAlign(CENTER, CENTER);
  textSize(height*0.05)
  stroke(0);
  fill(0, 0, 0);
  text("It's late and you're drunk, bar's closing soon", width/2, height/1.1);

  //Phone choice button
  let buttonS = height*0.03;
  let buttonX = width*0.1;
  let buttonY = buttonS/2 + 15; 

  noStroke();
  fill(189, 18, 44);

  //SYD: in order to click on your button you need to repeat what we did with the start button (hint: use dist function)
  // look at dist function in your home page and look at what we wrote in the mousePressed function

  //SYD: The reason your ellispse wasn't showing up is you had an extra number there that shouldn't be there
  ellipse(buttonX, buttonY, buttonS, buttonS); //SYD: I created a variable called buttonS

  //SYD: Adding a second circle next to the other circle, using the same variables to make the code more readable
  ellipse(width/2, buttonY, buttonS, buttonS);

  ellipse(width*0.9, buttonY, buttonS, buttonS);

  //SYD: Add the illusion of a fade in transition by changing the alpha value of a black rectangle
  fill(0, 0, 0, rectAlpha); // Made rectAlpha a global variable so I can start it at 1 and change it to 0 gradually
  rect(width/2, height/2, width, height); 

  //"animate" the fade in transition by decreasing the alpha value of the rectangle
  rectAlpha -= 0.01;

  //For optimization, make sure the alpha value stops moving
  if(rectAlpha <= 0){ //once it reaches 0, stop changing the alpha value
    rectAlpha = 0;
  }

}