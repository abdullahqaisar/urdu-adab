import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import WriterPage from './pages/WriterPage';
import Trending from './pages/Trending';
import Login from './pages/Login';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/trending" element={<Trending/>} />
          <Route path="/writerprofile" element={<WriterPage/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
