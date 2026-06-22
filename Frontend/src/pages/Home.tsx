import { useState } from "react";
import Login from "./Login"; // Adjust path if needed
import Register from "./Register";

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const[authType, setAuthType] = useState<"login" | "register">("login");

    return (
        <main className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">

            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full px-8 py-5 flex justify-between items-center z-40">

                {/* Logo */}
                <h1 className="text-3xl font-bold text-white tracking-wider">
                    Max-Q
                </h1>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => {
                            setAuthType("login");
                            setShowModal(true);
                        }}
                        className="px-5 py-2 text-white border border-white/30 rounded-lg hover:bg-white/10 transition duration-300 cursor-pointer"
                    >
                        Sign In
                    </button>

                    <button
                        onClick={() =>{
                            setAuthType("register");
                            setShowModal(true);
                        } }
                        className="px-5 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition duration-300 shadow-md cursor-pointer"
                    >
                        Register
                    </button>
                </div>



            </nav>

            {/* Background Blur Effects */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-20"></div>

            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[150px] opacity-20"></div>

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">

                <h1 className="text-6xl md:text-7xl font-extrabold text-white">
                    Welcome to{" "}
                    <span className="text-blue-400">
                        Max-Q
                    </span>
                </h1>

                <p className="mt-6 text-lg text-gray-300 max-w-2xl">
                    Secure Authentication Platform built using
                    React, TypeScript, Node.js, Express.js,
                    MongoDB Atlas, JWT Authentication and Cloudinary.
                </p>
                
            </section>

            {/* Login Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

                    <div className="bg-white rounded-2xl p-6 w-full max-w-md relative shadow-2xl">

                        {/* Close Button */}
                        <button
                            
                            onClick={() => setShowModal(false)}
                            className="absolute top-1 right-2 text-2xl text-gray-500 hover:text-black"
                        >
                            ×
                        </button>
                        {authType === "login" ? (
                            <Login
                            switchToRegister={() => setAuthType("register")}
                            />
                            )  : (
                            <Register
                            switchToLogin={()=> setAuthType("login")}
                            />)}

                    </div>
                </div>
            )}
        </main>
    );
};

export default Home;