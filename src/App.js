import { useState } from 'react';
import './App.css';
function App() {
  const [value, setValue] = useState(0);
  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    setValue(value - 1);
  };
  const handleReset = () => {
    setValue(0);
  };
  return (
    <div>
      <h1>Team 2 Frontend App</h1>
      <h1>{value}</h1>
      <div>
        <button onClick={handleIncrement}>increase</button>
        <button onClick={handleDecrement}>Decrease</button>
        <button onClick={handleReset}> Reset</button>
      </div>
    </div>
  );
}

export default App;
