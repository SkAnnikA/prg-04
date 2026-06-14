import { ImageSource, Sound, Resource, Loader, ImageWrapping, ScreenElement } from 'excalibur'
export class UI extends ScreenElement {

    scoreText

    onInitialize(engine) {
        this.scoreText = new Label({
            text: 'Score: 0',
            pos: new Vector(0, 0),
            font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 20,
                color: Color.White
            })
        })
        this.addChild(this.scoreText)
    }

    updateScore() {
        this.scoreText.text = `Score: 200`
    }

        healthbar

    onInitialize(engine) {
        let barbackground = new Actor({ x: 10, y: 40, color: Color.fromRGB(255, 255, 255, 0.4), width: 200, height: 20, anchor: Vector.Zero})
        this.addChild(barbackground)

        this.healthbar = new Actor({ x: 10, y: 40, color: Color.Green, width: 200, height: 20, anchor: Vector.Zero })
        this.addChild(this.healthbar)
    }

    reduceHealth() {
        this.healthbar.scale = new Vector(0.5, 1) // de health is nu 50%
    }
}
