import { Actor } from "excalibur"

export class Background extends Actor {

    onInitialize(engine) {
        let sprite = new Sprite({
            image: Resources.Background,
            sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
        })
        this.anchor = Vector.Zero
        this.graphics.use(sprite)
    }
}