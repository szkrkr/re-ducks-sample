import { Dispatch } from "redux";
import { fetchUserRequested, fetchUserCompleted, fetchUserFailed } from "./Actions";
import { GitHubUsersActionTypes } from "./Types";


export const fetchGithubUsers = () => async (
  dispatch: Dispatch<GitHubUsersActionTypes>
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
