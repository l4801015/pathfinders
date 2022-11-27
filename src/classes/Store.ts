class Store {
  reducer: Function;
  fns: Function[] = [];

  constructor(reducer: Function) {
    this.reducer = reducer;
    return this;
  }

  subscribe(fns: Function[]) {
    this.fns = fns;
    return this;
  }

  dispatch(action: any) {
    this.reducer(action);
    this.fns.map((f: Function) => f(action.payload));
    return this;
  }
}

export default Store;
