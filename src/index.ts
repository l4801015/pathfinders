import { FPS } from "./classes/FPS";
import { draw, setup } from "./app";
import { canvas } from "./canvas";
import space from "./space";

const fps = new FPS(space.fps);

let then = performance.now();
const loop = () => {
  const interval = 1000 / fps.getFPS();
  const now = performance.now();
  const delta = now - then;
  if (delta > interval) {
    then = now - (delta % interval);
    canvas.clear(space.fill);
    canvas.drawGrid(space.scale, space.stroke);
    draw();
  }
  requestAnimationFrame(loop);
};
setup();
loop();
