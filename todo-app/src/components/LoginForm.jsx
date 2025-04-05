import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/home"); // Navigate to home after form submission
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-white mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        required
        className="w-full px-4 py-2 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      <input
        type="password"
        placeholder="Password"
        required
        className="w-full px-4 py-2 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      <button
        type="submit"
        className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 rounded-md font-semibold text-white transition duration-300"
      >
        Log In
      </button>
    </form>
  );
}

