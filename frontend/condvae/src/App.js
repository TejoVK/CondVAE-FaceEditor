import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; 
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageUploader from './components/ImageUploader.js'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reconstruct" element={<ImageUploader />} />
        <Route path="/" element={<Home />}>
          {/* Nested routes */}
          <Route path="about" element={<Home />} />
          <Route path="model" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
