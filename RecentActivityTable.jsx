import React, { useState } from "react";
export default function RecentActivityTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [skillFilter, setSkillFilter] = useState("");
  const [scoreRange, setScoreRange] = useState({ min: "", max: "" });
  const [expandedRows, setExpandedRows] = useState(new Set());

  // Enhanced activities data with all required fields
  const activities = [
    {
      id: 1,
      user: "John Doe",
      email: "john.doe@example.com",
      action: "Completed JavaScript Assessment",
      date: "21-07-2025",
      skills: ["JavaScript", "React", "Node.js"],
      assessmentScore: 85,
      status: "completed",
      progress: {
        profileLoaded: {
          completed: true,
          timestamp: "2025-01-20T09:00:00Z",
          details: "Profile created successfully",
        },
        assessmentCompleted: {
          completed: true,
          timestamp: "2025-01-21T14:30:00Z",
          details: "Assessment took 45 minutes, Score: 85%",
        },
        skillsEvaluated: {
          completed: true,
          timestamp: "2025-01-21T15:00:00Z",
          details: "Skills evaluated: JavaScript, React, Node.js",
        },
        learningPathGenerated: {
          completed: true,
          timestamp: "2025-01-22T10:00:00Z",
          details: "5 modules recommended",
        },
      },
    },
    {
      id: 2,
      user: "Jane Smith",
      email: "jane.smith@example.com",
      action: "Enrolled in React Course",
      date: "22-07-2025",
      skills: ["Python", "Django", "Machine Learning"],
      assessmentScore: 92,
      status: "completed",
      progress: {
        profileLoaded: {
          completed: true,
          timestamp: "2025-01-21T11:00:00Z",
          details: "Profile created successfully",
        },
        assessmentCompleted: {
          completed: true,
          timestamp: "2025-01-22T13:15:00Z",
          details: "Assessment took 38 minutes, Score: 92%",
        },
        skillsEvaluated: {
          completed: true,
          timestamp: "2025-01-22T13:45:00Z",
          details: "Skills evaluated: Python, Django, ML",
        },
        learningPathGenerated: {
          completed: true,
          timestamp: "2025-01-23T09:30:00Z",
          details: "3 modules recommended",
        },
      },
    },
    {
      id: 3,
      user: "Mike Ross",
      email: "mike.ross@example.com",
      action: "Completed HTML & CSS Test",
      date: "24-07-2025",
      skills: ["HTML", "CSS", "JavaScript"],
      assessmentScore: 78,
      status: "in-progress",
      progress: {
        profileLoaded: {
          completed: true,
          timestamp: "2025-01-23T10:00:00Z",
          details: "Profile created successfully",
        },
        assessmentCompleted: {
          completed: true,
          timestamp: "2025-01-24T16:20:00Z",
          details: "Assessment took 52 minutes, Score: 78%",
        },
        skillsEvaluated: {
          completed: false,
          timestamp: null,
          details: "Skills evaluation in progress",
        },
        learningPathGenerated: {
          completed: false,
          timestamp: null,
          details: "Pending skills evaluation",
        },
      },
    },
    {
      id: 4,
      user: "Rachel Zane",
      email: "rachel.zane@example.com",
      action: "Improved Skill Score in Node.js",
      date: "26-07-2025",
      skills: ["Java", "Spring Boot", "Microservices"],
      assessmentScore: 88,
      status: "completed",
      progress: {
        profileLoaded: {
          completed: true,
          timestamp: "2025-01-25T14:00:00Z",
          details: "Profile created successfully",
        },
        assessmentCompleted: {
          completed: true,
          timestamp: "2025-01-26T16:20:00Z",
          details: "Assessment took 42 minutes, Score: 88%",
        },
        skillsEvaluated: {
          completed: true,
          timestamp: "2025-01-26T17:00:00Z",
          details: "Skills evaluated: Java, Spring Boot",
        },
        learningPathGenerated: {
          completed: true,
          timestamp: "2025-01-27T10:15:00Z",
          details: "4 modules recommended",
        },
      },
    },
  ];

  // Enhanced filtering logic
  const filteredActivities = activities.filter((a) => {
    const matchesSearch =
      a.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.date.includes(searchTerm) ||
      a.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSkill =
      !skillFilter ||
      a.skills.some((skill) =>
        skill.toLowerCase().includes(skillFilter.toLowerCase())
      );

    const matchesScore =
      (!scoreRange.min || a.assessmentScore >= parseInt(scoreRange.min)) &&
      (!scoreRange.max || a.assessmentScore <= parseInt(scoreRange.max));

    return matchesSearch && matchesSkill && matchesScore;
  });

  const toggleRowExpansion = (userId) => {
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(userId)) {
      newExpandedRows.delete(userId);
    } else {
      newExpandedRows.add(userId);
    }
    setExpandedRows(newExpandedRows);
  };

  const handleManualAction = (userId, action) => {
    console.log(`Performing ${action} for user ${userId}`);
    switch (action) {
      case "reassess":
        alert(`Re-assessment initiated for user ${userId}`);
        break;
      case "updateProfile":
        alert(`Profile update initiated for user ${userId}`);
        break;
      case "generateReport":
        alert(`Report generation initiated for user ${userId}`);
        break;
      default:
        break;
    }
  };

  const getStatusBadge = (status) => {
    let className = "status-badge";
    if (status === "completed") {
      className += " status-completed";
    } else if (status === "in-progress") {
      className += " status-in-progress";
    } else if (status === "pending") {
      className += " status-pending";
    }

    return <span className={className}>{status.replace("-", " ")}</span>;
  };

  const ProgressBar = ({ progress }) => {
    const steps = [
      { key: "profileLoaded", label: "Profile Loaded", icon: "👤" },
      { key: "assessmentCompleted", label: "Assessment Completed", icon: "📝" },
      { key: "skillsEvaluated", label: "Skills Evaluated", icon: "🎯" },
      {
        key: "learningPathGenerated",
        label: "Learning Path Generated",
        icon: "🛤️",
      },
    ];

    return (
      <div className="progress-bar-container-inline">
        {steps.map((step, index) => {
          const stepData = progress[step.key];
          const isCompleted = stepData?.completed;

          return (
            <div key={step.key} className="progress-step-inline">
              <div
                className={`progress-step-icon-inline ${
                  isCompleted ? "completed" : ""
                }`}
                title={stepData?.details || step.label}
              >
                {isCompleted ? "✓" : step.icon}
              </div>
              <div className="progress-step-label-inline">
                {step.label}
                {stepData?.timestamp && (
                  <div className="progress-step-timestamp-inline">
                    {new Date(stepData.timestamp).toLocaleDateString()}
                  </div>
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`progress-connector-inline ${
                    isCompleted ? "completed" : ""
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="metrics-card">
      <h3 className="metrics-title">User Management & Recent Activity</h3>

      {/* Enhanced Search and Filter Section */}
      <div className="recent-activity-filters">
        <input
          type="text"
          className="search-box"
          placeholder="Search by user, activity, email or date..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <input
          type="text"
          className="search-box"
          placeholder="Filter by skill (e.g., JavaScript)..."
          value={skillFilter}
          onChange={(e) => setSkillFilter(e.target.value)}
        />

        <div className="score-range-inputs">
          <input
            type="number"
            className="search-box score-input-min"
            placeholder="Min Score"
            value={scoreRange.min}
            onChange={(e) =>
              setScoreRange({ ...scoreRange, min: e.target.value })
            }
          />
          <input
            type="number"
            className="search-box score-input-max"
            placeholder="Max Score"
            value={scoreRange.max}
            onChange={(e) =>
              setScoreRange({ ...scoreRange, max: e.target.value })
            }
          />
        </div>
      </div>

      {/* Enhanced Table */}
      <table className="recent-activity-table">
        <thead>
          <tr>
            <th></th>
            <th>User</th>
            <th>Skills</th>
            <th>Assessment Score</th>
            <th>Status</th>
            <th>Last Activity</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredActivities.map((a) => (
            <React.Fragment key={a.id}>
              <tr className="recent-activity-row">
                <td>
                  <button
                    onClick={() => toggleRowExpansion(a.id)}
                    className="expand-row-btn"
                  >
                    {expandedRows.has(a.id) ? "−" : "+"}
                  </button>
                </td>
                <td>
                  <div className="user-info-cell">
                    <div className="user-name-cell">{a.user}</div>
                    <div className="user-email-cell">{a.email}</div>
                  </div>
                </td>
                <td>
                  <div className="skills-list-cell">
                    {a.skills.slice(0, 2).map((skill, index) => (
                      <span key={index} className="skill-tag-cell">
                        {skill}
                      </span>
                    ))}
                    {a.skills.length > 2 && (
                      <span className="skill-more-cell">
                        +{a.skills.length - 2}
                      </span>
                    )}
                  </div>
                </td>
                <td>
                  <div className="score-display-cell">
                    <span className="score-value-cell">
                      {a.assessmentScore}%
                    </span>
                    <div className="score-bar-container-cell">
                      <div
                        className={`score-bar-fill-cell score-${
                          a.assessmentScore >= 80
                            ? "high"
                            : a.assessmentScore >= 60
                            ? "medium"
                            : "low"
                        }`}
                        style={{ width: `${a.assessmentScore}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td>{getStatusBadge(a.status)}</td>
                <td>{a.action}</td>
                <td>{a.date}</td>
                <td>
                  <div className="action-buttons-cell">
                    <button
                      onClick={() => handleManualAction(a.id, "reassess")}
                      className="action-btn-cell reassess-btn-cell"
                      title="Re-assess"
                    >
                      🔄
                    </button>
                    <button
                      onClick={() => handleManualAction(a.id, "updateProfile")}
                      className="action-btn-cell update-profile-btn-cell"
                      title="Update Profile"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => handleManualAction(a.id, "generateReport")}
                      className="action-btn-cell generate-report-btn-cell"
                      title="Generate Report"
                    >
                      📊
                    </button>
                  </div>
                </td>
              </tr>

              {/* Expandable Row Content */}
              {expandedRows.has(a.id) && (
                <tr className="expanded-row-content">
                  <td colSpan="8">
                    <div className="expanded-details-container">
                      <h4 className="expanded-details-title">
                        Workflow Progress
                      </h4>
                      <ProgressBar progress={a.progress} />

                      <div className="all-skills-section">
                        <h4 className="expanded-details-title">All Skills</h4>
                        <div className="all-skills-list">
                          {a.skills.map((skill, index) => (
                            <span key={index} className="skill-tag-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="manual-actions-expanded">
                        <button
                          onClick={() => handleManualAction(a.id, "reassess")}
                          className="manual-action-btn-expanded reassess-expanded"
                        >
                          Re-assess User
                        </button>
                        <button
                          onClick={() =>
                            handleManualAction(a.id, "updateProfile")
                          }
                          className="manual-action-btn-expanded update-profile-expanded"
                        >
                          Update Profile
                        </button>
                        <button
                          onClick={() =>
                            handleManualAction(a.id, "generateReport")
                          }
                          className="manual-action-btn-expanded generate-report-expanded"
                        >
                          Generate Report
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {filteredActivities.length === 0 && (
        <div className="no-users-found">
          No users found matching your criteria.
        </div>
      )}
    </div>
  );
}
