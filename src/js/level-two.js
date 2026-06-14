// this.knight = new Knight()
// this.add(this.Knight)

import { Actor, Engine, Vector, ParallaxComponent, Scene } from 'excalibur'
import { Resources } from "./resources.js"
import { Knight } from "./knight.js"
import { Platform } from "./platform.js"
import { Coin } from './coin.js'
import { Flag } from './flag.js'
import { GameOver } from "./gameover.js"


export class LevelTwo extends Scene {

    knight

    onInitialize(engine) {
        const bg = new Actor()
        bg.graphics.use(Resources.Background2.toSprite())
        bg.pos = new Vector(engine.screen.resolution.width / 4, engine.screen.resolution.height / 4)
        bg.addComponent(new ParallaxComponent(new Vector(0.5, 0.5)))
        this.add(bg)

        this.knight = new Knight()
        this.add(this.knight)
        this.camera.strategy.elasticToActor(this.knight, 0.2, 0.6)

        // platforms
        this.add(new Platform(350, 600))
        this.add(new Platform(1200, 450))
        this.add(new Platform(350, 200))
        this.add(new Platform(1300, 350))
        this.add(new Platform(1825, 550))
        this.add(new Platform(-250, 400))
    
        //coins
        this.add(new Coin(100, 100))
        this.add(new Coin(-100, 300))
        this.add(new Coin(950, 350))
        this.add(new Coin(1500, 250))

        //finish
        this.add(new Flag(2000, 450))


    }
}