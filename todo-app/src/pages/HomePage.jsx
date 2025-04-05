import '../index.css';
import Header from "../components/Header";
import TaskEditor from "../components/TaskEditor";
import TaskList from "../components/TaskList";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <h1 className="text-4xl font-bold text-center my-6 text-white">ToDo List</h1>
      <div className="container mx-auto p-6 flex flex-col md:flex-row space-y-6 md:space-y-0">
        <div className="left-section md:w-1/2 w-full bg-gray-800 p-6 rounded-lg shadow-md">
          <TaskEditor />
        </div>
        <div className="right-section md:w-1/2 w-full bg-gray-800 p-6 rounded-lg shadow-md">
          <TaskList filter="all" />
        </div>
      </div>
      <Footer />
    </>
  );
}
