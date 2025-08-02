import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Week 1", progress: 40 },
  { name: "Week 2", progress: 55 },
  { name: "Week 3", progress: 65 },
  { name: "Week 4", progress: 80 },
  { name: "Week 5", progress: 90 },
];

export default function ProgressChart() {
  return (
    <div className="metrics-card" style={{ height: 400 }}>
      <h3 className="metrics-title">Progress Over Time</h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="progress" stroke="#28a745" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

