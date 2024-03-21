import { ChangeEvent, FormEvent, useState } from 'react'
import './App.scss'

function App() {
  const [activeValue, setActiveValue] = useState<string>('');
  const [stack, setStack] = useState<string[]>([]);

  const handleCheckIfValid = (input: string) => {
    const regexp = new RegExp(/\d/);

    return !!regexp.exec(input);
  };

  const handleNumberClicked = (e: FormEvent<HTMLButtonElement> | ChangeEvent<HTMLInputElement>) => {
    const number = e.currentTarget.innerText || e.currentTarget.value.split('').pop();
    if (!number) { return; }
    const isValid = handleCheckIfValid(number);

    const hasAnotherDot = activeValue.includes('.') && number === '.';
    const hasOnlyZeros = activeValue === '0' && number === '0';

    if (isValid && !hasOnlyZeros && !hasAnotherDot) {
      const combinedNumber = activeValue + number;
      setActiveValue(combinedNumber);
    }
  };

  const handleNegativeClicked = () => {
    const activeValueExists = activeValue || activeValue === '0';
    if (activeValueExists && activeValue[0] !== '-') {
      setActiveValue('-' + activeValue);
    }
  };

  const handleOperatorClicked = (e: FormEvent<HTMLButtonElement>) => {
    const operator = e.currentTarget.innerText;
    const emptyStack = stack.length === 0;
    const activeValueExists = activeValue || activeValue === '0';

    switch (operator) {
      case "+":
        if (activeValueExists && !emptyStack) {
          const result = Number(stack.pop()) + Number(activeValue);
          const shortenedStack = [...stack];
          setStack(shortenedStack); // force a re-render of the stack
          setActiveValue(result.toString());
        }

        break;
      case "x":
        if (activeValueExists && !emptyStack) {
          const result = Number(stack.pop()) * Number(activeValue);
          const shortenedStack = [...stack];
          setStack(shortenedStack);
          setActiveValue(result.toString());
        }

        break;
      case "/":
        if (activeValueExists && !emptyStack) {
          const result = Number(stack.pop()) / Number(activeValue);
          const shortenedStack = [...stack];
          setStack(shortenedStack);
          setActiveValue(result.toString());
        }

        break;
      case "^":
        if (activeValueExists && !emptyStack) {
          const result = Number(activeValue) ** Number(stack.pop());
          const shortenedStack = [...stack];
          setStack(shortenedStack);
          setActiveValue(result.toString());
        }

        break;
    }
  };

  const handleStackOperatorClicked = (e: FormEvent<HTMLButtonElement>) => {
    const stackOperator = e.currentTarget.innerText;
    switch (stackOperator) {
      case "CLR":
        // clear active OR move stack to active
        if (activeValue) {
          setActiveValue('');
        } else {
          const firstInStack = stack.pop();
          firstInStack && setActiveValue(firstInStack);
        }

        break;
      case "ENTER":
        // put number into stack and erase active field
        if (activeValue) {
          const cleanedNumber = Number(activeValue).toString();
          setStack([...stack, cleanedNumber]);
          setActiveValue('');
        }

        break;
    }
  };

  return (
    <>
      <h1>Reverse Polish Notation Calculator</h1>
      <h2>
        The '-' sign negates the value only (no subtraction)
        <br />
        'CLR' either clears the active number or makes the first in the stack active
      </h2>
      <div className="reverse-polish-calculator">
        <div className='calculator'>
          <input
            type='text'
            value={activeValue}
            onChange={(e) => handleNumberClicked(e)} // to do for typing on keyboard
          />
          <div className='row'>
            <button type='button' onClick={(e) => handleStackOperatorClicked(e)}>CLR</button>
            <button type='button' onClick={(e) => handleNegativeClicked()}>-</button>
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
