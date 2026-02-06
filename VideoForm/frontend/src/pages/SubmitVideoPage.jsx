// type = module
import React, { useState } from "react";
import axios from "axios";

export default function SubmitVideoPage() {
  const [monastery, setMonastery] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [type, setType] = useState("video"); // video / paintings / history etc.

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/submissions",
        { monastery, contentType: type, url: videoUrl },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Submitted successfully!");
      setMonastery("");
      setVideoUrl("");
    } catch (err) {
      alert(err.response?.data?.message || "Submission failed");
    }
  };

  return (
    <div className="p-8 text-white bg-black min-h-screen">
      <h1 className="text-2xl mb-6">Submit a Monastery Video / Info</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
        <input
          type="text"
          placeholder="Monastery Name"
          className="p-2 text-black"
          value={monastery}
          onChange={(e) => setMonastery(e.target.value)}
        />
        <select
          className="p-2 text-black"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="video">Video</option>
          <option value="paintings">Paintings</option>
          <option value="history">History</option>
          <option value="sculptures">Sculptures</option>
          <option value="murals">Murals</option>
          <option value="events">Events</option>
        </select>
        <input
          type="text"
          placeholder="Paste Google Drive / YouTube / FB link"
          className="p-2 text-black"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button className="bg-green-600 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
