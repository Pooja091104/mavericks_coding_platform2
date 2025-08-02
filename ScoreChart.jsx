import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "HTML", A: 85, fullMark: 100 },
  { subject: "CSS", A: 90, fullMark: 100 },
  { subject: "JavaScript", A: 75, fullMark: 100 },
  { subject: "React", A: 80, fullMark: 100 },
  { subject: "Node.js", A: 70, fullMark: 100 },
];

export default function ScoreChart() {
  return (
    <div className="metrics-card" style={{ height: 400 }}>
      <h3 className="metrics-title">Skill Score Distribution</h3>
      <ResponsiveContainer width="100%" height="90%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar
            name="Score"
            dataKey="A"
            stroke="#007bff"
            fill="#007bff"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
