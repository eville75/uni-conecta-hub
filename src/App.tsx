
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Scholarships from "./pages/Scholarships";
import Mentorship from "./pages/Mentorship";
import CampusMap from "./pages/CampusMap";
import Schedule from "./pages/Schedule";
import Regulations from "./pages/Regulations";
import AcademicHelp from "./pages/AcademicHelp";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Notifications from "./pages/Notifications";
import Admin from "./pages/Admin";
import MentorProfile from "./pages/MentorProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/mentor/:id" element={<MentorProfile />} />
          <Route path="/map" element={<CampusMap />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/regulations" element={<Regulations />} />
          <Route path="/academic-help" element={<AcademicHelp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
