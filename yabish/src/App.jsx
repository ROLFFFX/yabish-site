import { AnimatePresence } from "framer-motion";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";
import ArtistMainPage from "./pages/artists/ArtistMainPage";
import GodPage from "./pages/artists/GodPage";
import YakaPage from "./pages/artists/YakaPage";
import HomePage from "./pages/home/homePage";
import LandingPage from "./pages/landing/landingPage";
import ReleasesPage from "./pages/releases/ReleasePage";
import ShowsPage from "./pages/shows/ShowsPage";
import Test from "./pages/Test";

// shows sub pages
import GodTour2024 from "./pages/shows/showsSubpages/GodTour2024";
import MongTongChunYou from "./pages/shows/showsSubpages/MongTongChunYou";
import RainDogsTour from "./pages/shows/showsSubpages/RainDogsTour";
import BlueHawaiiTour from "./pages/shows/showsSubpages/BlueHawaii2025Tour";
import Peremotka2025Tour from "./pages/shows/showsSubpages/Peremotka2025Tour";
import GodTour2025 from "./pages/shows/showsSubpages/GodTour2025";

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
          <Route path="/99godtour2024" element={<GodTour2024 />} />
          <Route path="/raindogstour" element={<RainDogsTour />} />
          <Route path="/mongtongfest" element={<MongTongChunYou />} />
          <Route path="/bluehawaii" element={<BlueHawaiiTour />} />
          <Route path="/peremotka" element={<Peremotka2025Tour />} />
          <Route path="/99godtour2025" element={<GodTour2025 />} />
          <Route path="/shows" element={<ShowsPage />} />
          <Route path="/release" element={<ReleasesPage />} />
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
