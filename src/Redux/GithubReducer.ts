import {
  FETCH_USERS_REQUESTED,
  FETCH_USERS_COMPLETED,
  FETCH_USERS_FAILED,
  GithubAction,
  fetchUserRequested,
  fetchUserCompleted,
  fetchUserFailed,
  CLEAR_USERS
} from "./ActionCreator";
import { Reducer, Dispatch } from "redux";

export interface IGitHubUser {
  login: string;
  id: number;
  html_url: string;
}

export class GithubUser implements IGitHubUser {
  login: string;
  id: number;
  html_url: string;
  constructor(login: string, id: number, html_url: string) {
    this.login = login;
    this.id = id;
    this.html_url = html_url;
  }
}

export interface IGithubState {
  isFetching: boolean;
  users: IGitHubUser[];
}

export class GithubState implements IGithubState {
  isFetching = false;
  users = [];
}

export const GithubReducer: Reducer<IGithubState, GithubAction> = (
  state = new GithubState(),
  action
) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED: {
      return { ...state, isFetching: true };
    }
    case FETCH_USERS_COMPLETED: {
      return { isFetching: false, users: action.payload.users };
    }
    case FETCH_USERS_FAILED: {
      return { ...state, isFetching: false };
    }
    case CLEAR_USERS: {
      return { ...state, users: [] };
    }
    default: {
      break;
    }
  }
  return state;
};

export const fetchGithubUsers = () => async (
  dispatch: Dispatch<GithubAction>
) => {
  dispatch(fetchUserRequested());
  try {
    const users = await fetch("https://api.github.com/users");
    const body = await users.json();
    dispatch(fetchUserCompleted(body));
  } catch (e) {
    dispatch(fetchUserFailed());
  }
};
