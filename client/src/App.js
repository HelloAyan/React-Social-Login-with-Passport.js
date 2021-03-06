import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from './pages/Login';
import Post from './pages/Post';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <div >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
          path="/login" 
          element={ <Login /> } 
          />
          <Route path="/post/:id" element= { user ? <Post /> : <Navigate to= "/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
