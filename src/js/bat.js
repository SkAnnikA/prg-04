import { Engine, CollisionType, Actor, Color, Vector } from 'excalibur'
import { Resources } from './resources.js'

export class Bat extends Actor {

    constructor(x, y) {
        super({ x, y, radius: Resources.Bat.width/2 }) // collision circle! 
    }
    
    onInitialize(engine) {
        this.graphics.use(Resources.Bat.toSprite())
        this.body.collisionType = CollisionType.Passive
        this.scale = new Vector(0.2 , 0.2)
    }


}