import logo from "./assets/logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.instagram.com/dersortagim/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MEF IDP Ders Ortağım Projesi
        </a>
        <p className="bc-red"> brand color red</p>
        <p className="bc-orange"> brand color orange</p>
        <p className="bc-gray"> brand color gray</p>
      </header>
    </div>
  );
}

export default App;
