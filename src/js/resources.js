import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    BG: new ImageSource('images/background.jpg'),
    Knight: new ImageSource('images/knight.png')
}

const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}

const ResourceLoader = new Loader(resourceArray)

export { Resources, ResourceLoader }