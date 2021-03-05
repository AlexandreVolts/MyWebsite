import React from 'react';
import template from "./articles/fr/reforme-orthographe-francais.html"
import './App.css';

function App() {
  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{__html: template as string}}>

      </div>
    </div>
  );
}

export default App;
