import { ImageSource, Sound, Resource, Loader, ImageWrapping } from 'excalibur'

const Resources = {
    BG: new ImageSource('images/background.jpg', { wrapping: ImageWrapping.Repeat }),
    Background2: new ImageSource('images/backgroun2.jpg', { wrapping: ImageWrapping.Repeat }),
    Gameover: new ImageSource('images/Gameover.jpg'),
    Knight: new ImageSource('images/knight.png'),
    RunningKnight: new ImageSource('images/running-knight.png'),
    Platform: new ImageSource('images/platform.png'),
    Flag: new ImageSource('images/flag.png'),
    Coin: new ImageSource('images/coin.png'),
    Bat: new ImageSource('images/bat.png'),
    Heart: new ImageSource('images/heart.png'),
}

const ResourceLoader = new Loader(Object.values(Resources))

export { Resources, ResourceLoader }