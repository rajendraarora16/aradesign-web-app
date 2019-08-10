export class Box{
    constructor() {
        this.dimension = 300
        this.halfDimen = this.dimension/2

        this.x = - this.dimension
        this.y = - this.dimension

        this.centerX = 0
        this.centerY = 0
    }

    isPointInside(x, y) {
        if (x < this.x + this.dimension && x > this.x && y < this.y + this.dimension && y > this.y) {
            const dist = Math.sqrt(Math.pow(x - this.centerX, 2) + Math.pow(y - this.centerY, 2))
            const alpha = 1 - (dist/this.halfDimen)
            return Math.max(alpha, 0);
        }
    
        return 0;
    }
    
    move(x, y) {
        this.x = x - this.halfDimen;
        this.y = y - this.halfDimen;
    
        this.centerX = x
        this.centerY = y
    }
};

export class Dot {
    constructor(x, y, box, animate) {
        this.x = x
        this.y = animate ? 0 : y
        this.yCache = y
        this.alpha = 0.1
        this.box = box
    }

    animate(step) {
        this.y = this.yCache * step
    }

    draw(ctx) {
        const addAlpha = this.box.isPointInside(this.x, this.y)

        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha + addAlpha})`;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + 5, this.y);
        ctx.lineTo(this.x + 2.5, this.y - 4);
        // ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }
}
