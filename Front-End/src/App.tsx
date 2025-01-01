import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import MainLayout from "./components/layout";
import Profile from "./components/profile";
import { useEffect } from "react";

const RedirectToProfile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = "12345"; // Replace with the actual user ID if needed
    navigate(`/profile/${userId}?section=personal-information`);
  }, [navigate]);

  return null; // This component doesn't render anything as it's just for the redirect
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Route to redirect the user */}
        <Route path="/" element={<RedirectToProfile />} />

        {/* Route to the Profile page, wrapped in MainLayout */}
        <Route
          path="/profile/:userId"
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
