import logo from './Boho Sea Turtle.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello My Love!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a react web app, just FYI. Enjoy my spinning turtle.
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/profile.php?id=1068087186"
          target="_blank"
          rel="noopener noreferrer"
        >
          Come visit me @Facebook
        </a>
      </header>
    </div>
  );
}

export default App;
