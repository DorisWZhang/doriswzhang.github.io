import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import AboutMe from "./pages/About"
import Projects from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes> 
          <Route path="/" element={<Home />}/>
          <Route path="/project/:id" element={<ProjectDisplay/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
    </Router>
      
    
  );
}

export default App;
