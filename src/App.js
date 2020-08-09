import './App.css';
import React, { Component } from 'react';
import FaqList from './FaqList';
import faq from './data.js';

console.log(faq)

function App() {
  return (
    <div className="App">
      <FaqList />
    </div>
  );
}

export default App;
