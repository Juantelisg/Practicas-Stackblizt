import React from 'react';
import './style.css';
import NameList from './Personlist.js';
import Buttonclick from './Button.js';

function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Buttonclick title="Click me!" />
      <NameList />
    </div>
  );
}

export default App;
