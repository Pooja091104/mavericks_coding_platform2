export default function MetricsCard({ title, value }) {
  return (
    <div className="metrics-card">
      <h3 className="metrics-title">{title}</h3>
      <p className="metrics-value">{value}</p>
    </div>
  );
}


