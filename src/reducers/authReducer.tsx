import { UserInfo } from "../apis/UserServiceType";

type Action = { type: "SET_AUTH"; payload: UserInfo };

const authReducer = (state: UserInfo, action: Action): UserInfo => {
  switch (action.type) {
    case "SET_AUTH":
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
