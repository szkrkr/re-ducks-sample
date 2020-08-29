import { 
  FETCH_USERS_REQUESTED,
  FETCH_USERS_FAILED,
  FETCH_USERS_SUCCEEDED,
  CLEAR_USERS,
} from "./Actions";

export type IGitHubUser = {
  login: string;
  id: number;
  html_url: string;
};

export type IGithubUsersState = {
  isFetching: boolean;
  users: IGitHubUser[];
};

type FetchUsersRequestedAction = {
  type: typeof FETCH_USERS_REQUESTED;
};

type FetchUsersFailedAction = {
  type: typeof FETCH_USERS_FAILED;
};

type FetchUsersSucceededAction = {
  type: typeof FETCH_USERS_SUCCEEDED;
  payload: {
    users: IGitHubUser[]
  }
};

type ClearUsersAction = {
  type: typeof CLEAR_USERS;
};

export type GitHubUsersActionTypes =
| FetchUsersRequestedAction
| FetchUsersFailedAction
| FetchUsersSucceededAction
| ClearUsersAction;
