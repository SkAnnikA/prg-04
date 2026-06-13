// this.knight = new Knight()
// this.add(this.Knight)

import { Actor, Engine, Vector, ParallaxComponent, Scene } from 'excalibur'
import { Resources } from "./resources.js"
import { Knight } from "./knight.js"
import { Platform } from "./platform.js"
import { GameOver } from "./gameover.js"


export class LevelOne extends Scene {

    knight

    onInitialize(engine) {
        const bg = new Actor()
        bg.graphics.use(Resources.BG.toSprite())
        bg.pos = new Vector(engine.screen.resolution.width / 4, engine.screen.resolution.height / 4)
        bg.addComponent(new ParallaxComponent(new Vector(0.5, 0.5)))
        this.add(bg)

        this.knight = new Knight()
        this.add(this.knight)
        this.camera.strategy.elasticToActor(this.knight, 0.2, 0.6)


        this.add(new Platform(850, 500))



    }
}