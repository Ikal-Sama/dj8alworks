import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
