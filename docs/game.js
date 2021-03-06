var size = 32
var canvas = document.getElementById("gameCanvas")
var context = canvas.getContext("2d")
var world = [
              [{type: "grass"},{type: "grass"},{type: "grass"}],
              [{type: "wall"},{type: "wall"},{type: "wall"}]
            ]
for(var y = 0; y<world.length; y++) {
  for(var x = 0; x<world[y].length; x++) {
    drawWithObject(x, y, world[y][x])
  }
}

function drawWithObject (x, y, object) {
  if(object.type == "grass") {
    context.fillStyle = "#00BB00";
    context.strokeStyle = "#000000";
    context.fillRect(x * size, y * size, size, size)
    context.strokeRect(x * size, y * size, size, size)
  }
  if(object.type == "wall") {
    context.fillStyle = "#FF9900";
    context.strokeStyle = "#000000";
    context.fillRect(x * size, y * size, size, size)
    context.strokeRect(x * size, y * size, size, size)
  }

}
