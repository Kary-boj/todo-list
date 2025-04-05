import Header from "../components/Header";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

export default function ProfilePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <Profile />
        </div>
      </main>
      <Footer />
    </>
  );
}
