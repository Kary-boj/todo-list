import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-900 p-4 shadow-md">
      <nav className="flex justify-center space-x-6">
        <Link to="/home" className="text-white hover:text-cyan-400 transition duration-300">All Tasks</Link>
        <Link to="/completed" className="text-white hover:text-cyan-400 transition duration-300">Completed</Link>
        <Link to="/later" className="text-white hover:text-cyan-400 transition duration-300">Later</Link>
        <Link to="/profile" className="text-white hover:text-cyan-400 transition duration-300">Profile</Link>
      </nav>
    </header>
  );
}
