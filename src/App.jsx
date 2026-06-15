import { useState } from "react";
import learners from "./data/learners.js";
import SummaryCards from "./components/SummaryCards.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import LearnerDetails from "./components/LearnerDetails.jsx";

export default function App() {
  const [selectedLearner, setSelectedLearner] = useState(null);

  const n = learners.length;
  const averagePoints = Math.round(learners.reduce((sum, learner) => sum + learner.points, 0) / learners.length);
  const max = Math.max(...learners.map((learner) => learner.points));
  const per_avg = Math.round(learners.reduce((sum, learner) => sum + learner.assignmentCompletion, 0) / learners.length
  );

  const sortedLearners = [...learners].sort((a, b) => b.points - a.points).map((l, i) => ({ ...l, rank: i + 1 }));

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Learner Dashboard</h1>
      <SummaryCards n={n} avg={averagePoints} max={max} per_avg={per_avg} />
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
          <Leaderboard data={sortedLearners} onSelect={setSelectedLearner} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Learner Details</h2>
          <LearnerDetails learner={selectedLearner} />
        </div>
      </div>
    </div>
  )
}

