// src/user/UserDashboard.jsx

import ResumeUploader from "./components/ResumeUploader";
import ProgressStepper from "./components/ProgressStepper";
import LearningPathTable from "./components/LearningPathTable";
import Leaderboard from "./components/Leaderboard";
import "../styles.css"; // adjust path based on your folder structure

export default function UserDash() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">
        Mavericks Coding Platform - User Dashboard
      </h1>

      {/* Step progress tracker */}
      <ProgressStepper currentStep={2} />

      {/* Resume upload section */}
      <ResumeUploader />

      {/* Personalized learning path table */}
      <LearningPathTable />

      {/* Leaderboard */}
      <Leaderboard />
    </div>
  );
}
