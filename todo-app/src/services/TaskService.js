// src/services/TaskService.js
import { db } from "../firebase";
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";

// Add a new task
export const addTask = async (task) => {
  try {
    const docRef = await addDoc(collection(db, "tasks"), task);
    console.log("Task added with ID:", docRef.id);
  } catch (e) {
    console.error("Error adding task:", e);
  }
};

// Get all tasks
export const getTasks = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  const tasks = [];
  querySnapshot.forEach((doc) => {
    tasks.push({ id: doc.id, ...doc.data() });
  });
  return tasks;
};

// Update task completion status
export const toggleTask = async (taskId, completed) => {
  const taskRef = doc(db, "tasks", taskId);
  await updateDoc(taskRef, {
    completed: !completed,
  });
};

// Delete task
export const deleteTask = async (taskId) => {
  const taskRef = doc(db, "tasks", taskId);
  await deleteDoc(taskRef);
};
