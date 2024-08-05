import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Dashbord from './Pages/Dashbord';
import './App.css';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/:userId" element={<Dashbord />} />
            <Route path="*" element={<NotFound />} />
            {/* Ajouter d'autres routes ici si nécessaire */}
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
