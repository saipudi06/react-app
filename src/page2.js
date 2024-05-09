import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return <h2>Welcome to Admin Panel</h2>;
}

function EmployeeList() {
  return <h2>Employee List</h2>;
}

function Logout() {
  return <h2>You have been logged out</h2>;
}

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add your login logic
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Here you can add your logout logic
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="/logo.svg" className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/employees">Employee List</Link>
              </li>
              <li>
                {isLoggedIn ? (
                  <button onClick={handleLogout}>Logout</button>
                ) : (
                  <form onSubmit={handleLogin}>
                    <label>
                      Username:
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </label>
                    <label>
                      Password:
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </label>
                    <button type="submit">Login</button>
                  </form>
                )}
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/employees">
            <EmployeeList />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
