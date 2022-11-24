import { floor, getWidth, getHeight } from "./utils";

const scale = 20;

const space = {
  width: getWidth(),
  height: getHeight(),
  scale: scale,
  cols: floor(getWidth() / scale),
  rows: floor(getHeight() / scale),
  fps: 4,
  fill: "#333",
  stroke: "rgba(0,0,0,0.4)",
};

export default space;
