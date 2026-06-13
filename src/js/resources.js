import { ImageSource, Sound, Resource, Loader, ImageWrapping } from 'excalibur'

const Resources = {
    BG: new ImageSource('images/background.jpg', { wrapping: ImageWrapping.Repeat}),
    Gameover: new ImageSource('images/Gameover.jpg'),
    Knight: new ImageSource('images/knight.png'),
    RunningKnight: new ImageSource('images/running-knight.png'),
    Platform: new ImageSource('images/platform.png')
}

const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}

const ResourceLoader = new Loader(resourceArray)

export { Resources, ResourceLoader }