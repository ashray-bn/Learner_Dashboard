import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function PerformanceChart({ learner }) {
    const chartData = learner.performance.map((score, index) => ({ week: `W${index + 1}`, score }));

    return (<ResponsiveContainer width="100%" height={250}> <LineChart data={chartData}>
        <XAxis dataKey="week" /><YAxis /><Tooltip />
        <Line dataKey="score" /></LineChart></ResponsiveContainer>);
}