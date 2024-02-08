export function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_VALUE":
      return { ...state, ...action.payload };
    case "SET":
      return action.payload;
    default:
      return state
  }
}
