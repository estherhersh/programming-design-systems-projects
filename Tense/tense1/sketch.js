
var r = new Rune({
  container: "#canvas",
  width: 1000,
  height: 1000,
  debug: false
});



var hue= r.random(0,360);


r.polygon(0,0)
  .lineTo(0,0)
  .lineTo(r.width,0)
  .lineTo(r.width,r.height)
  .lineTo(0,r.height)
  .fill(255)
  .stroke(false);


 // for(i=0;i<100;i++){
 // drawWet(i*5,hue+90,100-i);
 // }

 for(i=0;i<100;i++){
 drawWet(i*5,hue+60,100-i);
 }

 for(i=0;i<100;i++){
 drawWet(i*5,hue+30,100-i);
 }

for(i=0;i<100;i++){
 drawWet(i*5,hue,100-i);
 }



function drawShape(rotation,wide){

var noise = new Rune.Noise().noiseDetail(2.0);
var noiseStep = 0;


}


function drawWet(radius,hue,brightness){
var noise = new Rune.Noise().noiseDetail(1.0);
var numPoints = 160;
var pointDegree = 360 / numPoints;
var radius = radius;
var noiseStep = 0;
var brightness = brightness

var noiseCircle = r.polygon(r.width/2, r.height/2)
  .stroke('hsv', hue, brightness, 100)
  .fill(false)
  .strokeWidth(1);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 170) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle.lineTo(x, y);
  noiseStep += 0.3;
}}
r.draw();