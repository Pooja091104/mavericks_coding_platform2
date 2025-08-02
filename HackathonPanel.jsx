import React from "react";

const HackathonPanel = () => {
  const hackathons = [
    {
      id: 1,
      name: "JavaScript Algorithms Challenge",
      date: "August 15, 2025",
      status: "Active",
      participants: 120,
    },
    {
      id: 2,
      name: "React UI/UX Hackathon",
      date: "September 1, 2025",
      status: "Upcoming",
      participants: 85,
    },
    {
      id: 3,
      name: "Node.js Backend Battle",
      date: "July 20, 2025",
      status: "Completed",
      participants: 95,
    },
  ];

  return (
    <div className="metrics-card">
      <h3 className="metrics-title">Hackathon Management</h3>
      <p className="metrics-subtitle">
        Overview of active, upcoming, and completed hackathons.
      </p>

      <div className="hackathon-list">
        {hackathons.map((hackathon) => (
          <div key={hackathon.id} className="hackathon-item">
            <div className="hackathon-info">
              <span className="hackathon-name">{hackathon.name}</span>
              <span className="hackathon-date">{hackathon.date}</span>
            </div>
            <div className="hackathon-status-participants">
              <span
                className={`hackathon-status status-${hackathon.status.toLowerCase()}`}
              >
                {hackathon.status}
              </span>
              <span className="hackathon-participants">
                {hackathon.participants} Participants
              </span>
            </div>
            <div className="hackathon-actions">
              {hackathon.status === "Active" && (
                <button className="hackathon-action-btn join-btn">Join</button>
              )}
              {hackathon.status === "Upcoming" && (
                <button className="hackathon-action-btn view-details-btn">
                  View Details
                </button>
              )}
              {hackathon.status === "Completed" && (
                <button className="hackathon-action-btn view-results-btn">
                  View Results
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackathonPanel;
