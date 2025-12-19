import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AthleteDashboard from "./pages/AthleteDashboard.jsx";
import CoachDashboard from "./pages/CoachDashboard";
import CoachesList from "./pages/CoachesList";
import MyReservations from "./pages/MyReservations";
import Reservations from "./pages/Reservations.jsx";
import CoachProfile from "./pages/CoachProfile";
import CompleteCoachProfile from "./pages/CompleteCoachProfile.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/athlete" element={<AthleteDashboard />} />
      <Route path="/coach" element={<CoachDashboard />} />
      <Route path="/coaches" element={<CoachesList />} />
      <Route path="/Myreservation" element={<MyReservations />} />
      <Route path="/reservation" element={<Reservations />} />
      <Route path="/coach/:id" element={<CoachProfile />} />
      <Route path="/compCoach/:id" element={<CompleteCoachProfile />} />
    </Routes>
  );
}
