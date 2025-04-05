export default function TaskItem({ task, onToggle }) {
    return (
      <li
        className={`flex justify-between items-center p-4 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        <span>{task.text}</span>
        <button
          onClick={() => onToggle(task.id)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white py-1 px-3 rounded-md"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
      </li>
    );
  }
  