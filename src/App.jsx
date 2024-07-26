import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Dashbord from './Pages/Dashbord';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashbord />} />
            {/* Ajouter d'autres routes ici si nécessaire */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
