import { useState } from "react";

function InputComponent() {
  const [name, setName] = useState(""); 

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
    </div>
  );
}

function DisplayComponent() {
  return <h2>Name: ??? (Not updated)</h2>;
}

function App() {
  return (
    <>
      <InputComponent />
      <DisplayComponent />
    </>
  );
}

export default App;
