var size = 32
var canvas = document.getElementById("gameCanvas")
var context = canvas.getContext("2d")
var world = [[{type: "grass"}]]
for(var y = 0; y<world.length; y++) {
  for(var x = 0; x<world[y].length; x++) {
    drawWithObject(x, y, world[y][x])
  }
}

function drawWithObject (x, y, object) {
  if(object.type == "grass") {
    context.fillStyle = "#00BB00";
    context.fillRect(x * size, y * size, size, size)
  }

}
