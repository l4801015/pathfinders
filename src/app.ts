import space from "./space";
import Spot from "./classes/Spot";
import Vector from "./classes/Vector";
import Store from "./classes/Store";

// make 2D array
const grid = Array(space.cols);
for (let i = 0; i < space.cols; i++) {
  grid[i] = new Array(space.rows);
}
for (let i = 0; i < space.cols; i++) {
  for (let j = 0; j < space.rows; j++) {
    grid[i][j] = new Spot(space.scale, new Vector(i, j));
  }
}

/////////////////////////////////////////////////
// create spot monad
/////////////////////////////////////////////////

type spotBehavior =
  | { type: "show"; payload?: any }
  | { type: "update"; payload?: any }
  | { type: "show start"; payload?: any }
  | { type: "show end"; payload?: any };

const spotRducer = (action: spotBehavior) => {
  switch (action.type) {
    case "show":
      action.payload.show("rgba(60, 179, 113, 0)");
      return;
    case "update":
      action.payload.show("rgba(60, 179, 113, 0)");
      action.payload.update(action.payload.pos.x, action.payload.pos.y);
      return;
    case "show start":
      action.payload.show("rgba(60, 179, 113, 1)");
      return;
    case "show end":
      action.payload.show("rgba(178, 34, 34,1)");
      return;
  }
};

const creatStore = (reducer: Function) => {
  return new Store(reducer);
};

const spotStore = creatStore(spotRducer);

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

const openSet: any = [];
const closedSet: any = [];
const start = new Spot(space.scale, new Vector(0, 0));
const end = new Spot(space.scale, new Vector(space.cols - 1, space.rows - 1));

// setup function
export const setup = () => {
  openSet.push(start);
};

// draw aka loop function
export const draw = () => {
  spotStore.dispatch({
    type: "show end",
    payload: end,
  });

  // algorith logic
  if (openSet.length > 0) {
    // we can ceep going
  } else {
    // no solution
  }

  // draw all spots in green alpha
  for (let i = 0; i < space.cols; i++) {
    for (let j = 0; j < space.rows; j++) {
      spotStore.dispatch({
        type: "update",
        payload: grid[i][j],
      });
    }
  }

  // draw open and closed sets
  for (let i = 0; i < closedSet.length; i++) {
    closedSet[i].show("rgba(178, 34, 34, 1)");
  }
  for (let i = 0; i < openSet.length; i++) {
    spotStore.dispatch({
      type: "show start",
      payload: openSet[i],
    });
  }
};
