import space from "./space";
import Spot from "./classes/Spot";
import Vector from "./classes/Vector";

type spotBehavior =
  | { type: "show"; payload?: any }
  | { type: "update"; payload?: any };

const spotRducer = (action: spotBehavior) => {
  switch (action.type) {
    case "show":
      action.payload.show();
      return;
    case "update":
      action.payload.show();
      action.payload.update(action.payload.pos.x, action.payload.pos.y)
      return;
  }
};

// make 2D array
const grid = Array(space.cols);
for (let i = 0; i < space.cols; i++) {
  grid[i] = new Array(space.rows);
}
for (let i = 0; i < space.cols; i++) {
  for (let j = 0; j < space.rows; j++) {
    grid[i][j] = new Spot(
      space.scale,
      new Vector(i, j),
      "rgba(60, 179, 113, 1)"
    );
  }
}

export const setup = () => {
  for (let i = 0; i < space.cols; i++) {
    for (let j = 0; j < space.rows; j++) {
      spotRducer({
        type: "show",
        payload: grid[i][j]
      });
    }
  }
};

export const draw = () => {
  for (let i = 0; i < space.cols; i++) {
    for (let j = 0; j < space.rows; j++) {
      spotRducer({
        type: "update",
        payload: grid[i][j]
      });
    }
  }
};


