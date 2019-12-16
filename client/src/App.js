import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessDetails from './BusinessDetails';

function App() {
  return (
    <div className="App">
      <h1>
      Alpharetta, top five ice cream shops
      </h1>
      <BusinessDetails />
    </div>
  );
}

export default App;
