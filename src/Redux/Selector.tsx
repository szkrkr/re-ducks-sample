import { useSelector } from "react-redux";
import { IGitHubUser } from "./GithubReducer";
import { RootState } from "./RootReducer";

export const useGithubUsersSelector = () =>
  useSelector<RootState, IGitHubUser[]>(state => state.github.users);
export const useIsFetchingSelector = () =>
  useSelector<RootState, boolean>(state => state.github.isFetching);
