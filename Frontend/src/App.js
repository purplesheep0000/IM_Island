// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from 'react-redux';
import store from './redux/store'; // 导入 Redux 存储
import ErrorFallBack from "./pages/FallBack"; // 导入 ErrorBoundary 组件

import MainPage from "./pages/mainPage";
import StartPage from "./pages/startPage";
import ResultPage from  "./pages/resultPage";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <Provider store={store}>
        <Router>
          <Routes>
              <Route path="/" element={<StartPage/>}/>
              <Route path="/main" element={<MainPage/>}/>
              <Route path="/result" element={<ResultPage/>}/>
          </Routes>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
