import { useState } from 'react';
import './App.css';

function App() {
  const name = "Honey";
  const age = 22;
  const [fruits, setFruits] = useState("Apple");
  const [fname] = useState("Honey");
  const [fage, setFAge] = useState(22);
  const [inputName, setInputName] = useState("");

  // ButtonClick
  function showMsg() {
    alert("Hello " + name);
  }

  // DoubleClick
  function handleDoubleClick() {
    alert("Double Clicked");
  }

  // eventHandler
  function handleSubmit(event) {
    event.preventDefault();
    alert("Form Submitted");
  }

  const handleFruits = () => {
    setFruits("Banana");
  };

  return (
    <div className="App">
      <h1>Hey Honey</h1>
      <Welcome />

      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <button onClick={showMsg}>Click Me</button>
      <button onDoubleClick={handleDoubleClick}>Double Click Me</button>

      <h1>{fruits}</h1>
      <button onClick={handleFruits}>Change Fruit Name</button>

      <h2>{fname} - {fage}</h2>
      <button onClick={() => setFAge(fage + 1)}>Increase Age</button>

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>

      <Profile />

      <h2>Controlled component</h2>
      <input
        type="text"
        value={inputName}
        onChange={(event) => setInputName(event.target.value)}
      />
      <p>Your Name: {inputName}</p>
    </div>
  );
}

function Welcome() {
  return <h2>Welcome to React</h2>;
}

function Profile() {
  const [user, setUser] = useState({ name: "Honey", age: 22 });

  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase Age
      </button>
    </div>
  );
}

export default App;
