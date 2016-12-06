
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
//change value to display # of circles

var circAmount= 2

//change size adds or subtracts from the grid
var size= 23

var circ = [];
var circx=[];
var circy=[];
var i=size
var randfill= (chooseColor[Math.floor(Math.random() * chooseColor.length)])

//log circles into the array
logCircles();

// var tl = new TimelineLite({ onComplete: finished, onUpdate: function() { drawCirc.changed() } });

for(i=0;i<circAmount;i++){
r.circle(circx[Math.floor(Math.random()*circx.length)]+10,circy[Math.floor(Math.random()*circy.length)]+10, size)
.fill(randfill)
}

//adds grid of x and y coordinates for the cirlces into arrays 
function logCircles(){ 
while(i< r.width){
  var j=size 
while(j<r.height){
circx.push(i);
circy.push(j);

  j=j+((size*2)+(size/2))
}
  i=i+((size*2)+(size/2))
}
}
 // console.log(circ);
 console.log(circx)


r.draw();

crowbar();