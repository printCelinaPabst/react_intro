import './App.css';

const quote = "Der Winter naht.";
const character = "Ned Stark";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Game of Thrones Zitat-Generator</h1>
        <p>Ein Ort für Weisheit (und Sarkasmus) aus Westeros.</p>
      </header>
      <main>
        <blockquote>"{quote}"</blockquote>
      </main>
      <footer>
        - {character}
      </footer>
    </div>
  );
}

export default App;
