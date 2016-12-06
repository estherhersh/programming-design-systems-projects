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


//top plain font so out of loop
    var path2 = f.toPath("FUCK", (r.width/2)-400 , 300, 290)
    .fill(false) 
    .stroke(false); 
    r.stage.add(path2)
    var f3 = path2.toPolygons({spacing:1}, path2);
    //repetition for top
        for(k=0;k<30;k++){
           path2.copy();
            path2.move((r.width/2)-400,toploc-3*k);
            path2.fill('hsv',col1,(2*k), 100 );
            path2.stroke(0);
            }

//convert each polygon loop
  for(var i = 0; i < polys.length; i++) {
    var poly = polys[i];
    // path.removeParent();

//bottom move all letters 
    var fuck3= poly.copy();
//middle
    var fuck2= poly.copy();

    for(var j = 0; j < poly.state.vectors.length; j++) { 

//middle zig zag
      var zig2= 5
      var change2 = zig2;

      if(j % 2 == 0) {
      change2 = -zig2;
      }
      var vec2 = fuck2.state.vectors[j];
      fuck2.state.vectors[j].x += change2;
      fuck2.state.vectors[j].y += change2; 

  fuck2.copy();
  fuck2.move((r.width/2)-400,toploc+300-2*j);
  fuck2.fill('hsv',col1+90,(1*j), 100 );

  //bottom zig zag
      var zig1= 10
      var change = zig1;
      if(j % 2 == 0) {
      change = -zig1;
      }
      var vec = fuck3.state.vectors[j];
      fuck3.state.vectors[j].x += change;
      fuck3.state.vectors[j].y += change;

  fuck3.copy();
  fuck3.move((r.width/2)-400,(toploc+600)-(2*j));
  fuck3.fill('hsv',col1+180,(2*j), 100 );
  fuck3.strokeWidth(2);

    }
 } 



  r.draw();
});

