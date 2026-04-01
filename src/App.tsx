import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const PlayLayout = lazy(() => import("./pages/PlayLayout"));
const ScrapbookPanel = lazy(() => import("./pages/ScrapbookPanel"));
const PianoPanel = lazy(() => import("./pages/PianoPanel"));
const GardenPanel = lazy(() => import("./pages/GardenPanel"));
const BakingPanel = lazy(() => import("./pages/BakingPanel"));
const WritingPage = lazy(() => import("./pages/WritingPage"));
const PostPage = lazy(() => import("./pages/PostPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));

export default function App() {
  return (
    <Suspense fallback={null}>
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
          <Route path="blog" element={<WritingPage />} />
          <Route path="blog/:slug" element={<PostPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
