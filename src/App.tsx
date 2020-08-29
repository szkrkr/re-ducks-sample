import * as React from "react";
import "./styles.css";
import FetchButton from "./Components/FetchButton";
import ClearButton from "./Components/ClearButton";
import UsersDisplay from "./Components/UsersDisplay";

export default function App() {
  return (
    <div className="App">
      <FetchButton />
      <ClearButton />
      <UsersDisplay />
    </div>
  );
}
