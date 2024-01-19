import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Modal from "./Modal/Modal";
import ButtonCss from "./Buttons/ButtonCss";
import ButtonModule from "./Buttons/ButtonModule";
import ButtonStyled from "./Buttons/ButtonStyled";

function App() {
  const [value, setValue] = useState(0);
  const [modalState, setModalState] = useState(false);
  const ref = useRef(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>useRef </h1>
      <button type="button" onClick={() => setModalState(true)}>
        Open Modal
      </button>
      {modalState ? (
        <Modal>
          <button onClick={() => setModalState(false)}>Close</button>
          <h3>{value}</h3>
          <p>{ref.current ? ref.current.validationMessage : ""}</p>
          <input
            type="number"
            required
            min="0"
            max="35"
            ref={ref}
            onChange={(event) => setValue(+event.currentTarget.value)}
          />
        </Modal>
      ) : null}
      <div className="row">
        <div className="column">
          <p className="label">Static</p>
          <ButtonCss customStyles={{
            color: 'purple'
          }}>Button Static</ButtonCss>
        </div>
        <div className="column">
          <p className="label">Module</p>
          <ButtonModule>Button Module</ButtonModule>
        </div>
        <div className="column">
          <p className="label">Styled-Components</p>
          <ButtonStyled>Button Styled Component</ButtonStyled>
        </div>
      </div>
    </>
  );
}

export default App;
