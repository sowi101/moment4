import hero from './hero.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState("");
  const handleChange = (event) => { setUser(event.target.value); };

  return (
    <div className="App">
      <img src={hero} className="App-hero" alt="logo" />
      <h1>Välkommen till min Reactapplikation!</h1>
      <form>
        <label for="name">Vad heter du?</label>
        <br />
        <input type="text" name="name" id="name" onChange={handleChange} value={user} />
      </form>
      <p>Kul att du testade min applikation {user}</p>
    </div>
  );
}

export default App;
