class Ship {
    constructor(x, y, r, a, color) {
        this.x = x
        this.y = y
        this.r = r
        this.a = a
        this.color = color

    }


    draw() {
        ctx.strokeStyle = "red";
        ctx.linewidth = 30 / 20;
        ctx.beginPath();
        ctx.moveTo(
            this.x + this.r * Math.cos(this.a),
            this.y - this.r * Math.sin(this.a)
        );
        ctx.lineTo(
            this.x - this.r * (Math.cos(this.a) + Math.sin(this.a)),
            this.y + this.r * (Math.sin(this.a) - Math.cos(this.a))
        );
        ctx.lineTo(
            this.x - this.r * (Math.cos(this.a) - Math.sin(this.a)),
            this.y + this.r * (Math.sin(this.a) + Math.cos(this.a))
        );
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "red"
        ctx.fill();


    }

    // moveShip() {
    // if (keys[38] && this.y > 25) { this.y -= 7 }
    // if (keys[40] && this.y < 475) { this.y += 7 }
    // if (keys[37] && this.x > 25) { this.x -= 7 }
    // if (keys[39] && this.x < 675) { this.x += 7 }

    // }




}

export default Ship;