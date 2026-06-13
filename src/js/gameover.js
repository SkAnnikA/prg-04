import { Engine, TextAlign, BaseAlign, Actor, Label, Keys, FontUnit, Vector, Color, Scene, Font } from 'excalibur'
import { Resources } from './resources.js'

export class GameOver extends Scene {

    onInitialize(engine) {
        const bg = new Actor({
            x: engine.screen.resolution.width / 2,
            y: engine.screen.resolution.height / 2,
            width: engine.screen.resolution.width,
            height: engine.screen.resolution.height
        })
        bg.graphics.use(Resources.Gameover.toSprite())
        this.add(bg)

        // een Label is een Actor die automatisch een Text graphic toevoegt.
        const label = new Label({
            text: 'GAME OVER\ntry again...',
            pos: new Vector(engine.screen.resolution.width / 2, engine.screen.resolution.height / 3),
            font: new Font({
                unit: FontUnit.Px,
                family: 'PressStart',
                size: 80,
                color: Color.Red,
                baseAlign: BaseAlign.Top,
                textAlign: TextAlign.Center
            })
        })
        this.add(label)
    }

    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            engine.goToScene('level')
        }
    }
}