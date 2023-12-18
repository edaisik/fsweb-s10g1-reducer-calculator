import React from "react";
import { useReducer } from "react";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers/index";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  addToMemory,
  recallMemory,
  clearMemory,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAplyNumber = (number) => {
    dispatch(applyNumber(number));
  };

  const handleOperatorChange = (operator) => {
    dispatch(changeOperation(operator));
  };

  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  };

  const handleAddToMemory = () => {
    dispatch(addToMemory());
  };

  const handleRecallMemory = () => {
    dispatch(recallMemory());
  };

  const handleClearMemory = () => {
    dispatch(clearMemory());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton onClick={handleAddToMemory} value={"M+"} />
              <CalcButton onClick={handleRecallMemory} value={"MR"} />
              <CalcButton onClick={handleClearMemory} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleAplyNumber(1)} value={1} />
              <CalcButton onClick={() => handleAplyNumber(2)} value={2} />
              <CalcButton onClick={() => handleAplyNumber(3)} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleAplyNumber(4)} value={4} />
              <CalcButton onClick={() => handleAplyNumber(5)} value={5} />
              <CalcButton onClick={() => handleAplyNumber(6)} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleAplyNumber(7)} value={7} />
              <CalcButton onClick={() => handleAplyNumber(8)} value={8} />
              <CalcButton onClick={() => handleAplyNumber(9)} value={9} />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => handleOperatorChange("+")}
                value={"+"}
              />
              <CalcButton
                onClick={() => handleOperatorChange("*")}
                value={"*"}
              />
              <CalcButton
                onClick={() => handleOperatorChange("-")}
                value={"-"}
              />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClearDisplay} value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
