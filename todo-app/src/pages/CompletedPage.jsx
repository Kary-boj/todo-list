import TaskList from "../components/TaskList";
import Footer from "../components/Footer";

export default function CompletedPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Completed Tasks</h2>
      <TaskList filter="completed" />
      <Footer /> {/* Footer is now correctly placed outside the div */}
    </div>
  );
}

