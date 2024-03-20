import { FormEvent, useState } from 'react'
import './App.scss'

function App() {
  const [activeValue, setActiveValue] = useState<string>('');
  const [stack, setStack] = useState<string[]>([]);

  const handleNumberClicked = (e: FormEvent<HTMLButtonElement>) => {
    setActiveValue(e.currentTarget.innerText);
  };

  const handleOperatorClicked = (e: FormEvent<HTMLButtonElement>) => {
    const operator = e.currentTarget.innerText;

    // grab number(s) from stack to run calculation

    switch (operator) {
      case "-":
      // do negative
      case "+":
      // do addition
      case "x":
      // do multiplication
      case "/":
      // do division
      case "^":
      // do exponent

      // default: TODO for keyboard input
    }
  };

  const handleStackOperatorClicked = (e: FormEvent<HTMLButtonElement>) => {
    const stackOperator = e.currentTarget.innerText;
    switch (stackOperator) {
      case "CLR":
      // clear active OR move stack to active
      case "ENTER":
        // put number into stack and erase active field
        setStack([activeValue, ...stack]);
        setActiveValue('');
    }
  };

  return (
    <>
      <h1>Reverse Polish Notation Calculator</h1>
      <h2>The '-' sign negates the value only</h2>
      <div className="reverse-polish-calculator">
        <div className='calculator'>
          <input
            type='text'
            value={activeValue}
            onChange={() => { }} // to do for typing on keyboard
          />
          <div className='row'>
            <button type='button' onClick={(e) => handleStackOperatorClicked(e)}>CLR</button>
            <button type='button' onClick={(e) => handleOperatorClicked(e)}>-</button>
            <button type='button' onClick={(e) => handleOperatorClicked(e)}>/</button>
            <button type='button' onClick={(e) => handleOperatorClicked(e)}>x</button>
          </div>
          <div className='row'>
            <button type='button' onClick={(e) => handleNumberClicked(e)}>7</button>
            <button type='button' onClick={(e) => handleNumberClicked(e)}>8</button>
            <button type='button' onClick={(e) => handleNumberClicked(e)}>9</button>
            <button type='button' onClick={(e) => handleOperatorClicked(e)}>^</button>
          </div>
          <div className='row'>
            <button type='button' onClick={(e) => handleNumberClicked(e)}>4</button>
            <button type='button' onClick={(e) => handleNumberClicked(e)}>5</button>
            <button type='button' onClick={(e) => handleNumberClicked(e)}>6</button>
            <button type='button' onClick={(e) => handleOperatorClicked(e)}>+</button>
          </div>
          <div className='row-bottom'>
            <div className='numeric-bottom-buttons'>
              <div className='row-1'>
                <button type='button' onClick={(e) => handleNumberClicked(e)}>1</button>
                <button type='button' onClick={(e) => handleNumberClicked(e)}>2</button>
                <button type='button' onClick={(e) => handleNumberClicked(e)}>3</button>
              </div>
              <div className='row-2'>
                <span className='wider-button'>
                  <button type='button' onClick={(e) => handleNumberClicked(e)}>0</button>
                </span>
                <button type='button' onClick={(e) => handleNumberClicked(e)}>.</button>
              </div>
            </div>
            <div className='taller-button'>
              <button type='button' onClick={(e) => handleStackOperatorClicked(e)}>ENTER</button>
            </div>
          </div>
        </div>
        <div className='stack'>
          {stack.map((number, index) => {
            return <div key={index}>{number}</div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
