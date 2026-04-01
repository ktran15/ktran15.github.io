import { Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import PlayLayout from "./pages/PlayLayout";
import ScrapbookPanel from "./pages/ScrapbookPanel";
import PianoPanel from "./pages/PianoPanel";
import GardenPanel from "./pages/GardenPanel";
import BakingPanel from "./pages/BakingPanel";
import WritingPage from "./pages/WritingPage";
import PostPage from "./pages/PostPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:slug" element={<ProjectDetailPage />} />
        <Route path="play" element={<PlayLayout />}>
          <Route index element={<Navigate to="scrapbook" replace />} />
          <Route path="scrapbook" element={<ScrapbookPanel />} />
          <Route path="piano" element={<PianoPanel />} />
          <Route path="garden" element={<GardenPanel />} />
          <Route path="baking" element={<BakingPanel />} />
        </Route>
        <Route path="writing" element={<WritingPage />} />
        <Route path="writing/:slug" element={<PostPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
