window.onload = function () {
  var canvas_ = document.getElementById("canvas");
  var ctx1 = canvas_.getContext("2d");
  var ox = canvas_.width / 2;
  var oy = canvas_.height / 2;
  ctx1.font = "70px serif";
  ctx1.textAlign = "center";
  ctx1.textBaseline = "middle";
  ctx1.fillStyle = "red";
  ctx1.fillText("Hello World", ox, oy);

  rotate_ctx1 = function () {
    ctx1.translate(ox, oy);
    for (let i = 0; i < 120; i++) {
      ctx1.rotate((Math.PI / 180) * 15);
      ctx1.fillText("Hello World", 0, 0);
    }
  };

  var canve1 = document.getElementById("myCanvas");
  canve1.addEventListener("click", function (e) {
    var objcts = document.getElementById("objcts").value;
    var cRect = canve1.getBoundingClientRect(); // Gets CSS pos, and width/height

    var canvasX = Math.round(e.clientX - cRect.left); // Subtract the 'left' of the canvas
    var canvasY = Math.round(e.clientY - cRect.top);

    var ctx = canve1.getContext("2d");
    //// the bg color
    ctx.fillStyle = "red";

    //// the font size
    // ctx.font='7px serif';

    ////// add the text
    // ctx.fillText('hi',canvasY,canvasX);
    var type_ = document.getElementById("type").value;
    function type() {
      if (type_ == 1) {
        return ctx.fill();
      } else {
        return ctx.stroke();
      }
    }
    ctx.beginPath();

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
      default:
        circle();
        break;
    }
    function circle() {
      ctx.arc(canvasX, canvasY, 30, 0, 2 * Math.PI, false);
      type();
    }

    function face() {
      circle();
      type();
      ctx.closePath();
      function t() {
        var ctx2 = ctx;
        ctx.beginPath();
        ctx2.fillStyle = type_ == 1 ? "white" : "black";
        //   ctx.moveTo(canvasX, canvasY + 16);
        ctx2.arc(canvasX, canvasY + 10, 10, 0, 3.14, false);
        type_ == 1 ? ctx2.fill() : ctx.stroke();
        ctx.closePath();
      }
      t();

      ctx.beginPath();
      ctx.fillStyle = type_ == 1 ? "white" : "black";
      ctx.moveTo(canvasX + 15, canvasY - 10);
      ctx.arc(canvasX + 15, canvasY - 10, 5, 0, 2 * Math.PI, false);
      ctx.moveTo(canvasX - 15, canvasY - 10);
      ctx.arc(canvasX - 15, canvasY - 10, 5, 0, 2 * Math.PI, false);
      ctx.stroke();
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

    ////circle
    // ctx.arc(canvasX,canvasY,30,0,2*Math.PI,false);
    // ctx.stroke();
    ///or
    // ctx.fill();

    /// add auther circle but just the middle
    // ctx.moveTo(canvasX+15 ,canvasY-10)
    // ctx.arc(canvasX +15,canvasY-10,5,0,2*Math.PI,false);
    // ctx.moveTo(canvasX-15 ,canvasY-10)
    // ctx.arc(canvasX -15,canvasY-10,5,0,2*Math.PI,false);
    // ctx.moveTo(canvasX ,canvasY+16)

    // ctx.stroke();

    ///// lines
    ////// the triangle
    // ctx.moveTo(canvasX,canvasY)
    // ctx.lineTo(canvasX+70 , canvasY-90 )
    // ctx.lineTo(canvasX +140 , canvasY )
    // ctx.lineTo(canvasX +50 , canvasY )

    //////

    // ctx.fill();

    download_img = function (el) {
      var image = canve1.toDataURL("image/jpg");
      el.href = image;
    };
  });
};
