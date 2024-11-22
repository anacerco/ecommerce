import React, { useState } from 'react';
import { auth, db } from '../firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      
      const usersCollection = collection(db, 'users');
      await addDoc(usersCollection, {
        uid: user.uid, 
        firstName,
        lastName,
        email,
        createdAt: new Date(), 
      });

      setSuccess('User registered successfully!');
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
