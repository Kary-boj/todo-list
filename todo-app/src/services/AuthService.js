// src/services/AuthService.js
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Sign Up
export const signUp = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up");
  } catch (e) {
    console.error("Error signing up:", e.message);
  }
};

// Login
export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in");
  } catch (e) {
    console.error("Error logging in:", e.message);
  }
};
