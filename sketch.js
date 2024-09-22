let repelDist;
let canvas;
let makeBig = false;
let homePageOn = true;
let pageTwoOn = false;
let pageThreeOn = false;
let pageFourOn = false;
let pageFiveOn = false;

let buttonW, buttonH, buttonX, buttonY;
let buttonW2, buttonH2, buttonX2, buttonY2;
let buttonW3, buttonH3, buttonX3, buttonY3;
let buttonW4, buttonH4, buttonX4, buttonY4;
let imageX, imageY, imageW, imageH;
let d, d2, d3, d4;

let headerOne;

let pageTwoImage, pageThreeImage, pageFourImage;
let phoneButton, taxiButton, keysButton;
let rectAlpha = 1; //SYD: I made this a global variable so I can change it in the pageTwo function, this is for your fade in transition

function preload() {
  pageTwoImage = loadImage("Images/bar.png");
  pageThreeImage = loadImage("Images/bedRoom.png");
  pageFourImage = loadImage("Images/carCrash.jpg");
  phoneButton = loadImage("Images/phone.png");
  taxiButton = loadImage("Images/taxiIcon.png");
  keysButton = loadImage("Images/keyIcon.png");
}

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  colorMode(HSB);
  imageMode(CENTER);

  headerOne = select("#headerOne");
  headerOne.style("display", "block");

  noStroke();

  buttonW = width * 0.4;
  buttonH = height * 0.1;
  buttonX = width / 2;
  buttonY = height / 1.7;

  imageX = width / 2;
  imageY = height / 2;
  imageW = width * 0.9;
  imageH = height * 0.91;
}

function draw() {
  fill(13, 30, 88);
  rect(width / 2, height / 2, width, height);

  //Call function
  if (homePageOn) {
    homePage();
  } else if (pageTwoOn) {
    headerOne.style("display", "none");
    pageTwo();
  } else if (pageThreeOn) {
    pageThree();
  } else if (pageFourOn) {
    pageFour();
  } else if (pageFiveOn) {
    pageFive();
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  mouseX = -width / 2;
  mouseY = -height / 2;
}

function homePage() {
  //HOME PAGE -----------------------------
  background(50);
  rectMode(CENTER);
  let rectW = width * 0.9;
  let rectH = height * 0.9;
  noStroke();
  rect(width / 2, height / 2, rectW, rectH);

  //START BUTTON -----------------------------
  noStroke();
  fill(189, 18, 44);
  rect(buttonX, buttonY, buttonW, buttonH, height * 0.04);

  textAlign(CENTER, CENTER);
  textSize(height * 0.05);
  stroke(0);
  fill(0, 0, 100);
  text("START", width / 2, height / 1.7);

  d = dist(mouseX, mouseY, buttonX, buttonY);
}

function mousePressed() {
  if (homePageOn && d < buttonW / 2 && d < buttonH / 2) {
    homePageOn = false;
    pageTwoOn = true;
  } else if (pageTwoOn) {
    if (d < buttonS / 2) {
      pageTwoOn = false;
      pageThreeOn = true;
    } else if (d2 < buttonS / 2) {
      pageTwoOn = false;
      pageThreeOn = true;
    } else if (d3 < buttonS / 2) {
      pageTwoOn = false;
      pageFourOn = true;
    }
  } else if (pageThreeOn) {
    pageThreeOn = false;
    pageFiveOn = true;
  } else if (pageFourOn) {
    pageFourOn = false;
    pageFiveOn = true;
  } else if (pageFiveOn) {
    pageFiveOn = false;
    homePageOn = true;
  }
}
function pageTwo() {
  //Background
  background(50);
  rectMode(CENTER);
  let rectW = width * 0.9;
  let rectH = height * 0.9;
  noStroke();
  rect(width / 2, height / 2, rectW * 0.5, rectH * 0.5);

  //Image---
  image(pageTwoImage, width / 2, height / 2, width * 0.9, height * 0.91);

  //rectangle
  noStroke();
  fill(13, 30, 88, 0.6);
  rect(width / 2.0, height / 1.1, width * 0.5, height * 0.1);

  //Bar text
  textAlign(CENTER, CENTER);
  textSize(height * 0.05);
  stroke(0);
  fill(0, 0, 0);
  text(
    "It's late and you're drunk, bar's closing soon",
    width / 2,
    height / 1.1
  );

  //Buttons for Phone/Taxi/Keys
  buttonS = height * 0.05;
  buttonX = width * 0.1;
  buttonY = height * 0.04;

  buttonX2 = width * 0.5;
  buttonY2 = height * 0.04;

  buttonX3 = width * 0.9;
  buttonY3 = height * 0.04;

  noStroke();
  // phone button and distance calutation
  image(phoneButton, width * 0.1, height * 0.04, width * 0.04, height * 0.05);
  d = dist(mouseX, mouseY, buttonX, buttonY);

  // taxi button and distance calutation
  image(taxiButton, width * 0.5, height * 0.04, width * 0.04, height * 0.05);
  d2 = dist(mouseX, mouseY, buttonX2, buttonY2);

  // keys button and distance calutation
  image(taxiButton, width * 0.5, height * 0.04, width * 0.04, height * 0.05);
  d3 = dist(mouseX, mouseY, buttonX3, buttonY3);

  // Rect Alhpa
  fill(0, 0, 0, rectAlpha);
  rect(width / 2, height / 2, width, height);
  image(keysButton, width * 0.9, height * 0.04, width * 0.04, height * 0.05);

  rectAlpha -= 0.01;

  if (rectAlpha <= 0) {
    rectAlpha = 0;
  }
}
function pageThree() {
  //Background
  background(50);
  rectMode(CENTER);
  let rectW = width * 0.9;
  let rectH = height * 0.9;
  noStroke();
  rect(width / 2, height / 2, rectW * 0.5, rectH * 0.5);

  //Image---
  image(pageThreeImage, width / 2, height / 2, width * 0.9, height * 0.91);

  //rectangle
  noStroke();
  fill(13, 30, 88, 0.6);
  rect(width / 2.0, height / 1.1, width * 0.5, height * 0.1);

  //Bar text
  textAlign(CENTER, CENTER);
  textSize(height * 0.05);
  stroke(0);
  fill(0, 0, 0);
  text("You got home safely", width / 2, height / 1.1);

  //Buttons for Phone/Taxi/Keys
  buttonS = height * 0.05;
  buttonX = width * 0.1;
  buttonY = height * 0.04;

  buttonX2 = width * 0.5;
  buttonY2 = height * 0.04;

  buttonX3 = width * 0.9;
  buttonY3 = height * 0.04;

  noStroke();
  // phone button and distance calutation
  image(phoneButton, width * 0.1, height * 0.04, width * 0.04, height * 0.05);
  d = dist(mouseX, mouseY, buttonX, buttonY);

  // taxi button and distance calutation
  image(taxiButton, width * 0.5, height * 0.04, width * 0.04, height * 0.05);
  d2 = dist(mouseX, mouseY, buttonX2, buttonY2);

  // keys button and distance calutation
  image(keysButton, width * 0.9, height * 0.04, width * 0.04, height * 0.05);
  d3 = dist(mouseX, mouseY, buttonX3, buttonY3);

  // Rect Alhpa
  fill(0, 0, 0, rectAlpha);
  rect(width / 2, height / 2, width, height);

  rectAlpha -= 0.01;

  if (rectAlpha <= 0) {
    rectAlpha = 0;
  }
}

function pageFour() {
  //Background
  background(50);
  rectMode(CENTER);
  let rectW = width * 0.9;
  let rectH = height * 0.9;
  noStroke();
  rect(width / 2, height / 2, rectW * 0.5, rectH * 0.5);

  //Image---
  image(pageFourImage, width / 2, height / 2, width * 0.9, height * 0.91);

  //rectangle
  noStroke();
  fill(13, 30, 88, 0.6);
  rect(width / 2.0, height / 1.1, width * 0.5, height * 0.1);

  //Bar text
  textAlign(CENTER, CENTER);
  textSize(height * 0.05);
  stroke(0);
  fill(0, 0, 0);
  text("You crashed your car drunk driving", width / 2, height / 1.1);

  //Buttons for next button
  buttonX4 = width * 0.9;
  buttonY4 = height * 0.04;

  // next button and distance calutation
  noStroke();
  fill(189, 18, 44);
  rect(width / 2, height / 4.5, buttonW * 0.5, buttonH * 1, height * 0.04);
  d4 = dist(mouseX, mouseY, buttonX4, buttonY4);

  // Rect Alhpa
  fill(0, 0, 0, rectAlpha);
  rect(width / 2, height / 2, width, height);

  rectAlpha -= 0.01;

  if (rectAlpha <= 0) {
    rectAlpha = 0;
  }
}

function pageFive() {
  //button for start over
  buttonW = width * 0.4;
  buttonH = height * 0.1;
  buttonX = width / 2;
  buttonY = height / 1.7;

  //Background
  background(50);
  rectMode(CENTER);
  let rectW = width * 0.9;
  let rectH = height * 0.9;
  noStroke();
  rect(width / 2, height / 2, rectW, rectH);

  //Main text
  textAlign(CENTER, CENTER);
  textSize(height * 0.09);
  stroke(0);
  fill(0, 0, 0);
  text("Always Remember, NEVER drink and drive", width / 2, height / 2.5);

  //Return BUTTON -----------------------------
  noStroke();
  fill(189, 18, 44);
  rect(buttonX, buttonY, buttonW, buttonH, height * 0.04);

  textAlign(CENTER, CENTER);
  textSize(height * 0.05);
  stroke(0);
  fill(0, 0, 100);
  text("Start Over?", width / 2, height / 1.7);

  d = dist(mouseX, mouseY, buttonX, buttonY);

  if (rectAlpha <= 0) {
    rectAlpha = 0;
  }
}
