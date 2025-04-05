import SignupForm from "../components/SignupForm";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-4xl">
        {/* Left Section */}
        <div className="md:w-1/2 w-full text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-4xl font-bold mb-4 text-green-400">Todo List</h1>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

