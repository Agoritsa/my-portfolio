import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import AuroraBackground from "./components/AuroraBackground";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <AuroraBackground />
      <Routes>
        {/* Main homepage */}
        <Route path="/" element={<Home />} />

        {/* Dynamic project details page */}
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
