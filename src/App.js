import './App.css';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Main from './pages/Main';
import Poetry from './pages/Poetry'
import Books from './pages/Books'
import Poets from './pages/Poets'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Main/>} />
          <Route path="/poetry" element={<Poetry/>} />
          <Route path="/books" element={<Books/>} />
          <Route path="/poets" element={<Poets/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
