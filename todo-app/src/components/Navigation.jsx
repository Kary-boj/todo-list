import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-blue-600 text-white py-4 px-6 flex justify-between">
      <div className="font-bold text-xl">Todo List</div>
      <div className="space-x-4">
        <Link to="/home" className="hover:underline">Home</Link>
        <Link to="/completed" className="hover:underline">Completed</Link>
        <Link to="/later" className="hover:underline">Later</Link>
        <Link to="/profile" className="hover:underline">Profile</Link>
      </div>
    </nav>
  );
}
