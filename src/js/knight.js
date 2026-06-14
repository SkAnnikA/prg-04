import { CollisionType, Actor, Vector, DegreeOfFreedom, Keys, Animation } from 'excalibur'
import { Resources } from './resources.js'
import { Coin } from './coin.js'
import { Flag } from './flag.js'

export class Knight extends Actor {

    constructor() {
        super({ width: Resources.Knight.width, height: Resources.Knight.height }) // collision box!

        const idle = Resources.Knight.toSprite()
        const walk = Resources.RunningKnight.toSprite()
        const walkAnimation = new Animation({
            frames: [
                { graphic: walk, duration: 300 }
            ]
        })

        this.graphics.add('idle', idle)
        this.graphics.add('walk', walkAnimation)
        this.graphics.use('idle')

        this.facingRight = false
    }

    onInitialize(engine) {
        this.pos = new Vector(engine.screen.resolution.width * 0.2, engine.screen.resolution.height * 0.42)
        this.body.collisionType = CollisionType.Active
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation)
        this.scale = new Vector(0.5 , 0.5)
        this.on('collisionstart', (event) => this.hitObject(event, engine))
    }


    onPreUpdate(engine, delta) {
        let velX = 0
        let isMoving = false

        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            velX = -300
            this.facingRight = false
            isMoving = true
        }
        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            velX = 300
            this.facingRight = true
            isMoving = true
        }
        if (engine.input.keyboard.wasPressed(Keys.W) || engine.input.keyboard.wasPressed(Keys.Up)) {
            if (this.vel.y === 0) {
                this.body.applyLinearImpulse(new Vector(0, -350 * delta))
            }
        }

        this.vel = new Vector(velX, this.vel.y)

        if (isMoving) {
            this.graphics.use('walk')
            this.graphics.offset = new Vector(0, 7)
        } else {
            this.graphics.use('idle')
            this.graphics.offset = new Vector(0, 0)
        }

        this.graphics.flipHorizontal = !this.facingRight

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

