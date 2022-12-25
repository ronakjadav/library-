import './App.scss';
import Home from './Components/Home';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from './Components/Login';
import Registration from './Components/Registration';


function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Registration" element={<Registration />} />
          <Route exact path="Home" element={<Home />}>
            {/* <Route index path="Home" element={<Home />} /> */}
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
