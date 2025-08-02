export default function LearningPathTable() {
  const modules = [
    { name: "JavaScript Essentials", time: "3 hrs", status: "Completed" },
    { name: "React Basics", time: "4 hrs", status: "In Progress" },
    { name: "Advanced Node.js", time: "5 hrs", status: "Not Started" },
  ];

  return (
    <div className="card">
      <h2>Learning Path</h2>
      <table>
        <thead>
          <tr>
            <th>Module Name</th>
            <th>Estimated Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((mod, idx) => (
            <tr key={idx}>
              <td>{mod.name}</td>
              <td className="text-center">{mod.time}</td>
              <td
                className={
                  mod.status === "Completed"
                    ? "status-completed"
                    : mod.status === "In Progress"
                    ? "status-in-progress"
                    : "status-not-started"
                }
              >
                {mod.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
