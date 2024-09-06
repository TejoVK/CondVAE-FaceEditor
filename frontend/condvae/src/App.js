import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; 
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageUploader from './components/ImageUploader.js'
import CVAEArchitecture from './components/CVAEArchitecture.js';
import WarningBanner from './components/WarningBanner.js';
function App() {
  return (
    <>
    <WarningBanner/>
    <Router>
      <Routes>
        <Route path="/reconstruct" element={<ImageUploader />} />
        <Route path="/architecture" element={<CVAEArchitecture />} />
        <Route path="/" element={<Home />}>
          {/* Nested routes */}
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
