import { useState } from "react";
import Dashboard from "./pages/Dashboard"; // Admin dashboard
import LoginPage from "./pages/LoginPage"; // Login page
import UserDash from "./user/UserDash"; // User dashboard
import styles from "./styles.css";

export default function App() {
  const [user, setUser] = useState(null);

  // Example role-based view (optional: can be extended later)
  const isAdmin = user?.email === "mavadmin@gmail.com"; // Simple check for now

  if (!user) {
    return <LoginPage onLogin={(loggedInUser) => setUser(loggedInUser)} />;
  }

  return isAdmin ? <Dashboard /> : <UserDash />;
}
