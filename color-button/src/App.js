import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <div>
        <button
          style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
          onClick={() => setButtonColor(newButtonColor)}
          disabled={disabled}
        >
          Change to {newButtonColor}
        </button>
        <input
          type="checkbox"
          id="disabled-button-checkbox"
          defaultChecked={disabled}
          aria-checked={disabled}
          onChange={(e) => setDisabled(e.target.checked)}
        />
        <label htmlFor="disabled-button-checkbox">Disable button</label>
      </div>
    </div>
  );
}

export default App;
