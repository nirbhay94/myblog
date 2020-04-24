import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <a href="#default" className="logo">MyBlog</a>
        <div className="header-right">
          <a className="active" href="#home">What's on your mind?</a>
        </div>
      </div>
    </div>
  );
}

export default App;
