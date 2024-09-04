import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainPage from "./pages/Main";
import Programs from "./pages/Programs";
import Settings from "./pages/Settings";
import EmailSettings from "./pages/Settings/Email";
import AccountSettings from "./pages/Settings/Account";
import ReportList from "./pages/ReportList";
import Music from "./pages/Music";
import ProgramsInformation from "./pages/Programs/Information";
import ProgramsList from "./pages/Programs/List";

const App: React.FC = () => {
  return (
    <Router basename="/mediasearch-app/">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />}>
          <Route path="programs" element={<Programs />} />
          <Route
            path="programs/information"
            element={<ProgramsInformation />}
          />
          <Route path="programs/list" element={<ProgramsList />} />
          <Route path="settings" element={<Settings />}></Route>
          <Route path="settings/email" element={<EmailSettings />} />
          <Route path="settings/account" element={<AccountSettings />} />
          <Route path="reports" element={<ReportList />} />
          <Route path="music" element={<Music />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
