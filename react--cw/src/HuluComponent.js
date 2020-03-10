import React from 'react';
import logo from './logo.svg';
import './App.css';

function HuluComponent(prop) {
  return (
    <div className="App">
      <header className="App-header">
       
    <h1>My favorite show is: {prop.myShows.showTitle}</h1>
    <h1>It is in season: {prop.myShows.numberOfSeason}</h1>
    <h1>It's genre is: {prop.myShows.genre}</h1>
    <h1>It's rating is: {prop.myShows.rating}</h1>
      </header>
    </div>
  );
}

export default HuluComponent;