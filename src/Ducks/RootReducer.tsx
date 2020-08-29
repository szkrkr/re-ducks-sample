import { combineReducers } from "redux";
import { GithubUsersReducer } from "./Github/Reduers";
import { IGithubUsersState } from "./Github/Types";

export type RootState = {
  github: IGithubUsersState;
};

const RootReducer = combineReducers({ github: GithubUsersReducer });

export default RootReducer;
