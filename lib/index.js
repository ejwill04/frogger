var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

//create a frog
var frogger = function() {
  var rectW = 50;
  var rectH = 50;
  var x = (context.canvas.width * 0.5) - (rectW * 0.5);
  var y = context.canvas.height - 50;
  context.fillRect(x,y,rectW,rectH);
};

function Car(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Car.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Car.prototype.move = function() {
  if (this.x !== canvas.width) {
    this.x++;
  } else {
    this.x = -this.width;
  }
  return this;
};

var cars = [];
//first column of cars
cars.push(new Car(0,50,50,50));
cars.push(new Car(0,150,50,50));
cars.push(new Car(0,250,50,50));
cars.push(new Car(0,350,50,50));
cars.push(new Car(0,450,50,50));
//secound column of cars
cars.push(new Car(-200,50,50,50));
cars.push(new Car(-400,150,50,50));
cars.push(new Car(-500,250,50,50));
cars.push(new Car(-300,350,50,50));
cars.push(new Car(-200,450,50,50));

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  cars.forEach(function (car) { car.draw().move();});
  frogger();
  requestAnimationFrame(gameLoop);
});




//define some variables to allow us to easibly move around the canvas
//may look to move these into a function to make them local
// var cW = context.canvas.width;
// var cH = context.canvas.height;
// var y = 0;
// var x = 0;

  //object orientating are assets
//   function rectObj() {
//     this.x = 0;
//     this.y = 0;
//     this.render = function(ctx, rx, ry, rw, rh, clr) {
//         ctx.fillStyle = clr;
//         ctx.fillRect(rx, ry, rw, rh);
//     };
//   }
//   var rect1 = new rectObj();
//
// //place this in the animate function to dynamicly create rect1
//   rect1.render(ctx, 0, rect1.y, 50, 50, 'red');
// //est assets outside of the animate function
// //to avoid re-creating them each time the function runs
//
//
//   function animate() {
//     //keep this code slim since it will be fired off constantly
//     ctx.save();
//     //save the canvas after every animation
//     ctx.clearRect(0,0,cW,cH);
//     //clear the canvas after every animation
//     ctx.fillStyle = "red";
//     ctx.fillRect(0,y,50,50);
//     y++;
//     ctx.restore();
//   }
//   var animateInterval = setInterval(animate, 30);
//   ctx.canvas.addEventListener('click', function() {
//     clearInterval(animateInterval);
//   });
//   // this will cause animate to run 30x a second
//   //on click, we will clear the interval (stop the animation)
// }
  // ctx.fillRect(50, 50, 100, 100);

  // creating and centering objects
  // ctx.fillStyle = 'magenta';
  // var rectW = 100;
  // var rectH = 100;
  // var rectX = (ctx.canvas.width * .5) - (rectW * .5);
  // var rectY = (ctx.canvas.height * .5) - (rectH * .5);
  // ctx.fillRect(rectX, rectY, rectW, rectH);
  // ctx.fillRect(50, 50, 100, 100);
  // ctx.rotate(.1);
  // ctx.fillRect(150, 150, 100, 100);

  //drawing text
  // ctx.font = "italic bold 56px arial, sans-serif";
  // ctx.fillText("text on canvas", 100, 100);
  //we can fillText, strokeText, textAlign

  //images
  // var my_pic = new image();
  // ctx.drawImage(my_pic, x, y, w, h);

  //draw box and see if point is in path
  // ctx.beginPath();
  // ctx.moveTo(50, 50);
  // ctx.lineTo(250, 50);
  // ctx.lineTo(250, 150);
  // ctx.lineTo(50, 150);
  // ctx.fill();
  // ctx.closePath();
  // ctx.stroke();
  // alert(ctx.isPointInPath(75, 75));
  // ctx.rect (x,y,w,h);
  // ctx.stroke() or ctx.fill()
