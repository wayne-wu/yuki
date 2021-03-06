import '../css/main.css';
import * as THREE from 'three';

import SceneManager from './sceneManager.js';
import Cube from './cube.js';
import Snow from './snow.js';

const canvas = document.getElementById('canvas');
const app = new SceneManager(canvas);

// creates grid on xy plane
// createGridHelper(size, divisions)
app.createGridHelper(10, 10);

// creates x, y, z axes
// createAxisHelper(size)
app.createAxisHelper(5);

const cubeConfig = {
  dimmensions: { x: 4, y: 2, z: 4 },
};
const cube = new Cube(cubeConfig);

const snowConfig = {
  renderer: app.renderer,
  bbox: cube.getBoundingBox(),
  gridWidth: 64,
};
const snow = new Snow(snowConfig);

app.scene.add( cube.mesh );
app.scene.add( snow.mesh );


app.animate(() => {
  snow.update();
});
