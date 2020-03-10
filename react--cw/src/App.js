import React from 'react';
import logo from './logo.svg';
import './App.css';
import HuluComponent from './HuluComponent';
let myHulu = {
  showTitle:  "Grown*ish",
  numberOfSeason :  3,
  genre : "sitcom",
  rating : "5 stars"
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://freeform.go.com/shows/grown-ish"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Favorite Hulu Show
        </a>
       <HuluComponent myShows= {myHulu}></HuluComponent>
      </header>
    </div>
  );
}

export default App;
