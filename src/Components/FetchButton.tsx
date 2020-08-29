import * as React from "react";
import { useDispatch } from "react-redux";
import { fetchGithubUsers } from "../Ducks/Github/Operation";

export default function FetchButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchGithubUsers());
  };

  return <button onClick={handleClick}>fetch github users</button>;
}
