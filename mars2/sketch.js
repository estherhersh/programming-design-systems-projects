var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1000,
  debug: false
});


//EARTH
var earth =  r.group(600,300);

var marsWid = 100;
var marsHei = 100;
var spacing = 20;
var thickness = 1.5;

for(var i=0; i<6;i++) {  
    r.circle(0 - (i*spacing), 0+ (i*spacing) , marsWid, earth)
      .fill(255- 50*i)
      .stroke(false)
spacing -=1.5;
};
console.log(earth)




//SKY
r.rect(0,0,r.width,r.height)
.fill(0);


for(i=0;i<400;i++){
  r.circle(r.random(0,r.width),r.random(0,r.height), r.random(0,2))
    .fill(255);
}



// drawCircle(r.width/2, r.height/2+r.height/4,r.width*3,500);

// function drawCircle(x, y, size,heigh)
// {
//   for(var j=0;j<10;j++){
//   r.ellipse(x, y, size, heigh)
//     .fill(j*20)
//     .stroke(false);
// }
//   if(size > 10) 
//   {
//     drawCircle(x, y, size - 30, heigh -30);
//   }

// }


// //OUTLINE
// var sideMargin = 20
// var midpoint = (r.height/2)-50
// var topPoint = 490
// var helmet = r.path(0,0)
// //boarder
//   .lineTo(r.width,0)
//   .lineTo(r.width,r.height)
//   .lineTo(0,r.height)
//   .closePath()
//   .fill(10)
// //inside boarder
//   .moveTo(sideMargin, midpoint) 
//   .curveTo(r.width/10, midpoint-topPoint, r.width-r.width/10,midpoint-topPoint, r.width-sideMargin, midpoint)
//   .curveTo(r.width-10, r.height-140, r.width/2+r.width/4, r.height-10, r.width/2, r.height-15)
//   .curveTo((r.width/2)-(r.width/4), (r.height-10),10,(r.height-140),sideMargin,(r.height/2)-100)
//   .closePath()
//   .fillRule("evenodd");

//DRAWEARTH


var earthCopy = earth.copy().scale(2).move(-50,-5,true);
r.circle(550,290,225)
  .fill(false)
  .stroke(0)
  .strokeWidth(55);

  //MARS
r.ellipse(r.width/4, (r.height/2+r.height/2)+30  , r.width*2, 700)
  .fill(255)
  .rotate(30,r.width/2,r.height );

r.draw();