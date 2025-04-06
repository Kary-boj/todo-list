// src/components/TaskList.jsx
import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import TaskEditor from "./TaskEditor";
import { getTasks, toggleTask, deleteTask } from "../services/TaskService";

export default function TaskList({ filter }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksFromDb = await getTasks();
      setTasks(tasksFromDb);
    };
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "later") return !task.completed;
    return true;
  });

  return (
    <section className="space-y-6">
      <TaskEditor />
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={() => toggleTask(task.id, task.completed)}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </ul>
    </section>
  );
}
