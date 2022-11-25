import './App.css';
import { useState } from 'react';
function App() {
  const [value, setValue] = useState(0);
  const handleIncrement = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <h1>Team 2 Frontend App</h1>
      <h1>{value}</h1>
      <div>
        <button onClick={handleIncrement}>increase</button>
        <button>Decrease</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;
