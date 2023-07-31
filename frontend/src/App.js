import { Fragment } from "react";
import "./App.css";
import {
  Navbar,
  LandingPage,
  SignupPage,
  SigninPage,
} from "./components/Index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/signin" element={<SigninPage />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
