const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = 'grey';

function drawRectangle(canvas, x, y, width, height, color) {
  const ctx = canvas.getContext("2d");
  
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw the rectangle
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}


drawRectangle(canvas, x, y, width, height, color);


    
