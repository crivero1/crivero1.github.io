import './App.css';
import { Routes, Route } from "react-router";
import Navbar from './components/navbar.jsx';
import HomePage from './pages/home.jsx';
import PublicationsPage from './pages/publications.jsx';
import StudentsPage from './pages/students.jsx';
import ProjectsPage from './pages/projects.jsx';
import CoursesPage from './pages/courses.jsx';
import TalksPage from './pages/talks.jsx';

function App() {
  return (
    <>
    <Navbar/>
      {/* <div> */}
        <Routes>
          {/* <Route element={<Layout />}> */}
            <Route path="/" element={<HomePage />}/>
            <Route path="/publications" element={<PublicationsPage />}/>
            <Route path="/students" element={<StudentsPage />}/>
            <Route path="/projects" element={<ProjectsPage />}/>
            <Route path="/courses" element={<CoursesPage />}/>
            <Route path="/talks" element={<TalksPage />}/>
          {/* </Route> */}
        </Routes>
      {/* </div> */}
    </>
  )
}

export default App
