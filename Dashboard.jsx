import React, { useState } from "react";
import MetricsCard from "../analytics/components/MetricsCard";
import ScoreChart from "../analytics/components/ScoreChart";
import ProgressChart from "../analytics/components/ProgressChart";
import RecentActivityTable from "../analytics/components/RecentActivityTable";
import ChatBox from "../analytics/components/ChatBox";
import HackathonPanel from "../analytics/components/HackathonPanel";

import "../styles.css";

export default function Dashboard() {
  const [showHackathonPanel, setShowHackathonPanel] = useState(false);

  const toggleHackathonPanel = () => {
    setShowHackathonPanel(!showHackathonPanel);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Analytics Dashboard</h1>
      <p className="dashboard-subtitle">Welcome to your analytics dashboard.</p>

      <div className="metrics-grid">
        <MetricsCard title="Users Enrolled" value="120" />
        <MetricsCard title="Assessments Completed" value="75" />
        <MetricsCard title="Average Score" value="82%" />
        <MetricsCard title="Active Courses" value="5" />
      </div>

      <div className="metrics-grid mt-30">
        <ScoreChart />
        <ProgressChart />
      </div>

      <div className="mt-30">
        <RecentActivityTable />
      </div>

      {/* Button to toggle Hackathon Panel */}
      <div className="mt-30">
        <button onClick={toggleHackathonPanel} className="toggle-button">
          {showHackathonPanel ? "Hide Hackathons" : "Show Hackathons"}
        </button>
      </div>

      {/* Conditionally render HackathonPanel */}
      {showHackathonPanel && (
        <div className="mt-30">
          <HackathonPanel />
        </div>
      )}

      <div className="chatbox-wrapper">
        <ChatBox />
      </div>
    </div>
  );
}
