const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, size) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

// Add event listener for keydown
document.addEventListener("keydown", (event) => {
  // Get the key code of the pressed key
  const key = event.key;

  // Define the distance to move when a key is pressed
  const moveDistance = 10;

  // Update the x and y coordinates based on the key pressed
  switch (key) {
    case "w":
      y -= moveDistance;
      break;
    case "s":
      y += moveDistance;
      break;
    case "a":
      x -= moveDistance;
      break;
    case "d":
      x += moveDistance;
      break;
    default:
      // Ignore keys other than WASD
      return;
  }

  // Clear the canvas and redraw the circle with the updated coordinates
  drawCircle(x, y, size);
});
