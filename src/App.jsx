import { Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Users from "./components/Users";
import Login from "./components/Login";
import Error from "./components/Error";
import Insta from "./components/Insta";
import Facebook from "./components/Facebook";
import UserProfile from "./components/UserProfile";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="box1">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="insta" element={<Insta />} />
          <Route path="fb" element={<Facebook />} />
        </Route>

        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
