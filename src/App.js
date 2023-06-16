import logo from './Boho Sea Turtle.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css"
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";


function App({ signOut }) {
  return (
    <div className="App">
      <Card>
        <img src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
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
      <body>
        <h2>Body Header</h2>
        <p>Body Paragraph</p>
      </body>
    </div>
  );
}

export default withAuthenticator(App);
