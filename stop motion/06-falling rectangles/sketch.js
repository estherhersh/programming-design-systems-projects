
var r = new Rune({
  container: "#canvas",
  width: 640,
  height: 360,
  debug: false
});

var op = 1
//purple
var color1 = new Rune.Color(217, 154, 242,op);
//darkblue
var color2 = new Rune.Color(63, 70, 152,op);
//lightblue 
var color3 = new Rune.Color(119, 215, 250,op);
//orange
var color4 = new Rune.Color(245, 127, 69,op);
//pink
var color5 = new Rune.Color(246, 23, 160,op);
//green
var color6 = new Rune.Color(145, 215, 140,op);
//yellow
var color7 = new Rune.Color(253, 254, 27,op);
//dark purple
var color8 = new Rune.Color(110, 76, 93,op);

var chooseColor = [color1,color2,color3,color4,color6,color7,color8];

//background
r.polygon(0,0)
  .lineTo(0,0)
  .lineTo(r.width,0)
  .lineTo(r.width,r.height)
  .lineTo(0,r.height)
  .fill(0);

var grids = r.grid({
  x: 0,
  y: 0,
  width: r.width,
  height: r.height,
  gutter: 0,
  columns: 15,
  rows: 5
});


var mods = [];
var modules = grids.modules.slice();

for(var i = 1; i < 226; i++) {
  var module = modules.shift();
  mods.push(module);
  // console.log(module);
  // module.add(r.text(i,0,0).fontSize(7).rotate(180))
}



for(var i = 1; i < 75; i++) {
  var size = r.random(30,50);
  var sizey= r.random(4,10)
  var fillColor= (chooseColor[Math.floor(Math.random() * chooseColor.length)]);
  var inc= .45
  var myShapes = r.rect((r.random(0,20)), 0, size,sizey)
  .fill(fillColor)
  .stroke(false)
  // .rotate(r.random(-50,50));
  // .rotate(r.random(20,90));
  //.rotate(r.random(50,90));
    .rotate(90);



//change for number of rect
  var show= Rune.random(1)>0.0;
  if(show){
  mods[i].add(myShapes);
}
}

// r.rect(0,0,70,70).fill(0);

r.draw();