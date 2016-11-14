
var r = new Rune({
  container: "#canvas",
  width: 1000,
  height: 500,
  debug: false
});

// draw background
r.rect(0, 0, r.width, r.height/2).fill(0);


// curve mountains
// -------------------------------------------------------
var xStep = 15
var noise = new Rune.Noise();

var noisePath = r.path(0, 300)
  .stroke(0)
  .fill(false)
  .strokeWidth(2)
  .fill(0);

var noiseStep = 0;

for(var x = 0; x < r.width+10; x += xStep) {
  var y = noise.get(noiseStep) * 200;
  noisePath.lineTo(x, (y-(x,15)));
  noiseStep += 0.06;
}
  noisePath.lineTo(r.width,-250);
  noisePath.lineTo(0,-250);


//curvey path
//black
for(i=200; i<r.height+ 20; i++){
 drawCurve(i,0);
 i= i+5
}
//white
for(i=234; i<r.height+ 20; i++){
 drawCurve(i,255);
 i= i+5
}

function drawCurve(y, strokecolor){
//curves 
var orig = 20;
var heigh = 5;
var wid = 50;
var pointdis = 30;
var y= y;
var strokecolor = strokecolor

var sec = r.path(0,y).fill(false).stroke(strokecolor);

for(var i = 0; i< 1000; (i++)){
  sec.curveTo((heigh+i), orig, i+pointdis, 0);
  orig = orig * -1 
  i= i+wid
}
}

// draw pointy mountains

var topMount = r.group(0,r.height/6);

//draw mountain function
// function drawMountains(){
  var xStep = 30;

var randomPath = r.path(0, 0, topMount)
  .stroke(255)
  .fill(false)
  .strokeWidth(2);

for(var x = 0; x < r.width+40; x += xStep) {
  var y = (Rune.random(60)) + x/9;
  randomPath.lineTo(x, y,topMount);
}
 randomPath.lineTo(r.width,r.height/3,topMount);
 randomPath.lineTo(0,r.height/3,topMount);

 randomPath.fill(255);

var botMount = topMount.copy().move(0,300).rotate(90);


// }

//straight lines
//black
// for(i=1;i<300;i++){
//   r.line(0,i,r.width,i)
//   .stroke(0)
//   .strokeWidth(1);
//   i= i+6
// }

//white
// for(i=0;i<250;i++){
//   r.line(0,i,r.width,i)
//   .stroke(255);
//   i=i+6  
// }


r.draw();