import "./style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import UsersView from "./components/User/UsersView";
import AddUser from "./components/User/AddUser";
import NavBar from "./components/common/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // to be able to use Link
import Footer from "./components/common/Footer";
import EditUser from "./components/User/EditUser";
import UserProfile from "./components/User/UserProfile";
import Register from "./components/User/Register";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/view-users" element={<UsersView />}></Route>
        <Route exact path="/add-users" element={<AddUser />}></Route>
        <Route exact path="/edit-user/:id" element={<EditUser />}></Route>
        <Route exact path="/user-profile/:id" element={<UserProfile />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
