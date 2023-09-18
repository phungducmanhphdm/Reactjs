const globalState = {};

const globalReducer = (globalState, callBack) => {
  return callBack(globalState);
};

export { globalState, globalReducer };
