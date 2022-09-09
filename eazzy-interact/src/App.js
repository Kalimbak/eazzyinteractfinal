import "./App.css";
// import Navigation from "./components/Navigation";
// import LeftSidebar from "./components/LeftSidebar";
// import Content from "./components/Content";
// import RightSidebar from "./components/RightSidebar";
// import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home";
import SignUpPage from "./pages/signUpPage/signUpPage";
import Login from "./pages/signInPage/signInPage";
import ResetPage from "./pages/reset/resetPage";
// import { Reset } from "./components/reset/reset";


function App() {
  // const [mobileMenu, setmobileMenu] = useState(false);

  // const toggle = () => {
  //   setmobileMenu(!mobileMenu);
  // };

  return (
    <>

      {/* <Navigation openMenu={toggle} />

      <main className="main-container">
        <LeftSidebar burgerMenu={mobileMenu} closeMenu={toggle} />
        <Content />
        <RightSidebar />
      </main> */}
      <Router>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/reset" element={<ResetPage/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
