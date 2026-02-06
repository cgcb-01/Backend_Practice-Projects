// type = module
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SubmitVideoPage from "./pages/SubmitVideoPage";
import MonasteryVideosPage from "./pages/MonasteryVideosPage";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 🔹 Navbar */}
      <nav className="bg-gray-900 p-4 flex justify-between">
        <h1 className="text-xl font-bold">Sikkim Monasteries</h1>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/submit">Submit</Link>
          <Link to="/search">Search</Link>
          {!user && <Link to="/login">Login</Link>}
        </div>
      </nav>

      {/* 🔹 Routes */}
      <Routes>
        <Route
          path="/"
          element={<h1 className="p-8">Welcome to Sikkim Monasteries</h1>}
        />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/submit" element={<SubmitVideoPage />} />
        <Route path="/search" element={<MonasteryVideosPage />} />
      </Routes>
    </div>
  );
}
