import { CollisionType, Actor, Vector, DegreeOfFreedom, Keys } from 'excalibur'
import { Resources } from './resources.js'
import { Coin } from './coin.js'
import { Flag } from './flag.js'

export class Knight extends Actor {

    constructor() {
        super({ width: Resources.Knight.width, height: Resources.Knight.height }) // collision box!
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Knight.toSprite())
        // betere spawn
        this.pos = new Vector(engine.screen.resolution.width * 0.2, engine.screen.resolution.height * 0.42)
        this.body.collisionType = CollisionType.Active
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation)
        this.scale = new Vector(0.5 , 0.5)
        this.on('collisionstart', (event) => this.hitObject(event, engine))
    }


    onPreUpdate(engine, delta) {
        let xspeed = 0
        if (engine.input.keyboard.wasPressed(Keys.W) || engine.input.keyboard.wasPressed(Keys.Up)) {
            if (this.vel.y === 0) {
                //this.vel.y = -200
                this.body.applyLinearImpulse(new Vector(0, -350 * delta))
            }
        }
        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -300
            this.graphics.flipHorizontal = true
        }
        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 300
            this.graphics.flipHorizontal = false
        }
        this.vel = new Vector(xspeed, this.vel.y)

            if (this.pos.y > 1200) {
            engine.goToScene('gameover')
        }
    }

    hitObject(event, engine) {
        const other = event.other.owner
        if (other instanceof Coin) {
            other.kill()
        }
        if (other instanceof Flag) {
            engine.goToScene('level-two')
        }
    }
}

