import { Check } from "lucide-react";

export default function ProgressStepper({ currentStep }) {
  const steps = [
    "Profile Created",
    "Assessment Completed",
    "Skills Evaluated",
    "Learning Path Generated",
  ];

  return (
    <div className="card">
      <h2>User Progress</h2>
      <div className="progress-stepper">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div
              key={index}
              className={`step ${
                isCompleted ? "completed" : isActive ? "active" : ""
              }`}
            >
              <div className="step-circle">
                {isCompleted ? <Check size={18} stroke="white" /> : index + 1}
              </div>
              <p>{step}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
