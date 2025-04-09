// Initialize canvas for particles
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Make canvas responsive
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createStaticParticles(); // Recreate particles when window is resized
});

var shapes = [];
var cicleStart = 0,
    cicleEnd = Math.PI * 2,
    rayon = 0.5,
    number = 2500;

// Function to create static particles distributed across the screen
function createStaticParticles() {
  shapes = []; // Clear existing particles
  
  for(var i = 0; i < number; i++) {
    // Randomly position particles across the entire canvas
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    
    shapes.push({
      x: x,
      y: y,
      rayon: rayon,
      start: cicleStart,
      end: cicleEnd
    });
  }
}

// Create initial set of particles
createStaticParticles();

// Draw function - renders particles without movement
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#70E3B4";

  for(var i = 0; i < shapes.length; i++) {
    var particle = shapes[i];
    
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.rayon, particle.start, particle.end);
    ctx.fill();
  }
  
  // Keep the animation loop going, but particles stay in place
  requestAnimationFrame(draw);
}

// Start the drawing loop
draw();
