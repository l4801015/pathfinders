import space from './space';
import Canvas from './classes/Canvas';

export const canvas = new Canvas(space.width, space.height);
export const ctx = canvas.init();

