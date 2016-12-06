var r = new Rune({
  container: "#canvas",
  width: 640,
  height: 360
});
var op= 1
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
var randfill= (chooseColor[Math.floor(Math.random() * chooseColor.length)])


// col1 = r.random(0,1000)
var f = new Rune.Font("../Roboto-Black.ttf");
f.load(function(err) {
//original font conversion
  var path = f.toPath("TODAY", (r.width/2)-200 , r.height/2, 150)
        r.stage.add(path)
  var polys = path.toPolygons({spacing:6},path);


  //atttempted global var
  toploc= 240
  var poly;

  r.rect(0,0,r.width,r.height).fill(0);



//convert each polygon loop
  for(var i = 0; i < polys.length; i++) {
    var poly = polys[i];
    path.removeParent();

//bottom move all letters 
// //middle
    // var fuck2= poly.copy();
      var today= poly.copy();

    for(var j = 0; j < poly.state.vectors.length; j++) { 
        // var poly = polys[i];

  



  //bottom zig zag
      var zig1= r.random(1,9)
      var change = zig1;
      if(j % 2 == 0) {
      change = -zig1;
      }
      var vec = today.state.vectors[j];
      today.state.vectors[j].x += change;
      today.state.vectors[j].y += change;

  // fuck3.copy();
  today.move((r.width/2)-220,(toploc));
  today.fill (119, 215, 250)
  today.stroke(false);


    }
 }



  r.draw();
});

