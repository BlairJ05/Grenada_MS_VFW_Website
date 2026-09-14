import { useState } from "react";
import { Shield } from "lucide-react";

const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "admin123";

function AdminDashboard() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
            setError("");
            setLoggedIn(true);
        } else {
            setError("Invalid username or password.");
        }
    }

    if (loggedIn) {
        return (
            <div className="min-h-screen bg-[#F5F1E8] py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1
                        className="text-3xl font-bold text-[#0B1E4A] mb-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        VFW Grenada Dashboard
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Welcome back! Dashboard tools (members, photos, forms) are still being built.
                    </p>
                    <button
                        onClick={() => setLoggedIn(false)}
                        className="border-2 border-[#0B1E4A] text-[#0B1E4A] px-6 py-2 rounded-md font-semibold hover:bg-[#0B1E4A] hover:text-white transition-colors"
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0B1E4A] to-[#1B3A75] flex items-center justify-center px-4 py-16">
            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl border-t-4 border-[#D4871A] p-10">
                <div className="w-16 h-16 bg-[#0B1E4A] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-[#D4871A]">
                    <Shield className="text-white" size={28} />
                </div>
                <h1
                    className="text-3xl font-bold text-[#0B1E4A] text-center mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Admin Login
                </h1>
                <p className="text-gray-500 text-center mb-8">VFW Grenada Dashboard</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-[#0B1E4A] mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            placeholder="Enter username"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4871A] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-[#0B1E4A] mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Enter password"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4871A] focus:outline-none"
                        />
                    </div>

                    {error && <p className="text-sm text-[#9B1C2E]">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-[#D4871A] text-white py-3 rounded-lg font-semibold hover:bg-[#B8700F] transition-colors"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-xs text-gray-400 text-center mt-6">
                    Default credentials: admin / admin123
                </p>
            </div>
        </div>
    );
}

export default AdminDashboard;
