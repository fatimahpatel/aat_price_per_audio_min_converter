import React from 'react';
import './App.css';
import PriceRow from './components/PriceRow'
import AudioMinsRow from './components/AudioMinsRow';

function App() {
  return (
    <>
      <h1>AAT price converter</h1>
      <AudioMinsRow />
      <div>=</div>
      <PriceRow />
    </>   
  );
}
export default App;
