import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "./pages/mainPage";
import StartPage from "./pages/startPage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMxo1g5RKg74KJFMByG-XycqWMsnXohoQ",
  authDomain: "im-island.firebaseapp.com",
  projectId: "im-island",
  storageBucket: "im-island.appspot.com",
  messagingSenderId: "623771926435",
  appId: "1:623771926435:web:993e22bc9203cba53d6416",
  measurementId: "G-7T0SSEZXC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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
