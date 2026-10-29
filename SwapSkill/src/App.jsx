import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ExploreSkills from "./pages/ExploreSkills";
import AddSkill from "./pages/AddSkill";
import SkillDetails from "./pages/SkillDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

function App() {
return ( <BrowserRouter> <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/explore" element={<ExploreSkills />} />
    <Route path="/add-skill" element={<AddSkill />} />
    <Route path="/skill/:id" element={<SkillDetails />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>

  <Footer />
</BrowserRouter>

);
}

export default App;
