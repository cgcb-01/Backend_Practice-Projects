// type = module
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MonasteryVideosPage() {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/monasteries/search?name=${query}`
      );
      setVideos(res.data.chosenVideos || []);
    } catch (err) {
      alert("Error fetching monastery videos");
    }
  };

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-2xl mb-6">Search Monastery Videos</h1>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter Monastery Name"
          className="p-2 text-black"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-blue-600 px-4 rounded" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.length === 0 && <p>No chosen videos yet</p>}
        {videos.map((vid, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded">
            <h2 className="text-xl mb-2">{vid.monastery}</h2>
            <p className="text-sm mb-2">Type: {vid.contentType}</p>
            <a
              href={vid.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              View Content
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
