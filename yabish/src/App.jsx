import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./pages/landingPage/landingPage";
import HomePage from "./pages/homePage/homePage";
import ArtistMainPage from "./pages/artists/ArtistMainPage";
import AboutPage from "./pages/about/AboutPage";
import Test from "./pages/Test";
import GodPage from "./pages/artists/GodPage";

function App() {
  const location = useLocation();

  // Define the transition routes
  const transitionRoutes = ["/", "/home"];

  const isTransitionRoute = transitionRoutes.includes(location.pathname);

  return (
    <>
      {/* Transition-enabled Routes */}
      {isTransitionRoute ? (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </AnimatePresence>
      ) : (
        // Non-transition Routes
        <Routes>
          <Route path="/artist" element={<ArtistMainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/99god" element={<GodPage />} />
        </Routes>
      )}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
