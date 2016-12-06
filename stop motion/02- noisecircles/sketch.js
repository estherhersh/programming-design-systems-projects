
var r = new Rune({
  container: "#canvas",
  width: 640,
  height: 360,
  debug: false
});

// draw background
r.rect(0, 0, r.width, r.height).fill(0);
//opacity
var op= .50
//color array
var chooseColor= [
  new Rune.Color(217, 154, 242,op),
  new Rune.Color(63, 70, 152,op),
  new Rune.Color(119, 215, 250,op),
  new Rune.Color(245, 127, 69,op),
  new Rune.Color(246, 23, 160,op),
  new Rune.Color(145, 215, 140,op),
  new Rune.Color(253, 254, 27,op),
  new Rune.Color(110, 76, 93,op)

];
// Math.seedrandom('hello.');

var seed= r.random(0,100)
console.log(seed);  

// Math.seedrandom();

//change for size of circles and grid width
var size= 23
var noise = new Rune.Noise().noiseDetail(0.2);
var numPoints = 80;
var pointDegree = 360 / numPoints;
var noiseStep = 0;
var i=size
var radius = size-10;



while(i< r.width){
  var j=size 
while(j<r.height){

  drawCircle(i+10 ,j+10)
 
  j=j+((size*2)+(size/2))
}
  i=i+((size*2)+(size/2))

}


function drawCircle(xpos,ypos){

//var fillColor= (chooseColor[Math.floor(Math.random() * chooseColor.length)]);
var fillColor= chooseColor[2];


var noiseCircle = r.polygon(xpos, ypos);

  noiseCircle.stroke(fillColor)
  noiseCircle.fill(fillColor)
  noiseCircle.strokeWidth(2);


for(var i = 0; i < numPoints; i++) {
   Math.seedrandom();
  var noiseRadius = (noise.get(noiseStep) * 30) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle.lineTo(x, y);
  noiseStep += 0.1;
}
// Math.seedrandom(21.180578930479264);


}



r.draw();