import { FormEvent, useState } from 'react'
import './App.scss'

function App() {
  const [activeValue, setActiveValue] = useState('');

  const handleButtonClicked = (e: FormEvent<HTMLButtonElement>) => {
    setActiveValue(e.currentTarget.innerText);
  };

  return (
    <>
      <h1>Reverse Polish Notation Calculator</h1>
      <div className="reverse-polish-calculator">
        <input
          type='text'
          placeholder='0'
          value={activeValue}
          onChange={() => { }} // to do for typing on keyboard
        />
        <div className='row'>
          <button type='button' onClick={(e) => handleButtonClicked(e)}>CLR</button>
          <button type='button' onClick={(e) => handleButtonClicked(e)}>+/-</button>
          <button type='button' onClick={(e) => handleButtonClicked(e)}>/</button>
          <button type='button' onClick={(e) => handleButtonClicked(e)}>x</button>
        </div>
        <div className='row'>
          <button type='button' onClick={(e) => handleButtonClicked(e)}>7</button>
          <button type='button' onClick={(e) => handleButtonClicked(e)}>8</button>
          <button type='button' onClick={(e) => handleButtonClicked(e)}>9</button>
          <button type='button' onClick={(e) => handleButtonClicked(e)}>-</button>
        </div>
        <div className='row'>
          <button type='button' onClick={(e) => handleButtonClicked(e)}>4</button>
          <button type='button' onClick={(e) => handleButtonClicked(e)}>5</button>
          <button type='button' onClick={(e) => handleButtonClicked(e)}>6</button>
          <button type='button' onClick={(e) => handleButtonClicked(e)}>+</button>
        </div>
        <div className='row-bottom'>
          <div className='numeric-bottom-buttons'>
            <div className='row-1'>
              <button type='button' onClick={(e) => handleButtonClicked(e)}>1</button>
              <button type='button' onClick={(e) => handleButtonClicked(e)}>2</button>
              <button type='button' onClick={(e) => handleButtonClicked(e)}>3</button>
            </div>
            <div className='row-2'>
              <span className='wider-button'>
                <button type='button' onClick={(e) => handleButtonClicked(e)}>0</button>
              </span>
              <button type='button' onClick={(e) => handleButtonClicked(e)}>.</button>
            </div>
          </div>
          <div className='taller-button'>
            <button type='button' onClick={(e) => handleButtonClicked(e)}>ENTER</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
