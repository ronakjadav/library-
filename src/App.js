import './App.scss';
import Home from './Components/Home';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from './Components/Login';


function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="Login" element={<Login />}>
            <Route index path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
