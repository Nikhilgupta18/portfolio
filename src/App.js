import './App.css';
import NG from './components/NG';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';
import Resume from './components/Resume';


function App() {
  return (
    <>
    <Router>

      <Navbar title="NG" />
      <Routes>
        <Route path="/" element={<NG />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<NG />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
