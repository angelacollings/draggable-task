import "./App.css";
import Draggable from "react-draggable";

function App() {
  return (
    <div className="App">
      <div className="draggable-container">
        <Draggable bounds="parent">
          <div className="draggable-box">Drag me!</div>
        </Draggable>
      </div>
    </div>
  );
}

export default App;
