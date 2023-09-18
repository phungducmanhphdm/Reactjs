import logo from "./logo.svg";
import "./App.css";

import { globalState, globalReducer } from "./global/GlobalState";
import { useReducer } from "react";

function App() {
  const [header, setHeader] = useReducer(globalState);

  return (
    <div className="App">
      <button
        onClick={() => {
          globalReducer(function a(e) {
            return [1, 2, 3, 4, 5];
          });
        }}
      >
        click me to show
      </button>
    </div>
  );
}

export default App;
