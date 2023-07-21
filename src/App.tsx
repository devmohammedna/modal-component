import "./App.css";
import { ModalForm, ModalImage, ModalText } from "./example";
function App() {
  return (
    <div className="App">
      <h1>Modal Component</h1>
      <h4>
        This is a simple example of how to use modal component in reactjs.
      </h4>

      {/* Text Modal Example */}
      <ModalText />

      {/* Image Modal Example */}
      <ModalImage />

      {/* form Modal Example */}
      <ModalForm />
    </div>
  );
}

export default App;
