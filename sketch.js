let textArray = [
"dreh dich um 90 grad nach rechts",
"dreh dich um 90 grad nach links",
"dreh dich einmal um",
"dreh den kopf nach oben",
"dreh den kopf nach unten",
"dreh den kopf nach links",
"dreh den kopf nach rechts",
"geh einen schritt nach vorne",
"geh einen schritt nach hinten",
"geh einen schritt nach links",
"geh einen schritt nach rechts",
"heb dein linkes knie",
"heb dein rechtes knie",
"stell deinen linken fuß nach vorne",
"stell deinen rechten fuß nach vorne",
"stell deinen linken fuß nach hinten",
"stell deinen rechten fuß nach hinten",
"stell deinen linken fuß nach rechts",
"stell deinen rechten fuß nach rechts",
"stell deinen linken fuß nach links",
"stell deinen rechten fuß nach links",
"dreh deinen linken fuß nach rechts",
"dreh deinen linken fuß nach links",
"dreh deinen rechten fuß nach rechts",
"dreh deinen linken fuß nach links",
"streck den linken arm nach vorne",
"streck den linken arm nach hinten",
"streck den linken arm nach links",
"streck den linken arm nach rechts",
"streck den rechten arm nach vorne",
"streck den rechten arm nach hinten",
"streck den rechten arm nach links",
"streck den rechten arm nach rechts",
"beuge den rechten ellenbogen",
"beuge den linken ellenbogen",
"heb deinen linken arm",
"heb deinen rechten arm",
"senk deinen linken arm",
"senk deinen rechten arm",
"dreh deinen rechten arm nach links",
"dreh deinen rechten arm nach rechts",
"dreh deinen linken arm nach links",
"dreh deinen linken arm nach rechts",
"streck den linken arm nach unten",
"streck den linken arm nach oben",
"streck den rechten arm nach unten",
"streck den rechten arm nach oben",
"schließ deine rechte hand",
"schließ deine linke hand",
"öffne deine rechte hand",
"öffne deine linke hand",
"steh aufrecht",
"steh hockend",
"steh nach rechts geneigt",
"steh nach links geneigt",
"steh nach vorne geneigt",
"steh nach hinten geneigt"
]
let pickedText;
let c;
let mFont;
let textInput;
let dotSize;
let colorArray = [
  'rgba(255, 0, 0, 1)',
  'rgba(0, 0, 255, 1)'];
let colorP;
let colorI = 0;

function preload() {
  mFont = loadFont('assets/AcidGrotesk-Bold.otf');
}


function setup() {
  c = createCanvas(windowWidth,windowHeight);
  textArray = shuffle(textArray);
  pickedText = random(textArray);
  setInterval(pickText, 5000);
  textAlign(CENTER);
  rectMode(CENTER)
  textSize(height/15);
  textFont(mFont);
  dotSize = height/10;
  noStroke();
  colorP = colorArray[colorI];
  fill(255);
}

function draw() {
  background(colorP); 
  text(pickedText, width/2, height/5, width/1.5);
  dotSize = dotSize - (height/10)/400;
  ellipse(width/2,height/1.25,dotSize,dotSize)
  
}

function pickText() {
  if (colorI == 0) {
    colorI = 1;
  }
  else {
    colorI = 0;
  }
  colorP = colorArray[colorI];
  pickedText = random(textArray);
  dotSize = height/10;
}