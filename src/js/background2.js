import { Actor, Vector, Sprite } from "excalibur"
import { Resources } from './resources.js'

export class Background2 extends Actor {

    onInitialize(engine) {
        const sprite = new Sprite({
            image: Resources.Background2,
            sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
        })
        this.anchor = Vector.Zero
        this.pos = Vector.Zero
        this.graphics.use(sprite)
    }
}