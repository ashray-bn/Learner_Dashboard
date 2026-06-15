export default function Leaderboard({ data, onSelect }) {
  return (
    <div className="overflow-auto">
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-900">
            <th>Rank</th><th>Name</th><th>Points</th><th>Courses</th><th>Assignment %</th><th>Streak</th>
          </tr>
        </thead>

        <tbody>
          {data.map((l) =>
          (
            <tr key={l.id} onClick={() => onSelect(l)} className={`cursor-pointer border-t ${l.rank <= 3 ? "bg-yellow-100 dark:bg-yellow-900" : ""}`}>
              <td>{l.rank}</td> <td>{l.name}</td> <td>{l.points}</td> <td>{l.coursesCompleted}</td> <td>{l.assignmentCompletion}%</td><td>{l.streak}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
