import React from 'react';
import './App.css';
import SongContainer from './containers/SongContainer'
import Header from './components/Header';
import MusicNotes from '../src/components/MusicNotes.png';

function App() {
  return (
    <div className="App">
      <img src={MusicNotes} alt="notes"></img>
      <Header></Header>
      <SongContainer></SongContainer>

    </div>
  );
}

export default App;
