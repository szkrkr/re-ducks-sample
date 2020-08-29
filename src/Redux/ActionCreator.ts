import { IGitHubUser } from "./GithubReducer";

export const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED" as const;
export const FETCH_USERS_COMPLETED = "FETCH_USERS_COMPLETED" as const;
export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED" as const;
export const CLEAR_USERS = "CLEAR_USERS" as const;

export const fetchUserRequested = () => {
  return {
    type: FETCH_USERS_REQUESTED,
    payload: {}
  };
};

export const fetchUserCompleted = (users: IGitHubUser[]) => {
  return {
    type: FETCH_USERS_COMPLETED,
    payload: {
      users
    }
  };
};

export const fetchUserFailed = () => {
  return {
    type: FETCH_USERS_FAILED,
    payload: {}
  };
};

export const clearUsers = () => {
  return {
    type: CLEAR_USERS,
    payload: {}
  };
};

export type GithubAction = ReturnType<
  | typeof fetchUserRequested
  | typeof fetchUserCompleted
  | typeof fetchUserFailed
  | typeof clearUsers
>;
