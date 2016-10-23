var r = new Rune({
  container: "#canvas",
  width: 1500,
  height: 1500,
  debug: true
});


var grids = r.grid({
  x: 50,
  y: 50,
  width: r.width - 100,
  height: r.height - 100,
  gutter: 10,
  columns: 10,
  rows: 10
});
var grids2 = r.grid({
  x: 50,
  y: 50,
  width: r.width - 100,
  height: r.height - 100,
  gutter: 10,
  columns: 10,
  rows: 10
});
var grids3 = r.grid({
  x: 50,
  y: 50,
  width: r.width - 100,
  height: r.height - 100,
  gutter: 10,
  columns: 10,
  rows: 10
});
var grids4 = r.grid({
  x: 50,
  y: 50,
  width: r.width - 100,
  height: r.height - 100,
  gutter: 10,
  columns: 10,
  rows: 10
});


 grids.rotate(30, r.width/2, r.height/2);
 grids2.rotate(60, r.width/2, r.height/2);
 grids3.rotate(90, r.width/2, r.height/2);
 grids4.rotate(120, r.width/2, r.height/2);

var x = r.random(0,100)


var modules = grids.modules.slice();
for(var i = 0; i < 100; i++) {
  var module = modules.shift();
  var myShapes = r.rect(40, 40, 50,50).fill('hsv',x,100,100).stroke(false);
  module.add(myShapes);
}

var modules = grids2.modules.slice();
for(var i = 0; i < 100; i++) {
  var module = modules.shift();
  var myShapes = r.rect(40, 40, 50,50).fill('hsv',x,100,100).stroke(false);
  module.add(myShapes);
}
var modules = grids3.modules.slice();
for(var i = 0; i < 100; i++) {
  var module = modules.shift();
  var myShapes = r.rect(40, 40, 50,50).fill('hsv',x,100,100).stroke(false);
  module.add(myShapes);
}
var modules = grids4.modules.slice();
for(var i = 0; i < 100; i++) {
  var module = modules.shift();
  var myShapes = r.rect(40, 40, 50,50).fill('hsv',x,100,100).stroke(false);
  module.add(myShapes);
}


r.draw();