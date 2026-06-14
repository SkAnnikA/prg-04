import { Actor, Engine, DisplayMode, SolverStrategy, Vector, Color } from "excalibur"

class Hearts extends Actor {
  constructor() {
    super({ x: 50, y: 50, anchor: Vector.Zero });
    this.health = 5
    this.heartImage = new Sprite({
      image: Resources.Heart,
      sourceView: {
        x: 0,
        y: 0,
        width: 100 * this.health,   // basis afmeting van 1 hartje is 100x100
        height: 100                 // basis afmeting van 1 hartje is 100x100
      }
    });
    this.graphics.use(this.heartImage);
  }
  
  adjustHealth() {
    this.health--
    this.heartImage.sourceView.width = 100 * this.health
    this.heartImage.width = 100 * this.health
  }
}