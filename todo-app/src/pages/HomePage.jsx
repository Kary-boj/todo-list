// src/pages/HomePage.jsx
import { useState, useEffect } from "react";
import '../index.css';
import Header from "../components/Header";
import TaskEditor from "../components/TaskEditor";
import TaskList from "../components/TaskList";
import Footer from "../components/Footer";
import { auth } from "../firebase";
import { signUp, login } from "../services/AuthService";

export default function HomePage() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  const handleLogin = () => login(email, password);
  const handleSignUp = () => signUp(email, password);

  return (
    <>
      <Header />
      {!user ? (
        <div className="container mx-auto p-6 flex flex-col items-center justify-center space-y-6">
          <h1 className="text-4xl font-bold text-center my-6 text-white">Login to Your Account</h1>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input-field"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input-field"
          />
          <div className="flex space-x-4">
            <button onClick={handleLogin} className="btn-primary">
              Login
            </button>
            <button onClick={handleSignUp} className="btn-secondary">
              Sign Up
            </button>
          </div>
        </div>
      ) : (
        <div className="container mx-auto p-6 flex flex-col md:flex-row space-y-6 md:space-y-0">
          <div className="left-section md:w-1/2 w-full bg-gray-800 p-6 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-center my-6 text-white">ToDo List</h1>
            <TaskEditor />
          </div>
          <div className="right-section md:w-1/2 w-full bg-gray-800 p-6 rounded-lg shadow-md">
            <TaskList filter="all" />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

