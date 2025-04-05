import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskEditor from "./TaskEditor";

export default function TaskList({ filter }) {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([newTask, ...tasks]);
  }

  function toggleTask(id) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  const filtered = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "later") return !task.completed;
    return true;
  });

  return (
    <section className="space-y-6">
      <TaskEditor onAdd={addTask} />
      <ul className="space-y-4">
        {filtered.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={toggleTask} />
        ))}
      </ul>
    </section>
  );
}
