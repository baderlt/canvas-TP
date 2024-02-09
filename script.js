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
    var color =document.getElementById('color').value;
    ctx.fillStyle = color;

    //// the font size
    // ctx.font='7px serif';

    ////// add the text
    // ctx.fillText('hi',canvasY,canvasX);
    var size=document.getElementById('size').value;
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
        case "4":Square();
        break;
        case "5": Star(canvasX, canvasY, 5, size, size /2);
        break;
      default:
        circle();
        break;
    }
    function circle() {
      ctx.arc(canvasX, canvasY, size, 0, 2 * Math.PI, false);
      type();
    }

    function face() {
      circle();
      type();
      ctx.closePath();
      function t() {
        var ctx2 = ctx;
        ctx.beginPath();
        ctx2.fillStyle = type_ == 1 ? "white" : color;
        //   ctx.moveTo(canvasX, canvasY + 16);
        ctx2.arc(canvasX, canvasY + 10,size / 3, 0, 3.14, false);
        type_ == 1 ? ctx2.fill() : ctx.stroke();
        ctx.closePath();
      }
      t();
      ctx.fillStyle = type_ == 1 ? "white" : color;
      ctx.beginPath();
    //   ctx.moveTo(canvasX + 15, canvasY - 10);
      ctx.arc(canvasX + 15, canvasY - 10, size /5, 0, 2 * Math.PI, false);
      type();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(canvasX - 15, canvasY - 10, size/5, 0, 2 * Math.PI, false);
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

    function Square(){
        ctx.rect(canvasX,canvasY,50,50)
        type();
        ctx.closePath();
    }
//////////// create the star 
    function Star(cx, cy, spikes, outerRadius, innerRadius) {
        var rot = Math.PI / 2 * 3;
        var x = cx;
        var y = cy;
        var step = Math.PI / spikes;
    
        ctx.strokeSyle = "#000";
        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius)
        for (i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y)
            rot += step
    
            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y)
            rot += step
        }
        ctx.lineTo(cx, cy - outerRadius)
        ctx.closePath();
        // ctx.lineWidth=5;
        // ctx.stroke();
        // // ctx.fillStyle='skyblue';
        // ctx.fill();
        type();
    
    }
    


    download_img = function (el) {
      var image = canve1.toDataURL("image/jpg");
      el.href = image;
    };
  });
};
