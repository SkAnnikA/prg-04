import '../css/style.css'
import { Actor, Engine, DisplayMode, SolverStrategy, Vector, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './background.js'
import { Knight } from './knight.js'
import { Platform } from "./platform.js"
import { LevelOne } from "./level-one.js"
import { GameOver } from "./gameover.js"

export class Game extends Engine {
 
    Knight

    constructor() {
        super({
            width: 1600,
            height: 760,
            backgroundColor: Color.Black,
            displayMode: DisplayMode.FitScreen, 
            suppressHiDPIScaling: true,
            physics: {
                solver: SolverStrategy.Arcade,
                gravity: new Vector(0, 800),
            }
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add('level-one', new LevelOne())
        this.add('gameover', new GameOver())
        this.goToScene('level-one')
        // this.add(new Background())
        // this.add(new Knight())
    }
}

new Game()
