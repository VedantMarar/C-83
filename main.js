var height = screen.height ;
var width = screen.width ;
var newHeight = height - 90 ;
var newWidth = width - 60 ;
if (width < 992){
    document.getElementById("myCanvas").width = newWidth ;
    document.getElementById("myCanvas").height = newHeight ;
    document.body.style.overflow = "hidden" ;
}

var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

canvas.addEventListener("touchstart", mytouchstart)
var x,y ;
function mytouchstart(e){
  x = e.touches[0].clientX - canvas.offsetLeft;
  y = e.touches[0].clientY - canvas.offsetTop; 
 console.log(x + " " + y)
}

canvas.addEventListener("touchmove", mytouchmove);

function mytouchmove(e){
var cx = e.touches[0].clientX - canvas.offsetLeft;
var cy = e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = "2";
ctx.moveTo(x,y);
ctx.lineTo(cx,cy);
ctx.stroke();
x = cx ; 
y = cy ;
}