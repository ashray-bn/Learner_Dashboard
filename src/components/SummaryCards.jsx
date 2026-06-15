export default function SummaryCards({ n, avg, max, per_avg }) {
    return (
        <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded shadow">
                <p>Total Learners</p>
                <h2>{n}</h2>
            </div>

            <div className="bg-white p-4 rounded shadow">
                <p>Average Points</p>
                <h2>{avg}</h2>
            </div>

            <div className="bg-white p-4 rounded shadow">
                <p>Highest Score</p>
                <h2>{max}</h2>
            </div>

            <div className="bg-white p-4 rounded shadow">
                <p>Avg Assignment %</p>
                <h2>{per_avg}%</h2>
            </div>
        </div>
    );
}