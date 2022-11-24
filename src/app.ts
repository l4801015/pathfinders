import space from './space';
import Spot from './Spot';

const spot = new Spot(space.scale);

export const setup = (ctx: CanvasRenderingContext2D) => {
  spot.show(ctx);
};

export const draw = (ctx: CanvasRenderingContext2D) => {
  spot.show(ctx);
  spot.update();
};

