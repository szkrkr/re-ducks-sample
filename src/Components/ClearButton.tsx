import * as React from "react";
import { useDispatch } from "react-redux";
import { clearUsers } from "../Ducks/Github/Actions";

export default function ClearButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearUsers());
  };

  return <button onClick={handleClick}>clear users</button>;
}
