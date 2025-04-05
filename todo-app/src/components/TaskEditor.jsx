import { useState } from "react";

export default function TaskEditor({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
        className="w-full px-4 py-2 bg-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      <button
        type="submit"
        className="w-full py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition duration-300"
      >
        Add Task
      </button>
    </form>
  );
}
