
let repelDist;
let canvas;
let makeBig = false;
let homePageOn = true;
let pageTwoOn = true;
let pageThreeOn = true;

let buttonW, buttonH, buttonX, buttonY; 
let d;

let headerOne;

let pageTwoImage, pageThreeImage, pageFourImage;
let phoneButton, taxiButton, keysButton;
let rectAlpha = 1; //SYD: I made this a global variable so I can change it in the pageTwo function, this is for your fade in transition

function preload(){
  pageTwoImage = loadImage('Images/bar.jpg');
  pageThreeImage = loadImage('Images/bedRoom.jpg');
  pageFourImage = loadImage('Images/carCrash.jpg');
  phoneButton = loadImage('Images/phone.png');
  taxiButton = loadImage('Images/taxiIcon.png');
  keysButton = loadImage('Images/keyIcon.png');
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

  if (d<buttonW/2 && d<buttonH/2){
    pageTwoOn = false;
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

  //Buttons for Phone/Taxi/Keys
  let buttonS = height*0.04;
  let buttonX = width*0.1;
  let buttonY = buttonS/2 + 13; 

  
  noStroke();
  fill(189, 18, 44);
  ellipse(buttonX, buttonY*0.99, buttonS, buttonS);
  image(phoneButton, width*0.1, height*0.03, width*0.04, height*0.05);

  //SYD: in order to click on your button you need to repeat what we did with the start button (hint: use dist function)
  // look at dist function in your home page and look at what we wrote in the mousePressed function

  //SYD: The reason your ellispse wasn't showing up is you had an extra number there that shouldn't be there
  // ellipse(buttonX, buttonY, buttonS, buttonS); //SYD: I created a variable called buttonS

  //SYD: Adding a second circle next to the other circle, using the same variables to make the code more readable
  noStroke();
  fill(11, 50, 91);
  ellipse(width/2, buttonY*0.99, buttonS, buttonS);
  image(taxiButton, width*0.5, height*0.03, width*0.02, height*0.03);

  noStroke();
  fill(4, 29, 84);
  ellipse(width*0.9, buttonY*0.99, buttonS, buttonS);

  //SYD: Add the illusion of a fade in transition by changing the alpha value of a black rectangle
  fill(0, 0, 0, rectAlpha); // Made rectAlpha a global variable so I can start it at 1 and change it to 0 gradually
  rect(width/2, height/2, width, height); 
  image(keysButton, width*0.9, height*0.03, width*0.02, height*0.029);

  d = dist(mouseX, mouseY, buttonX, buttonY);

  //"animate" the fade in transition by decreasing the alpha value of the rectangle
  rectAlpha -= 0.01;

  //For optimization, make sure the alpha value stops moving
  if(rectAlpha <= 0){ //once it reaches 0, stop changing the alpha value
    rectAlpha = 0;
  }

  function pageThree() {
      //Background
  background(50);
  rectMode(CENTER);
  let rectW = width*0.9;
  let rectH = height*0.9; 
  noStroke();
  rect(width/2, height/2, rectW*0.5, rectH*0.5);
  
  //rectangle
  noStroke();
  fill(13,30, 88, 0.60);
  rect(width/2.0, height/1.10, width*0.50, height*0.10);
  
  //Bar text
  textAlign(CENTER, CENTER);
  textSize(height*0.05)
  stroke(0);
  fill(0, 0, 0);
  text("You went drunk driving and got killed in a car crash", width/2, height/1.1);

  //Image---
  image(pageThreeImage, width/2, height/2, width*0.9, height*0.91);
  }

  function pageFour() {
    background(50);
    rectMode(CENTER);
    let rectW = width*0.9;
    let rectH = height*0.9; 
    noStroke();
    rect(width/2, height/2, rectW*0.5, rectH*0.5);
    
    //rectangle
    noStroke();
    fill(13,30, 88, 0.60);
    rect(width/2.0, height/1.10, width*0.50, height*0.10);

    //Bar text
    textAlign(CENTER, CENTER);
    textSize(height*0.05)
    stroke(0);
    fill(0, 0, 0);
    text("You got home safely", width/2, height/1.1);

    //Image---
    image(pageFourImage, width/2, height/2, width*0.9, height*0.91);
    }
  
  function pageFive()
  {
  background(50);
  rectMode(CENTER);
  let rectW = width*0.9;
  let rectH = height*0.9; 
  noStroke();
  rect(width/2, height/2, rectW*0.5, rectH*0.5);
 
    //Bar text
    textAlign(CENTER, CENTER);
    textSize(height*0.05)
    stroke(0);
    fill(0, 0, 0);
    text("Always Remember, NEVER drink and drive", width/2, height/1.1);

     //Return BUTTON -----------------------------
  noStroke();
  fill(189, 18, 44);
  rect(buttonX, buttonY, buttonW, buttonH, height*0.04);

  textAlign(CENTER, CENTER);
  textSize(height*0.05)
  stroke(0);
  fill(0, 0, 100);
  text("Start Over?", width/2, height/1.7);

  d = dist(mouseX, mouseY, buttonX, buttonY);
  }
}