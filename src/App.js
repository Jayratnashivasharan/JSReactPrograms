import './App.css';
import { useState } from 'react';

function App() {
  const name = "Honey";
  const age = 22;
  const [fruits, setFruits] = useState("Apple");

  const handleFruits = () => {
    setFruits("Banana");
  };

  return (
    <div className="App">
      <h1>Hey Honey</h1>
      <Welcome />
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h1>{fruits}</h1>
      <button onClick={handleFruits}>Change Fruit Name</button>
    </div>
  );
}

function Welcome() {
  return (
    <h2>Welcome to React</h2>
  );
}

export default App;
