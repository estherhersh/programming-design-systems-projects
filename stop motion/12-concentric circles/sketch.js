
var r = new Rune({
  container: "#canvas",
  width: 640,
  height: 360,
  debug: false
});

//purple
var color1 = new Rune.Color(217, 154, 242);
//darkblue
var color2 = new Rune.Color(63, 70, 152);
//lightblue 
var color3 = new Rune.Color(119, 215, 250);
//orange
var color4 = new Rune.Color(245, 127, 69);
//pink
var color5 = new Rune.Color(246, 23, 160);
//green
var color6 = new Rune.Color(145, 215, 140);
//yellow
var color7 = new Rune.Color(253, 254, 27);
//dark purple
var color7 = new Rune.Color(110, 76, 93);

var colors = [color1,color2,color3,color4,color6,color7];


r.polygon(0,0)
  .lineTo(0,0)
  .lineTo(r.width,0)
  .lineTo(r.width,r.height)
  .lineTo(0,r.height)
  .fill(0);



//SHARP EDGES
// for(i=0;i<15;i++){

//   var strokeColor= colors[Math.floor(Rune.random(colors.length))]

//   drawShape(r.random(0,50),r.random(1,350));
// }

// for(i=0;i<18;i++){
//   drawShape(i*5,(i*18)+ (r.random(0,10)));
// }

var knotsize = 9

for(i=0;i<70;i++){
  var strokeColor= colors[Math.floor(Rune.random(colors.length))]

 drawWet(i*knotsize);
 }


// function drawShape(rotation,wide){

// var noise = new Rune.Noise().noiseDetail(2.0);
// var noiseStep = 0;


// var numPoints = 70;
// var pointDegree = 360 / numPoints;
// var wide = wide

// var myPolygon = r.polygon(r.width/2, r.height/2);

//   for(var i = 0; i < numPoints; i++) {
//     var radius = (r.width/1.5) - wide;
    
//     if(i % 2 == 0) {
//     radius = r.width/1.5- (wide+(r.random(30,80)))
//   }
//       var noiseRadius = (noise.get(noiseStep) * 80) + radius;

//     var x = Math.cos(Rune.radians(i * pointDegree)) * radius;
//     var y = Math.sin(Rune.radians(i * pointDegree)) * radius;

//      noiseStep += 0.4;

//   myPolygon.lineTo(x, y);
//   myPolygon.fill(false);
//   myPolygon.strokeWidth(Math.random(1,25));
//   myPolygon.rotate(rotation,r.width/2,r.height/2);
//   myPolygon.stroke(strokeColor);


// }
// }



function drawWet(radius){
var noise = new Rune.Noise().noiseDetail(2.6);
var numPoints = 10;
var pointDegree = 360 / numPoints;
var radius = radius;
var noiseStep = 0;

var noiseCircle = r.polygon(r.width/2, r.height/2)
  .stroke(strokeColor)
  .fill(false)
  .strokeWidth(1)
  .rotate(r.random(0,360),r.width/2,r.height/2);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 60) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle.lineTo(x, y);
  noiseStep += 0.01;
}}
r.draw();