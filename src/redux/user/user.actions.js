import { UserActionTypes } from "./user.type";

export const serCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
