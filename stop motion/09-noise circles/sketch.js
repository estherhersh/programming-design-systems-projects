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


r.polygon(0,0)
  .lineTo(0,0)
  .lineTo(r.width,0)
  .lineTo(r.width,r.height)
  .lineTo(0,r.height)
  .fill(0);

var colors = [color1,color2,color3,color4,color6,color7];
//for solid color 
var strokeColor= colors[Math.floor(Rune.random(colors.length))]


var knotsize = 1

for(i=0;i<60;i++){
//mutli colored circles
// var strokeColor= colors[Math.floor(Rune.random(colors.length))]

 drawWet(i*knotsize,strokeColor);
 }





function drawWet(radius,strokeColor){
var noise = new Rune.Noise().noiseDetail(1.0);
var numPoints = 60;
var pointDegree = 360 / numPoints;
var radius = radius;
var noiseStep = 0;


var noiseCircle = r.polygon(r.width/2, r.height/2)
  .stroke(strokeColor)
  .fill(false)
  .strokeWidth(r.random(0,1));

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 60) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle.lineTo(x, y);
  noiseStep += 0.15;
}}
r.draw();