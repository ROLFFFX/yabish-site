import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./pages/landing/landingPage";
import HomePage from "./pages/home/homePage";
import ArtistMainPage from "./pages/artists/ArtistMainPage";
import AboutPage from "./pages/about/AboutPage";
import Test from "./pages/Test";
import GodPage from "./pages/artists/GodPage";
import YakaPage from "./pages/artists/YakaPage";
import EventsPage from "./pages/events/EventsPage";
import GodTour from "./pages/events/GodTour";
import RainDogsTour from "./pages/events/RainDogsTour";
import MongTongChunYou from "./pages/events/MongTongChunYou";

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
          <Route path="/yaka" element={<YakaPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/99godtour" element={<GodTour />} />
          <Route path="/raindogstour" element={<RainDogsTour />} />
          <Route path="/mongtong" element={<MongTongChunYou />} />
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
