import { combineReducers } from "redux";
import { GithubReducer, GithubState } from "./GithubReducer";

export type RootState = {
  github: GithubState;
};

const RootReducer = combineReducers({ github: GithubReducer });

export default RootReducer;
