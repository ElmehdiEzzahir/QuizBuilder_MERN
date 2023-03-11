
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import StudDetails from "./components/studDetails";
import AddQst from './components/addqst';
import AllQsts from './components/allQsts';
import UpdateQst from './components/UpdateQst';
import AddQuiz from './components/addQuiz'
import AllQuizs from './components/allquizs';
import ExpQuiz from './components/expquiz';
import EtudiantQuizs from './components/etudiantQuizs';
import PassQuiz from './components/passquiz';
import UpdateQuiz from './components/updaetQuiz';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/profDetails" element={<UserDetails />} />
            <Route path="/studDetails" element={<StudDetails />} />
            <Route path="/addQst" element={<AddQst />} />
            <Route path="/allQsts" element={<AllQsts />} />
            <Route path="/updateQst/:id" element={<UpdateQst />} />
            <Route path="/addQuiz" element={<AddQuiz />} />
            <Route path="/AllQuizs" element={<AllQuizs />} />
            <Route path="/Quizdetails/:id" element={<ExpQuiz />} />
            <Route path="/studentQuizs/:id" element={<EtudiantQuizs />} />
            <Route path="/passquiz/:id" element={<PassQuiz />} />
            <Route path="/updateQuiz/:id" element={<UpdateQuiz />} />
            updateQuiz
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
