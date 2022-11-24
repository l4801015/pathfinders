import { Canvas } from "./Canvas";
import { FPS } from "./FPS";
import { draw, setup } from "./app";
import space from "./space";

const width = space.width;
const height = space.height;
const scale = space.scale;
const canvas = new Canvas(width, height);
const ctx = canvas.init();
const fps = new FPS(space.fps);

let then = performance.now();
const loop = () => {
  const interval = 1000 / fps.getFPS();
  const now = performance.now();
  const delta = now - then;
  if (delta > interval) {
    then = now - (delta % interval);
    canvas.clear(space.fill);
    canvas.drawGrid(scale, space.stroke);
    draw(ctx);
  }
  requestAnimationFrame(loop);
};
setup(ctx);
loop();
