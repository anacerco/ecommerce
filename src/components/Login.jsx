import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // State for feedback messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); 
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage('Login successful! Welcome back.');
    } catch (error) {
      console.error(error);
      setMessage('Login failed. Please check your email and password.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login</button>
      </form>
      {message && <p style={{ marginTop: '10px', color: 'blue' }}>{message}</p>} {/* Display feedback */}
    </div>
  );
};

export default Login;
