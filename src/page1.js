import React from 'react';
import './App.css'; // You can style your components in this CSS file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Your logo goes here */}
        <img src="logo.png" alt="logo" className="App-logo" />

        {/* Login form */}
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </header>
    </div>
  );
}

export default App;
