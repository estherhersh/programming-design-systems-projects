var r = new Rune({
  container: "#canvas",
  width: 1000,
  height: 1000
});



col1 = r.random(0,100)
var f = new Rune.Font("../Roboto-Black.ttf");
f.load(function(err) {
//original font conversion
  var path = f.toPath("FUCK", (r.width/2)-400 , -10, 300)
        r.stage.add(path)
  var polys = path.toPolygons({spacing:15},path);


  //atttempted global var
  toploc= 350
  col1 = r.random(0,100)
  var poly;

  r.rect(0,0,r.width,r.height).fill('hsv',col1,100,90);



//convert each polygon loop
  for(var i = 0; i < polys.length; i++) {
    var poly = polys[i];
    // path.removeParent();

//bottom move all letters 
// //middle
    // var fuck2= poly.copy();
      var fuck3= poly.copy();

    for(var j = 0; j < poly.state.vectors.length; j++) { 
        // var poly = polys[i];

  



  //bottom zig zag
      var zig1= 10
      var change = zig1;
      if(j % 2 == 0) {
      change = -zig1;
      }
      var vec = fuck3.state.vectors[j];
      fuck3.state.vectors[j].x += change;
      fuck3.state.vectors[j].y += change;

  // fuck3.copy();
  fuck3.move((r.width/2)-400,(toploc+300)-(j));
  fuck3.fill('hsv',col1+180,(2*j), 100 );
  fuck3.strokeWidth(2);

    }
 }



  r.draw();
});

