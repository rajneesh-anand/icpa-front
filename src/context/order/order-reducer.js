export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ORDER_DETAILS":
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
