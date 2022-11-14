import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from './Pages/HomePage';
import PlaceToStayPage from './Pages/PlaceToStayPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<PlaceToStayPage />} path="/placeToStay" />
      </Routes>
    </Router>
  );
}

export default App;
