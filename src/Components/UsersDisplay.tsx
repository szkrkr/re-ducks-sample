import * as React from "react";
import {
  useGithubUsersSelector,
  useIsFetchingSelector
} from "../Redux/Selector";

export default function UserDisplay() {
  const users = useGithubUsersSelector();
  const isFetching = useIsFetchingSelector();
  return (
    <>
      {isFetching && <div>loading..</div>}
      {users.map(u => {
        return (
          <h4 key={u.id}>
            {u.login}: <a href={u.html_url}>{u.html_url}</a>
          </h4>
        );
      })}
    </>
  );
}
