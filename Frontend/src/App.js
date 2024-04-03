import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "./pages/mainPage";
import StartPage from "./pages/startPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/main" element={<MainPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
