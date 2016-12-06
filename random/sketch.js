var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 450,
  debug: false
});

// Math.seedrandom('hello.');

// draw background
r.rect(0, 0, r.width, r.height).fill(0,80,0);


// for (i=0;i<5;i+5){
//   var y = 0 
//   r.rect(0,y,r.width,10)
//     .fill('hsv',121,40,23-i);
//   y=y+10

// }

var seed= r.random(0,100)
console.log(seed);  

    Math.seedrandom();

var hue= r.random(0,360)



for(var i = 0; i < 100; i++) {
  wave(-(i), 260 + (i*1.2));
}




function wave(x, y) {

  Math.seedrandom();
  var strokeWidth = r.random(4,5);
  var endStroke = r.width+50
  // var curvePoint= r.random(60,80)
  var brightness= r.random(70,90)
    var brightness= r.random(70,80)

  var circw= r.random(0,7)
  var circh= r.random(0,5)
var origrandomchange= r.random(-10,10)
  var circx= r.random(0,r.width)
  var circy= r.random(200,r.height-200)
  var circrotate= r.random(0,180)

  // Math.seedrandom(88.26384550455788);
    // Math.seedrandom(4.67169914575134);
   // Math.seedrandom(61.52742960509896);
      // Math.seedrandom(54.29885300454031);
//25.773518083935578
  Math.seedrandom(41.247052663899474);
  var origRandom= r.random(10,120)+origrandomchange
// var hue= r.random(0,360)
  var orig = origRandom;
  var noisePath = r.path(0, y)
    // .stroke('hsv', hue,100,brightness,.6)
    .stroke('hsv', 0,0,brightness,.6)

    .strokeWidth(strokeWidth)
    .fill(false);

  for(var pointX = x; pointX < endStroke; pointX += r.random(0,90)) {
  var pointY= r.random(-70,70) 

    noisePath.curveTo(pointX-r.random(30,80),-orig,pointX,pointY );
    orig = orig * -1 
  }  

  noisePath.rotate(-12);
 for (var j= 0;j<20;j++){
  r.ellipse(circx,circy,circw,circh)
    .stroke(false)
    .fill('hsv',0,0,brightness)
    .rotate(circrotate,r.width/2,r.height/2);
 }



}



r.draw();