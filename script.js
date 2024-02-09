// var draw = document.querySelector('input[name="type_draw"]:checked').value;
// function check(e) {
//   console.log(e);
//   draw = e.value;
//   console.log(draw);
// }
var canve1 = document.querySelector("#myCanvas");
var ctx;
// var event_ = draw === "drop" ? "click" : "mousemove";
canve1.addEventListener("click", function (e) {
 
  var objcts = document.getElementById("objcts").value;
  var cRect = canve1.getBoundingClientRect(); // Gets CSS pos, and width/height

  var canvasX = Math.round(e.clientX - cRect.left); // Subtract the 'left' of the canvas
  var canvasY = Math.round(e.clientY - cRect.top);

   ctx = canve1.getContext("2d");
  //// the bg color the variable color is for indique the color spicified for the oject drawing
  var color = document.getElementById("color").value;
  ctx.fillStyle = color;
  ctx.strokeStyle = color;

  //// the font size
  // ctx.font='7px serif';

  ////// add the text
  // ctx.fillText('hi',canvasY,canvasX);
  var size = document.getElementById("size").value;
  var type_ = document.getElementById("type").value;
  //// this function for indique the type of drawing  fill or stroke
  function type() {
    if (type_ == 1) {
      return ctx.fill();
    } else {
      return ctx.stroke();
    }
  }
  /// strat the derwing
  ctx.beginPath();
  //////////////  switch case for swith of the oject for drawing
  switch (objcts) {
    case "1":
      circle();
      break;
    case "2":
      face();
      break;
    case "3":
      Triangle();
      break;
    case "4":
      box();
      break;
    case "5":
      Star(canvasX, canvasY, 5, size, size / 2);
      break;
    case "6":
      Star(canvasX, canvasY, 12, size, size / 3);
      break;
    case "7":
      Star(canvasX, canvasY, 6, size, size / 2);
      break;
    case "8":
      Star(canvasX, canvasY, 10, size, size * 0.17);
      break;
    default:
      circle();
      break;
  }

  /// function for drawing the circle
  function circle() {
    ctx.arc(canvasX, canvasY, size, 0, 2 * Math.PI, false);
    type();
  }
  ///// function for drawing oject like face
  function face() {
    circle();
    type();
    ctx.closePath();

    var ctx2 = ctx;
    ctx.beginPath();
    ctx2.fillStyle = type_ == 1 ? "white" : color;
    //   ctx.moveTo(canvasX, canvasY + 16);
    ///// add the semicircle 
    ctx2.arc(canvasX, canvasY + size *0.3, size / 3, 0, 3.14, false);
    type_ == 1 ? ctx2.fill() : ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = type_ == 1 ? "white" : color;
    ctx.beginPath();

    //   ctx.moveTo(canvasX + 15, canvasY - 10);
    ctx.arc(canvasX + size *0.4, canvasY - size *0.3, size / 5, 0, 2 * Math.PI, false);
    type();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(canvasX -  size *0.4 , canvasY - size *0.3, size / 5, 0, 2 * Math.PI, false);
    type();
    ctx.closePath();
  }

  function Triangle() {
    ctx.beginPath();
    ctx.moveTo(canvasX, canvasY);
    ctx.lineTo(canvasX + 70, canvasY - 90);
    ctx.lineTo(canvasX + 140, canvasY);
    ctx.lineTo(canvasX, canvasY);
    type();
  }
  ////// create the box
  function box() {
    ctx.rect(canvasX, canvasY, size, size);
    type();
    ctx.closePath();
  }
  //////////// create the star
  function Star(cx, cy, spikes, outerRadius, innerRadius) {
    var rot = (Math.PI / 2) * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    ctx.strokeSyle = "#000";
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    // ctx.lineWidth=5;
    // ctx.stroke();
    // // ctx.fillStyle='skyblue';
    // ctx.fill();
    type();
  }
});

/////// function for download the drawer canvas
download_img = function (el) {
  var image = canve1.toDataURL("image/jpg");
  el.href = image;
};
//// function for Clear the canvas
function clear_Canves() {
    ctx.clearRect(0, 0, canve1.width, canve1.height);
  }
  