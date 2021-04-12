import Ship from './ship'

//canvas
const canvas = document.getElementById('gameScreen');
const ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 500;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height)
const FPS = 60;
let score = 0;
keys = [];
const space = false;


class Projectile{
  constructor(x, y, radius, color, velocity){
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = velocity
    this.keys = []
  }

  draw(){
  ctx.beginPath()
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
  ctx.fillStyle = this.color
  ctx.fill

  }
 
  
}



const ship1 = new Ship(35, canvas.height/2,30/2, 0/180*Math.PI, 'red')
ship1.draw();
const shipb = new Projectile(ship1.x + 10, ship1.y, 5, 'blue', null)
shipb.draw();

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = "black";
  moveShip();
  ship1.draw();
  shipb.draw();



}


setInterval(update, 1000 / FPS);

 

window.addEventListener(('keydown'), function (e) {
  this.keys[e.keyCode] = true;
  
});
window.addEventListener(('keyup'), function (e) {
  this.keys[e.keyCode] = false;
});
function moveShip() {
  if (keys[38] && ship1.y > 25) { ship1.y -= 7 }
  if (keys[40] && ship1.y < 475) { ship1.y += 7 }
  if (keys[37] && ship1.x > 25) { ship1.x -= 7 }
  if (keys[39] && ship1.x < 675) { ship1.x += 7 }

}
function fire() {
  if (keys[32]) {
    shipb.draw()
  }
}
