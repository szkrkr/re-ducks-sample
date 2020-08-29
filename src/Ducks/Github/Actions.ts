import { IGitHubUser, GitHubUsersActionTypes } from "./Types";

export const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED" as const;
export const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED" as const;
export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED" as const;
export const CLEAR_USERS = "CLEAR_USERS" as const;

export const fetchUserRequested = (): GitHubUsersActionTypes => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

export const fetchUserCompleted = (users: IGitHubUser[]): GitHubUsersActionTypes => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: {
      users
    },
  };
};

export const fetchUserFailed = (): GitHubUsersActionTypes => {
  return {
    type: FETCH_USERS_FAILED,
  };
};

export const clearUsers = (): GitHubUsersActionTypes => {
  return {
    type: CLEAR_USERS,
  };
};
