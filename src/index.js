import React from "react";
import ReactDOM from "react-dom";
import BookView from "./composants/AddName";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookView />
        
      </header>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
