// App.js

import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store'; // 导入 Redux 存储

import MainPage from "./pages/mainPage";
import StartPage from "./pages/startPage";
import ResultPage from  "./pages/resultPage";

function App() {
  return (
    <Provider store={store}>

    <Router>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/result" element={<ResultPage/>}/>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
