        // this.knight = new Knight()
        // this.add(this.Knight)

import { Actor, Engine, Vector, ParallaxComponent, Scene } from 'excalibur'
import { Resources } from "./resources.js"
import { Knight } from "./knight.js"


export class Level extends Scene {

    knight

    onInitialize(engine) {
        const bg = new Actor()
        bg.graphics.use(Resources.Background.toSprite())
        bg.pos = new Vector(engine.screen.resolution.width / 2, engine.screen.resolution.height / 2)
        bg.addComponent(new ParallaxComponent(new Vector(0.5, 0.5)))
        this.add(bg)

        this.addPlatforms()

        this.knight = new Knight()
        this.add(this.knight)
        this.camera.strategy.elasticToActor(this.knight, 0.2, 0.6)
    }

}