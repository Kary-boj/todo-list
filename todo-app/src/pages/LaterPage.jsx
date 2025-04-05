import TaskList from "../components/TaskList";
import Footer from "../components/Footer";

export default function LaterPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Tasks for Later</h2>
      <TaskList filter="later" />
      <Footer />
    </div>
  );
}
