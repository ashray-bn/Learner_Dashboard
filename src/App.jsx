import { useState } from "react";
import learners from "./data/learners.js";
import SummaryCards from "./components/SummaryCards.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import LearnerDetails from "./components/LearnerDetails.jsx";

export default function App() {
  const [selectedLearner, setSelectedLearner] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  //computing parameters
  const n = learners.length;
  const averagePoints = Math.round(learners.reduce((sum, learner) => sum + learner.points, 0) / learners.length);
  const max = Math.max(...learners.map((learner) => learner.points));
  const per_avg = Math.round(learners.reduce((sum, learner) => sum + learner.assignmentCompletion, 0) / learners.length
  );

  const sortedLearners = [...learners].sort((a, b) => b.points - a.points).map((l, i) => ({ ...l, rank: i + 1 }));

  // Filter by search term (case-insensitive match on name)
  const searchedLearners = sortedLearners.filter((l) => l.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // Apply Top 5 / Top 10 / All filter on top of the search results
  const displayedLearners = filter === "top5" ? searchedLearners.filter((l) => l.rank <= 5) : filter === "top10" ? searchedLearners.filter((l) => l.rank <= 10) : searchedLearners;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Learner Dashboard</h1>
      <SummaryCards n={n} avg={averagePoints} max={max} per_avg={per_avg} />
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="text"
              placeholder="Search learners by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded px-3 py-2 flex-1"
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border rounded px-3 py-2"
            >
              <option value="all">All Learners</option>
              <option value="top5">Top 5</option>
              <option value="top10">Top 10</option>
            </select>
          </div>

          {displayedLearners.length > 0 ? (
            <Leaderboard data={displayedLearners} onSelect={setSelectedLearner} />
          ) : (
            <p className="text-gray-500">No learners match your search.</p>
          )}
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Learner Details</h2>
          <LearnerDetails learner={selectedLearner} />
        </div>
      </div>
    </div>
  )
}
