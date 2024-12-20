// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import IdeasPage from "./pages/IdeasPage";
import CollaborationPage from "./pages/CollaborationPage";
import FeedbackPage from "./pages/FeedbackPage";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Chat from "./components/Chat"; 
import AuditPage from "./pages/AuditPage";
import Team from "./components/Team";// Import the Chat component

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ideas" element={<IdeasPage />} />
        <Route path="/collaborate" element={<CollaborationPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} /> {/* Add Chat Route */}
        <Route path="/audit" element={<AuditPage />} /> 
        <Route path="/teams" element={<Team />} />
      </Routes>
    </Router>
  );
};

export default App;
