/* import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="ls-container">
      <form className="ls-form" onSubmit={handleSubmit}>
        <h2 className="ls-title">Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="ls-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="ls-container">
      <button onClick={() => window.history.back()} className="ls-back-btn">&#8592; Go Back</button>
      <form className="ls-form" onSubmit={handleSubmit}>
        <h2 className="ls-title">Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="ls-btn">
          Login
        </button>
        <div className="ls-signup-message">
          <p>You don't have an account?</p>
          <Link to={'/signup'}>Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
