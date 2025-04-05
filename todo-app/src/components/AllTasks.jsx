import TaskItem from "./TaskItem";
import Navigation from "./Navigation";

export default function AllTasks() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <div className="p-6 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-semibold mb-4">All Tasks</h2>
        <div className="space-y-4">
            {/* Replace static task items with dynamic ones later */}
          <TaskItem task="Learn JavaScript" />
          <TaskItem task="Learn HTML" />
          <TaskItem task="Learn CSS" />
        </div>
      </div>
    </div>
  );
}
