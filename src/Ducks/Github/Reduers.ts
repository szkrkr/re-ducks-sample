import { IGithubUsersState, IGitHubUser, GitHubUsersActionTypes } from "./Types";
import { Reducer } from "redux";
import { FETCH_USERS_REQUESTED, FETCH_USERS_SUCCEEDED, FETCH_USERS_FAILED, CLEAR_USERS } from "./Actions";

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

export class GithubUsersState implements IGithubUsersState {
  isFetching = false;
  users = [];
}

export const GithubUsersReducer: Reducer<IGithubUsersState, GitHubUsersActionTypes> = (
  state = new GithubUsersState(),
  action
) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED: {
      return { ...state, isFetching: true };
    }
    case FETCH_USERS_SUCCEEDED: {
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