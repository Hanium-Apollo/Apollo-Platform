type Action = { type: "SET_TOKEN"; payload: string };

const tokenReducer = (state: string, action: Action): string => {
  switch (action.type) {
    case "SET_TOKEN":
      return action.payload;
    default:
      return state;
  }
};

export default tokenReducer;
